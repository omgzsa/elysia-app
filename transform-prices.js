#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  inputFile: './src/assets/prices.json',
  outputFile: './src/assets/prices-transformed.json',
  encoding: 'utf8',
  indentSpaces: '\t'  // Use tabs like in the target format
};

// Color codes for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[36m',
  red: '\x1b[31m'
};

// Helper function for colored console output
const log = {
  info: (msg) => console.log(`${colors.blue}ℹ${colors.reset}  ${msg}`),
  success: (msg) => console.log(`${colors.green}✓${colors.reset}  ${msg}`),
  warning: (msg) => console.log(`${colors.yellow}⚠${colors.reset}  ${msg}`),
  error: (msg) => console.log(`${colors.red}✗${colors.reset}  ${msg}`),
  header: (msg) => console.log(`\n${colors.bright}${msg}${colors.reset}\n${'='.repeat(50)}`)
};

/**
 * Validates a price category object
 * @param {Object} category - The category object to validate
 * @param {number} index - The index in the array
 * @returns {Object} - Validation result with isValid and errors
 */
function validateCategory(category, index) {
  const errors = [];
  const warnings = [];
  
  // Required fields
  const requiredFields = ['id', 'title'];
  
  for (const field of requiredFields) {
    if (!category[field]) {
      errors.push(`Missing required field '${field}' for category at index ${index}`);
    }
  }
  
  // Check if treatments array exists and is valid
  if (!Array.isArray(category.treatments)) {
    errors.push(`Treatments should be an array for category: ${category.title}`);
  } else {
    // Validate each treatment
    category.treatments.forEach((treatment, treatmentIndex) => {
      if (!treatment.title) {
        warnings.push(`Missing title for treatment at index ${treatmentIndex} in category: ${category.title}`);
      }
      
      if (typeof treatment.isFeatured !== 'boolean') {
        warnings.push(`Invalid isFeatured type for treatment "${treatment.title}" in category: ${category.title}`);
      }
      
      if (typeof treatment.isItalic !== 'boolean') {
        warnings.push(`Invalid isItalic type for treatment "${treatment.title}" in category: ${category.title}`);
      }
    });
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}

/**
 * Transforms a single treatment/service object
 * @param {Object} treatment - The treatment object to transform
 * @returns {Object} - The transformed treatment object with Hungarian field names
 */
function transformTreatment(treatment) {
  const transformed = {
    // Price field can be empty string, handle that case
    ...(treatment.price !== undefined && treatment.price !== '' ? { ar: treatment.price.trim() } : {}),
    nev: treatment.title?.trim(),
    kiemelt: Boolean(treatment.isFeatured),
    kiemelt_dontve: Boolean(treatment.isItalic)
  };
  
  return transformed;
}

/**
 * Transforms a single price category object to Directus API format
 * @param {Object} category - The category object to transform
 * @returns {Object} - The transformed category object with Hungarian field names
 */
function transformCategory(category) {
  // Create a new object with transformed data using Hungarian field names
  const transformed = {
    status: "published",  // Always published
    nev: category.title?.trim(),
    szolgaltatasok: Array.isArray(category.treatments) ? 
      category.treatments.map(treatment => transformTreatment(treatment)) : [],
    id: parseInt(category.id, 10) // Ensure id is a number
  };
  
  return transformed;
}

/**
 * Main transformation function
 */
async function transformPricesData() {
  log.header('💰 Prices Data Transformation Script');
  
  try {
    // Step 1: Read input file
    log.info(`Reading input file: ${CONFIG.inputFile}`);
    const inputPath = path.resolve(CONFIG.inputFile);
    
    if (!fs.existsSync(inputPath)) {
      throw new Error(`Input file not found: ${inputPath}`);
    }
    
    const rawData = fs.readFileSync(inputPath, CONFIG.encoding);
    const categories = JSON.parse(rawData);
    
    log.success(`Successfully loaded ${categories.length} price categories from input file`);
    
    // Step 2: Validate data
    log.info('Validating price category data...');
    let hasErrors = false;
    let warningCount = 0;
    
    for (let i = 0; i < categories.length; i++) {
      const validation = validateCategory(categories[i], i);
      
      if (!validation.isValid) {
        hasErrors = true;
        validation.errors.forEach(error => log.error(error));
      }
      
      if (validation.warnings.length > 0) {
        warningCount += validation.warnings.length;
        validation.warnings.forEach(warning => log.warning(warning));
      }
    }
    
    if (hasErrors) {
      throw new Error('Validation failed with errors. Please fix the issues and try again.');
    }
    
    if (warningCount > 0) {
      log.warning(`Found ${warningCount} warnings, but continuing with transformation...`);
    } else {
      log.success('All data validated successfully!');
    }
    
    // Step 3: Transform data
    log.info('Transforming price data...');
    const transformedCategories = categories.map((category, index) => {
      const transformed = transformCategory(category);
      log.success(`Transformed: ${transformed.nev} (ID: ${transformed.id}) with ${transformed.szolgaltatasok.length} services`);
      return transformed;
    });
    
    // Step 4: Generate summary
    log.header('📊 Transformation Summary');
    console.log(`Total categories processed: ${transformedCategories.length}`);
    console.log(`Fields mapped to Hungarian:`);
    console.log(`  • title → nev`);
    console.log(`  • treatments → szolgaltatasok`);
    console.log(`  Within services:`);
    console.log(`    • title → nev`);
    console.log(`    • price → ar`);
    console.log(`    • isFeatured → kiemelt`);
    console.log(`    • isItalic → kiemelt_dontve`);
    console.log(`${colors.green}Additional fields added: status (always "published")${colors.reset}`);
    
    // Count total services
    const totalServices = transformedCategories.reduce((sum, c) => sum + c.szolgaltatasok.length, 0);
    const featuredServices = transformedCategories.reduce((sum, c) => 
      sum + c.szolgaltatasok.filter(s => s.kiemelt).length, 0);
    const italicServices = transformedCategories.reduce((sum, c) => 
      sum + c.szolgaltatasok.filter(s => s.kiemelt_dontve).length, 0);
    
    console.log(`\n${colors.bright}Statistics:${colors.reset}`);
    console.log(`  • Total services across all categories: ${totalServices}`);
    console.log(`  • Featured services: ${featuredServices}`);
    console.log(`  • Italic (special) services: ${italicServices}`);
    
    // Step 5: Write output file
    log.header('💾 Writing Output File');
    const outputPath = path.resolve(CONFIG.outputFile);
    const outputData = JSON.stringify(transformedCategories, null, CONFIG.indentSpaces);
    
    fs.writeFileSync(outputPath, outputData, CONFIG.encoding);
    log.success(`Successfully wrote transformed data to: ${CONFIG.outputFile}`);
    
    // Final success message
    log.header('✨ Transformation Complete!');
    console.log(`${colors.green}The transformed data has been saved to:${colors.reset}`);
    console.log(`  ${colors.bright}${outputPath}${colors.reset}`);
    console.log(`\nYou can now import this file to your Directus API.`);
    
  } catch (error) {
    log.header('❌ Transformation Failed');
    log.error(error.message);
    process.exit(1);
  }
}

// Run the transformation
transformPricesData();
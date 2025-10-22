#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  inputFile: './src/assets/coworkers.json',
  outputFile: './src/assets/coworkers-transformed.json',
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
 * Validates a coworker object
 * @param {Object} coworker - The coworker object to validate
 * @param {number} index - The index in the array
 * @returns {Object} - Validation result with isValid and errors
 */
function validateCoworker(coworker, index) {
  const errors = [];
  const warnings = [];
  
  // Required fields
  const requiredFields = ['id', 'name', 'slug', 'title', 'bio'];
  
  for (const field of requiredFields) {
    if (!coworker[field]) {
      errors.push(`Missing required field '${field}' for coworker at index ${index}`);
    }
  }
  
  // Check field types
  if (typeof coworker.id !== 'number') {
    errors.push(`Invalid id type for coworker at index ${index}: expected number`);
  }
  
  if (typeof coworker.hasAppointment !== 'boolean') {
    warnings.push(`Invalid hasAppointment type for ${coworker.name}: expected boolean, got ${typeof coworker.hasAppointment}`);
  }
  
  if (!Array.isArray(coworker.specialties)) {
    warnings.push(`Specialties should be an array for ${coworker.name}`);
  }
  
  if (!Array.isArray(coworker.consultTime)) {
    warnings.push(`ConsultTime should be an array for ${coworker.name}`);
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}

/**
 * Converts plain text to HTML with proper entities
 * @param {string} text - The text to convert
 * @returns {string} - HTML-encoded text with paragraph tags
 */
function textToHtml(text) {
  if (!text) return '';
  
  // Split by double newlines to create paragraphs
  const paragraphs = text.split(/\n\s*\n/);
  
  // Wrap each paragraph in <p> tags and encode HTML entities
  const htmlParagraphs = paragraphs.map(para => {
    // Basic HTML entity encoding
    const encoded = para
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/á/g, '&aacute;')
      .replace(/Á/g, '&Aacute;')
      .replace(/é/g, '&eacute;')
      .replace(/É/g, '&Eacute;')
      .replace(/í/g, '&iacute;')
      .replace(/Í/g, '&Iacute;')
      .replace(/ó/g, '&oacute;')
      .replace(/Ó/g, '&Oacute;')
      .replace(/ö/g, '&ouml;')
      .replace(/Ö/g, '&Ouml;')
      .replace(/ő/g, '&odblac;')
      .replace(/Ő/g, '&Odblac;')
      .replace(/ú/g, '&uacute;')
      .replace(/Ú/g, '&Uacute;')
      .replace(/ü/g, '&uuml;')
      .replace(/Ü/g, '&Uuml;')
      .replace(/ű/g, '&udblac;')
      .replace(/Ű/g, '&Udblac;');
    
    return `<p>${encoded.trim()}</p>`;
  });
  
  // Join with newline and add spacing paragraph if needed
  return htmlParagraphs.join('\n<p>&nbsp;</p>\n');
}

/**
 * Transforms a single coworker object to Directus API format
 * @param {Object} coworker - The coworker object to transform
 * @returns {Object} - The transformed coworker object with Hungarian field names
 */
function transformCoworker(coworker) {
  // Create a new object with transformed data using Hungarian field names
  const transformed = {
    status: "published",  // Always published
    nev: coworker.name?.trim(),
    titulus: coworker.title?.trim(),
    slug: coworker.slug?.trim(),
    szakterulet: Array.isArray(coworker.specialties) ? coworker.specialties.map(specialty => ({
      nev: specialty.title?.trim()
    })) : [],
    bio: textToHtml(coworker.bio),
    foglalas: Boolean(coworker.hasAppointment),
    foglalas_link: coworker.appointmentLink?.trim() || "",
    konzultacios_ido: Array.isArray(coworker.consultTime) ? coworker.consultTime.map(time => ({
      nap: time.day?.trim(),
      idopont: time.hours?.trim()
    })) : [],
    id: coworker.id
    // NOTE: Skipping 'kep' (image) field as requested
    // NOTE: Skipping 'kapcsolodo_kezelesek' as it needs treatment IDs from database
  };
  
  return transformed;
}

/**
 * Main transformation function
 */
async function transformCoworkersData() {
  log.header('🚀 Coworkers Data Transformation Script');
  
  try {
    // Step 1: Read input file
    log.info(`Reading input file: ${CONFIG.inputFile}`);
    const inputPath = path.resolve(CONFIG.inputFile);
    
    if (!fs.existsSync(inputPath)) {
      throw new Error(`Input file not found: ${inputPath}`);
    }
    
    const rawData = fs.readFileSync(inputPath, CONFIG.encoding);
    const coworkers = JSON.parse(rawData);
    
    log.success(`Successfully loaded ${coworkers.length} coworkers from input file`);
    
    // Step 2: Validate data
    log.info('Validating coworker data...');
    let hasErrors = false;
    let warningCount = 0;
    
    for (let i = 0; i < coworkers.length; i++) {
      const validation = validateCoworker(coworkers[i], i);
      
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
    log.info('Transforming coworker data...');
    const transformedCoworkers = coworkers.map((coworker, index) => {
      const transformed = transformCoworker(coworker);
      log.success(`Transformed: ${transformed.nev} (ID: ${transformed.id})`);
      return transformed;
    });
    
    // Step 4: Generate summary
    log.header('📊 Transformation Summary');
    console.log(`Total coworkers processed: ${transformedCoworkers.length}`);
    console.log(`Fields mapped to Hungarian:`);
    console.log(`  • name → nev`);
    console.log(`  • title → titulus`);
    console.log(`  • specialties → szakterulet`);
    console.log(`  • bio → bio (HTML formatted)`);
    console.log(`  • hasAppointment → foglalas`);
    console.log(`  • appointmentLink → foglalas_link`);
    console.log(`  • consultTime → konzultacios_ido`);
    console.log(`${colors.yellow}Fields excluded: kep (image), kapcsolodo_kezelesek (as requested)${colors.reset}`);
    
    // Count specialties and consultation times
    const totalSpecialties = transformedCoworkers.reduce((sum, c) => sum + c.szakterulet.length, 0);
    const totalConsultTimes = transformedCoworkers.reduce((sum, c) => sum + c.konzultacios_ido.length, 0);
    const withAppointment = transformedCoworkers.filter(c => c.foglalas).length;
    
    console.log(`\n${colors.bright}Statistics:${colors.reset}`);
    console.log(`  • Coworkers with appointment: ${withAppointment}/${transformedCoworkers.length}`);
    console.log(`  • Total specialties: ${totalSpecialties}`);
    console.log(`  • Total consultation times: ${totalConsultTimes}`);
    
    // Step 5: Write output file
    log.header('💾 Writing Output File');
    const outputPath = path.resolve(CONFIG.outputFile);
    const outputData = JSON.stringify(transformedCoworkers, null, CONFIG.indentSpaces);
    
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
transformCoworkersData();
export function formatDate(dateString, locale = 'en-US', options = {}) {
  const date = new Date(dateString);

  // Default options for date formatting
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return date.toLocaleDateString(locale, { ...defaultOptions, ...options });
}

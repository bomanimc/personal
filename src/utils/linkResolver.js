// In src/prismic-configuration.js
export const linkResolver = (doc) => {
  console.log('Link Resolver', doc);
  // URL for a page type
  if (doc.type === 'page') {
    return `/${doc.uid}`
  }
  // Backup for all other types
  return '/'
};
// In src/prismic-configuration.js
const linkResolver = (doc) => {
  // URL for a page type
  if (doc.type === 'page') {
    return `/${doc.uid}`;
  }
  // Backup for all other types
  return '/';
};

export default linkResolver;

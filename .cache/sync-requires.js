const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-source-prismic-graphql-components-preview-page-js": hot(preferDefault(require("/Users/bomani/Desktop/personal/node_modules/gatsby-source-prismic-graphql/components/PreviewPage.js"))),
  "component---src-templates-project-jsx": hot(preferDefault(require("/Users/bomani/Desktop/personal/src/templates/project.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/bomani/Desktop/personal/src/pages/index.jsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/bomani/Desktop/personal/.cache/dev-404-page.js"))),
  "component---src-pages-404-jsx": hot(preferDefault(require("/Users/bomani/Desktop/personal/src/pages/404.jsx"))),
  "component---src-pages-about-jsx": hot(preferDefault(require("/Users/bomani/Desktop/personal/src/pages/about.jsx")))
}


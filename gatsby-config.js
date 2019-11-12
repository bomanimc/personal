const { apiEndpoint } = require('./prismic-config');
var repo = /([^\/]+)\.prismic\.io\/graphql/.exec(apiEndpoint);

module.exports = {
  siteMetadata: {
    title: `BOMANI`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@bomanimc`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://bomani.xyz',
        policy: [{ userAgent: '*', disallow: '' }]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BOMANI`,
        short_name: `BOMANI`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/drip.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-prismic-graphql',
        options: {
          repositoryName: repo[1],
          path: '/preview', // (optional preview path. Default: /preview)
          previews: true, // (optional, activated Previews. Default: false)
          pages: [{ // (optional, builds pages dynamically)
            type: 'Project',         // TypeName from prismic
            match: '/:uid',  // Pages will be generated under this pattern
            path: '/',        // Placeholder page for unpublished documents
            component: require.resolve('./src/templates/project.js'),
          }],
      }
    }
  ],
}

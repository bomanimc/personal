/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'BOMANI',
    description: 'Bomani Oseni McClendon is an engineer living in Brooklyn, NY.',
    siteUrl: 'https://bomani.rip',
    ogImageWidth: 600,
    ogImageHeight: 600,
    twitterCreator: '@bxmani',
    twitterDomain: 'bomani.rip',
    googleSiteVerification: 'oUOz_91m_HgyQz1q_kErpkk03-qUN-OS1Wh8once9gg',
  },
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `hhel7lt4`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        // token: process.env.SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        // graphqlTag: 'default',
      },
    },
    `gatsby-plugin-image`,
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
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'BOMANI',
        short_name: 'BOMANI',
        start_url: '/',
        background_color: '#000',
        theme_color: '#000',
        display: 'minimal-ui',
        icon: 'src/images/drip.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`
  ],
}

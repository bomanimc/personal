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
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://bomani.rip',
        policy: [{ userAgent: '*', disallow: '' }],
      },
    },
    {
      resolve: 'gatsby-plugin-csp',
      options: {
        disableOnDev: true,
        reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
        mergeScriptHashes: false, // you can disable scripts sha256 hashes
        mergeStyleHashes: false, // you can disable styles sha256 hashes
        mergeDefaultDirectives: false,
        directives: {
          'default-src': "'self' res.cloudinary.com www.google-analytics.com",
          'script-src': "'self' 'unsafe-inline' www.google-analytics.com static.cdn.prismic.io",
          'style-src': "'self' 'unsafe-inline'",
          'frame-src': "'self' bomani.prismic.io youtube.com www.youtube.com player.vimeo.com",
          'connect-src': "'self' www.google-analytics.com",
          // you can add your directives or override defaults
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-120000757-1',
      },
    },
  ],
};

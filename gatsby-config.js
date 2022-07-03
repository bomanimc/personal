const { apiEndpoint } = require('./prismic-config');

const repo = /([^\/]+)\.prismic\.io\/graphql/.exec(apiEndpoint);

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
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://bomani.rip',
        policy: [{ userAgent: '*', disallow: '' }],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-120000757-1',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: repo[1],
        path: '/preview', // (optional preview path. Default: /preview)
        previews: true, // (optional, activated Previews. Default: false)
        pages: [{ // (optional, builds pages dynamically)
          type: 'Project', // TypeName from prismic
          match: '/:uid', // Pages will be generated under this pattern
          path: '/', // Placeholder page for unpublished documents
          component: require.resolve('./src/templates/project.jsx'),
        }],
      },
    },
    {
      resolve: 'gatsby-plugin-csp',
      options: {
        disableOnDev: true,
        reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
        mergeScriptHashes: true, // you can disable scripts sha256 hashes
        mergeStyleHashes: true, // you can disable styles sha256 hashes
        mergeDefaultDirectives: true,
        directives: {
          'script-src': "'self' www.google-analytics.com",
          'style-src': "'self' 'unsafe-inline'",
          'img-src': "'self' data: www.google-analytics.com",
          // you can add your directives or override defaults
        }
      }
    },
  ],
};

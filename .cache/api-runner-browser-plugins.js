module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"BOMANI","short_name":"BOMANI","start_url":"/","background_color":"#000","theme_color":"#000","display":"minimal-ui","icon":"src/images/drip-2.png"},
    },{
      plugin: require('../node_modules/gatsby-source-prismic-graphql/gatsby-browser.js'),
      options: {"plugins":[],"repositoryName":"bomani","path":"/preview","previews":true,"pages":[{"type":"Project","match":"/:uid","path":"/","component":"/Users/bomani/Desktop/personal/src/templates/project.js"}]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]

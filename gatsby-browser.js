const { registerLinkResolver } = require('gatsby-source-prismic-graphql');
const { linkResolver } = require('./src/utils/linkResolver');
import "./global.css";

registerLinkResolver(linkResolver);
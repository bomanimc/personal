/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            url
            ogImageHeight
            ogImageWidth
            twitterCreator
            twitterDomain
            googleSiteVerification
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const { url, ogImageWidth, ogImageHeight, twitterCreator, twitterDomain, googleSiteVerification } = site.siteMetadata;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        { 
          name: 'google-site-verification',
          content: googleSiteVerification,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `og:image:width`,
          content: ogImageWidth,
        },
        {
          property: `og:image:height`,
          content: ogImageHeight,
        },
        {
          name: `twitter:domain`,
          content: twitterDomain,
        },
        {
          name: `twitter:site`,
          content: title,
        },
        {
          name: `twitter:creator`,
          content: twitterCreator,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO

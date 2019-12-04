/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            ogImageHeight
            ogImageWidth
            twitterCreator
            twitterDomain
            googleSiteVerification
          }
        }
      }
    `,
  );

  const metaDescription = site.siteMetadata.description;
  const {
    title, siteUrl, ogImageWidth, ogImageHeight, twitterCreator, twitterDomain, googleSiteVerification,
  } = site.siteMetadata;

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={title}
      titleTemplate="%s"
      meta={[
        {
          name: 'google-site-verification',
          content: googleSiteVerification,
        },
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: siteUrl,
        },
        {
          property: 'og:image:width',
          content: ogImageWidth,
        },
        {
          property: 'og:image:height',
          content: ogImageHeight,
        },
        {
          name: 'twitter:domain',
          content: twitterDomain,
        },
        {
          name: 'twitter:site',
          content: title,
        },
        {
          name: 'twitter:creator',
          content: twitterCreator,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ]}
    />
  );
}

export default SEO;

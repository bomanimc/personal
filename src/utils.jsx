/* eslint-disable import/prefer-default-export */
import React from 'react';

export const setMetaTitle = (title) => {
  const titleWithName = `${title} - BOMANI`;
  return [
    <title>{titleWithName}</title>,
    <meta property="og:title" content={titleWithName} />,
    <meta name="twitter:title" content={titleWithName} />,
  ];
};

/* eslint-disable import/prefer-default-export */
import React from 'react';

export const setMetaTitle = (title) => {
  const titleWithName = `${title} - BOMANI`;
  return [
    <title key="Tab Title">{titleWithName}</title>,
    <meta key="OG Title" property="og:title" content={titleWithName} />,
    <meta key="Twitter Title" name="twitter:title" content={titleWithName} />,
  ];
};

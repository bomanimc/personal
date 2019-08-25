/* eslint-disable import/prefer-default-export */
import React from 'react';

export const setMetaTitle = title => ([
  <title key="Tab Title">{title}</title>,
  <meta key="OG Title" property="og:title" content={title} />,
  <meta key="Twitter Title" name="twitter:title" content={title} />,
]);

export const setMetaTitleWithName = (title) => {
  const titleWithName = `${title} - BOMANI`;
  return setMetaTitle(titleWithName);
};

/* eslint-disable react/prop-types */
import React from 'react';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import linkResolver from '../../utils/linkResolver';
import htmlSerializer from '../../utils/htmlSerializer';

const TextBlock = styled.div`
  p {
    padding-bottom: 8px;
  }
`;

export default ({ slice }) => {
  const renderableText = slice.primary ? slice.primary.text : slice;

  return (
    <TextBlock>
      {RichText.render(renderableText, linkResolver, htmlSerializer)}
    </TextBlock>
  );
};

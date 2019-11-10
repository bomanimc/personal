import React from 'react'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components';
import { linkResolver } from '../../utils/linkResolver'
import htmlSerializer from '../../utils/htmlSerializer'

const TextBlock = styled.div`
  p {
    padding-bottom: 8px;
  }
`;

export default ({ slice }) => {
  console.log(slice);

  return (
    <TextBlock>
      {RichText.render(slice.primary.text, linkResolver, htmlSerializer)}
    </TextBlock>
  );
}

/* eslint no-confusing-arrow: 0 */

import styled, { css } from 'styled-components';

const linkStyle = css`
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;

export const Body = styled.p`
  font-size: 12px;
  font-weight: lighter;
`;

export const TextContent = Body.extend`
  a {
    ${linkStyle}
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export const Link = styled.a`
  ${linkStyle}
`;

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { InternalLink, ExternalLink } from '../commonComponents';
import theme from '../../theme';

const LinksContainer = styled.div`
  margin-bottom: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const linkStyle = css`
  display: inline-block;
  text-align: center;
  padding: 0px 10px;
  text-transform: lowercase;

  &.active {
    text-decoration: underline;
  }
`;

const ExternalLinkItem = styled(ExternalLink)`
  ${linkStyle}
`;

const InternalLinkItem = styled(InternalLink)`
  ${linkStyle}
`;

const LinksBar = ({ links, isNav }) => {
  if (isNav) {
    return (
      <LinksContainer>
        {links.map((item) => (
          <InternalLinkItem key={item.name} href={item.link} activeClassName="active">
            {item.name}
          </InternalLinkItem>
        ))}
      </LinksContainer>
    );
  }

  const barLinks = links.map((item) => (
    item.isExternal
      ? (
        <ExternalLinkItem href={item.link} key={item.name} target="_blank" rel="noopener noreferrer">
          {item.name}
        </ExternalLinkItem>
      )
      : (
        <InternalLinkItem href={item.link} key={item.name}>
          {item.name}
        </InternalLinkItem>
      )
  ));

  return (
    <LinksContainer>{barLinks}</LinksContainer>
  );
};

LinksBar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape).isRequired,
  isNav: PropTypes.bool,
};

LinksBar.defaultProps = {
  isNav: false,
};

export default LinksBar;

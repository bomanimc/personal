import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { InternalLink, ExternalLink, NavBarLink } from '../commonComponents';

const LinksContainer = styled.div`
  background-color: blue;
  padding: 10px;
  flex-grow: 1;
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

const ExternalLinkItem = ExternalLink.extend`
  ${linkStyle}
`;

const InternalLinkItem = InternalLink.extend`
  ${linkStyle}
`;


const NavBarLinkItem = NavBarLink.extend`
  ${linkStyle}
`;

const LinksBar = ({ links, isNav }) => {
  if (isNav) {
    return (
      <LinksContainer>
        {links.map(item => (
          <NavBarLinkItem exact to={item.link} key={item.name} activeClassName="active">
            {item.name}
          </NavBarLinkItem>
        ))}
      </LinksContainer>
    );
  }

  const barLinks = links.map(item => (
    item.isExternal
      ? (
        <ExternalLinkItem href={item.link} key={item.name} target="_blank" rel="noopener noreferrer">
          {item.name}
        </ExternalLinkItem>
      )
      : (
        <InternalLinkItem to={item.link} key={item.name}>
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
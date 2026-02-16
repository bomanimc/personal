import React from 'react';
import styled, { css } from 'styled-components';
import { InternalLink } from '../commonComponents';

const NavBar = () => (
  <NavContainer>
    <Name href="/">Bomani</Name>
    <LinksContainer>
      <NavLink href="/">Work</NavLink>
      <NavLink href="/info">Info</NavLink>
    </LinksContainer>
  </NavContainer>
);

const containerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
`;

const NavContainer = styled.nav`
  ${containerStyle};
  display: flex;
  flex-direction: row;
  padding: 1rem;
`;

const NavLink = styled(InternalLink)`
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  pointer-events: auto;
  font-size: 1rem;
  margin: 0rem 1rem;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Name = styled(NavLink)`
  font-size: 12rem;

  &:hover {
    text-decoration: none;
  }

  @media (max-width: ${theme.breakPoints.mobile}) {
    font-size: 20vw;
  }
`;

export default NavBar;

import React from 'react';
import styled, { css } from 'styled-components';
import { InternalLink } from '../commonComponents';

const NavBar = () => (
  <>
    <NavContainer>
      <Name href="/">Bomani</Name>
      <LinksRow>
        <NavLink href="/">Work</NavLink>
        <NavLink href="/info">Info</NavLink>
      </LinksRow>
    </NavContainer>
  </>
);

const containerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  mix-blend-mode: exclusion;
  pointer-events: none;
`;

const NavContainer = styled.nav`
  ${containerStyle};
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const LinksRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavLink = styled(InternalLink)`
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  pointer-events: auto;
  font-size: 1rem;
  margin: 0rem 1rem;
`;

const Name = styled(NavLink)`
  font-size: 7rem;

  &:hover {
    text-decoration: none;
  }

  @media (max-width: ${theme.breakPoints.mobile}) {
    font-size: 20vw;
  }
`;

export default NavBar;

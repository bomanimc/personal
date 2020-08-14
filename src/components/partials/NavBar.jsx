import React from 'react';
import styled, { css } from 'styled-components';
import { InternalLink } from '../commonComponents';

const NavBar = () => (
  <>
    <DesktopContainer>
      <NavLink to="/">Work</NavLink>
      <Name to="/">Bomani</Name>
      <NavLink to="/info">Info</NavLink>
    </DesktopContainer>
    <MobileContainer>
      <Name to="/">Bomani</Name>
      <LinksRow>
        <NavLink to="/">Work</NavLink>
        <NavLink to="/info">Info</NavLink>
      </LinksRow>
    </MobileContainer>
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

const DesktopContainer = styled.nav`
  ${containerStyle};
  padding: 2rem 3rem;

  @media (max-width: ${(p) => p.theme.breakPoints.mobile}) {
    display: none;
  }
`;

const MobileContainer = styled.nav`
  ${containerStyle};
  display: none;
  flex-direction: column;
  padding: 1rem;

  @media (max-width: ${(p) => p.theme.breakPoints.mobile}) {
    display: flex;
  }
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

  @media (max-width: ${(p) => p.theme.breakPoints.mobile}) {
    font-size: 1rem;
    margin: 0rem 1rem;
  }
`;

const Name = styled(NavLink)`
  font-size: 5.25rem;

  &:hover {
    text-decoration: none;
  }

  @media (max-width: ${(p) => p.theme.breakPoints.mobile}) {
    font-size: 20vw;
  }
`;

export default NavBar;

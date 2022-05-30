import React from 'react';
import styled, { css } from 'styled-components';
import { InternalLink } from '../commonComponents';

const NavBar = () => (
  <NavContainer>
    <Name to="/">Bomani</Name>
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
  flex-direction: column;
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

const Name = styled(NavLink)`
  font-size: 12rem;

  &:hover {
    text-decoration: none;
  }

  @media (max-width: ${(p) => p.theme.breakPoints.mobile}) {
    font-size: 20vw;
  }
`;

export default NavBar;

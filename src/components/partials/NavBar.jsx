import React from 'react';
import styled from 'styled-components';
import { InternalLink } from '../commonComponents';

const NavBar = () => (
  <Container>
    <NavLink>Work</NavLink>
    <Name>Bomani</Name>
    <NavLink>Info</NavLink>
  </Container>
);

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;

const NavLink = styled(InternalLink)`
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const Name = styled(NavLink)`
  font-size: 5.25rem;

  &:hover {
    text-decoration: none;
  }
`;

export default NavBar;

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
`;

const NavLink = styled(InternalLink)`
  text-transform: uppercase;
  font-weight: bold;
`;

const Name = styled(NavLink)`
  font-size: 3rem;
`;

export default NavBar;

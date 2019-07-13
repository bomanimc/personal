import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Link } from '../commonComponents';

const LinksContainer = styled.div`
  background-color: blue;
  padding: 10px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const LinkItem = Link.extend`
  display: inline-block;
  text-align: center;
  padding: 0px 10px;
  text-transform: lowercase;
`;

const LinksBar = ({ links }) => {
  const socialLinks = links.map(item => (
    <LinkItem href={item.link} key={item.name}>
      {item.name}
    </LinkItem>
  ));

  return (
    <LinksContainer>{socialLinks}</LinksContainer>
  );
};

LinksBar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default LinksBar;

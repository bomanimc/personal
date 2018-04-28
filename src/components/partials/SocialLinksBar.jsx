import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Link } from '../commonComponents';

const SocialLinksContainer = styled.div`
  background-color: blue;
  padding: 10px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const SocialLink = Link.extend`
  display: inline-block;
  text-align: center;
  padding: 0px 10px;
  text-transform: lowercase;
`;

const SocialLinksBar = (props) => {
  const socialLinks = props.links.map(item =>
    <SocialLink href={item.link}>{item.name}</SocialLink>);

  return (
    <SocialLinksContainer>{socialLinks}</SocialLinksContainer>
  );
};

SocialLinksBar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default SocialLinksBar;

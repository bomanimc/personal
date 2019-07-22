import React from 'react';
import PropTypes from 'prop-types';
import LinksBar from './LinksBar';
import { SocialLinks, NavLinks } from '../../constants';

const Layout = ({ children }) => (
  <div>
    <LinksBar links={NavLinks} />
    {children}
    <LinksBar links={SocialLinks} />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

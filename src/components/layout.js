import React from 'react';
import PropTypes from "prop-types"
import SEO from './seo';
import LinksBar from './partials/LinksBar';
import { SocialLinks, NavLinks } from '../constants';
import "./layout.css";

const Layout = ({ children }) => (
  <div>
    <SEO />
    <LinksBar links={NavLinks} isNav />
    {children}
    <LinksBar links={SocialLinks} />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
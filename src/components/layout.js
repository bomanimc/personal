import React from 'react';
import PropTypes from "prop-types"
import styled from 'styled-components';
import SEO from './seo';
import LinksBar from './partials/LinksBar';
import { SocialLinks, NavLinks } from '../constants';

const BaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  align-content: center;
  flex-direction: column;
`;

const Layout = ({ children }) => (
  <BaseWrapper>
    <SEO />
    <LinksBar links={NavLinks} isNav />
    <ContentWrapper>
      {children}
    </ContentWrapper>
    <LinksBar links={SocialLinks} />
  </BaseWrapper>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
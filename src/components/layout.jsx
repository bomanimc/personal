import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SEO from './seo';
import NavBar from './partials/NavBar';
import LinksBar from './partials/LinksBar';
import { SocialLinks } from '../constants';

const BaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  align-content: center;
  flex-direction: column;
  padding: 0 3rem;
`;

const Layout = ({ children }) => (
  <BaseWrapper>
    <SEO />
    <NavBar />
    <ContentWrapper>
      {children}
    </ContentWrapper>
    <LinksBar links={SocialLinks} />
  </BaseWrapper>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

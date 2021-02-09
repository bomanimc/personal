/* eslint no-confusing-arrow: 0 */

import React from 'react';
// eslint-disable-next-line no-unused-vars
// Routing needs to be fixed
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { setMetaTitleWithName } from '../utils/utils';

export const PAGE_WIDTH = '1000px';

const linkStyle = css`
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;

export const Body = styled.p`
  font-weight: lighter;
`;

export const TextContent = styled.span`
  font-weight: lighter;

  a {
    ${linkStyle}
    background-color: rgba(255, 255, 255, 0.3);
  }

  ul {
    margin-left: 24px;
  }
`;

export const InternalLink = styled(Link)`
  ${linkStyle}
`;

export const ExternalLink = styled.a`
  ${linkStyle}
`;

export const Section = styled.section`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  height: ${(props) => props.sectionHeight};
  min-height: ${(props) => props.minHeight};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.align};
  justify-content: space-between;
  margin-left: ${(props) => props.marginHorizontal ? props.marginHorizontal : '0px'};
  margin-right: ${(props) => props.marginHorizontal ? props.marginHorizontal : '0px'};
`;

export const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.horizontalCenter ? 'center' : 'normal'};
  justify-content: ${(props) => props.verticalCenter ? 'center' : 'normal'};
  margin-top: ${(props) => props.marginTop ? props.marginTop : '0px'};
  margin-bottom: ${(props) => props.marginBottom ? props.marginBottom : '0px'};
`;

export const ProjectGridContainer = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 3rem;
  grid-template-columns: repeat(2, 1fr);
  height: ${(props) => props.containerHeight ? props.containerHeight : '100%'};

  @media (max-width: 1100px) {
    grid-gap: 1rem;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Divider = styled.div`
  width: 200px;
  border-top: 1px dashed white;
  margin: 48px 0px;
`;

export const BodySection = styled(TextContent)``;

export const MetadataSection = styled.div`
  display: flex;
  margin-top: 24px;

  @media (max-width: ${PAGE_WIDTH}) {
    flex-direction: column;
  }
`;

export const MetadataItem = styled.div`
  margin-right: 48px;
  width: 300px;

  @media (max-width: ${PAGE_WIDTH}) {
    width: 100%;
    margin-bottom: 16px;

    :last-child {
      margin-bottom: 0px;
    }
  }
`;

export const MetadataTitle = styled(Body)`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const MetadataContent = styled(TextContent)``;

export const Page = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

export const PageCenteringContainer = styled.div`
  width: ${PAGE_WIDTH};

  @media (max-width: ${PAGE_WIDTH}) {
    width: 100%;
  }
`;

export const PageTitle = styled.p`
  font-size: 48px;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 0.9;
`;

export const BasePage = ({ title, body, metadata }) => (
  <div>
    <Helmet>
      {setMetaTitleWithName(title)}
    </Helmet>
    <Page>
      <PageCenteringContainer>
        <PageTitle>{title}</PageTitle>
        {metadata}
        <Divider />
        {body}
      </PageCenteringContainer>
    </Page>
  </div>
);

export const BaseAnimationPage = ({ title, children }) => (
  <div>
    <Helmet>
      {setMetaTitleWithName(title)}
    </Helmet>
    <Page>{children}</Page>
  </div>
);


BasePage.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
  metadata: PropTypes.node,
};

BasePage.defaultProps = {
  metadata: null,
};

BaseAnimationPage.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

BaseAnimationPage.defaultProps = {
  children: null,
};

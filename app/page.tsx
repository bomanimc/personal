// @ts-nocheck
/* eslint no-confusing-arrow: 0 */
/* eslint array-callback-return: 0 */

import React from 'react';
import styled from 'styled-components';
// import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import ProjectCard from '../components/partials/ProjectCard';
import {
  ContentContainer, ProjectGridContainer,
} from '../components/commonComponents';
import { ProjectContent, FeaturedProjects } from '../constants';
import { setMetaTitle } from '../utils/utils';

const HomePage = () => (
  <div>
    {/* <Helmet>
      {setMetaTitle('BOMANI')}
    </Helmet> */}
    <ProjectSection />
  </div>
);

const ProjectSection = () => (
  <ContentContainer horizontalCenter containerHeight="auto" marginTop="36px" marginBottom="36px">
    <ProjectGridContainer containerHeight="auto">
      {
        FeaturedProjects.map((section) => (
          <ProjectCard
            key={ProjectContent[section].id}
            content={ProjectContent[section]}
          />
        ))
      }
    </ProjectGridContainer>
  </ContentContainer>
);

HomePage.NavBar = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  mix-blend-mode: exclusion;
`;

export default HomePage;

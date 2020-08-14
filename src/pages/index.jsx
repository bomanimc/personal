/* eslint no-confusing-arrow: 0 */
/* eslint array-callback-return: 0 */

import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import ProjectCard from '../components/partials/ProjectCard';
import {
  ContentContainer, ProjectGridContainer,
} from '../components/commonComponents';
import { ProjectContent, FeaturedProjects } from '../constants';
import { setMetaTitle } from '../utils/utils';

const HomePage = () => (
  <Layout>
    <div id="root">
      <Helmet>
        {setMetaTitle('BOMANI')}
      </Helmet>
      <ProjectSection />
    </div>
  </Layout>
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

export default HomePage;

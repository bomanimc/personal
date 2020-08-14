/* eslint no-confusing-arrow: 0 */
/* eslint array-callback-return: 0 */

import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import ProjectCard from '../components/partials/ProjectCard';
import {
  Section, ContentContainer, ProjectGridContainer,
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
  <Section
    bgColor="black"
    textColor="white"
    align="normal"
    sectionHeight="auto"
    minHeight={`${(ProjectContent.length * 250) + 200}px`}
    marginHorizontal="20px"
  >
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
  </Section>
);

export default HomePage;

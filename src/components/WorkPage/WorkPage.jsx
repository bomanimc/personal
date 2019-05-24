/* eslint no-confusing-arrow: 0 */
/* eslint array-callback-return: 0 */

import React from 'react';
import ProjectCard from '../partials/ProjectCard';
import LinksBar from '../partials/LinksBar';
import { Section, ContentContainer, ProjectGridContainer } from '../commonComponents';
import { ProjectContent, ProjectOrder, SocialLinks, NavLinks } from '../../constants';


const WorkPage = () => (
  <div id="root">
    <LinksBar links={NavLinks} />
    <ProjectSection />
    <LinksBar links={SocialLinks} />
  </div>
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
          ProjectOrder.map(section =>
            (<ProjectCard
              key={ProjectContent[section].id}
              content={ProjectContent[section]}
            />),
          )
        }
      </ProjectGridContainer>
    </ContentContainer>
  </Section>
);

export default WorkPage;

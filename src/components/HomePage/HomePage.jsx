/* eslint no-confusing-arrow: 0 */
/* eslint array-callback-return: 0 */

import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import ProjectCard from '../partials/ProjectCard';
import {
  InternalLink, Body, Section, ContentContainer, ProjectGridContainer,
} from '../commonComponents';
import { ProjectContent, FeaturedProjects } from '../../constants';
import { setMetaTitle } from '../../utils';

const hoverNameAnimationSpeed = 1.5;

const Introduction = ContentContainer.extend`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Name = styled.h1`
  font-family: Helvetica;
  color: white;
  font-size: 180px;
  line-height: 0.80;
  transition: opacity ${hoverNameAnimationSpeed}s ease;

  @media (max-width: 768px) {
    font-size: 5.5rem;
  }
`;

const Bio = Introduction.extend`
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 500px;
  height: auto;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CTAButton = InternalLink.extend`
  margin-top: 36px;
  background-color: white;
  color: black;
  padding: 8px;
  cursor: pointer;
  
  &:hover {
    text-decoration: none;
    box-shadow: 3px 3px 3px rgba(255, 255, 255, 0.3);
  }
`;

const HomePage = () => (
  <div id="root">
    <Helmet>
      {setMetaTitle('BOMANI')}
    </Helmet>
    <NameSection />
    <IntroSection />
    <ProjectSection />
  </div>
);

const NameSection = () => (
  <Introduction horizontalCenter verticalCenter marginTop="36px">
    <Name>
      BOMANI
    </Name>
  </Introduction>
);

const IntroSection = () => (
  <Section
    bgColor="black"
    textColor="white"
    align="normal"
    sectionHeight="20%"
    marginHorizontal="20px"
  >
    <ContentContainer horizontalCenter containerHeight="auto" marginTop="36px">
      <Bio>
        <Body>
          Bomani Oseni McClendon is an engineer based in Brooklyn, NY.
        </Body>
      </Bio>
    </ContentContainer>
  </Section>
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
          FeaturedProjects.map(section => (
            <ProjectCard
              key={ProjectContent[section].id}
              content={ProjectContent[section]}
            />
          ))
        }
      </ProjectGridContainer>
      <CTAButton to="/work">See more work.</CTAButton>
    </ContentContainer>
  </Section>
);

export default HomePage;

/* eslint no-confusing-arrow: 0 */
/* eslint array-callback-return: 0 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProjectCard from '../partials/ProjectCard';
import LinksBar from '../partials/LinksBar';
import { Body } from '../commonComponents';
import { ProjectContent, FeaturedProjects, SocialLinks, NavLinks } from '../../constants';

const hoverNameAnimationSpeed = 1.5;

const Section = styled.section`
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
  height: ${props => props.sectionHeight};
  min-height: ${props => props.minHeight};
  display: flex;
  flex-direction: column;
  align-items: ${props => props.align};
  justify-content: space-between;
  margin-left: ${props => props.marginHorizontal ? props.marginHorizontal : '0px'};
  margin-right: ${props => props.marginHorizontal ? props.marginHorizontal : '0px'};
`;

const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.horizontalCenter ? 'center' : 'normal'};
  justify-content: ${props => props.verticalCenter ? 'center' : 'normal'};
  height: ${props => props.containerHeight ? props.containerHeight : '100%'};
  margin-top: ${props => props.marginTop ? props.marginTop : '0px'};
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0px'};
`;

const ProjectGridContainer = styled.div`
  display: grid;
  grid-gap: 36px;
  grid-template-columns: repeat(2, 1fr);
  height: ${props => props.containerHeight ? props.containerHeight : '100%'};

  @media (max-width: 1100px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

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

const HomePage = () => (
  <div id="root">
    <LinksBar links={NavLinks} />
    <NameSection />
    <IntroSection />
    <ProjectSection />
    <LinksBar links={SocialLinks} />
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
          Bomani McClendon is a software engineer, designer, and
          aspiring artist based in New York City.
        </Body>
        <br />
        <Body>
          See his work below.
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
          FeaturedProjects.map(section =>
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

NameSection.propTypes = {
  onChangeColor: PropTypes.func.isRequired,
};

export default HomePage;

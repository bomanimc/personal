/* eslint no-confusing-arrow: 0 */
/* eslint array-callback-return: 0 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import ProjectCard from '../partials/ProjectCard';
import SocialLinksBar from '../partials/SocialLinksBar';
import { Link, Body, TextContent } from '../commonComponents';
import { SkillAreaColors, ProjectContent, SocialLinks } from '../../constants';

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

const Splash = Section.extend`
  height: 80vh;
  min-height: 600px;
  background-color: white;
  transition: background-color ${hoverNameAnimationSpeed}s ease;
  margin: 0px;

  @media (max-width: 768px) {
    height: 70vh;
    min-height: 300px;
  }
`;

const Introduction = ContentContainer.extend`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Name = styled.h1`
  font-family: Helvetica;
  color: black;
  font-size: 180px;
  line-height: 0.80;
  transition: opacity ${hoverNameAnimationSpeed}s ease;

  &:hover {
    color: #000000;
  }

  @media (max-width: 768px) {
    font-size: 5rem;
  }
`;

const SkillArea = styled.h3`
  color: rgba(0, 0, 0, 0.3);
  font-family: Helvetica;
  font-size: 64px;
  transition: color ${hoverNameAnimationSpeed}s ease;
  z-index: 2;

  &:hover {
    color: #000000;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Outro = Introduction.extend`
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 500px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Bio = Outro.extend`
  height: auto;
  text-align: center;
`;

const changeColor = (e) => {
  const splash = document.getElementById('splash');
  splash.style.backgroundColor = e.target.getAttribute('data-color');

  if (e.target.id !== 'name') {
    document.getElementById('name').style.opacity = 0.3;
  } else {
    document.getElementById('name').style.opacity = 1;
  }
};

const HomePage = () => (
  <div>
    <SplashSection onChangeColor={changeColor} />
    <IntroSection />
    <ProjectSection />
    <OutroSection />
    <SocialLinksBar links={SocialLinks} />
  </div>
);

const SplashSection = ({ onChangeColor }) => (
  <Splash
    bgColor="white"
    id="splash"
  >
    <Introduction horizontalCenter verticalCenter>
      <Name
        id="name"
        data-color={SkillAreaColors.name}
        onMouseEnter={e => onChangeColor(e)}
      >
        BOMANI
      </Name>
      <SkillArea
        data-color={SkillAreaColors.software}
        onMouseEnter={e => onChangeColor(e)}
      >
        SOFTWARE
      </SkillArea>
      <SkillArea
        data-color={SkillAreaColors.design}
        onMouseEnter={e => onChangeColor(e)}
      >
        DESIGN
      </SkillArea>
      <SkillArea
        data-color={SkillAreaColors.art}
        onMouseEnter={e => onChangeColor(e)}
      >
        ART
      </SkillArea>
    </Introduction>
  </Splash>
);

const IntroSection = () => (
  <Section
    bgColor="black"
    textColor="white"
    align="normal"
    sectionHeight="20vh"
    marginHorizontal="20px"
  >
    <ContentContainer horizontalCenter containerHeight="auto" marginTop="48px">
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
    <ContentContainer horizontalCenter containerHeight="auto">
      <ProjectGridContainer containerHeight="auto">
        {
          Map(ProjectContent).map(section =>
            (<ProjectCard
              key={section.id}
              content={section}
            />),
          ).toArray()
        }
      </ProjectGridContainer>
    </ContentContainer>
  </Section>
);

const OutroSection = () => (
  <Section
    bgColor="black"
    textColor="white"
    align="center"
    sectionHeight="100vh"
    minHeight="600px"
    marginHorizontal="20px"
  >
    <Outro horizontalCenter verticalCenter>
      <TextContent>
        During the day, Bomani works on news products at Facebook.
        He has previously interned at IDEO, Grubhub, and Boeing.
        <br />
        <br />
        <br />
        See his full resume <Link href="/resume">here</Link>.
      </TextContent>
    </Outro>
  </Section>
);

SplashSection.propTypes = {
  onChangeColor: PropTypes.func.isRequired,
};

export default HomePage;

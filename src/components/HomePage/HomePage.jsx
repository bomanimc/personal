/* eslint no-confusing-arrow: 0 */
/* eslint array-callback-return: 0 */

import React from 'react';
import styled from 'styled-components';
import Gallery from '../partials/LightboxGallery';
import Project from '../partials/Project';
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

const SplashSection = Section.extend`
  height: 100vh;
  min-height: 600px;
  background-color: white;
  transition: background-color ${hoverNameAnimationSpeed}s ease, height ${hoverNameAnimationSpeed}s ease;
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
  transition: color ${hoverNameAnimationSpeed}s ease;

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
    max-width: none;
  }
`;

const Bio = Outro.extend`
  height: auto;
`;

const changeColor = (e) => {
  const splash = document.getElementById('splash');
  splash.style.backgroundColor = e.target.getAttribute('data-color');
  splash.style.height = '80vh';

  if (e.target.id !== 'name') {
    document.getElementById('name').style.opacity = 0.3;
  } else {
    document.getElementById('name').style.opacity = 1;
  }
};

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      showGallery: false,
      currentMedia: [],
    };

    this.openGallery = this.openGallery.bind(this);
  }

  openGallery(images) {
    this.setState({
      showGallery: true,
      currentMedia: images,
    });
  }

  render() {
    return (
      <div>
        <SplashSection
          bgColor="white"
          id="splash"
        >
          <Introduction horizontalCenter verticalCenter>
            <Name
              id="name"
              data-color={SkillAreaColors.name}
              onMouseEnter={e => changeColor(e)}
            >
              BOMANI
            </Name>
            <SkillArea
              data-color={SkillAreaColors.software}
              onMouseEnter={e => changeColor(e)}
            >
              SOFTWARE
            </SkillArea>
            <SkillArea
              data-color={SkillAreaColors.design}
              onMouseEnter={e => changeColor(e)}
            >
              DESIGN
            </SkillArea>
            <SkillArea
              data-color={SkillAreaColors.art}
              onMouseEnter={e => changeColor(e)}
            >
              ART
            </SkillArea>
          </Introduction>
        </SplashSection>
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
        <Section
          bgColor="black"
          textColor="white"
          align="normal"
          sectionHeight="auto"
          minHeight={`${(ProjectContent.length * 250) + 200}px`}
          marginHorizontal="20px"
        >
          <ContentContainer horizontalCenter containerHeight="auto" marginTop="48px">
            {
              ProjectContent.map(
                section =>
                  (<Project
                    key={section.id}
                    content={section}
                    skillAreaColors={SkillAreaColors}
                    openGallery={this.openGallery}
                  />),
              )
            }
          </ContentContainer>
        </Section>
        <Section
          bgColor="black"
          textColor="white"
          align="center"
          sectionHeight="100vh"
          minHeight="600px"
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
        <SocialLinksBar links={SocialLinks} />
        <Gallery
          isGalleryOpen={this.state.showGallery}
          onCloseHandler={() => this.setState({ showGallery: false })}
          media={this.state.currentMedia}
        />
      </div>
    );
  }
}

export default HomePage;

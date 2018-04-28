/* eslint no-confusing-arrow: 0 */
/* eslint array-callback-return: 0 */

import React from 'react';
import styled from 'styled-components';
import shortid from 'shortid';
import Gallery from '../partials/LightboxGallery';
import Project from '../partials/Project';
import { Link, Body, TextContent } from '../commonComponents';

const skillAreaColors = {
  name: '#ffffff',
  software: '#f1c40f',
  design: '#3498db',
  art: '#e74c3c',
};

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
  transition: background .5s ease;
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

const Diagram = styled.img`
  height: 200px;
  width: 200px;
  margin: 30px;
`;

const Name = styled.h1`
  font-family: Helvetica;
  color: black;
  font-size: 180px;
  line-height: 0.80;
  transition: color .5s ease;

  @media (max-width: 768px) {
    font-size: 5rem;
  }
`;

const SkillArea = styled.h3`
  color: rgba(0, 0, 0, 0.3);
  font-family: Helvetica;
  font-size: 64px;
  transition: color .5s ease;
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

const SocialLinksBar = styled.div`
  background-color: blue;
  padding: 10px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const SocialLink = Link.extend`
  display: inline-block;
  text-align: center;
  padding: 0px 10px;
  text-transform: lowercase;
`;

const changeColor = (e) => {
  document.getElementById('splash').style.backgroundColor = e.target.getAttribute('data-color');

  if (e.target.id !== 'name') {
    document.getElementById('name').style.opacity = 0.3;
  } else {
    document.getElementById('name').style.opacity = 1;
  }
};

class HomePage extends React.Component {
  constructor() {
    super();

    const content = [
      {
        id: shortid.generate(),
        title: 'Shrumen Lumen',
        tags: ['featured', 'software', 'art'],
        body: `Interactive art installation made up of five glowing mushrooms
        that react to the presence of people. Presented at Burning Man 2016
        and [Meet D3 Festival](https://www.theluxediary.com/guide-meet-d3-2016/) in Dubai. On diplay at the [Smithsonian Museum](https://americanart.si.edu/exhibitions/burning-man) in 2018.`,
        roles: `Lead Software Developer (First Showings),
        Hardware-Software Integration.`,
        media: 'img/shrumenlumen/shrumenlumen_main.png',
        bgColor: '#919FB4',
        textColor: '#FFF',
        images: [
          {
            src: 'img/shrumenlumen/gallery/shrumen_sandy.jpg',
          },
          {
            src: 'img/shrumenlumen/gallery/shrumen_solo.JPG',
          },
        ],
      },
      {
        id: shortid.generate(),
        title: 'Dial Up',
        tags: ['featured', 'software', 'design'],
        body: `Creative collective that creates music, videos, magazines, and
        technology. Website featured on Brutalist Websites.`,
        roles: 'Website Design/Develoment, DJ, Writer.',
        media: 'img/dialup/dialup_main.png',
        bgColor: '#FFF',
        textColor: '#FF433E',
        images: [
          {
            src: 'img/dialup/gallery/dialup_screen.png',
          },
        ],
      },
      {
        id: shortid.generate(),
        title: 'NegativeReel',
        tags: ['software', 'art'],
        body: `Projection mapping installation that displays negative thoughts
        people have about themselves as an expression of vulnerability.`,
        roles: 'Creative Lead, Projection Mapping, Software Development.',
        media: 'img/negativereel/negativereel_main.png',
        bgColor: '#FFF',
        textColor: '#FF433E',
        images: [
          {
            src: 'img/negativereel/gallery/negativereel_front.gif',
          },
        ],
      },
    ];

    const socialLinks = [
      {
        name: 'Twitter',
        link: 'https://twitter.com/bxmani',
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/bxmani/',
      },
      {
        name: 'SoundCloud',
        link: 'https://soundcloud.com/bxmani',
      },
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/bomanimc/',
      },
      {
        name: 'GitHub',
        link: 'https://github.com/bomanimc',
      },
    ];

    this.state = {
      content,
      socialLinks,
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
              data-color={skillAreaColors.name}
              onMouseEnter={e => changeColor(e)}
            >
              BOMANI
            </Name>
            <SkillArea
              data-color={skillAreaColors.software}
              onMouseEnter={e => changeColor(e)}
            >
              SOFTWARE
            </SkillArea>
            <SkillArea
              data-color={skillAreaColors.design}
              onMouseEnter={e => changeColor(e)}
            >
              DESIGN
            </SkillArea>
            <SkillArea
              data-color={skillAreaColors.art}
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
          sectionHeight="auto"
          minHeight={`${(this.state.content.length * 250) + 200}px`}
          marginHorizontal="20px"
        >
          <ContentContainer horizontalCenter containerHeight="auto" marginTop="120px">
            <Bio>
              <Body>
              Bomani McClendon is a software engineer, designer, and
              freelancer based in New York City.
            </Body>
              <br />
              <Body>
              His interests lay at the intersection of software, design, and
              art.
            </Body>
              <br />
              <Diagram src="/img/diagram.png" />
              <Body>
              See his work below.
            </Body>
            </Bio>
          </ContentContainer>
          <ContentContainer horizontalCenter containerHeight="auto" marginTop="120px">
            {
              this.state.content.map(
                section =>
                  (<Project
                    key={section.id}
                    content={section}
                    skillAreaColors={skillAreaColors}
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
        <SocialLinksBar>
          {
            this.state.socialLinks.map(item =>
              <SocialLink href={item.link}>{item.name}</SocialLink>)
          }
        </SocialLinksBar>
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

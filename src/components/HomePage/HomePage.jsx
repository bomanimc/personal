/* eslint no-confusing-arrow: 0 */
/* eslint array-callback-return: 0 */

import React from 'react';
import styled from 'styled-components';
import shortid from 'shortid';
import Gallery from '../partials/LightboxGallery';

const skillAreaColors = {
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
  margin-left: ${props => props.marginLeft ? props.marginLeft : '0px'};
`;

const SplashSection = Section.extend`
  transition: background .5s ease;
  margin: 0px;
`;

const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.horizontalCenter ? 'center' : 'normal'};
  justify-content: ${props => props.verticalCenter ? 'center' : 'normal'};
  height: ${props => props.containerHeight ? props.containerHeight : '100%'};
  margin-top: ${props => props.marginTop ? props.marginTop : '0px'};
`;

const Introduction = ContentContainer.extend`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin: 0px 20px;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 32px;
`;

const Name = styled.h1`
  font-family: Helvetica;
  color: black;
  font-size: 180px;
  line-height: 0.80;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Body = styled.p`
  font-size: 15px;
  font-weight: lighter;
`;

const SkillArea = styled.h3`
  color: rgba(0, 0, 0, 0.3);
  font-family: Helvetica;
  font-size: 64px;

  &:hover {
    color: #000000;
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: nowrap;
  max-width: 100%;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
}
`;

const ProjectContent = styled.div`
  flex-basis: 500px;
`;

const ProjectImage = styled.img`
  height: 250px;
  width: 400px;
  flex-basis: 400px;
  min-height: 250px;
  margin-right: 10px;
  border: 1px solid white;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    height: auto;
    min-height: auto;
    min-width: auto;
  }
`;

const ProjectTitle = Title.extend`
  text-transform: uppercase;
  margin-bottom: 0px;
`;

const ProjectDetail = Body.extend`
  margin: 5px 0px 15px 0px;
`;

const ProjectTag = styled.span`
  font-style: italic;
  background-color: ${props => props.color};
  padding: 0px 4px;
  margin-right: ${props => props.marginRight ? props.marginRight : '4px'};
`;

const Divider = styled.span`
  margin-left: ${props => props.spacing};
  margin-right: ${props => props.spacing};
`;

const ProjectRole = Body.extend`
  margin-top: 20px;
`;

const features = {
  dialup: {
    name: 'DIAL UP',
    body: 'CREATIVE COLLECTIVE THAT CREATES MUSIC, VIDEOS, MAGAZINES, AND TECHNOLOGY. WEBSITE FEATURED ON BRUTALIST WEBSITES.',
    roles: 'ROLES: WEBSITE DESIGN/DEVELOMENT, DJ, WRITER.',
  },
  urgentaction: {
    name: 'URGENT ACTION',
    body: 'REDESIGN OF AMNESTY INTERNATIONAL’S URGENT SERVICE. REIMPLEMENT IN REACT NATIVE.',
    roles: 'ROLES: UI/UX DESIGN, SOFTWARE DEVELOPMENT.',
  },
  shrumenlumen: {
    name: 'SHRUMEN LUMEN',
    body: 'INTERACTIVE ART INSTALLATION MADE UP OF FIVE GLOWING MUSHROOMS THAT REACT TO THE PRESENCE OF PEOPLE.',
    roles: 'ROLES: LEAD SOFTWARE DEVELOPER (FIRST SHOWINGS), HARDWARE-SOFTWARE INTEGRATION.',
  },
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
        and Meet D3 Festival in Dubai. On diplay at the Smithsonian Museum
        in 2018.`,
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

    this.state = {
      content,
      showGallery: false,
      currentMedia: [],
      feature: { name: '', body: '', roles: '' },
      featureShow: false,
    };

    this.openGallery = this.openGallery.bind(this);
  }

  openGallery(images) {
    this.setState({
      showGallery: true,
      currentMedia: images,
    });
  }

  revealFeature(e) {
    document.getElementById('splash').style.backgroundColor = e.target.getAttribute('data-color');
    this.setState({
      feature: features[e.target.getAttribute('data-feature')],
      featureShow: true,
    });
  }

  render() {
    return (
      <div>
        <SplashSection
          bgColor="white"
          textColor="white"
          sectionHeight="100vh"
          minHeight="600px"
          id="splash"
        >
          <Introduction horizontalCenter verticalCenter>
            <Name>BOMANI</Name>
            <SkillArea
              data-color={skillAreaColors.software}
              data-feature="dialup"
              onMouseEnter={e => this.revealFeature(e)}
            >
              SOFTWARE
            </SkillArea>
            <SkillArea
              data-color={skillAreaColors.design}
              data-feature="urgentaction"
              onMouseEnter={e => this.revealFeature(e)}
            >
              DESIGN
            </SkillArea>
            <SkillArea
              data-color={skillAreaColors.art}
              data-feature="shrumenlumen"
              onMouseEnter={e => this.revealFeature(e)}
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
          marginLeft="20px"
        >
          <ContentContainer horizontalCenter containerHeight="auto" marginTop="24px">
            <Title>Projects</Title>
            {
              this.state.content.map(
                section =>
                  (<ProjectSection
                    key={section.id}
                    content={section}
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
          <Introduction horizontalCenter verticalCenter>
            <Body>
              During the day, Bomani works on news products at Facebok.
              He has previously interned at IDEO, Grubhub, and Boeing. See his
              full resume <Link href="/resume">here</Link>.
            </Body>
          </Introduction>
        </Section>
        <Gallery
          isGalleryOpen={this.state.showGallery}
          onCloseHandler={() => this.setState({ showGallery: false })}
          media={this.state.currentMedia}
        />
      </div>
    );
  }
}

const ProjectSection = (section) => {
  const tagsContent = [];
  section.content.tags.map((tag, idx) => {
    if (tag !== 'featured') {
      const newTag = idx === (section.content.tags.length - 1)
        ? <ProjectTag color={skillAreaColors[tag]} marginRight="0px">{tag}</ProjectTag>
        : <ProjectTag color={skillAreaColors[tag]}>{tag}</ProjectTag>;
      tagsContent.push(newTag);
    }
  });

  return (
    <ProjectContainer>
      <ProjectImage order={1} src={section.content.media} />
      <ProjectContent order={2}>
        <ProjectTitle>{section.content.title}</ProjectTitle>
        <ProjectDetail>
          {tagsContent}
          <Divider spacing="4px">|</Divider>
          <Link onClick={() => section.openGallery(section.content.images)}>
            View
          </Link>
        </ProjectDetail>
        <Body>{section.content.body}</Body>
        <ProjectRole>Roles: {section.content.roles}</ProjectRole>
      </ProjectContent>
    </ProjectContainer>
  );
};

export default HomePage;

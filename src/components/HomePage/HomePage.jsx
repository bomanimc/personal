/* eslint no-confusing-arrow: 0 */
/* eslint array-callback-return: 0 */

import React from 'react';
import styled from 'styled-components';
import shortid from 'shortid';
import Gallery from '../partials/LightboxGallery';

const Section = styled.section`
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
  height: ${props => props.sectionHeight};
  min-height: ${props => props.minHeight};
  display: flex;
  flex-direction: column;
  align-items: ${props => props.align};
  justify-content: space-between;
  margin: 0px 20px;
`;

const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.horizontalCenter ? 'center' : 'normal'};
  justify-content: ${props => props.verticalCenter ? 'center' : 'normal'};
  height: ${props => props.containerHeight ? props.containerHeight : '100%'};
`;

const Introduction = ContentContainer.extend`
  width: 30%;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0px 20px;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;

const Name = Title.extend`
  margin-bottom: 20px;
`;

const Body = styled.p`
  font-size: 15px;
  font-weight: lighter;
`;

const Diagram = styled.img`
  height: 200px;
  width: 200px;
  margin: 30px;
`;


const Filter = Body.extend`
  margin: 10px 0px 40px 0px;
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
`;

const ProjectDetail = Body.extend`
  margin: 5px 0px 15px 0px;
`;

const ProjectTags = styled.span`
  font-style: italic;
`;

const ProjectRole = Body.extend`
  margin-top: 20px;
`;

class HomePage extends React.Component {
  constructor() {
    super();

    const content = [
      {
        id: shortid.generate(),
        title: 'Shrumen Lumen',
        tags: ['Software', 'Art'],
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
        tags: ['Software', 'Design'],
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
        tags: ['Software', 'Art'],
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
        <Section
          bgColor="black"
          textColor="white"
          align="center"
          sectionHeight="100vh"
          minHeight="600px"
        >
          <Introduction horizontalCenter verticalCenter>
            <Name>Bomani McClendon</Name>
            <Body>
              Bomani McClendon is a software engineer, designer, and
              freelancer based in New York City.
            </Body>
            <Body>
              His interests lay at the intersection of software, design, and
              art.
            </Body>
            <Diagram src="/img/diagram.png" />
            <Body>
              See his work below.
            </Body>
          </Introduction>
        </Section>
        <Section
          bgColor="black"
          textColor="white"
          align="normal"
          sectionHeight="auto"
          minHeight={`${(this.state.content.length * 250) + 200}px`}
        >
          <ContentContainer horizontalCenter containerHeight="auto">
            <Title>Projects</Title>
            <Filter>
              <Link href="#">Featured</Link> | <Link href="#">Software</Link> •
              <Link href="#">Design</Link> • <Link href="#">Art</Link>
            </Filter>
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
  let tagString = '';
  section.content.tags.map((tag, idx) => {
    tagString += tag;
    if (idx !== (section.content.tags.length - 1)) {
      tagString += ' • ';
    }
  });

  return (
    <ProjectContainer>
      <ProjectImage order={1} src={section.content.media} />
      <ProjectContent order={2}>
        <ProjectTitle>{section.content.title}</ProjectTitle>
        <ProjectDetail>
          <ProjectTags>{tagString}</ProjectTags> |
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

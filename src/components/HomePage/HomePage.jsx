import React from 'react';
import styled, { keyframes } from 'styled-components';
import Gallery from '../partials/Gallery';
import Shape from './Shape';

let Section = styled.section`
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

let Tagline = styled.p`
	position: absolute;
	top: 60vh;
	left: 50vw;
	transform: translateX(-50%);
	background: #000;
	margin: 0 auto;
	padding: 5px;
`;

let ThreeArea = styled.section`
	color: white;
	width: 100%;
	min-height: 100vh;
	width: 15%;
`;

let ContentContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: ${props => props.horizontalCenter ? "center" : "normal"};
	justify-content: ${props => props.verticalCenter ? "center" : "normal"};
	height: ${props => props.containerHeight ? props.containerHeight : "100%"};
`;

let Introduction = ContentContainer.extend`
	width: 30%;
	text-align: center;

	@media (max-width: 768px) {
		margin: 0px 20px;
		width: 100%;
	}
`;

let Title = styled.h1`
	font-size: 30px;
	font-weight: bold;
`;

let Name = Title.extend`
	margin-bottom: 20px;
`;

let Body = styled.p`
	font-size: 15px;
	font-weight: lighter;
`;

let Diagram = styled.img`
	height: 200px;
	width: 200px;
	margin: 30px;
`;

let Banner = styled.div`
	width: 100%;
	height: 40px;
	background-color: blue;
`;

let Filter = Body.extend`
	margin: 10px 0px 40px 0px;
`;

let Link = styled.a`
	text-decoration: none;
	color: white;

	&:hover {
		text-decoration: underline;
	}
`;

let ProjectContainer = styled.div`
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

let ProjectContent = styled.div`
	flex-basis: 500px;
`;

let ProjectImage = styled.img`
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

let ProjectTitle = Title.extend`
	text-transform: uppercase;
`;

let ProjectDetail = Body.extend`
	margin: 5px 0px 15px 0px;
`;

let ProjectTags = styled.span`
	font-style: italic;
`;

let ProjectRole = Body.extend`
	margin-top: 20px;
`;

class HomePage extends React.Component {
	constructor() {
		super();

		 const content = [
		    {
		      title: `Shrumen Lumen`,
					tags: ['Software', 'Art'],
		      body: `Interactive art installation made up of five glowing mushrooms
						that react to the presence of people. Presented at Burning Man 2016
						and Meet D3 Festival in Dubai. On diplay at the Smithsonian Museum
						in 2018.`,
		      roles: `Lead Software Developer (First Showings),
						Hardware-Software Integration.`,
		      media: `img/shrumenlumen/shrumenlumen_main.png`,
		      bgColor: `#919FB4`,
		      textColor: `#FFF`
		    },
		    {
		      title: `Dial Up`,
					tags: ['Software', 'Design'],
		      body: `Creative collective that creates music, videos, magazines, and
						technology. Website featured on Brutalist Websites.`,
		      roles: `Website Design/Develoment, DJ, Writer.`,
		      media: `img/dialup/dialup_main.png`,
		      bgColor: `#FFF`,
		      textColor: `#FF433E`
		    },
				{
		      title: `NegativeReel`,
					tags: ['Software', 'Art'],
		      body: `Projection mapping installation that displays negative thoughts
						 people have about themselves as an expression of vulnerability.`,
		      roles: `Creative Lead, Projection Mapping, Software Development.`,
		      media: `img/negativereel/negativereel_main.png`,
		      bgColor: `#FFF`,
		      textColor: `#FF433E`
		    }
		  ];

			this.state = {
				content: content,
				showGallery: false,
			};

			this.openGallery = this.openGallery.bind(this)
	}

	openGallery(e) {
		console.log("GALLERY OPEN");
		this.setState({
			showGallery: true,
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
					minHeight="600px">
					<Introduction horizontalCenter={true} verticalCenter={true}>
						<Name>Bomani McClendon</Name>
						<Body>
							Bomani McClendon is a software engineer, designer, and freelancer based in New York City.
						</Body>
						<Body>
							His interests lay at the intersection of software, design, and art.
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
					align ="normal"
					sectionHeight="auto"
					minHeight={`${this.state.content.length*250 + 200}px`}>
					<ContentContainer horizontalCenter={true} containerHeight="auto">
						<Title>Projects</Title>
						<Filter>
							<Link href='#'>Featured</Link> | <Link href='#'>Software</Link> • <Link href='#'>Design</Link> • <Link href='#'>Art</Link>
						</Filter>
						{
							this.state.content.map(
								(section, idx) =>
									<ProjectSection
										key={idx}
										content={section}
										openGallery={this.openGallery}
									/>
							)
						}
					</ContentContainer>
				</Section>
				<Section
					bgColor="black"
					textColor="white"
					align="center"
					sectionHeight="100vh"
					minHeight="600px">
					<Introduction horizontalCenter={true} verticalCenter={true}>
						<Body>
							During the day, Bomani works on news products at Facebok.
							He has previously interned at IDEO, Grubhub, and Boeing. See his
							full resume <Link>here</Link>.
						</Body>
					</Introduction>
				</Section>
				{this.state.showGallery && <Gallery />}
			</div>
		);
	}
}

class Marquee extends React.Component {
	render() {
		return (
			<Banner>

			</Banner>
		);
	}
}

class ProjectSection extends React.Component {
	render() {
		let tagString = '';
		this.props.content.tags.map((tag, idx) => {
			tagString += tag;
			if (idx !== (this.props.content.tags.length - 1)) {
				tagString += ' • ';
			}
		});

		return (
			<ProjectContainer>
				<ProjectImage order={1} src={this.props.content.media} />
				<ProjectContent order={2}>
					<ProjectTitle>{this.props.content.title}</ProjectTitle>
					<ProjectDetail>
						<ProjectTags>{tagString}</ProjectTags> | <Link onClick={this.props.openGallery}>View</Link>
					</ProjectDetail>
					<Body>{this.props.content.body}</Body>
					<ProjectRole>Roles: {this.props.content.roles}</ProjectRole>
				</ProjectContent>
			</ProjectContainer>
		);
	}
}

export default HomePage;

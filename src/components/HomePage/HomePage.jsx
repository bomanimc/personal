import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled, { keyframes } from 'styled-components';

// import AsciiName from './ascii_name';
import Shape from './Shape';

let Section = styled.section`
	background-color: ${props => props.bgColor};
	color: ${props => props.textColor};
	min-height: 100vh;
	border-top: 1px solid white;
	display: flex;
	flex-direction: column;
  align-items: ${props => props.align};
  justify-content: space-between;
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

let Introduction = styled.section`
	display: flex;
	flex-direction: column;
	align-content: space-between;
	height: 100vh;
	width: 30%;
	text-align: center;
	margin: 0 auto;
`;

let Title = styled.h1`
	font-size: 30px;
	font-weight: bold;
`;

let Body = styled.p`
	margin-top: 20px;
	font-size: 15px;
	font-weight: lighter;
`;

let Banner = styled.div`
	width: 100%;
	height: 40px;
	background-color: blue;
`;

let Role = styled.p`
	margin-top: 20px;
	font-size: 20px;
`;

let Image = styled.img`
	width: 100%;
`;

class HomePage extends React.Component {
	constructor() {
		super();

		 const content = [
		    {
		      title: `Shrumen Lumen`,
		      body: `Interactive art installation made up of five glowing mushrooms
						that react to the presence of people. Presented at Burning Man 2016
						and Meet D3 Festival in Dubai. On diplay at the Smithsonian Museum
						in 2018.`,
		      roles: `Lead Software Developer (First Showings),
						Hardware-Software Integration.`,
		      media: `img/shrumenlumen/Shrumen-Playa-day-50.jpg`,
		      bgColor: `#919FB4`,
		      textColor: `#FFF`
		    },
		    {
		      title: `Dial Up`,
		      body: `Creative collective that creates music, videos, magazines, and
						technology. Website featured on Brutalist Websites.`,
		      roles: `Website Design/Develoment, DJ, Writer.`,
		      media: `img/dialup/dialupscreen.png`,
		      bgColor: `#FFF`,
		      textColor: `#FF433E`
		    }
		  ];
			console.log("REACT CONSTRUCTOR")
			this.leftShape = new Shape("left");
			this.rightShape = new Shape("right");

			this.state = {
				content: content,
			};
	}
  render() {
		console.log("RENDER")
		return (
			<div>
				<Section bgColor="black" textColor="white" align="center">
					{/* <ThreeArea id="left"></ThreeArea> */}
					<Introduction>
						<Title>Bomani McClendon</Title>
						<Body>
							Bomani McClendon is a software engineer, designer, and freelancer based in New York City.
						</Body>
						<Body>
							His interests lay at the intersection of software, design, and art.
						</Body>
						<Body>
							See his work below.
						</Body>
					</Introduction>
					{/* <ThreeArea id="right"></ThreeArea> */}
				</Section>
				<Section bgColor="black" textColor="white" align ="normal">
					<Marquee />
				</Section>
				{/* {
					this.state.content.map(
						(section, idx) => <ProjectSection key={idx} content={section}/>
					)
				} */}
			</div>
		);
	}

	componentDidMount() {
		this.leftShape.init();
		this.leftShape.animate();
		this.rightShape.init();
		this.rightShape.animate();
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
		return (
			<Section
				bgColor={this.props.content.bgColor}
				textColor={this.props.content.textColor}
			>
				<Grid fluid>
					<Row>
						<Col lg={4}>
							<Title>{this.props.content.title.toUpperCase()}</Title>
							<Body>{this.props.content.body}</Body>
							<Role><b>Roles:</b> {this.props.content.roles}</Role>
						</Col>
						<Col lgOffset={1} lg={7}>
							<Image src={this.props.content.media} />
						</Col>
					</Row>
				</Grid>
			</Section>
		);
	}
}

export default HomePage;

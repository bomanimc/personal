import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

let Section = styled.section`
	background-color: ${props => props.bgColor};
	color: ${props => props.textColor};
	min-height: 100vh;
	border-top: 1px solid white;
	display: flex;
  align-items: center;
  justify-content: center;
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

let Title = styled.h1`
	font-size: 75px;
	font-weight: bold;
`;

let Body = styled.p`
	margin-top: 20px;
	font-size: 20px;
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

			this.state = {
				content: content,
			};
	}
  render() {
		return (
			<div>
				<Section bgColor="black" textColor="white">
					<div id="three"></div>
					<Tagline>software. design. art.</Tagline>
				</Section>
				{
					this.state.content.map(
						(section, idx) => <ProjectSection key={idx} content={section}/>
					)
				}
			</div>
		);
	}

	componentDidMount() {
		window.initThree();
		window.animateThree();
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

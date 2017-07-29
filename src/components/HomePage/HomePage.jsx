import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

let Section = styled.section`
	background: ${props => props.bgColor};
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
  render() {
		return (
			<div>
				<Section
					bgColor="black"
					textColor="white"
				>
					<div id="three"></div>
					<Tagline>software. design. art.</Tagline>
				</Section>
				<Section
					bgColor="#919FB4"
					textColor="white"
				>
					<Grid fluid>
						<Row>
							<Col lg={4}>
								<Title>SHRUMEN LUMEN</Title>
								<Body>
									Interactive art installation made up of five glowing mushrooms
									that react to the presence of people. Presented at Burning Man
									 ’16 and Meet D3 Festival in Dubai. On diplay at the
									 Smithsonian Museum in 2018.
								</Body>
								<Role>
									Roles: Lead Software Developer (First Showings),
									Hardware-Software Integration.
								</Role>
							</Col>
							<Col lgOffset={1} lg={7}>
								<Image src="img/shrumenlumen/Shrumen-Playa-day-50.jpg" />
							</Col>
						</Row>
					</Grid>
				</Section>
				<Section
					bgColor="white"
					textColor="#FF433E"
				>
					<Grid fluid>
						<Row>
							<Col lg={4}>
								<Title>DIAL UP</Title>
								<Body>
									Creative collective that creates music, videos, magazines, and
									 technology. Website featured on Brutalist Websites.
								</Body>
								<Role>
									Roles: Website Design/Develoment, DJ, Writer.
								</Role>
							</Col>
							<Col lgOffset={1} lg={7}>
								<Image src="img/dialup/dialupscreen.png" />
							</Col>
						</Row>
					</Grid>
				</Section>
			</div>
		);
	}

	componentDidMount() {
		window.initThree();
		window.animateThree();
	}
}


export default HomePage;

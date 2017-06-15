import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const Section = styled.section`
	height: 100vh;
	width: 100%;
`;

const SplashSection = Section.extend`
	align-items: flex-start;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	transition: background .5s ease;
`;

const AboutSection = Section.extend`
	align-items: center;
	background-color: black;
	display: flex;
	justify-content: center;
`;

const Name = styled.h1`
	font-family: Helvetica;
	font-size: 180px;
	line-height: 0.80;
	margin-top: 30vh;
`;

const SkillArea = styled.h3`
	color: rgba(0, 0, 0, 0.3);
	font-family: Helvetica;
	font-size: 64px;

	&:hover {
		color: #000000;
	}
`;

const Header = styled.h5`
	color: #FFFFFF;
	font-family: Courier;
	font-size: 20px;
	margin-top: 30vh;
`;

const FeaturedName = styled.h3`
	color: #FFFFFF;
	font-family: Courier;
	font-size: 64px;
`;

const FeaturedText = styled.p`
	color: #FFFFFF;
	font-family: Courier;
	font-size: 20px;
	margin: 10px 0px;
`;

const AllProjects = styled.a`
	color: #FFFFFF;
	font-family: Courier;
	font-size: 20px;
	margin: 10px 0px;

	&:visted {
		color: #FFFFFF;
	}
`;

const BodyText = styled.p`
	color: white;
	font-family: Courier;
	font-size: 30px;
`;

const AboutText = BodyText.extend`
	width: 40%;
	margin-left: 10%;
`;

const rotate360 = props => keyframes`
	from {
		transform: rotate(${props.deg}deg);
	}

	to {
		transform: rotate(${props.deg + 360}deg);
	}
`;

const Circle = styled.h5`
	position: relative;
	display: inline-block;

	:nth-child(1) {
	    left: 0%;
	}

	:nth-child(2) {
	    left: 33.3%;
	}

	:nth-child(3) {
	    left: 66.6%;
	}

	:nth-child(4) {
	    left: 100%;
	}
`;

const Letter = styled.span`
	animation: ${rotate360} 10s linear infinite;
	font-family: Courier;
	font-size: 20px;
	height: 80px;
	position: absolute;
	transform-origin: bottom center;
	width: 20px;
`;

const SocialMediaLink = styled.a`
	color: black;
	text-decoration: none;

	&:visted {
		color: black;
	}
`;

let features = {
	dialup: {
		name: "DIAL UP",
		body: "CREATIVE COLLECTIVE THAT CREATES MUSIC, VIDEOS, MAGAZINES, AND TECHNOLOGY. WEBSITE FEATURED ON BRUTALIST WEBSITES.",
		roles: "ROLES: WEBSITE DESIGN/DEVELOMENT, DJ, WRITER."
	},
	urgentaction: {
		name: "URGENT ACTION",
		body: "REDESIGN OF AMNESTY INTERNATIONAL’S URGENT SERVICE. REIMPLEMENT IN REACT NATIVE.",
		roles: "ROLES: UI/UX DESIGN, SOFTWARE DEVELOPMENT."
	},
	shrumenlumen: {
		name: "SHRUMEN LUMEN",
		body: "INTERACTIVE ART INSTALLATION MADE UP OF FIVE GLOWING MUSHROOMS THAT REACT TO THE PRESENCE OF PEOPLE.",
		roles: "ROLES: LEAD SOFTWARE DEVELOPER (FIRST SHOWINGS), HARDWARE-SOFTWARE INTEGRATION."
	}
}
class HomePage extends React.Component {
	constructor(props) {
        super(props);
		this.state = {
			feature: {nane: "", body: "", roles: ""},
			featureShow: false
		}
    }
	revealFeature(e) {
		document.getElementById("splash").style.backgroundColor = e.target.getAttribute("data-color");
		this.setState({
			feature: features[e.target.getAttribute("data-feature")],
			featureShow: true
		})
	}
    render() {
        return (
        	<div>
	            <SplashSection id="splash">
					<Grid fluid style={{margin: "0px 0px"}}>
						<Row>
							<Col xs={6}>
	                    		<Name>BOMANI</Name>
							</Col>
						</Row>
						<Row>
							<Col xs={4}>
	                    		<SkillArea
									data-color="#f1c40f"
									data-feature="dialup"
									onMouseEnter={this.revealFeature.bind(this)}>
									SOFTWARE
								</SkillArea>
							</Col>
						</Row>
						<Row>
							<Col xs={4}>
	                    		<SkillArea
									data-color="#3498db"
									data-feature="urgentaction"
									onMouseEnter={this.revealFeature.bind(this)}>
									DESIGN
								</SkillArea>
							</Col>
						</Row>
						<Row>
							<Col xs={4}>
	                    		<SkillArea
									data-color="#e74c3c"
									data-feature="shrumenlumen"
									onMouseEnter={this.revealFeature.bind(this)}>
									ART
								</SkillArea>
							</Col>
						</Row>
					</Grid>
					<Grid fluid style={{margin: "0px 0px 0px 20px", visibility: this.state.featureShow ? "block" : "none"}}>
						<Row>
							<Col xs={1} xsOffset={1}>
	                    		<Header>FEATURED</Header>
							</Col>
						</Row>
						<Row>
							<Col xs={9} xsOffset={1}>
	                    		<FeaturedName>{this.state.feature.name}</FeaturedName>
							</Col>
						</Row>
						<Row>
							<Col xs={9} xsOffset={1}>
	                    		<FeaturedText>{this.state.feature.body}</FeaturedText>
							</Col>
						</Row>
						<Row>
							<Col xs={9} xsOffset={1}>
	                    		<FeaturedText>{this.state.feature.roles}</FeaturedText>
							</Col>
						</Row>
						<Row>
							<Col xs={9} xsOffset={1}>
	                    		<AllProjects href="/projects">ALL PROJECTS</AllProjects>
							</Col>
						</Row>
					</Grid>
                </SplashSection>
				<AboutSection>
					<img id='scan' src="http://vgl.ict.usc.edu/Research/DigitalEmily/webImages/Slide40_SINGLE.png"/>
					<AboutText>
						My name is Bomani McClendon. I’m a software developer, researcher, and designer
						based in Nashville, TN. My interests include instructional design and music.
						I write software tutorials and speak about design and technology.
					</AboutText>
				</AboutSection>
				<div>
					<Grid fluid>
						<Row>
							<Col xs={8} xsOffset={2}>
								<CircleType text="MEDIUM MEDIUM MEDIUM " url="https://medium.com/@bomani"/>
								<CircleType text="GITHUB GITHUB GITHUB " url="https://github.com/bomanimc"/>
								<CircleType text="LINKEDIN LINKEDIN LINKEDIN " url="https://www.linkedin.com/in/bomanimc/"/>
								<CircleType text="TWITTER TWITTER TWITTER " url="https://twitter.com/bxmani"/>
							</Col>
						</Row>
					</Grid>
				</div>
            </div>
        );
    }
}

class CircleType extends React.Component {
	constructor(props) {
        super(props);
    }
	charify(input) {
		let splitString = input.split("");
		let splitElements = [];
		for(let i = 0; i < splitString.length; i++) {
			splitElements.push(
				<Letter deg={Math.ceil((360/splitString.length)*i)}
					key={i}>
					<SocialMediaLink href={this.props.url}>{splitString[i]}</SocialMediaLink>
				</Letter>
			);
		}

		return splitElements;
	}
    render() {
        return (
			<Circle>
				{this.charify(this.props.text)}
			</Circle>
		)
    }
}

export default HomePage;

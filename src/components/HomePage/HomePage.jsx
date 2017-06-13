import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const Section = styled.section`
	height: 100vh;
	width: 100%;
`;

const SplashSection = Section.extend`
	transition: background .5s ease;
`;

const AboutSection = Section.extend`
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Name = styled.h1`
	font-family: Helvetica;
	font-size: 180px;
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

const BodyText = styled.p`
	color: white;
	font-family: Courier;
	font-size: 30px;
`;

const AboutText = BodyText.extend`
	width: 40%;
	margin-left: 10%;
`;

const Circle = styled.h5`
	position: relative;
	display: inline-block;

	> span {
	    font-family: Courier;
	    font-size: 20px;
	    height: 80px;
	    position: absolute;
	    transform-origin: bottom center;
	    width: 20px;
	}

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

const SocialMediaLink = styled.a`
	color: black;
	text-decoration: none;

	&:visted {
		color: black;
	}
`;

class HomePage extends React.Component {
	constructor(props) {
        super(props);
    }
	revealFeature(e) {
		document.getElementById("splash").style.backgroundColor = e.target.getAttribute("data-color");
	}
    render() {
        return (
        	<div>
	            <SplashSection id="splash">
					<Grid fluid>
						<Row>
							<Col xs={6}>
	                    		<Name>BOMANI</Name>
							</Col>
						</Row>
						<Row>
							<Col xs={4}>
	                    		<SkillArea data-color="#f1c40f" onMouseEnter={this.revealFeature}>SOFTWARE</SkillArea>
							</Col>
						</Row>
						<Row>
							<Col xs={4}>
	                    		<SkillArea data-color="#3498db" onMouseEnter={this.revealFeature}>DESIGN</SkillArea>
							</Col>
						</Row>
						<Row>
							<Col xs={4}>
	                    		<SkillArea data-color="#e74c3c" onMouseEnter={this.revealFeature}>ART</SkillArea>
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
				<span
					key={i}
					style={{
						transform: `rotate(${Math.ceil((360/splitString.length)*i)}deg)`
					}}>
					<SocialMediaLink href={this.props.url}>{splitString[i]}</SocialMediaLink>
				</span>
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

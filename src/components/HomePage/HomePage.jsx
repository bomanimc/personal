import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

let Section = styled.section`
	min-height: 100vh;
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

class HomePage extends React.Component {
  render() {
		return (
			<div>
				<Section>
					<div id="three"></div>
					<Tagline>software. design. art.</Tagline>
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

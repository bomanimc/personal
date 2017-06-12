import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import styles from './styles/HomePage.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class HomePage extends React.Component {
	constructor(props) {
        super(props);
    }
    render() {
        return (
        	<div>
	            <section className={cx('section-full')}>
					<Grid fluid>
						<Row>
							<Col xs={6}>
	                    		<h1 className={cx('splash-text')} id={cx('name')}>BOMANI</h1>
							</Col>
						</Row>
						<Row>
							<Col xs={4}>
	                    		<h3 className={classNames(cx('splash-text'), cx('skill-area'))}>SOFTWARE</h3>
							</Col>
						</Row>
						<Row>
							<Col xs={4}>
	                    		<h3 className={classNames(cx('splash-text'), cx('skill-area'))}>DESIGN</h3>
							</Col>
						</Row>
						<Row>
							<Col xs={4}>
	                    		<h3 className={classNames(cx('splash-text'), cx('skill-area'))}>ART</h3>
							</Col>
						</Row>
					</Grid>
                </section>
				<section className={cx('section-full')} id={cx('about')}>
					<img id={cx('scan')} src="http://vgl.ict.usc.edu/Research/DigitalEmily/webImages/Slide40_SINGLE.png"/>
					<p className={cx('body-text')} id={cx('about-text')}>
						My name is Bomani McClendon. I’m a software developer, researcher, and designer
						based in Nashville, TN. My interests include instructional design and music.
						I write software tutorials and speak about design and technology.
					</p>
				</section>
				<section className={cx('footer')}>
					<Grid fluid>
						<Row>
							<Col xs={8} xsOffset={2} className={cx('circle-container')}>
								<CircleType text="MEDIUM MEDIUM MEDIUM "/>
								<CircleType text="GITHUB GITHUB GITHUB "/>
								<CircleType text="LINKEDIN LINKEDIN LINKEDIN "/>
								<CircleType text="TWITTER TWITTER TWITTER "/>
							</Col>
						</Row>
					</Grid>
				</section>
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
					className={cx("char" + (i+1))}
					style={{
						transform: `rotate(${Math.ceil((360/splitString.length)*i)}deg)`
					}}>
					{splitString[i]}
				</span>
			);
		}

		return splitElements;
	}
    render() {
        return (
			<h5 className={cx('circle')}>
				{this.charify(this.props.text)}
			</h5>
		)
    }
}

export default HomePage;

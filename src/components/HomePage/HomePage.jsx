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
				<section className={cx('section-full')} id={cx('about')}></section>
				<section className={cx('footer')}></section>
            </div>
        );
    }
}

export default HomePage;

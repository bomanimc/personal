import React from 'react';

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
	            BOMANI
            </div>
        );
    }
}

export default HomePage;

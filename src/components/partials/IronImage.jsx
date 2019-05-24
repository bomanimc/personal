/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IronImageContainer = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  overflow: hidden;
`;

const IronImagePreload = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-size: cover;
`;

const IronImageLoaded = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-size: cover;

  opacity: 0;

  transition: opacity 1s ease;
`;

class IronImage extends Component {
  constructor(props) {
    super(props);
    this.ironImageHd = null;
  }

  componentDidMount() {
    const hdLoaderImg = new Image();
    hdLoaderImg.src = this.props.srcLoaded;

    hdLoaderImg.onload = () => {
      this.ironImageHd.style.backgroundImage = `url('${this.props.srcLoaded}')`;
      this.ironImageHd.style.opacity = 1;
    };
  }

  render() {
    return (
      <IronImageContainer>
        <IronImageLoaded
          ref={imageLoadedElem => this.ironImageHd = imageLoadedElem}
        />
        <IronImagePreload
          style={{ backgroundImage: `url('${this.props.srcPreload}')` }}
        />
      </IronImageContainer>
    );
  }

}

IronImage.propTypes = {
  srcPreload: PropTypes.string.isRequired,
  srcLoaded: PropTypes.string.isRequired,
};

export default IronImage;

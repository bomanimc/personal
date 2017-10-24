import React from 'react';
import styled, { keyframes } from 'styled-components';
import Lightbox from 'react-images';

class LightboxGallery extends React.Component {
	constructor() {
		super();

    this.state = {
      isGalleryOpen: false,
      currentImage: 0,
    };

    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  gotoImage(index) {
		this.setState({
			currentImage: index,
		});
	}

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        currentImage: 0,
      });
    }
  }

  render() {
    return(
      <Lightbox
        currentImage={this.state.currentImage}
        images={this.props.media}
        isOpen={this.props.isGalleryOpen}
        onClose={this.props.onCloseHandler}
        onClickNext={this.gotoNext}
				onClickPrev={this.gotoPrevious}
        onClickThumbnail={this.gotoImage}
        showThumbnails={true}
      />
    );
  }
}

export default LightboxGallery;

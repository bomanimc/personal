import React from 'react';
import PropTypes from 'prop-types';
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

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        currentImage: 0,
      });
    }
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

  render() {
    return (
      <Lightbox
        currentImage={this.state.currentImage}
        images={this.props.media}
        isOpen={this.props.isGalleryOpen}
        onClose={this.props.onCloseHandler}
        onClickNext={this.gotoNext}
        onClickPrev={this.gotoPrevious}
        onClickThumbnail={this.gotoImage}
        showThumbnails
      />
    );
  }
}

LightboxGallery.propTypes = {
  media: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
  })).isRequired,
  isGalleryOpen: PropTypes.bool.isRequired,
  onCloseHandler: PropTypes.func.isRequired,
};

export default LightboxGallery;

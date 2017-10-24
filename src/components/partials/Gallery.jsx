import React from 'react';
import styled, { keyframes } from 'styled-components';
import Lightbox from 'react-images';

let Background = styled.div`
  height: 50%;
  width: 50%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

let GalleryContainer = styled.div`
  ${'' /* height: 90%; */}
  max-width: 100%;
  max-height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  ${'' /* min-height: 600px; */}
`;

let MediaSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

let PrimaryMedia = styled.img`
  width: 100%;
  ${'' /* height: auto; */}
  border: 1px solid white;
`;

let ThumbnailSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

let Thumbnail = styled.img`
  height: 100%;
  margin: 0px 5px;
`;

class Gallery extends React.Component {
	constructor() {
		super();

    this.state = {
      isGalleryOpen: false,
      currentImage: 0,
      media: [
        {
          src: 'img/shrumenlumen/gallery/shrumen_sandy.jpg',
        },
        {
          src: 'img/shrumenlumen/gallery/shrumen_solo.JPG',
        },
      ],
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

  render() {
    return(
      <Lightbox
        currentImage={this.state.currentImage}
        images={this.state.media}
        isOpen={this.props.isGalleryOpen}
        onClose={this.props.onCloseHandler}
        onClickNext={this.gotoNext}
				onClickPrev={this.gotoPrevious}
        onClickThumbnail={this.gotoImage}
        showThumbnails={true}
      />
      // <Background>
      //   <GalleryContainer>
      //     <MediaSection>
      //       <PrimaryMedia src={this.state.media[0].path} />
      //     </MediaSection>
      //     <ThumbnailSection>
      //       {
      //         this.state.media.map(media_item =>
      //           <Thumbnail src={media_item.path} key={media_item.path}/>
      //         )
      //       }
      //     </ThumbnailSection>
      //   </GalleryContainer>
      // </Background>
    );
  }
}

export default Gallery;

import React from 'react';
import styled, { keyframes } from 'styled-components';

let Background = styled.div`
  height: 100%;
  width: 100%;
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
  height: 80vh;
  width: 80vh;
  display: flex;
  flex-direction: column;
`;

let MediaSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

let PrimaryMedia = styled.img`
  width: 100%;
`;

let ThumbnailSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

let Thumbnail = styled.img`
  height: 100%;
`;

class Gallery extends React.Component {
	constructor() {
		super();
    this.state = {
      media: [
        {
          path: 'img/shrumenlumen/gallery/shrumen_sandy.jpg',
          type: 'image',
        },
        {
          path: 'img/shrumenlumen/gallery/shrumen_solo.JPG',
          type: 'image',
        },
        {
          path: 'img/shrumenlumen/gallery/shrumen_pad.mp4',
          type: 'video',
        },
      ],
    }
  }

  render() {
    return(
      <Background>
        <GalleryContainer>
          <MediaSection>
            <PrimaryMedia src={this.state.media[0].path} />
          </MediaSection>
          <ThumbnailSection>
            {
              this.state.media.map(media_item =>
                <Thumbnail src={media_item.path} key={media_item.path}/>
              )
            }
          </ThumbnailSection>
        </GalleryContainer>
      </Background>
    );
  }
}

export default Gallery;

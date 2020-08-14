/* eslint-disable jsx-a11y/media-has-caption */
/* eslint array-callback-return: 0 */
/* eslint no-confusing-arrow: 0 */
/* eslint no-unused-vars: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Image, Video, Transformation } from 'cloudinary-react';
import { InternalLink } from '../commonComponents';

const ProjectContainer = styled.div`
  border: 1px solid #0000ff;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  justify-content: center;
  flex-wrap: nowrap;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 3px 3px 3px #0000ff;
  }

  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

const ProjectImage = styled(Image)`
  width: 100%;
  display: block;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    min-height: auto;
    min-width: auto;
  }
`;

const ProjectVideoContainer = styled.div`
  width: 100%;
  height: 315px;
  display: block;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    min-height: auto;
    min-width: auto;
  }
`;

const ProjectVideo = styled(Video)`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Project = ({ content }) => (
  <ProjectContainer id={content.id}>
    <InternalLink to={content.primaryLink}>
      {
        content.media.includes('video')
          ? (
            <ProjectVideoContainer aria-label={content.title}>
              <ProjectVideo
                cloudName="bomani-personal"
                publicId={content.media}
                autoPlay
                loop
                muted
                playsInline
                secure
              >
                <Transformation audioCodec="none" />
              </ProjectVideo>
            </ProjectVideoContainer>
          )
          : (
            <ProjectImage
              cloudName="bomani-personal"
              publicId={content.media}
              order={1}
              alt={content.title}
              secure
            >
              <Transformation height="630" quality="auto:best" crop="limit" fetchFormat="auto" />
            </ProjectImage>
          )
      }
    </InternalLink>
  </ProjectContainer>
);

Project.propTypes = {
  content: PropTypes.shape().isRequired,
};

export default Project;

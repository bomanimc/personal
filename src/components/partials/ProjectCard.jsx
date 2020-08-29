/* eslint-disable jsx-a11y/media-has-caption */
/* eslint array-callback-return: 0 */
/* eslint no-confusing-arrow: 0 */
/* eslint no-unused-vars: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Image, Video, Transformation } from 'cloudinary-react';
import { InternalLink, TextContent } from '../commonComponents';

const TRANSITION_TIME = '.75s';

const ProjectContainer = styled.div`
  border: 1px solid ${(p) => p.theme.color.blue};
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  justify-content: center;
  flex-wrap: nowrap;
  transition: box-shadow ${TRANSITION_TIME} ease;

  &:hover {
    box-shadow: 3px 3px 3px ${(p) => p.theme.color.blue};
  }

  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

const ProjectMediaContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: filter ${TRANSITION_TIME} ease;

  ${ProjectContainer}:hover & {
    filter: grayscale(100%);
  }
`;

const ProjectDetailsWrapper = styled.div`
  padding-top: 66.5%;
  overflow: hidden;
  position: relative;
  z-index: -1;
`;

const ProjectDetails = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  visibility: hidden;
  opacity: 0;
  transition: visibility ${TRANSITION_TIME}, opacity ${TRANSITION_TIME} ease;

  ${ProjectContainer}:hover & {
    visibility: visible;
    opacity: 1;
  }

  &::before {
    content: '';
    z-index: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${(p) => p.theme.color.blue};
    opacity: .75;
  }
`;

const ProjectDetailsText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  z-index: 1;

  h2 {
    text-transform: uppercase;
    font-size: 3rem;
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
      <ProjectDetailsWrapper>
        <ProjectMediaContainer>
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
        </ProjectMediaContainer>
        <ProjectDetails>
          <ProjectDetailsText>
            <h2>{content.title}</h2>
            <TextContent><ReactMarkdown source={content.body} /></TextContent>
          </ProjectDetailsText>
        </ProjectDetails>
      </ProjectDetailsWrapper>
    </InternalLink>
  </ProjectContainer>
);

Project.propTypes = {
  content: PropTypes.shape().isRequired,
};

export default Project;

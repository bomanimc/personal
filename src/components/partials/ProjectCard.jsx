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
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  justify-content: center;
  flex-wrap: nowrap;
  transition: box-shadow ${TRANSITION_TIME} ease;
  border: ${(p) => p.hasBorder ? '2px solid #ffffff30' : 'none'};

  @media (hover: hover) {
    &:hover {
      box-shadow: 3px 3px 3px ${(p) => p.theme.color.blue};
    }
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
  color: black;
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

  @media (hover: hover) {
    ${ProjectContainer}:hover & {
      visibility: visible;
      opacity: 1;
    }
  }

  &::before {
    content: '';
    z-index: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: black;
    opacity: .75;
  }
`;

const ProjectDetailsText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  z-index: 1;
  pointer-events: none;

  h2 {
    text-transform: uppercase;
    font-size: 3rem;
    margin-bottom: .5rem;
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

const Project = ({ content, displaysProjectDetailsOnHover }) => (
  <ProjectContainer id={content.id} hasBorder={content.displaysWithBorder}>
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
        {displaysProjectDetailsOnHover && (
          <ProjectDetails>
            <ProjectDetailsText>
              <h2>{content.title}</h2>
              <TextContent>
                <ReactMarkdown source={content.body} disallowedTypes={['link']} unwrapDisallowed />
              </TextContent>
            </ProjectDetailsText>
          </ProjectDetails>
        )}
      </ProjectDetailsWrapper>
    </InternalLink>
  </ProjectContainer>
);

Project.propTypes = {
  content: PropTypes.shape().isRequired,
  displaysProjectDetailsOnHover: PropTypes.bool,
};

Project.defaultProps = {
  displaysProjectDetailsOnHover: false,
};

export default Project;

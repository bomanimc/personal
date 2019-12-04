/* eslint-disable jsx-a11y/media-has-caption */
/* eslint array-callback-return: 0 */
/* eslint no-confusing-arrow: 0 */
/* eslint no-unused-vars: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Image, Video, Transformation } from 'cloudinary-react';
import { SkillAreaColors } from '../../constants';
import { TextContent, InternalLink } from '../commonComponents';
import EyeSVG from '../../images/icons/view.svg';

const ProjectContainer = styled.div`
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  justify-content: center;
  flex-wrap: nowrap;
  max-width: 500px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 3px 3px 3px ${(props) => props.shadowColor};
  }

  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

const ProjectContent = styled.div`
  padding: 8px;
  min-height: 76px;

  @media (max-width: 768px) {
    min-height: auto;
  }
`;

const ProjectImage = styled(Image)`
  width: 100%;
  height: 315px;
  border-bottom: 1px solid white;
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
  border-bottom: 1px solid white;
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

const ProjectHeader = styled.div`
  align-items: center;
  background: white;
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;

const ProjectTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  color: black;
  line-height: 20px;
`;

const ProjectCardSectionTitle = styled.div`
  background: white;
  color: black;
  padding: 6px;
  line-height: 6px;
  font-weight: bold;
`;

const ProjectCTA = styled(InternalLink)`
  border-top: 1px solid white;
  display: none;
  justify-content: center;
  align-items: center;
  transition: background 0.3s ease, filter 0.3s ease;

  &:hover {
    background: white;

    > img {
      filter: invert(100%);
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const EyeIcon = styled.img`
  height: 16px;
  margin: 8px;
`;

const Project = ({ content }) => (
  <ProjectContainer
    id={content.id}
    shadowColor={SkillAreaColors[
      content.tags[Math.floor(Math.random() * content.tags.length)]
    ]}
  >
    <ProjectHeader>
      <ProjectTitle>{content.title}</ProjectTitle>
    </ProjectHeader>
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
    <ProjectCardSectionTitle>Description</ProjectCardSectionTitle>
    <ProjectContent order={2}>
      <TextContent><ReactMarkdown source={content.body} /></TextContent>
    </ProjectContent>
    <ProjectCTA to={content.primaryLink}>
      <EyeIcon src={EyeSVG} alt={`View ${content.title}`} />
    </ProjectCTA>
  </ProjectContainer>
);

Project.propTypes = {
  content: PropTypes.shape().isRequired,
};

export default Project;

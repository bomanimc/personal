/* eslint array-callback-return: 0 */
/* eslint no-confusing-arrow: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import { Link, Body, TextContent } from '../commonComponents';

const ProjectContainer = styled.div`
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  justify-content: center;
  flex-wrap: nowrap;
  width: 500px;
  font-size: 16px;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

const ProjectContent = styled.div`
  padding: 8px;
  height: 48px;
`;

const ProjectImage = styled.img`
  width: 100%;
  border-bottom: 1px solid white;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    height: auto;
    min-height: auto;
    min-width: auto;
  }
`;

const ProjectTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  color: black;
  background: white;
  padding: 8px;
  line-height: 20px;
`;

const ProjectDetail = Body.extend`
  display: none;
  margin: 5px 0px 15px 0px;
`;

const ProjectTag = styled.span`
  font-style: italic;
  background-color: ${props => props.color};
  padding: 0px 4px;
  margin-right: ${props => props.marginRight ? props.marginRight : '4px'};
`;

const Divider = styled.span`
  margin-left: ${props => props.spacing};
  margin-right: ${props => props.spacing};
`;

const ProjectRole = Body.extend`
  margin-top: 20px;
  border-top: 1px solid white;
  padding: 8px;
`;

const Project = (props) => {
  const tagsContent = [];
  props.content.tags.map((tag, idx) => {
    if (tag !== 'featured') {
      const newTag = idx === (props.content.tags.length - 1)
        ? (<ProjectTag key={tag} color={props.skillAreaColors[tag]} marginRight="0px">
          {tag}
        </ProjectTag>)
        : <ProjectTag key={tag} color={props.skillAreaColors[tag]}>{tag}</ProjectTag>;
      tagsContent.push(newTag);
    }
  });

  const videoLink =
    (props.content.videoURL !== undefined && props.content.videoURL !== null)
      ? [
        <Divider spacing="4px">{'\u2022'}</Divider>,
        <Link href={props.content.videoURL} target="_blank" rel="noopener noreferrer">
          Video
        </Link>,
      ]
      : null;

  return (
    <ProjectContainer>
      <ProjectTitle>{props.content.title}</ProjectTitle>
      <ProjectImage
        order={1}
        src={props.content.media}
        onClick={() => props.openGallery(props.content.images)}
      />
      <ProjectContent order={2}>
        <ProjectDetail>
          {tagsContent}
          <Divider spacing="4px">{'\u2022'}</Divider>
          <Link onClick={() => props.openGallery(props.content.images)}>
            Gallery
          </Link>
          {videoLink}
        </ProjectDetail>
        <TextContent><ReactMarkdown source={props.content.body} /></TextContent>
      </ProjectContent>
      <ProjectRole>{props.content.roles}</ProjectRole>
    </ProjectContainer>
  );
};


Project.propTypes = {
  skillAreaColors: PropTypes.shape().isRequired,
  content: PropTypes.shape().isRequired,
  openGallery: PropTypes.func.isRequired,
};

export default Project;

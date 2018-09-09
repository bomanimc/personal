/* eslint array-callback-return: 0 */
/* eslint no-confusing-arrow: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import { Body, TextContent } from '../commonComponents';

const ProjectContainer = styled.div`
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  justify-content: center;
  flex-wrap: nowrap;
  width: 500px;
  font-size: 16px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 3px 3px 6px rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

const ProjectContent = styled.div`
  padding: 8px;
  height: 64px;
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
  font-size: 12px;
  line-height: 6px;
  font-weight: bold;
`;

const ProjectDetail = Body.extend``;

const ProjectTag = styled.span`
  font-style: italic;
  background-color: ${props => props.color};
  padding: 0px 4px;
  margin-right: ${props => props.marginRight ? props.marginRight : '4px'};
  opacity: 0.5;
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

  return (
    <ProjectContainer>
      <ProjectHeader>
        <ProjectTitle>{props.content.title}</ProjectTitle>
        <ProjectDetail>{tagsContent}</ProjectDetail>
      </ProjectHeader>
      <ProjectImage
        order={1}
        src={props.content.media}
        onClick={() => props.openGallery(props.content.images)}
      />
      <ProjectCardSectionTitle>Description</ProjectCardSectionTitle>
      <ProjectContent order={2}>
        <TextContent><ReactMarkdown source={props.content.body} /></TextContent>
      </ProjectContent>
    </ProjectContainer>
  );
};


Project.propTypes = {
  skillAreaColors: PropTypes.shape().isRequired,
  content: PropTypes.shape().isRequired,
  openGallery: PropTypes.func.isRequired,
};

export default Project;
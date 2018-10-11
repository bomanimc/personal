/* eslint array-callback-return: 0 */
/* eslint no-confusing-arrow: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import { Body, TextContent, ProjectTags, Link } from '../commonComponents';

const ProjectContainer = styled.div`
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  justify-content: center;
  flex-wrap: nowrap;
  max-width: 500px;
  font-size: 16px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 4px 4px 3px rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

const ProjectContent = styled.div`
  padding: 8px;
  min-height: 64px;

  @media (max-width: 768px) {
    min-height: auto;
  }
`;

const ProjectImage = styled.img`
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

const ProjectDetail = Body.extend`
  opacity: 0.5;
  transition: opacity 0.3s ease;

  ${ProjectContainer}:hover & {
    opacity: 1;
  }
`;

const getIsExternalLink = link => link[0] !== '/';

const Project = ({ content }) => (
  <ProjectContainer>
    <ProjectHeader>
      <ProjectTitle>{content.title}</ProjectTitle>
      <ProjectDetail>
        <ProjectTags tags={content.tags} />
      </ProjectDetail>
    </ProjectHeader>
    {
      getIsExternalLink(content.primaryLink)
      ? <Link href={content.primaryLink} target="_blank" rel="noopener noreferrer">
        <ProjectImage
          order={1}
          src={content.media}
        />
      </Link>
      : <Link href={content.primaryLink}>
        <ProjectImage
          order={1}
          src={content.media}
        />
      </Link>
    }
    <ProjectCardSectionTitle>Description</ProjectCardSectionTitle>
    <ProjectContent order={2}>
      <TextContent><ReactMarkdown source={content.body} /></TextContent>
    </ProjectContent>
  </ProjectContainer>
);

Project.propTypes = {
  content: PropTypes.shape().isRequired,
};

export default Project;

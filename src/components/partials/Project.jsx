/* eslint array-callback-return: 0 */
/* eslint no-confusing-arrow: 0 */

import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import { Link, Body, TextContent } from '../commonComponents';

const ProjectContainer = styled.div`
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: nowrap;
  max-width: 100%;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

const ProjectContent = styled.div`
  flex-basis: 500px;
`;

const ProjectImage = styled.img`
  height: 250px;
  width: 400px;
  flex-basis: 400px;
  min-height: 250px;
  margin-right: 10px;
  border: 1px solid white;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    height: auto;
    min-height: auto;
    min-width: auto;
  }
`;

const ProjectTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 32px;
  text-transform: uppercase;
  margin-bottom: 0px;
`;

const ProjectDetail = Body.extend`
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
`;

const Project = (section, skillAreaColors) => {
  const tagsContent = [];
  section.content.tags.map((tag, idx) => {
    if (tag !== 'featured') {
      const newTag = idx === (section.content.tags.length - 1)
        ? <ProjectTag color={skillAreaColors[tag]} marginRight="0px">{tag}</ProjectTag>
        : <ProjectTag color={skillAreaColors[tag]}>{tag}</ProjectTag>;
      tagsContent.push(newTag);
    }
  });

  return (
    <ProjectContainer>
      <ProjectImage order={1} src={section.content.media} />
      <ProjectContent order={2}>
        <ProjectTitle>{section.content.title}</ProjectTitle>
        <ProjectDetail>
          {tagsContent}
          <Divider spacing="4px">{'\u2022'}</Divider>
          <Link onClick={() => section.openGallery(section.content.images)}>
            View
          </Link>
        </ProjectDetail>
        <TextContent><ReactMarkdown source={section.content.body} /></TextContent>
        <ProjectRole>Roles: {section.content.roles}</ProjectRole>
      </ProjectContent>
    </ProjectContainer>
  );
};

export default Project;

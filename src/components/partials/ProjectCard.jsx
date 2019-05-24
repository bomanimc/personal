/* eslint array-callback-return: 0 */
/* eslint no-confusing-arrow: 0 */
/* eslint no-unused-vars: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Img from 'react-image';
import { SkillAreaColors } from '../../constants';
import { TextContent, ProjectTags, Link } from '../commonComponents';

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
    box-shadow: 3px 3px 3px ${props => props.shadowColor};
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

const ProjectImage = styled(Img)`
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

const ProjectImagePlaceholder = styled.div`
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
  line-height: 6px;
  font-weight: bold;
`;

const ProjectDetail = TextContent.extend`
  opacity: 0.5;
  transition: opacity 0.3s ease;

  ${ProjectContainer}:hover & {
    opacity: 1;
  }
`;

const ProjectCTA = styled.a`
  border-top: 1px solid white;
  display: none;
  justify-content: center;
  align-items: center;
  padding: 8px;
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
`;

const getIsExternalLink = link => link[0] !== '/';

const Project = ({ content }) => (
  <ProjectContainer
    id={content.id}
    shadowColor={SkillAreaColors[
      content.tags[Math.floor(Math.random() * content.tags.length)]
    ]}
  >
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
          loader={<ProjectImagePlaceholder />}
        />
      </Link>
      : <Link href={content.primaryLink}>
        <ProjectImage
          order={1}
          src={content.media}
          loader={<ProjectImagePlaceholder />}
        />
      </Link>
    }
    <ProjectCardSectionTitle>Description</ProjectCardSectionTitle>
    <ProjectContent order={2}>
      <TextContent><ReactMarkdown source={content.body} /></TextContent>
    </ProjectContent>
    {
      getIsExternalLink(content.primaryLink)
      ? <ProjectCTA href={content.primaryLink} target="_blank" rel="noopener noreferrer">
        <EyeIcon src="img/icons/view.svg" />
      </ProjectCTA>
      : <ProjectCTA href={content.primaryLink}>
        <EyeIcon src="img/icons/view.svg" />
      </ProjectCTA>
    }
  </ProjectContainer>
);

Project.propTypes = {
  content: PropTypes.shape().isRequired,
};

export default Project;

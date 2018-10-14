/* eslint no-confusing-arrow: 0 */

import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { SkillAreaColors } from '../constants';

const linkStyle = css`
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;

export const Body = styled.p`
  font-weight: lighter;
`;

export const TextContent = Body.extend`
  a {
    ${linkStyle}
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export const Link = styled.a`
  ${linkStyle}
`;

export const ProjectTag = styled.span`
  font-style: italic;
  background-color: ${props => props.color};
  padding: 0px 4px;
  margin-right: ${props => props.marginRight ? props.marginRight : '4px'};
`;

export const ProjectTags = ({ tags }) => {
  const tagComponents = tags.map((tag, idx) => {
    if (tag !== 'featured') {
      const newTag = idx === (tags.length - 1)
        ? (<ProjectTag key={tag} color={SkillAreaColors[tag]} marginRight="0px">
          {tag}
        </ProjectTag>)
        : <ProjectTag key={tag} color={SkillAreaColors[tag]}>{tag}</ProjectTag>;
      return newTag;
    }
    return null;
  });

  return <span>{tagComponents}</span>;
};

ProjectTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

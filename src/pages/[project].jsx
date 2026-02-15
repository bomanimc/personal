import React from 'react';
import { graphql } from 'gatsby';
import { PortableText } from '@portabletext/react';
import { ProjectContent } from '../constants';
import { BaseProjectPage, BaseBodyContent } from '../components/commonProjectComponents';

export const query = graphql`
  query ($slug: String) {
    sanityProject(slug: {current: {eq: $slug}}) {
      slug {
        current
      }
      title
      _rawContent
    }
  }
`;

const Project = ({ data }) => {
  const {slug: {current: projectId}, _rawContent} = data.sanityProject;
  const project = ProjectContent[projectId];

  return (
    <BaseProjectPage
      id={project.id}
      title={project.title}
      year={project.year}
      tools={project.tools}
      role={project.role}
      site={project.site}
      body={(
        <BaseBodyContent
          project={project}
          showMainMedia={false}
          customContent={
            <PortableText value={_rawContent} />
          }
        />
      )}
    />
  );
};

export default Project;

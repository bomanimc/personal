/* eslint no-confusing-arrow: 0 */

import React from 'react';
import { graphql } from 'gatsby';
import { ProjectContent } from '../constants';
import { BaseProjectPage, BaseBodyContent } from '../components/commonProjectComponents';
import { PostSlices } from '../components/slices';

export const query = graphql`
  query ProjectQuery($uid: String) {
    prismic {
      allProjects(uid: $uid) {
        edges {
          node {
            _meta {
              id
              uid
              type
            }
            title
            body {
              __typename
              ... on PRISMIC_ProjectBodyText{
                type
                label
                primary{
                  text
                }
              }
            }
          }
        }
      }
    }
  }
`;


const Project = (props) => {
  // Required check for no data being returned
  const doc = props.data.prismic.allProjects.edges.slice(0, 1).pop();
  if (!doc) return null;

  const { uid } = doc.node._meta;
  const project = ProjectContent[uid];

  return (
    <BaseProjectPage
      id={project.id}
      title={project.title}
      tools={project.tools}
      role={project.role}
      site={project.site}
      body={(
        <BaseBodyContent
          project={project}
          showMainMedia={false}
          customContent={
            <PostSlices slices={doc.node.body} />
          }
        />
      )}
    />
  );
};

export default Project;

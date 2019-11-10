/* eslint no-confusing-arrow: 0 */

import React from 'react';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs'
import { ProjectContent } from '../constants';
import { BaseProjectPage, BaseBodyContent } from '../components/commonProjectComponents';

// Query for the Blog Post content in Prismic
export const query = graphql`
  query ProjectQuery {
    prismic {
      allProject_pages {
        edges {
          node {
            title
            body
            _meta {
              uid
              type
              id
            }
          }
        }
      }
    }
  }
`;

	
export default ({ data }) => {
  // Required check for no data being returned
  const doc = data.prismic.allProject_pages.edges.slice(0,1).pop();
  if (!doc) return null;

  const uid = doc.node._meta.uid;
  const project = ProjectContent[uid];

  console.log(doc.node.body);
	
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
          customContent={RichText.render(doc.node.body)}
        />
      )}
    />
  );
}

// const project = ProjectContent[ProjectSlug.informedconsent];

// const InformedConsentProjectPage = () => (
//   <BaseProjectPage
//     id={project.id}
//     title={project.title}
//     tools={project.tools}
//     role={project.role}
//     site={project.site}
//     body={(
//       <BaseBodyContent
//         project={project}
//         showMainMedia={false}
//         introContentPath={InformedConsentContentPath}
//       />
//     )}
//   />
// );

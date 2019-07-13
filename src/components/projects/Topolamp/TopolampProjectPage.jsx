/* eslint no-confusing-arrow: 0 */

import React from 'react';
import TopolampContentPath from './topolamp.md';
import { ProjectContent, ProjectSlug } from '../../../constants';
import { BaseProjectPage, BaseBodyContent } from '../commonProjectComponents';

const project = ProjectContent[ProjectSlug.topolamp];

const TopolampProjectPage = () => (
  <BaseProjectPage
    id={project.id}
    title={project.title}
    tools={project.tools}
    role={project.role}
    site={project.site}
    body={(
      <BaseBodyContent
        project={project}
        introContentPath={TopolampContentPath}
      />
)}
  />
);

export default TopolampProjectPage;

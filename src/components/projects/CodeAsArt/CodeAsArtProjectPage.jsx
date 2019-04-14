/* eslint no-confusing-arrow: 0 */

import React from 'react';
import CodeAsArtContentPath from './codeasart.md';
import { ProjectContent, ProjectSlug } from '../../../constants';
import { BaseProjectPage, BaseBodyContent } from '../commonProjectComponents';

const project = ProjectContent[ProjectSlug.codeasart];

const CodeAsArtProjectPage = () => (
  <BaseProjectPage
    id={project.id}
    title={project.title}
    tools={project.tools}
    role={project.role}
    site={project.site}
    body={
      <BaseBodyContent
        project={project}
        introContentPath={CodeAsArtContentPath}
      />
    }
  />
);

export default CodeAsArtProjectPage;

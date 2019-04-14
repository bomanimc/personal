/* eslint no-confusing-arrow: 0 */

import React from 'react';
import NPRContentPath from './npr.md';
import { ProjectContent, ProjectSlug } from '../../../constants';
import { BaseProjectPage, BaseBodyContent } from '../commonProjectComponents';

const project = ProjectContent[ProjectSlug.npr];

const NPRProjectPage = () => (
  <BaseProjectPage
    id={project.id}
    title={project.title}
    tools={project.tools}
    role={project.role}
    site={project.site}
    body={
      <BaseBodyContent
        project={project}
        introContentPath={NPRContentPath}
      />
    }
  />
);

export default NPRProjectPage;

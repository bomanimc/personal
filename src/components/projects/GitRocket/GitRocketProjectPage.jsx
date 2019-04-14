/* eslint no-confusing-arrow: 0 */

import React from 'react';
import GitRocketContentPath from './gitrocket.md';
import { ProjectContent, ProjectSlug } from '../../../constants';
import { BaseProjectPage, BaseBodyContent } from '../commonProjectComponents';

const project = ProjectContent[ProjectSlug.gitrocket];

const GitRocketProjectPage = () => (
  <BaseProjectPage
    id={project.id}
    title={project.title}
    tools={project.tools}
    role={project.role}
    site={project.site}
    body={
      <BaseBodyContent
        project={project}
        introContentPath={GitRocketContentPath}
      />
    }
  />
);

export default GitRocketProjectPage;

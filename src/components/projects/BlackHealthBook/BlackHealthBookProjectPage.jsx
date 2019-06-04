/* eslint no-confusing-arrow: 0 */

import React from 'react';
import BlackHealthBookContentPath from './blackhealthbook.md';
import { ProjectContent, ProjectSlug } from '../../../constants';
import { BaseProjectPage, BaseBodyContent } from '../commonProjectComponents';

const project = ProjectContent[ProjectSlug.blackhealthbook];

const BlackHealthBookProjectPage = () => (
  <BaseProjectPage
    id={project.id}
    title={project.title}
    tools={project.tools}
    role={project.role}
    site={project.site}
    body={
      <BaseBodyContent
        project={project}
        showMainMedia={false}
        introContentPath={BlackHealthBookContentPath}
      />
    }
  />
);

export default BlackHealthBookProjectPage;

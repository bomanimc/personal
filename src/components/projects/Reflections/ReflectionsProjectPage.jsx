/* eslint no-confusing-arrow: 0 */

import React from 'react';
import ReflectionsContentPath from './reflections.md';
import { ProjectContent, ProjectSlug } from '../../../constants';
import { BaseProjectPage, BaseBodyContent } from '../commonProjectComponents';

const project = ProjectContent[ProjectSlug.reflections];

const ReflectionsProjectPage = () => (
  <BaseProjectPage
    id={project.id}
    title={project.title}
    tools={project.tools}
    role={project.role}
    site={project.site}
    body={(
      <BaseBodyContent
        project={project}
        introContentPath={ReflectionsContentPath}
      />
)}
  />
);

export default ReflectionsProjectPage;

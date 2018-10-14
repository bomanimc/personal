/* eslint no-confusing-arrow: 0 */

import React from 'react';
import ReflectionsContentPath from './reflections.md';
import { ProjectContent } from '../../../constants';
import { BaseProjectPage, BaseBodyContent } from '../commonProjectComponents';

const project = ProjectContent.reflections;

const ReflectionsProjectPage = () => (
  <BaseProjectPage
    title={project.title}
    tools={project.tools}
    role={project.role}
    site={project.site}
    body={
      <BaseBodyContent
        project={project}
        introContentPath={ReflectionsContentPath}
      />
    }
  />
);

export default ReflectionsProjectPage;

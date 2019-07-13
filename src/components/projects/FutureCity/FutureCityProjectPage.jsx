/* eslint no-confusing-arrow: 0 */

import React from 'react';
import FutureCityContentPath from './futurecity.md';
import { ProjectContent, ProjectSlug } from '../../../constants';
import { BaseProjectPage, BaseBodyContent } from '../commonProjectComponents';

const project = ProjectContent[ProjectSlug.futurecity];

const FutureCityProjectPage = () => (
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
        introContentPath={FutureCityContentPath}
      />
)}
  />
);

export default FutureCityProjectPage;

/* eslint no-confusing-arrow: 0 */

import React from 'react';
import DrawAChartContentPath from './drawachart.md';
import { ProjectContent, ProjectSlug } from '../../../constants';
import { BaseProjectPage, BaseBodyContent } from '../commonProjectComponents';

const project = ProjectContent[ProjectSlug.drawachart];

const DrawAChartProjectPage = () => (
  <BaseProjectPage
    id={project.id}
    title={project.title}
    tools={project.tools}
    role={project.role}
    site={project.site}
    body={(
      <BaseBodyContent
        project={project}
        introContentPath={DrawAChartContentPath}
      />
)}
  />
);

export default DrawAChartProjectPage;

/* eslint no-confusing-arrow: 0 */

import React from 'react';
import NegativeReelContentPath from './negativereel.md';
import { ProjectContent, ProjectSlug } from '../../../constants';
import { BaseProjectPage, BaseBodyContent } from '../commonProjectComponents';

const project = ProjectContent[ProjectSlug.negativereel];

const NegativeReelProjectPage = () => (
  <BaseProjectPage
    id={project.id}
    title={project.title}
    tools={project.tools}
    role={project.role}
    site={project.site}
    body={(
      <BaseBodyContent
        project={project}
        introContentPath={NegativeReelContentPath}
      />
)}
  />
);

export default NegativeReelProjectPage;

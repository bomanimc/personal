/* eslint no-confusing-arrow: 0 */

import React from 'react';
import WavesContentPath from './waves.md';
import { ProjectContent, ProjectSlug } from '../../../constants';
import { BaseProjectPage, BaseBodyContent } from '../commonProjectComponents';

const project = ProjectContent[ProjectSlug.waves];

const WavesProjectPage = () => (
  <BaseProjectPage
    id={project.id}
    title={project.title}
    tools={project.tools}
    role={project.role}
    site={project.site}
    body={(
      <BaseBodyContent
        project={project}
        introContentPath={WavesContentPath}
      />
)}
  />
);

export default WavesProjectPage;

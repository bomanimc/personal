/* eslint no-confusing-arrow: 0 */

import React from 'react';
import VersionsContentPath from './versions.md';
import { ProjectContent, ProjectSlug } from '../../../constants';
import { BaseProjectPage, BaseBodyContent } from '../commonProjectComponents';

const project = ProjectContent[ProjectSlug.versions];

const VersionsProjectPage = () => (
  <BaseProjectPage
    id={project.id}
    title={project.title}
    tools={project.tools}
    role={project.role}
    site={project.site}
    body={(
      <BaseBodyContent
        project={project}
        introContentPath={VersionsContentPath}
      />
)}
  />
);

export default VersionsProjectPage;

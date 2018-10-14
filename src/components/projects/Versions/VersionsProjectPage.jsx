/* eslint no-confusing-arrow: 0 */

import React from 'react';
import VersionsContentPath from './versions.md';
import { ProjectContent } from '../../../constants';
import { BaseProjectPage, BaseBodyContent } from '../commonProjectComponents';

const project = ProjectContent.versions;

const VersionsProjectPage = () => (
  <BaseProjectPage
    title={project.title}
    tools={project.tools}
    role={project.role}
    site={project.site}
    body={
      <BaseBodyContent
        project={project}
        introContentPath={VersionsContentPath}
      />
    }
  />
);

export default VersionsProjectPage;

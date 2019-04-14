/* eslint no-confusing-arrow: 0 */

import React from 'react';
import ShrumenContentPath from './shrumen.md';
import { ProjectContent, ProjectSlug } from '../../../constants';
import { BaseProjectPage, BaseBodyContent } from '../commonProjectComponents';

const project = ProjectContent[ProjectSlug.shrumen];

const ShrumenProjectPage = () => (
  <BaseProjectPage
    id={project.id}
    title={project.title}
    tools={project.tools}
    role={project.role}
    site={project.site}
    body={
      <BaseBodyContent
        project={project}
        introContentPath={ShrumenContentPath}
      />
    }
  />
);

export default ShrumenProjectPage;

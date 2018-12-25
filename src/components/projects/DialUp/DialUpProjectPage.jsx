/* eslint no-confusing-arrow: 0 */

import React from 'react';
import DialUpContentPath from './dialup.md';
import { ProjectContent } from '../../../constants';
import { BaseProjectPage, BaseBodyContent } from '../commonProjectComponents';

const project = ProjectContent.dialup;

const DialUpProjectPage = () => (
  <BaseProjectPage
    id={project.id}
    title={project.title}
    tools={project.tools}
    role={project.role}
    site={project.site}
    body={
      <BaseBodyContent
        project={project}
        introContentPath={DialUpContentPath}
      />
    }
  />
);

export default DialUpProjectPage;

/* eslint no-confusing-arrow: 0 */

import React from 'react';
import BikeWheelSynthContentPath from './bikewheelsynth.md';
import { ProjectContent } from '../../../constants';
import { BaseProjectPage, BaseBodyContent } from '../commonProjectComponents';

const project = ProjectContent.bikewheelsynth;

const BikeWheelSynthProjectPage = () => (
  <BaseProjectPage
    id={project.id}
    title={project.title}
    tools={project.tools}
    role={project.role}
    site={project.site}
    body={
      <BaseBodyContent
        project={project}
        showMainMedia={false}
        introContentPath={BikeWheelSynthContentPath}
      />
    }
  />
);

export default BikeWheelSynthProjectPage;

/* eslint no-confusing-arrow: 0 */

import React from 'react';
import InformedConsentContentPath from './informedconsent.md';
import { ProjectContent, ProjectSlug } from '../../../constants';
import { BaseProjectPage, BaseBodyContent } from '../commonProjectComponents';

const project = ProjectContent[ProjectSlug.informedconsent];

const InformedConsentProjectPage = () => (
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
        introContentPath={InformedConsentContentPath}
      />
)}
  />
);

export default InformedConsentProjectPage;

import React from 'react';
import { PortableText } from '@portabletext/react';
import {client} from '@/sanity/lib/client';
import {PROJECTS_QUERY} from '@/sanity/lib/queries';
import { ProjectContent } from '../../constants';
import { BaseProjectPage, BaseBodyContent } from '../../components/commonProjectComponents';

export default async function ProjectPage({ params }: { params: { project: string } }) {
  const { project } = await params;
  console.log("Project", project);
  console.log("Params", params);

  const fetchedProject = await client.fetch(PROJECTS_QUERY, { project });
  console.log(fetchedProject);
  // @ts-ignore
  const projectData = ProjectContent[fetchedProject.projectId];
  console.log(project);

  return (
    <BaseProjectPage
      id={projectData.id}
      title={projectData.title}
      year={projectData.year}
      tools={projectData.tools}
      role={projectData.role}
      site={projectData.site}
      body={(
        <BaseBodyContent
          project={projectData}
          showMainMedia={false}
          customContent={
            <PortableText value={fetchedProject.content} />
          }
        />
      )}
    />
  );
};

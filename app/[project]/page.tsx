import React from 'react';
import { PortableText } from '@portabletext/react';
import {client} from '@/sanity/lib/client';
import {PROJECTS_QUERY} from '@/sanity/lib/queries';
import { ProjectContent } from '../../constants';
import { BaseProjectPage, BaseBodyContent } from '../../components/CommonProjectComponents';
import { Metadata } from 'next';
interface ProjectParams {
  project: string;
}

type Props = {
  params: Promise<ProjectParams>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { project } = await params;
  const fetchedProject = await client.fetch(PROJECTS_QUERY, { project });
 
  // TODO: Copy functionality from utils.jsx to here.
  return {
    title: fetchedProject.title,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { project } = await params;
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

import React from 'react';
import { PortableText } from '@portabletext/react';
import {client} from '@/sanity/lib/client';
import {PROJECTS_QUERY} from '@/sanity/lib/queries';
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
    title: fetchedProject?.title,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { project } = await params;
  const fetchedProject = await client.fetch(PROJECTS_QUERY, { project });

  // TODO: Understand why this is possible null
  if (!fetchedProject) {
    return;
  }

  console.log(fetchedProject?.otherMedia)

  return (
    // TODO: Get rich text to work in these strings
    <BaseProjectPage
      title={fetchedProject.title}
      year={fetchedProject.year}
      tools={fetchedProject.tools}
      role={fetchedProject.role}
      site={fetchedProject.site}
      body={(
        <BaseBodyContent
          media={fetchedProject?.otherMedia}
          content={
            <PortableText value={fetchedProject.content} />
          }
        />
      )}
    />
  );
};

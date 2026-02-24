import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import {
  ExternalLink,
  TextContent,
  Divider,
  Page,
  PageCenteringContainer,
  PageTitle,
  MetadataSection,
  MetadataItem,
  MetadataTitle,
} from '../../components/CommonComponents';
import ProjectBodyContent from "./projectBodyContent";
import { Metadata } from "next";
interface ProjectParams {
  project: string;
}

type Props = {
  params: Promise<ProjectParams>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { project } = await params;
  const fetchedProject = await client.fetch(PROJECTS_QUERY, { project });

  // TODO: Copy functionality from utils.jsx to here.
  return {
    title: fetchedProject?.title,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { project } = await params;
  const fetchedProject = await client.fetch(PROJECTS_QUERY, { project });

  // TODO: Understand why this is possible null
  if (!fetchedProject) {
    return;
  }

  const { title, year, tools, role, site, content, otherMedia } =
    fetchedProject;

  return (
    // TODO: Get rich text to work in these strings
    <div>
      <Page>
        <PageCenteringContainer>
          <PageTitle>{title}</PageTitle>
          <MetadataSection>
            <MetadataItem>
              <MetadataTitle>Year</MetadataTitle>
              <TextContent>{year}</TextContent>
            </MetadataItem>
            <MetadataItem>
              <MetadataTitle>Tools</MetadataTitle>
              <TextContent>{tools}</TextContent>
            </MetadataItem>
            <MetadataItem>
              <MetadataTitle>Role</MetadataTitle>
              <TextContent>{role}</TextContent>
            </MetadataItem>
            {site && (
              <MetadataItem>
                <MetadataTitle>External Site</MetadataTitle>
                <TextContent>
                  <ExternalLink
                    href={site}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {site}
                  </ExternalLink>
                </TextContent>
              </MetadataItem>
            )}
          </MetadataSection>
          <Divider />
          <ProjectBodyContent
            media={otherMedia}
            content={<PortableText value={content} />}
          />
        </PageCenteringContainer>
      </Page>
    </div>
  );
}


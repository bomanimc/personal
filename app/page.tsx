import { client } from "@/sanity/lib/client";
import { ALL_PROJECTS_QUERY } from "@/sanity/lib/queries";
import ProjectCard from "./projectCard";
import { ProjectGridContainer } from "../components/CommonComponents";
import styles from "./page.module.scss";

export default async function HomePage() {
  const allProjects = await client.fetch(ALL_PROJECTS_QUERY);

  return (
    <div>
      <div className={styles.contentContainer}>
        <ProjectGridContainer containerHeight="auto">
          {allProjects.map((project) => (
            <ProjectCard
              key={project.projectId}
              projectId={project.projectId}
              media={project.primaryMedia}
              title={project.title}
            />
          ))}
        </ProjectGridContainer>
      </div>
    </div>
  );
}

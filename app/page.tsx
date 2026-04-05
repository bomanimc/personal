import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { FEATURED_PROJECTS_QUERY } from "@/sanity/lib/queries";
import ProjectCard from "./projectCard";
import { ProjectGridContainer } from "../components/CommonComponents";
import styles from "./page.module.scss";
import imgNsibidiSymbol from "./nsibidiSymbol.svg";

export default async function HomePage() {
  const featuredProjectReferences = await client.fetch(FEATURED_PROJECTS_QUERY);
  const gridItems = featuredProjectReferences.map(({ project }) => (
    <ProjectCard
      key={project.projectId}
      projectId={project.projectId}
      media={project.primaryMedia}
      title={project.title}
    />
  ));

  // Insert placeholders where necessary to balance grid presentation
  const numItems = gridItems.length;
  const remainderItems = numItems % 3;
  const placeholderIndices = (() => {
    // If there's 1 remainder, put placeholder on both sides.
    if (remainderItems === 1) return [numItems - 1, numItems + 1];
    // If there are 2 remainders, put placeholder in the middle.
    else if (remainderItems === 2) return [numItems - 1];
    else {
      return [];
    }
  })();

  placeholderIndices.forEach((placeholderIndex) =>
    gridItems.splice(placeholderIndex, 0, (
      <div className={styles.placeholder} key={placeholderIndex}>
        <Image
          alt="Ancient Nigerian heiroglyphic for love and unity"
          className={styles.placeholderImage} 
          src={imgNsibidiSymbol}
        />
      </div>
    )),
  );

  return (
    <div>
      <div className={styles.contentContainer}>
        <ProjectGridContainer containerHeight="auto">
          {gridItems}
        </ProjectGridContainer>
      </div>
    </div>
  );
}

// @ts-nocheck
/* eslint no-confusing-arrow: 0 */
/* eslint array-callback-return: 0 */

import React from 'react';
import ProjectCard from '../components/partials/ProjectCard';
import {
  ProjectGridContainer,
} from '../components/CommonComponents';
import { ProjectContent, FeaturedProjects } from '../constants';
import styles from "./page.module.scss";

const HomePage = () => (
  <div>
    <ProjectSection />
  </div>
);

const ProjectSection = () => (
  <div className={styles.contentContainer}>
    <ProjectGridContainer containerHeight="auto">
      {
        FeaturedProjects.map((section) => (
          <ProjectCard
            key={ProjectContent[section].id}
            content={ProjectContent[section]}
          />
        ))
      }
    </ProjectGridContainer>
  </div>
);

export default HomePage;

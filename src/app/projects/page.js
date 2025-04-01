// pages/projects/index.js (or .jsx)
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import projectsData from "@/data/projectsData"; // Adjust path as needed
import styles from "./projects.module.css";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className={styles.page}>
      <Navbar />
      <Background />
      <h1 className={styles.title}>Projects</h1>
      
      {projectsData.length > 0 ? (
        <div className={styles.grid}>
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
          ))}
        </div>
      ) : (
        <p className={styles.text}>More info is coming soon.</p>
      )}

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}

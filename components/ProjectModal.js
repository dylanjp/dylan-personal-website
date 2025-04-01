// components/ProjectModal.js
"use client";
import { createBleep } from "@arwes/bleeps";
import { useEffect } from "react";
import styles from "./ProjectModal.module.css";

export default function ProjectModal({ project, onClose }) {
  const bleep = createBleep({
    sources: [{ src: "/sounds/click.mp3", type: "audio/mpeg" }],
  });

  const handleClose = () => {
    bleep?.play();
    onClose();
  };

  // Optionally play a sound on modal open
  useEffect(() => {
    bleep?.play();
  }, [bleep]);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <img src={project.image} alt={project.title} className={styles.modalImage} />
        <h2 className={styles.modalTitle}>{project.title}</h2>
        <p className={styles.modalDescription}>{project.description}</p>
        <div className={styles.buttonRow}>
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.learnMoreButton}
            >
              Learn More
            </a>
          ) : (
            <div className={styles.comingSoonBanner}>More Info Coming Soon</div>
          )}
          <button className={styles.closeButton} onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

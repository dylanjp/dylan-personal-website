// components/ProjectModal.js
"use client";
import { useEffect } from "react";
import styles from "./ProjectModal.module.css";
import PrimaryButton from "./PrimaryButton";

export default function ProjectModal({ project, onClose }) {

  const handleClose = () => {
    onClose();
  };

  // Optionally play a sound on modal open
  useEffect(() => {}, []);

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
          <PrimaryButton onClick={handleClose} className={styles.closeButton}>
            Close
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import { createBleep } from "@arwes/bleeps";
import styles from "./projects.module.css";

export default function ProjectsPage() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setShowModal(true);
  }, []);

  const bleep = createBleep({
    sources: [{ src: "/sounds/click.mp3", type: "audio/mpeg" }],
  });

  const closeModal = () => {
    bleep?.play();
    setShowModal(false);
    setTimeout(() => router.push("/"), 300);
  };

  return (
    <div className={styles.page}>
      <Navbar />
      <Background />
      <h1 className={styles.title}>Coming Soon!</h1>
      <p className={styles.text}>Welcome to the Projects page!</p>
      
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2 className={styles.modalTitle}>Coming Soon</h2>
            <p className={styles.modalText}>The Projects page is under construction and will be available soon.</p>
            <button className={styles.closeButton} onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
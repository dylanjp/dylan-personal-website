"use client";

import { useState, useEffect } from "react";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import styles from "./resume.module.css";

export default function ResumePage() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <div className={styles.page}>
      <Navbar />
      <Background />
      <h1 className={styles.title}>Coming Soon!</h1>
      <p className={styles.text}>Welcome to the resume page!</p>
      
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2 className={styles.modalTitle}>Coming Soon</h2>
            <p className={styles.modalText}>The reesume page is under construction and will be available soon.</p>
            <button className={styles.closeButton} onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
  }
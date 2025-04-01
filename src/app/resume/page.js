"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createBleep } from "@arwes/bleeps";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import styles from "./resume.module.css";

export default function ResumePage() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const bleep = createBleep({
    sources: [{ src: "/sounds/click.mp3", type: "audio/mpeg" }],
  });

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleClose = () => {
    bleep?.play();
    setShowModal(false);
    setTimeout(() => {
      router.push("/");
    }, 500); // Short delay before redirecting
  };

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
            <p className={styles.modalText}>The resume page is under construction and will be available soon.</p>
            <button className={styles.closeButton} onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
"use client";

import { useState, useEffect } from "react";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import { createBleep } from "@arwes/bleeps";
import { useRouter } from "next/navigation";
import styles from "./about.module.css";

export default function AboutPage() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    setShowModal(true);
  }, []);
  
  const bleep = createBleep({
    sources: [{ src: "/sounds/click.mp3", type: "audio/mpeg" }],
  });
  
  const handleClose = () => {
    bleep?.play();
    setShowModal(false);
    setTimeout(() => {
      router.push("/");
    }, 500);
  };

  return (
    <div className={styles.page}>
      <Navbar />
      <Background />
      <h1 className={styles.title}>Coming Soon!</h1>
      <p className={styles.text}>Welcome to the About page!</p>
      
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2 className={styles.modalTitle}>Coming Soon</h2>
            <p className={styles.modalText}>The "About Me" page is under construction and will be available soon.</p>
            <button className={styles.closeButton} onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
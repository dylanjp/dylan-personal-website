"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import { createBleep } from "@arwes/bleeps";
import styles from "./blog.module.css";

export default function BlogPage() {
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
    setTimeout(() => router.push("/"), 300); // Delay for effect
  };

  return (
    <div className={styles.page}>
      <Navbar />
      <Background />
      <h1 className={styles.title}>Coming Soon!</h1>
      <p className={styles.text}>Welcome to the Blog page!</p>
      
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2 className={styles.modalTitle}>Coming Soon</h2>
            <p className={styles.modalText}>The blog is under construction and will be available soon.</p>
            <button className={styles.closeButton} onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

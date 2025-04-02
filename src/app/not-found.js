"use client";

import { useState, useEffect } from "react";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import { createBleep } from "@arwes/bleeps";
import { useRouter } from "next/navigation";
import styles from "./not-found.module.css";


// app/not-found.js
export default function NotFound() {
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
        {showModal && (
          <div className={styles.modalOverlay}>
            <div className={styles.modal}>
              <h2 className={styles.modalTitle}>Looks like you got lost....</h2>
              <button className={styles.closeButton} onClick={handleClose}>Click Here for Homepage</button>
            </div>
          </div>
        )}
      </div>
    );
  }
"use client";

import styles from "./page.module.css";
import Link from "next/link";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import { createBleep } from "@arwes/bleeps";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const bleep = createBleep({
      sources: [{ src: "/sounds/click.mp3", type: "audio/mpeg" }],
    });

    const handleClick = () => {
      bleep?.play();
    };

    const links = document.querySelectorAll("a");
    links.forEach((link) => link.addEventListener("click", handleClick));

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleClick));
    };
  }, []);

  return (
    <div className={styles.page}>
      <Navbar />
      <Background />
      <main className={styles.main}>
        <h1 className={styles.retroName}>Dylan John Pratt</h1>
        <h3 className={styles.retroSubTitle}>Software Engineer</h3>
        <div className={styles.ctas}>
          <Link href="/projects" className={styles.navLink}>Projects</Link>
          <Link href="/blog" className={styles.navLink}>Blog</Link>
          <Link href="/resume" className={styles.navLink}>Resume</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
        </div>
      </main>
    </div>
  );
}
import styles from "./page.module.css";
import Link from "next/link";
import Background from "@/components/Background"; // Import the new component
import Navbar from "@/components/Navbar";
//import TestComponent from "@/components/TestComponent"; // If using path aliases

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar/>
      <Background /> {/* Add the animated background */}
      <main className={styles.main}>
        <h1 className={styles.retroName}>Dylan John Pratt</h1>
        <h3 className={styles.retroSubTitle}>Software Engineer</h3>
        {/* <TestComponent /> */}
        <div className={styles.ctas}>
          <Link href="/projects" className={styles.navLink}>Projects</Link>
          <Link href="/blog" className={styles.navLink}>Blog</Link>
          <Link href="/resume" className={styles.navLink}>Resume</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
      </div>
      </main>
      {/* <footer className={styles.footer}>footer</footer> */}
    </div>
  );
}
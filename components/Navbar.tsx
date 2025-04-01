import Link from "next/link";
import styles from "./Navbar.module.css";
import { FaLinkedin, FaGithub, FaItchIo } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Left side - Animated Retro Icon with Home Link */}
      <Link href="/" className={styles.retroIcon}>
        <span className={styles.innerText}>DJP</span>
      </Link>

      {/* Right Side - Icons & Version */}
      <div className={styles.socials}>
        <a href="https://www.linkedin.com/in/dylanjohnpratt/" target="_blank" className={styles.icon}><FaLinkedin /></a>
        <a href="https://github.com/dylanjp" target="_blank" className={styles.icon}><FaGithub /></a>
        <a href="https://legendaryepics.itch.io/" target="_blank" className={styles.icon}><FaItchIo /></a>
        <span className={styles.version}>v1.0.0</span>
      </div>
    </nav>
  );
}

"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createBleep } from "@arwes/bleeps";
import styles from "./Navbar.module.css";
import { FaLinkedin, FaGithub, FaItchIo } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const pages = [
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Resume", href: "/resume" },
    { name: "About", href: "/about" },
  ];

  // Only show center links when not on the homepage.
  const showCenterLinks = pathname !== "/";

  useEffect(() => {
    const bleep = createBleep({
      sources: [{ src: "/sounds/click.mp3", type: "audio/mpeg" }],
    });

    const handleClick = () => {
      bleep?.play();
    };

    // Attach event listener to all anchor elements
    const clickableElements = document.querySelectorAll("a");
    clickableElements.forEach((el) => el.addEventListener("click", handleClick));

    return () => {
      clickableElements.forEach((el) => el.removeEventListener("click", handleClick));
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      {/* Left side - Animated Retro Icon with Home Link */}
      <Link href="/" className={styles.retroIcon}>
        <span className={styles.innerText}>DJP</span>
      </Link>

      {/* Center - Conditional navigation links */}
      {showCenterLinks && (
        <div className={styles.links}>
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className={`${styles.navLink} ${pathname === page.href ? styles.activeNavLink : ""}`}
            >
              {page.name}
            </Link>
          ))}
        </div>
      )}

      {/* Right Side - Icons & Version */}
      <div className={styles.socials}>
        <a
          href="https://www.linkedin.com/in/dylanjohnpratt/"
          target="_blank"
          className={styles.icon}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/dylanjp"
          target="_blank"
          className={styles.icon}
        >
          <FaGithub />
        </a>
        <a
          href="https://legendaryepics.itch.io/"
          target="_blank"
          className={styles.icon}
        >
          <FaItchIo />
        </a>
        <span className={styles.version}>v1.0.0</span>
      </div>
    </nav>
  );
}

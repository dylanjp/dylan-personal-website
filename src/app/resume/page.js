"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import styles from "./resume.module.css";
import TestimonialSection from "@/components/TestimonialSection";

const techStack = [
  { name: "Java", icon: "/java.svg" },
  { name: "JavaScript", icon: "/javascript.svg" },
  { name: "C++", icon: "/cpp.svg" },
  { name: "Kotlin", icon: "/kotlin.svg" },
  { name: "TypeScript", icon: "/typescript.svg" },
  { name: "React", icon: "/react.svg" },
  { name: "Next.js", icon: "/nextjs.png" },
  { name: "SpringBoot", icon: "/spring.svg" },
  { name: "Node.js", icon: "/node.svg" },
  { name: "AWS", icon: "/aws.svg" },
  { name: "Azure DevOps", icon: "/azure.svg" },
  { name: "Docker", icon: "/docker.svg" },
  { name: "GraphQL", icon: "/graphql.svg" },
  { name: "SQL", icon: "/sql.svg" },
  { name: "Terraform", icon: "/terraform.svg" },
  { name: "Git", icon: "/git.svg" },
  { name: "Unreal Engine", icon: "/unreal.svg" },
];

export default function ResumePage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Background />
      
      {/* Hero Section */}
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className={styles.title}>My Skills & Experience</h1>
        <button className={styles.downloadButton}>Download Resume</button>
      </motion.div>
      
{/* Tech Tiles Section (Dynamic Grid) */}
<div className={styles.techSection}>
  <h2 className={styles.sectionTitle}>Tech Skills</h2>
  <motion.div 
    className={styles.techGrid} 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 1 }}
  >
    {techStack.map((tech, index) => (
      <motion.div 
        key={index} 
        className={styles.techTile}
        whileHover={{ scale: 1.1, rotate: 3 }}  // subtle rotation on hover
      >
        <img src={tech.icon} alt={tech.name} className={styles.techIcon} />
        <p>{tech.name}</p>
      </motion.div>
    ))}
  </motion.div>
</div>

      
      {/* Testimonials Section */}
      <TestimonialSection />
    </div>
  );
}

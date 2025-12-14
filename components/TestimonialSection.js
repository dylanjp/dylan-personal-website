"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./TestimonialSection.module.css";

const testimonials = [
  {
    text: "Dylan is fantastic to work with. He is super responsive, is a great listener, has creative ideas, is tenacious at solving techy mysteries, and has complete follow through. And he is fun to be with! I hope to work with him again in the future!",
    author:
      "Adrienne Chamberlain (Associate Director, Experiential Learning & Internships)",
  },
  {
    text: "I absolutely loved working with Dylan. We spent some time assigned to the same project which required collaboration and frequent communication. I could not recommend Dylan high enough. He was the perfect teammate and coworker!",
    author: "Tim Knapp (Software Engineer)",
  },
  {
    text: "Dylan has a unique approach to solving problems. He is also fun to work with and keeps good interpersonal relationships.",
    author: "Smith Mainoo (Software Engineer)",
  },
  {
    text: "He personally researched the development of web services on AWS and presented an excellent training on this topic to our organization.",
    author: "Robert Thornton (Software Engineer)",
  },
  {
    text: "Dylan was incredible to work with. I highly recommend Dylan's services to anyone who needs a quality product delivered efficiently and professionally.",
    author: "Dalton Smith (Client)",
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 12000);
    return () => {
      resetTimeout();
    };
  }, [current]);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const goNext = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const goPrev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

  const variants = {
    hidden: { opacity: 0, filter: "blur(4px)", x: -20 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      x: 0,
      transition: { duration: 0.8 },
    },
    exit: {
      opacity: 0,
      filter: "blur(4px)",
      x: 20,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className={styles.testimonialContainer}>
      {/* <FaArrowLeft className={`${styles.arrow} ${styles["arrow-left"]}`} onClick={goPrev} />
<FaArrowRight className={`${styles.arrow} ${styles["arrow-right"]}`} onClick={goNext} /> */}

      <div className={styles.testimonialWrapper}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={styles.testimonial}
          >
            <p className={styles.text}>{testimonials[current].text}</p>
            <p className={styles.author}>- {testimonials[current].author}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* <FaArrowLeft className={`${styles.arrow} ${styles["arrow-left"]}`} onClick={goPrev} />
<FaArrowRight className={`${styles.arrow} ${styles["arrow-right"]}`} onClick={goNext} /> */}
    </div>
  );
}

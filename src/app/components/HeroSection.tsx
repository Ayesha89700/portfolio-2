"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link"; // Import Link component for navigation
import styles from "@/app/components/HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.grid}>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>
            <span className={styles.gradientText}>Hello, I&apos;m</span>
            <br />
            <TypeAnimation
              sequence={[
                "Ayesha",
                1000,
                "UI/UX Website Designer",
                1000,
                "Front-End Developer",
                1000,
                "Back-End Developer",
                1000,
                "Graphic Designer",
                1000,
                "Digital Marketer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className={styles.description}>
  As a passionate UI/UX designer, I thrive on creating intuitive, user-centered designs that blend functionality with aesthetic appeal.
  Proficient in both front-end and back-end development, I create clean, maintainable code that ensures high performance and usability.
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.hireButton}>Hire Me</button>
            {/* Updated Download CV button */}
            <Link href="/images/cv.jpg" target="_blank" rel="noopener noreferrer">
              <span className={styles.downloadButton}>Download CV</span>
            </Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageBackground}>
            <Image
              src="/images/hero.png"
              alt="hero image"
              className={styles.heroImage}
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

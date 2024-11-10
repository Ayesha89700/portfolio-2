// AboutSection.tsx

"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import styles from "./AboutSection.module.css"; // Import custom CSS module

interface TabData {
  title: string;
  id: string;
  content: JSX.Element;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className={styles.list}>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
        <li>TypeScript</li>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Digital Marketing</li>
        <li>Graphic Design</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className={styles.list}>
        <li>Matric Science</li>
        <li>Inter from Pre-Engineering</li>
        <li>Currently doing BSCS in Cloud Computing Operations</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className={styles.list}>
        <li>WMFCCT as a Graphic Designer</li>
        <li>Enablers as a Digital Marketer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState<string>("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <Image src="/images/about.jpg" alt="About image" width={500} height={300} />
        <div className={styles.textContainer}>
          <h2 className={styles.heading}>About Me</h2>
          <p className={styles.description}>
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with TypeScript, React, Next.js, Tailwind CSS, HTML, CSS.
            I am a quick learner and always looking to expand my knowledge.
          </p>
          <div className={styles.tabContainer}>
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title}
              </TabButton>
            ))}
          </div>
          <div className={styles.contentContainer}>
            {TAB_DATA.find((t) => t.id === tab)?.content || <div>Content not found</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

// components/EmailSection.tsx
"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/images/github-icon.svg";
import LinkedinIcon from "../../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import styles from "./EmailSection.module.css";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const data = {
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      if (!response.ok) {
        throw new Error("Error sending email.");
      }

      setEmailSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.bgGradient}></div>
      <div className={styles.contactText}>
        <h5>Let&apos;s Connect</h5>
        <p>
          I&apos;m currently looking for new opportunities. My inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className={styles.socials}>
          <Link href="https://github.com/Ayesha89700" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" width={24} height={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/ayesha-khan-0a32b22b7/" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" width={24} height={24} />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className={styles.successMessage}>Email sent successfully!</p>
        ) : (
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Your email</label>
              <input
                name="email"
                type="email"
                id="email"
                required
                placeholder="alexa@google.com"
              />
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                placeholder="Just saying hi"
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                required
                placeholder="Let's talk about..."
              />
            </div>
            <button type="submit" className={styles.submitButton}>Send Message</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;

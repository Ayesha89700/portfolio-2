import React from "react";
import styles from "./Footer.module.css"; // Import custom CSS

const Footer = () => {
  return (
    <footer className={`${styles.footer} z-10`}>
      <div className={`${styles.container} flex justify-between`}>
        <span>Portfolio</span>
        <span className={styles.developedBy}>Developed By Ayesha</span>
        <p className={styles.rights}>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

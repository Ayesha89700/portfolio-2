"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import styles from './NavBar.module.css';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.portfolioTitle}>
        Portfolio
      </Link>

      {/* Hamburger Icon */}
      <div className={styles.hamburger} onClick={() => setNavbarOpen(!navbarOpen)}>
        {!navbarOpen ? <Bars3Icon className={styles.icon} /> : <XMarkIcon className={styles.icon} />}
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.menu} ${navbarOpen ? styles.show : ''}`}>
        <NavLink href="#about" title="About" />
        <NavLink href="#projects" title="Projects" />
        <NavLink href="#contact" title="Contact" />
      </div>
    </nav>
  );
};

export default NavBar;

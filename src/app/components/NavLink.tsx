"use client";
import Link from "next/link";
import styles from "./NavLink.module.css";

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link href={href} className={`${styles.navLink} ${styles.smText}`}>
      {title}
    </Link>
  );
};

export default NavLink;

import React from "react";
import NavLink from "./NavLink";
import styles from "./MenuOverly.module.css";

// Define the type for the link objects
interface Link {
  path: string;
  title: string;
}

// Define the props for the component
interface MenuOverlayProps {
  links: Link[];
  closeMenu: () => void; // Function to close the menu
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links, closeMenu }) => {

  // This function handles closing the menu when clicking on the overlay background
  const handleOverlayClick = (e: React.MouseEvent) => {
    // Close the menu only if the overlay background itself is clicked (not the links)
    if (e.target === e.currentTarget) {
      closeMenu();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className={styles.overlay} // Apply custom CSS for overlay
    >
      <ul className={styles.menuList}> {/* Apply custom CSS for menu list */}
        {links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;

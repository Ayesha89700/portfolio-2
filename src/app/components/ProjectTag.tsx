import React from "react";
import styles from './ProjectTag.module.css';

type ProjectTagProps = {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
};

const ProjectTag: React.FC<ProjectTagProps> = ({ name, onClick, isSelected }) => {
  const buttonClass = isSelected
    ? `${styles.selected} ${styles.button}`
    : `${styles.deselected} ${styles.button}`;

  return (
    <button
      className={buttonClass}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;

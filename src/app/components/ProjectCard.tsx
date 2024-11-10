import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  previewUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  title,
  description,
  previewUrl,
}) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.imageContainer}
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className={styles.overlay}>
          <Link href={previewUrl} className={styles.iconLink}>
            <EyeIcon className={styles.icon} />
          </Link>
        </div>
      </div>
      <div className={styles.info}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

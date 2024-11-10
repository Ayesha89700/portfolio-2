// ProjectSection.js
import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './ProjectSection.module.css';

const ProjectSection = () => {
    const projects = [
        {
            imgUrl: '/images/projects/p1.jpeg',
            title: 'Burger Heaven',
            description: 'A delicious burger joint website.',
    previewUrl: "https://burger-ayesha-website.vercel.app/",
        },
        {
            imgUrl: '/images/projects/p2.jpeg',
            title: 'Shop.co',
            description: 'An e-commerce platform for fashion.',
            previewUrl: 'https://shopping-web-ayesha-arsalan.vercel.app/',
        },

        {
            imgUrl: '/images/projects/p3.jpeg',
            title: 'Interactive Resume',
            description: 'A dynamic and interactive resume template.',
            previewUrl: 'https://hackathon1-vert-alpha.vercel.app/',
        },
        {
          imgUrl: '/images/projects/p4.jpeg',
          title: 'Interactive Resume',
          description: 'A editable  and shareable resume template.',
          previewUrl: 'https://hackathon1-vert-alpha.vercel.app/',
      },

        // Add more projects as needed
    ];

    return (
        <div className={styles.projectSection}>
            <h2 className={styles.heading}>My Projects</h2>
            <div className={styles.cardsContainer}>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        imgUrl={project.imgUrl}
                        title={project.title}
                        description={project.description}
                        previewUrl={project.previewUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectSection;
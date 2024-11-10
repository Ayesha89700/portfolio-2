// pages/index.tsx
import React from 'react';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
        <Footer />
      </main>
    </div>
  );
}

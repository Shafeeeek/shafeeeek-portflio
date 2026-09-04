/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

function PortfolioApp() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState<'calm-cue' | 'diabetes-expert' | 'coffee-brain'>('calm-cue');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleSelectDemo = (demo: 'calm-cue' | 'diabetes-expert' | 'coffee-brain') => {
    setSelectedDemo(demo);
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
      isDark 
        ? 'bg-[#0A0A0A] text-[#F5F5F5] selection:bg-white selection:text-black' 
        : 'bg-[#F8FAFC] text-slate-900 selection:bg-sky-500 selection:text-white'
    }`}>
      {/* Sticky Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onSelectProjectDemo={handleSelectDemo}
        />
        <ProjectsSection
          selectedDemo={selectedDemo}
          onSelectDemo={handleSelectDemo}
        />
        <ExperienceSection />
        <SkillsMatrix />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Interactive Official Printable & Copyable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}

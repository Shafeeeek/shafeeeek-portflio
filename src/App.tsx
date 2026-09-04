/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState<'calm-cue' | 'diabetes-expert' | 'coffee-brain'>('calm-cue');

  const handleSelectDemo = (demo: 'calm-cue' | 'diabetes-expert' | 'coffee-brain') => {
    setSelectedDemo(demo);
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] flex flex-col font-sans selection:bg-white selection:text-black">
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

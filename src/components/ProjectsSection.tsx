import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Play, 
  ChevronRight
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { InteractiveDevicePreview } from './InteractiveDevicePreview';

interface ProjectsSectionProps {
  selectedDemo: 'calm-cue' | 'diabetes-expert' | 'coffee-brain';
  onSelectDemo: (demo: 'calm-cue' | 'diabetes-expert' | 'coffee-brain') => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  selectedDemo,
  onSelectDemo,
}) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Mobile' | 'Healthcare Mobile' | 'Full-Stack & AI'>('All');

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 border-b border-white/10 relative bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">01 / Portfolio Showcase</span>
              <span className="w-8 h-[1px] bg-white/20" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-light text-[#F5F5F5] tracking-tight">
              Featured Systems & Applications
            </h2>
            <p className="text-[#A3A3A3] text-sm sm:text-base mt-2 max-w-2xl font-light leading-relaxed">
              Production cross-platform mobile apps, clinical inference engines, and intelligent systems developed with React Native, Expo, Supabase, and Python.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-white/5 rounded-full border border-white/10 self-start md:self-auto">
            {(['All', 'Mobile', 'Healthcare Mobile', 'Full-Stack & AI'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-[11px] uppercase tracking-wider transition-all font-medium ${
                  activeFilter === filter
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Showcase Grid: Left (Project Cards) | Right (Interactive Simulator) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Project Cards */}
          <div className="lg:col-span-7 space-y-8">
            {filteredProjects.map((project: Project) => {
              const isSelected = selectedDemo === project.demoType;
              return (
                <div
                  key={project.id}
                  id={`project-card-${project.id}`}
                  className={`p-8 rounded-sm transition-all duration-300 border ${
                    isSelected
                      ? 'bg-[#151515] border-white/40 ring-1 ring-white/20 shadow-2xl'
                      : 'bg-[#151515]/70 border-white/10 hover:border-white/25 hover:bg-[#151515]'
                  }`}
                >
                  {/* Top Bar: Title, Category & Period */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-light text-white tracking-tight">
                          {project.title}
                        </h3>
                        <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/5 text-white/50 border border-white/10">
                          {project.period}
                        </span>
                      </div>
                      <p className="text-xs text-white/50 uppercase tracking-widest font-mono mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    <button
                      id={`btn-demo-${project.id}`}
                      onClick={() => onSelectDemo(project.demoType)}
                      className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-semibold transition-all ${
                        isSelected
                          ? 'bg-white text-black shadow-md'
                          : 'bg-white/5 hover:bg-white/10 text-white/80 border border-white/15'
                      }`}
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>{isSelected ? 'Currently Simulating' : 'Simulate in Device'}</span>
                    </button>
                  </div>

                  {/* Tagline */}
                  <p className="text-sm text-[#A3A3A3] mb-5 font-light leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Bullet points from CV */}
                  <div className="space-y-2.5 mb-6">
                    {project.points.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-white/70 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white/80 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Metrics / Highlights */}
                  {project.keyMetrics && (
                    <div className="grid grid-cols-3 gap-2 p-3.5 rounded-sm bg-[#0A0A0A] border border-white/10 mb-6">
                      {project.keyMetrics.map((metric, i) => (
                        <div key={i} className="text-center">
                          <p className="text-[9px] text-white/40 uppercase tracking-[0.2em]">
                            {metric.label}
                          </p>
                          <p className="text-xs font-mono font-medium text-white mt-1 truncate">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technology Pills */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider bg-white/5 text-white/60 border border-white/10 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onSelectDemo(project.demoType)}
                      className="text-[11px] uppercase tracking-wider font-semibold text-white/70 hover:text-white flex items-center gap-1 group"
                    >
                      <span>Launch Preview</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Live Interactive Device Preview */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="p-8 rounded-sm bg-[#151515] border border-white/10 shadow-2xl">
              <div className="text-center mb-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-mono">
                  Interactive Simulator
                </span>
                <h4 className="text-lg font-light text-white tracking-tight mt-1">
                  Experience The Architecture
                </h4>
                <p className="text-xs text-white/50 font-light mt-1">
                  Interact with real software states, test the inference rules, and examine the mobile UI.
                </p>
              </div>

              <InteractiveDevicePreview initialApp={selectedDemo} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

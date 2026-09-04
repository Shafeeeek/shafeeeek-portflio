import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Play, 
  ChevronRight,
  Atom
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { InteractiveDevicePreview } from './InteractiveDevicePreview';
import { useTheme } from '../context/ThemeContext';

interface ProjectsSectionProps {
  selectedDemo: 'calm-cue' | 'diabetes-expert' | 'coffee-brain';
  onSelectDemo: (demo: 'calm-cue' | 'diabetes-expert' | 'coffee-brain') => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  selectedDemo,
  onSelectDemo,
}) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Mobile' | 'Healthcare Mobile' | 'Full-Stack & AI'>('All');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className={`py-24 border-b relative transition-colors duration-300 ${
      isDark ? 'bg-[#0A0A0A] border-white/10' : 'bg-[#F8FAFC] border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-[10px] uppercase tracking-[0.25em] font-mono ${
                isDark ? 'text-white/40' : 'text-slate-400'
              }`}>
                01 / Portfolio Showcase
              </span>
              <span className={`w-8 h-[1px] ${isDark ? 'bg-white/20' : 'bg-slate-300'}`} />
            </div>
            
            <h2 className={`text-4xl sm:text-5xl font-light tracking-tight transition-colors ${
              isDark ? 'text-[#F5F5F5]' : 'text-slate-900'
            }`}>
              React & Mobile Applications
            </h2>
            <p className={`text-sm sm:text-base mt-2 max-w-2xl font-light leading-relaxed transition-colors ${
              isDark ? 'text-[#A3A3A3]' : 'text-slate-600'
            }`}>
              Production web applications, cross-platform mobile architectures, and AI-assisted tools engineered with React.js, React Native, TypeScript, and Supabase.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className={`flex flex-wrap gap-1.5 p-1 rounded-full border self-start md:self-auto transition-colors ${
            isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-2xs'
          }`}>
            {(['All', 'Full-Stack & AI', 'Mobile', 'Healthcare Mobile'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-[11px] uppercase tracking-wider transition-all font-medium font-mono ${
                  activeFilter === filter
                    ? (isDark ? 'bg-white text-black font-semibold shadow-sm' : 'bg-slate-900 text-white font-semibold shadow-xs')
                    : (isDark ? 'text-white/50 hover:text-white' : 'text-slate-500 hover:text-slate-900')
                }`}
              >
                {filter === 'Full-Stack & AI' ? 'ReactJS Web & AI' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Project Cards */}
          <div className="lg:col-span-7 space-y-8">
            {filteredProjects.map((project: Project) => {
              const isSelected = selectedDemo === project.demoType;
              return (
                <div
                  key={project.id}
                  id={`project-card-${project.id}`}
                  className={`p-7 sm:p-8 rounded-sm transition-all duration-300 border ${
                    isSelected
                      ? (isDark 
                          ? 'bg-[#151515] border-white/40 ring-1 ring-white/20 shadow-2xl' 
                          : 'bg-white border-sky-500 ring-2 ring-sky-500/20 shadow-lg')
                      : (isDark 
                          ? 'bg-[#151515]/70 border-white/10 hover:border-white/25 hover:bg-[#151515]' 
                          : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs')
                  }`}
                >
                  {/* Top Bar: Title, Category & Period */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className={`text-2xl font-light tracking-tight ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}>
                          {project.title}
                        </h3>
                        <span className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${
                          isDark ? 'bg-white/5 text-white/50 border-white/10' : 'bg-slate-100 text-slate-600 border-slate-200'
                        }`}>
                          {project.period}
                        </span>
                      </div>
                      <p className={`text-xs uppercase tracking-widest font-mono mt-1 ${
                        isDark ? 'text-white/50' : 'text-slate-500'
                      }`}>
                        {project.subtitle}
                      </p>
                    </div>

                    <button
                      id={`btn-demo-${project.id}`}
                      onClick={() => onSelectDemo(project.demoType)}
                      className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-semibold transition-all ${
                        isSelected
                          ? (isDark ? 'bg-white text-black shadow-md' : 'bg-slate-900 text-white shadow-md')
                          : (isDark ? 'bg-white/5 hover:bg-white/10 text-white/80 border border-white/15' : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300')
                      }`}
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>{isSelected ? 'Currently Loaded' : 'Simulate in Device'}</span>
                    </button>
                  </div>

                  {/* Tagline */}
                  <p className={`text-sm mb-5 font-light leading-relaxed ${
                    isDark ? 'text-[#A3A3A3]' : 'text-slate-600'
                  }`}>
                    {project.tagline}
                  </p>

                  {/* Bullet points from CV */}
                  <div className="space-y-2.5 mb-6">
                    {project.points.map((point, idx) => (
                      <div key={idx} className={`flex items-start gap-2.5 text-xs font-light ${
                        isDark ? 'text-white/70' : 'text-slate-700'
                      }`}>
                        <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                          isDark ? 'text-white/80' : 'text-sky-600'
                        }`} />
                        <span className="leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Metrics / Highlights */}
                  {project.keyMetrics && (
                    <div className={`grid grid-cols-3 gap-2 p-3.5 rounded-sm border mb-6 ${
                      isDark ? 'bg-[#0A0A0A] border-white/10' : 'bg-slate-50 border-slate-200'
                    }`}>
                      {project.keyMetrics.map((metric, i) => (
                        <div key={i} className="text-center">
                          <p className={`text-[9px] uppercase tracking-[0.2em] font-mono ${
                            isDark ? 'text-white/40' : 'text-slate-400'
                          }`}>
                            {metric.label}
                          </p>
                          <p className={`text-xs font-mono font-medium mt-1 truncate ${
                            isDark ? 'text-white' : 'text-slate-900'
                          }`}>
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technology Pills */}
                  <div className={`flex flex-wrap items-center justify-between gap-3 pt-4 border-t ${
                    isDark ? 'border-white/10' : 'border-slate-200'
                  }`}>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-mono border ${
                            isDark ? 'bg-white/5 text-white/60 border-white/10' : 'bg-slate-100 text-slate-700 border-slate-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onSelectDemo(project.demoType)}
                      className={`text-[11px] uppercase tracking-wider font-semibold flex items-center gap-1 group transition-colors ${
                        isDark ? 'text-white/70 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <span>Simulate App</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Live Interactive Device Preview */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className={`p-6 sm:p-8 rounded-sm border shadow-xl transition-colors ${
              isDark ? 'bg-[#151515] border-white/10' : 'bg-white border-slate-200'
            }`}>
              <div className="text-center mb-6">
                <span className={`text-[10px] uppercase tracking-[0.25em] font-mono ${
                  isDark ? 'text-white/40' : 'text-slate-400'
                }`}>
                  Live Software Simulator
                </span>
                <h4 className={`text-lg font-light tracking-tight mt-1 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  Web & Mobile Architecture
                </h4>
                <p className={`text-xs font-light mt-1 ${
                  isDark ? 'text-white/50' : 'text-slate-500'
                }`}>
                  Switch between the ReactJS Web Dashboard and React Native smartphone experiences.
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

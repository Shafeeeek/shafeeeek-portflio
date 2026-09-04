import React, { useState } from 'react';
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Database, 
  Brain, 
  Layers, 
  Check, 
  Search,
  Sparkles
} from 'lucide-react';
import { skillCategories, softSkillsList } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'Mobile Development':
        return <Smartphone className="w-4 h-4 text-white" />;
      case 'Programming Languages':
        return <Code2 className="w-4 h-4 text-white" />;
      case 'Web & Full-Stack':
        return <Globe className="w-4 h-4 text-white" />;
      case 'Databases & Cloud':
        return <Database className="w-4 h-4 text-white" />;
      case 'Machine Learning & AI':
        return <Brain className="w-4 h-4 text-white" />;
      default:
        return <Layers className="w-4 h-4 text-white" />;
    }
  };

  const filteredCategories = skillCategories
    .filter((cat) => selectedCategory === 'All' || cat.category === selectedCategory)
    .map((cat) => ({
      ...cat,
      skills: cat.skills.filter((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-24 border-b border-white/10 relative bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">04 / Competencies</span>
              <span className="w-8 h-[1px] bg-white/20" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-light text-[#F5F5F5] tracking-tight">
              Technical Stack
            </h2>
            <p className="text-[#A3A3A3] text-sm sm:text-base mt-2 max-w-2xl font-light leading-relaxed">
              Comprehensive toolkit spanning cross-platform mobile frameworks, full-stack backends, machine learning architectures, and system programming.
            </p>
          </div>

          {/* Search bar */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Filter skill (e.g. React Native)..."
                className="w-full sm:w-64 pl-10 pr-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2">
          {['All', ...skillCategories.map((c) => c.category)].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-[11px] uppercase tracking-wider whitespace-nowrap transition-all font-medium ${
                selectedCategory === cat
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'bg-white/5 text-white/50 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-8 rounded-sm bg-[#151515] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-sm bg-white/5 border border-white/15 flex items-center justify-center">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-white tracking-tight">
                      {cat.category}
                    </h3>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 font-mono">
                      {cat.skills.length} competencies
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#A3A3A3] mb-6 font-light leading-relaxed">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-[11px] font-mono bg-[#0A0A0A] text-white/70 border border-white/10 hover:border-white/30 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section from CV */}
        <div className="p-8 rounded-sm bg-[#151515] border border-white/10">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
            <Sparkles className="w-4 h-4 text-white/70" />
            <div>
              <h3 className="text-base font-light text-white uppercase tracking-wider">Professional & Methodological Competencies</h3>
              <p className="text-xs text-white/40 font-light">Key soft skills evaluated and highlighted in Mohamed's CV</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {softSkillsList.map((skill, i) => (
              <div
                key={i}
                className="p-4 rounded-sm bg-[#0A0A0A] border border-white/10 space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-white/80 shrink-0" />
                  <h4 className="text-xs font-semibold text-white tracking-wider uppercase truncate">{skill.name}</h4>
                </div>
                <p className="text-[11px] text-[#A3A3A3] font-light leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

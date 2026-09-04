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
  Sparkles,
  Atom
} from 'lucide-react';
import { skillCategories, softSkillsList } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const SkillsMatrix: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'React & Frontend Ecosystem':
        return <Atom className="w-4 h-4 text-sky-500 animate-spin-slow" />;
      case 'Programming Languages':
        return <Code2 className="w-4 h-4 text-purple-500" />;
      case 'Backend & Web Frameworks':
        return <Globe className="w-4 h-4 text-emerald-500" />;
      case 'Databases & Cloud Storage':
        return <Database className="w-4 h-4 text-blue-500" />;
      case 'Machine Learning & AI Integration':
        return <Brain className="w-4 h-4 text-amber-500" />;
      default:
        return <Layers className="w-4 h-4 text-slate-400" />;
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
    <section id="skills" className={`py-24 border-b relative transition-colors duration-300 ${
      isDark ? 'bg-[#0A0A0A] border-white/10' : 'bg-[#F8FAFC] border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-[10px] uppercase tracking-[0.25em] font-mono ${
                isDark ? 'text-white/40' : 'text-slate-400'
              }`}>
                04 / Competencies
              </span>
              <span className={`w-8 h-[1px] ${isDark ? 'bg-white/20' : 'bg-slate-300'}`} />
            </div>
            <h2 className={`text-4xl sm:text-5xl font-light tracking-tight ${
              isDark ? 'text-[#F5F5F5]' : 'text-slate-900'
            }`}>
              React & Tech Stack
            </h2>
            <p className={`text-sm sm:text-base mt-2 max-w-2xl font-light leading-relaxed ${
              isDark ? 'text-[#A3A3A3]' : 'text-slate-600'
            }`}>
              Comprehensive toolkit centered on modern React ecosystem (React.js, React Native, Next.js, TypeScript), state architectures, APIs, and cloud services.
            </p>
          </div>

          {/* Search bar */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative">
              <Search className={`w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 ${
                isDark ? 'text-white/40' : 'text-slate-400'
              }`} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Filter stack (e.g. React, Hooks)..."
                className={`w-full sm:w-64 pl-10 pr-4 py-2 rounded-full text-xs transition-colors focus:outline-none border ${
                  isDark
                    ? 'bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-white/30'
                    : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-sky-500 shadow-2xs'
                }`}
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
              className={`px-4 py-1.5 rounded-full text-[11px] uppercase tracking-wider whitespace-nowrap transition-all font-mono font-medium ${
                selectedCategory === cat
                  ? (isDark ? 'bg-white text-black font-semibold shadow-sm' : 'bg-slate-900 text-white font-semibold shadow-xs')
                  : (isDark ? 'bg-white/5 text-white/50 hover:text-white border border-white/10' : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200')
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
              className={`p-7 sm:p-8 rounded-sm border transition-all flex flex-col justify-between ${
                isDark 
                  ? 'bg-[#151515] border-white/10 hover:border-white/20' 
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-8 h-8 rounded-sm border flex items-center justify-center ${
                    isDark ? 'bg-white/5 border-white/15' : 'bg-slate-50 border-slate-200'
                  }`}>
                    {getCategoryIcon(cat.category)}
                  </div>
                  <div>
                    <h3 className={`text-lg font-light tracking-tight ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {cat.category}
                    </h3>
                    <p className={`text-[10px] uppercase tracking-widest font-mono ${
                      isDark ? 'text-white/40' : 'text-slate-400'
                    }`}>
                      {cat.skills.length} competencies
                    </p>
                  </div>
                </div>

                <p className={`text-xs mb-6 font-light leading-relaxed ${
                  isDark ? 'text-[#A3A3A3]' : 'text-slate-600'
                }`}>
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => {
                    const isReactPrimary = skill.toLowerCase().includes('react') || skill.toLowerCase().includes('hook') || skill.toLowerCase().includes('typescript');
                    return (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-[11px] font-mono border transition-colors ${
                          isReactPrimary
                            ? (isDark 
                                ? 'bg-sky-500/10 text-sky-400 border-sky-500/30' 
                                : 'bg-sky-50 text-sky-700 border-sky-200 font-medium')
                            : (isDark 
                                ? 'bg-[#0A0A0A] text-white/70 border-white/10 hover:border-white/30 hover:text-white' 
                                : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300')
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className={`p-8 rounded-sm border ${
          isDark ? 'bg-[#151515] border-white/10' : 'bg-white border-slate-200 shadow-xs'
        }`}>
          <div className={`flex items-center gap-3 mb-6 pb-4 border-b ${
            isDark ? 'border-white/10' : 'border-slate-200'
          }`}>
            <Sparkles className={`w-4 h-4 ${isDark ? 'text-white/70' : 'text-sky-600'}`} />
            <div>
              <h3 className={`text-base font-light uppercase tracking-wider ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Engineering & Professional Methodologies
              </h3>
              <p className={`text-xs font-light ${isDark ? 'text-white/40' : 'text-slate-500'}`}>
                Evaluated teamwork, problem-solving, and delivery practices from Mohamed's engineering profile
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {softSkillsList.map((skill, i) => (
              <div
                key={i}
                className={`p-4 rounded-sm border space-y-1.5 ${
                  isDark ? 'bg-[#0A0A0A] border-white/10' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Check className={`w-3.5 h-3.5 shrink-0 ${isDark ? 'text-white/80' : 'text-sky-600'}`} />
                  <h4 className={`text-xs font-semibold tracking-wider uppercase truncate ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {skill.name}
                  </h4>
                </div>
                <p className={`text-[11px] font-light leading-relaxed ${
                  isDark ? 'text-[#A3A3A3]' : 'text-slate-600'
                }`}>
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

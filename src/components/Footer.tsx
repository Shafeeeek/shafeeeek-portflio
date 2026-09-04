import React from 'react';
import { Github, Linkedin, ArrowUp, Atom } from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-14 border-t text-xs transition-colors duration-300 ${
      isDark ? 'bg-[#0A0A0A] border-white/10 text-white/40' : 'bg-slate-50 border-slate-200 text-slate-500'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className={`flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b ${
          isDark ? 'border-white/10' : 'border-slate-200'
        }`}>
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 flex items-center justify-center rounded-sm border ${
              isDark ? 'bg-white/5 border-white/10 text-[#00D8FE]' : 'bg-sky-50 border-sky-200 text-sky-600'
            }`}>
              <Atom className="w-4 h-4 animate-spin-slow" />
            </div>
            <div>
              <p className={`font-medium text-xs uppercase tracking-widest font-mono ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {profileData.name} <span className="text-sky-500">.tsx</span>
              </p>
              <p className={`text-[10px] tracking-wider uppercase ${
                isDark ? 'text-white/40' : 'text-slate-400'
              }`}>
                React & React Native Developer
              </p>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className={`flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-[11px] uppercase tracking-widest font-mono ${
            isDark ? 'text-white/50' : 'text-slate-600'
          }`}>
            <a href="#projects" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}>Projects</a>
            <a href="#experience" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}>Experience</a>
            <a href="#skills" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}>Skills</a>
            <a href="#education" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}>Education</a>
            <button onClick={onOpenResume} className={`transition-colors uppercase ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}>
              Full CV
            </button>
            <a href="#contact" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}>Contact</a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full border transition-colors ${
                isDark 
                  ? 'bg-white/5 text-white/50 hover:text-white border-white/10' 
                  : 'bg-white text-slate-600 hover:text-slate-900 border-slate-200 shadow-2xs'
              }`}
              aria-label="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href={profileData.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full border transition-colors ${
                isDark 
                  ? 'bg-white/5 text-white/50 hover:text-white border-white/10' 
                  : 'bg-white text-sky-600 hover:text-sky-700 border-slate-200 shadow-2xs'
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={scrollToTop}
              className={`p-2 rounded-full border transition-colors ml-2 ${
                isDark 
                  ? 'bg-white/5 text-white/50 hover:text-white border-white/10' 
                  : 'bg-white text-slate-600 hover:text-slate-900 border-slate-200 shadow-2xs'
              }`}
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className={`pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] uppercase tracking-widest font-mono ${
          isDark ? 'text-white/30' : 'text-slate-400'
        }`}>
          <p>© {new Date().getFullYear()} Mohamed Shafeek. React & Frontend Architecture.</p>
          <p>
            Cairo, Egypt • Available Immediately
          </p>
        </div>
      </div>
    </footer>
  );
};

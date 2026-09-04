import React, { useState } from 'react';
import { 
  FileText, 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  Sun,
  Moon,
  Atom
} from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const navLinks = [
    { num: '01', label: 'Projects', href: '#projects' },
    { num: '02', label: 'Experience', href: '#experience' },
    { num: '03', label: 'Skills', href: '#skills' },
    { num: '04', label: 'Education', href: '#education' },
    { num: '05', label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md transition-colors duration-300 border-b ${
      isDark 
        ? 'bg-[#0A0A0A]/90 border-white/10 text-white' 
        : 'bg-white/90 border-slate-200 text-slate-900 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 h-16 flex items-center justify-between">
        
        {/* Brand with React Accent */}
        <a href="#" className="flex items-center gap-3 group">
          <div className={`w-8 h-8 flex items-center justify-center rounded-sm transition-transform duration-500 group-hover:scale-105 border ${
            isDark 
              ? 'bg-white/5 border-white/10 text-[#00D8FE]' 
              : 'bg-sky-50 border-sky-200 text-sky-600'
          }`}>
            <Atom className="w-4 h-4 animate-spin-slow" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-bold tracking-[0.18em] uppercase transition-colors ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Shafeek<span className={isDark ? 'text-[#00D8FE]' : 'text-sky-600'}>.tsx</span>
              </span>
              <span className={`hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] tracking-wider uppercase font-mono ${
                isDark 
                  ? 'bg-white/5 border border-white/10 text-white/70' 
                  : 'bg-slate-100 border border-slate-200 text-slate-700'
              }`}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                React Dev
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center gap-8 text-[11px] uppercase tracking-widest ${
          isDark ? 'text-white/50' : 'text-slate-500'
        }`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`transition-colors flex items-center gap-1.5 ${
                isDark ? 'hover:text-white' : 'hover:text-slate-900'
              }`}
            >
              <span className={`font-mono text-[10px] ${
                isDark ? 'text-white/30' : 'text-slate-400'
              }`}>{link.num}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Action Controls: Theme Switcher & CV & Socials */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Theme Toggle Button */}
          <button
            id="btn-theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
            title={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
            className={`p-2 rounded-full border transition-all duration-300 flex items-center justify-center ${
              isDark 
                ? 'bg-white/5 hover:bg-white/10 text-amber-300 border-white/10' 
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
            }`}
          >
            {isDark ? (
              <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 transition-transform duration-300 -rotate-12 hover:rotate-0" />
            )}
          </button>

          <a
            href={profileData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full border transition-colors ${
              isDark
                ? 'text-white/60 hover:text-white bg-white/5 hover:bg-white/10 border-white/10'
                : 'text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border-slate-200'
            }`}
            aria-label="GitHub Profile"
          >
            <Github className="w-3.5 h-3.5" />
          </a>
          <a
            href={profileData.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full border transition-colors ${
              isDark
                ? 'text-white/60 hover:text-white bg-white/5 hover:bg-white/10 border-white/10'
                : 'text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border-slate-200'
            }`}
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>

          <button
            id="btn-nav-resume"
            onClick={onOpenResume}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-widest font-semibold transition-all shadow-sm ${
              isDark
                ? 'bg-white text-black hover:bg-white/90'
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
          >
            <FileText className="w-3 h-3" />
            <span>CV</span>
          </button>
        </div>

        {/* Mobile Hamburger & Quick Theme Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="btn-theme-toggle-mobile"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
            className={`p-2 rounded-full border transition-all ${
              isDark 
                ? 'bg-white/5 text-amber-300 border-white/10' 
                : 'bg-slate-100 text-slate-700 border-slate-200'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            id="btn-mobile-cv"
            onClick={onOpenResume}
            className={`px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-semibold ${
              isDark ? 'bg-white text-black' : 'bg-slate-900 text-white'
            }`}
            title="View Resume"
          >
            CV
          </button>

          <button
            id="btn-mobile-menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-md border ${
              isDark
                ? 'text-white/70 hover:text-white bg-white/5 border-white/10'
                : 'text-slate-700 hover:text-slate-900 bg-slate-100 border-slate-200'
            }`}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden border-b px-6 pt-3 pb-6 space-y-4 ${
          isDark ? 'bg-[#0A0A0A] border-white/10' : 'bg-white border-slate-200'
        }`}>
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 text-xs uppercase tracking-widest rounded-md transition-colors ${
                  isDark
                    ? 'text-white/60 hover:text-white hover:bg-white/5'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span className={`font-mono text-[10px] ${
                  isDark ? 'text-white/30' : 'text-slate-400'
                }`}>{link.num}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          <div className={`pt-4 border-t flex items-center justify-between ${
            isDark ? 'border-white/10' : 'border-slate-200'
          }`}>
            <div className="flex gap-2">
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full border ${
                  isDark ? 'text-white/70 bg-white/5 border-white/10' : 'text-slate-700 bg-slate-100 border-slate-200'
                }`}
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href={profileData.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full border ${
                  isDark ? 'text-white/70 bg-white/5 border-white/10' : 'text-slate-700 bg-slate-100 border-slate-200'
                }`}
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className={`p-2 rounded-full border ${
                  isDark ? 'text-white/70 bg-white/5 border-white/10' : 'text-slate-700 bg-slate-100 border-slate-200'
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenResume();
              }}
              className={`px-4 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-semibold ${
                isDark ? 'bg-white text-black' : 'bg-slate-900 text-white'
              }`}
            >
              Open Full Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

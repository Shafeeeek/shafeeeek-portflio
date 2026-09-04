import React, { useState } from 'react';
import { 
  FileText, 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  Smartphone 
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { num: '01', label: 'Projects', href: '#projects' },
    { num: '02', label: 'Experience', href: '#experience' },
    { num: '03', label: 'Skills', href: '#skills' },
    { num: '04', label: 'Education', href: '#education' },
    { num: '05', label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0A0A0A]/95 border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm">
            <div className="w-4 h-4 border border-white/30 rotate-45 group-hover:rotate-90 transition-transform duration-500" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold tracking-[0.25em] uppercase text-white group-hover:text-white/80 transition-colors">
                Shafeek<span className="text-white/40">.dev</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white/5 border border-white/10 rounded-full text-[10px] tracking-wider uppercase text-white/60">
                <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
                Available
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-widest text-white/50">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span className="text-white/30 font-mono text-[10px]">{link.num}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={profileData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-white/50 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-3.5 h-3.5" />
          </a>
          <a
            href={profileData.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-white/50 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>

          <button
            id="btn-nav-resume"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-widest font-semibold bg-white text-black hover:bg-white/90 transition-all shadow-sm"
          >
            <FileText className="w-3 h-3" />
            <span>CV</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="btn-mobile-cv"
            onClick={onOpenResume}
            className="px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-semibold bg-white text-black"
            title="View Resume"
          >
            CV
          </button>

          <button
            id="btn-mobile-menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-white/70 hover:text-white bg-white/5 border border-white/10"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-white/10 px-6 pt-3 pb-6 space-y-4">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 text-xs uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                <span className="text-white/30 font-mono text-[10px]">{link.num}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex gap-2">
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-white/70 bg-white/5 border border-white/10"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href={profileData.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-white/70 bg-white/5 border border-white/10"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="p-2 rounded-full text-white/70 bg-white/5 border border-white/10"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenResume();
              }}
              className="px-4 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-semibold bg-white text-black"
            >
              Open Full Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

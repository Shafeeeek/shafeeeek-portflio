import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] py-14 border-t border-white/10 text-xs text-white/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm">
              <div className="w-3.5 h-3.5 border border-white/30 rotate-45" />
            </div>
            <div>
              <p className="font-medium text-white text-xs uppercase tracking-widest">{profileData.name}</p>
              <p className="text-white/40 text-[10px] tracking-wider uppercase">
                Mobile & Software Engineer
              </p>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-[11px] uppercase tracking-widest">
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <button onClick={onOpenResume} className="hover:text-white transition-colors uppercase">
              Resume Modal
            </button>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 text-white/50 hover:text-white border border-white/10 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href={profileData.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 text-white/50 hover:text-white border border-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 text-white/50 hover:text-white border border-white/10 transition-colors ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] uppercase tracking-widest text-white/30">
          <p>© {new Date().getFullYear()} Mohamed Shafeek. All rights reserved.</p>
          <p>
            Systematic Design • Cairo, Egypt
          </p>
        </div>
      </div>
    </footer>
  );
};

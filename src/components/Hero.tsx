import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  MapPin, 
  GraduationCap, 
  Smartphone, 
  ShieldCheck, 
  Check, 
  Copy, 
  Terminal,
  Code2
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onSelectProjectDemo: (demoType: 'calm-cue' | 'diabetes-expert' | 'coffee-brain') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onSelectProjectDemo }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-20 overflow-hidden border-b border-white/10 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          
          {/* Left Column: Architectural Typography & Bio */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Eyebrow marker */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">Portfolio.24 / Mobile Engineering</span>
              <span className="w-8 h-[1px] bg-white/20" />
            </div>

            {/* Architectural Heading */}
            <div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light leading-[0.9] tracking-tighter text-[#F5F5F5] mb-4 uppercase">
                MOHAMED<br />
                <span className="text-white/35 font-extralight">SHAFEEK</span>
              </h1>
              <p className="text-[#A3A3A3] text-lg sm:text-xl font-light max-w-xl leading-relaxed">
                Mobile Application Developer based in Cairo, specializing in React Native, Expo framework, and systematic cross-platform interfaces.
              </p>
            </div>

            {/* Summary description from CV */}
            <p className="text-sm text-white/50 leading-relaxed max-w-xl font-light">
              {profileData.summary}
            </p>

            {/* Expertise Pills */}
            <div className="space-y-3">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Core Expertise</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3.5 py-1 bg-white/5 border border-white/10 rounded-full text-[11px] text-white/80">React Native</span>
                <span className="px-3.5 py-1 bg-white/5 border border-white/10 rounded-full text-[11px] text-white/80">Expo CLI</span>
                <span className="px-3.5 py-1 bg-white/5 border border-white/10 rounded-full text-[11px] text-white/80">TypeScript</span>
                <span className="px-3.5 py-1 bg-white/5 border border-white/10 rounded-full text-[11px] text-white/80">Supabase & Firebase</span>
                <span className="px-3.5 py-1 bg-white/5 border border-white/10 rounded-full text-[11px] text-white/80">RESTful APIs</span>
                <span className="px-3.5 py-1 bg-white/5 border border-white/10 rounded-full text-[11px] text-white/80">Rule-Based AI</span>
              </div>
            </div>

            {/* Currently / Geometry block from design template */}
            <div className="flex flex-wrap gap-10 items-end pt-2">
              <div className="w-20 h-20 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm shrink-0">
                <div className="w-10 h-10 border border-white/20 rotate-45" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Currently</p>
                <p className="text-sm text-white font-medium">Mobile Application Developer @ InterNational Group</p>
                <p className="text-xs text-white/50">Cairo, Egypt • Military Status: <span className="text-white">Exempt</span></p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest bg-white text-black hover:bg-white/90 transition-all flex items-center gap-2 shadow-lg shadow-white/5"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                id="btn-hero-resume"
                onClick={onOpenResume}
                className="px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-widest bg-white/5 hover:bg-white/10 text-white border border-white/15 transition-all flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-white/60" />
                <span>View Full CV</span>
              </button>

              <button
                id="btn-hero-copy-email"
                onClick={handleCopyEmail}
                className="px-4 py-3 rounded-full text-xs font-medium uppercase tracking-wider bg-transparent hover:bg-white/5 text-white/60 hover:text-white border border-white/10 transition-all flex items-center gap-1.5"
                title="Copy Email Address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span className="text-white">Email Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Interactive Demo Fast-links */}
            <div className="pt-2 flex items-center gap-2 text-[11px] text-white/40">
              <span className="uppercase tracking-wider text-[10px]">Simulate:</span>
              <button
                onClick={() => onSelectProjectDemo('calm-cue')}
                className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-white/80 border border-white/10 transition-colors uppercase tracking-wider text-[10px]"
              >
                Calm Cue
              </button>
              <button
                onClick={() => onSelectProjectDemo('diabetes-expert')}
                className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-white/80 border border-white/10 transition-colors uppercase tracking-wider text-[10px]"
              >
                DES Clinical
              </button>
              <button
                onClick={() => onSelectProjectDemo('coffee-brain')}
                className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-white/80 border border-white/10 transition-colors uppercase tracking-wider text-[10px]"
              >
                Coffee Brain AI
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Engineering Panel */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-8 rounded-sm bg-[#151515] border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Technical Foundation</p>
                  <h3 className="text-lg font-light text-white tracking-tight mt-0.5">Software Engineering Spec</h3>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 text-xs">
                  ↗
                </div>
              </div>

              <div className="mt-6 space-y-5">
                <div className="border-b border-white/10 pb-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">Architecture</p>
                  <p className="text-sm text-white font-normal">React Native CLI & Expo Framework</p>
                  <p className="text-xs text-white/50 font-light mt-0.5">Mobile-first component systems engineered for native iOS and Android environments.</p>
                </div>

                <div className="border-b border-white/10 pb-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">Data & Privacy</p>
                  <p className="text-sm text-white font-normal">Supabase, Firebase, Encrypted Auth</p>
                  <p className="text-xs text-white/50 font-light mt-0.5">Robust state synchronization and safe storage for sensitive healthcare and user records.</p>
                </div>

                <div className="border-b border-white/10 pb-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">Algorithms & AI</p>
                  <p className="text-sm text-white font-normal">Clinical Inference, Computer Vision, NLP</p>
                  <p className="text-xs text-white/50 font-light mt-0.5">24+ parameter rule engines, automated inventory scanners, and sentiment classification.</p>
                </div>
              </div>

              {/* Minimalist Terminal */}
              <div className="mt-6 p-3.5 bg-[#0A0A0A] border border-white/10 rounded-sm font-mono text-[11px] text-white/60">
                <div className="flex items-center justify-between text-[10px] text-white/40 pb-2 border-b border-white/10 mb-2">
                  <span>ENVIRONMENT</span>
                  <span className="text-white font-mono">NODE_ENV=PROD</span>
                </div>
                <p className="text-white/80">
                  <span className="text-white/40">›</span> mohamed.shafeek --status=available
                </p>
                <p className="text-white/50 text-[10px] mt-1">
                  Ready for cross-platform mobile and full-stack challenges
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

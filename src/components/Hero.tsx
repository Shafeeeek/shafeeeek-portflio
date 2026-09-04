import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Check, 
  Copy, 
  Atom,
  Layers,
  Sparkles,
  Terminal,
  Cpu,
  Boxes,
  Code
} from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onOpenResume: () => void;
  onSelectProjectDemo: (demoType: 'calm-cue' | 'diabetes-expert' | 'coffee-brain') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onSelectProjectDemo }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState<'architecture' | 'hook-demo'>('architecture');
  const [hookCount, setHookCount] = useState(1);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className={`relative pt-12 pb-20 overflow-hidden border-b transition-colors duration-300 ${
      isDark ? 'bg-[#0A0A0A] border-white/10' : 'bg-[#FAFAFA] border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Architectural Typography & Bio */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Eyebrow marker */}
            <div className="flex items-center gap-3">
              <span className={`text-[10px] uppercase tracking-[0.25em] font-mono ${
                isDark ? 'text-white/40' : 'text-slate-400'
              }`}>
                Engineering / React & React Native
              </span>
              <span className={`w-8 h-[1px] ${isDark ? 'bg-white/20' : 'bg-slate-300'}`} />
            </div>

            {/* Architectural Heading */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium mb-3 border transition-colors bg-sky-500/10 text-sky-500 border-sky-500/20">
                <Atom className="w-3.5 h-3.5 animate-spin-slow" />
                <span>React Developer & Software Engineer</span>
              </div>

              <h1 className={`text-6xl sm:text-7xl lg:text-8xl font-light leading-[0.9] tracking-tighter mb-4 uppercase transition-colors ${
                isDark ? 'text-[#F5F5F5]' : 'text-slate-900'
              }`}>
                MOHAMED<br />
                <span className={`font-extralight ${isDark ? 'text-white/35' : 'text-slate-400'}`}>
                  SHAFEEK
                </span>
              </h1>
              
              <p className={`text-lg sm:text-xl font-light max-w-xl leading-relaxed transition-colors ${
                isDark ? 'text-[#A3A3A3]' : 'text-slate-600'
              }`}>
                React & React Native Developer crafting high-performance web applications, reusable UI systems, and responsive cross-platform mobile experiences.
              </p>
            </div>

            {/* Summary description */}
            <p className={`text-sm leading-relaxed max-w-xl font-light transition-colors ${
              isDark ? 'text-white/50' : 'text-slate-500'
            }`}>
              {profileData.summary}
            </p>

            {/* Core React Stack Pills */}
            <div className="space-y-3">
              <p className={`text-[10px] uppercase tracking-[0.2em] font-mono ${
                isDark ? 'text-white/40' : 'text-slate-400'
              }`}>
                Core React Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'React.js (18 / 19)',
                  'React Native CLI',
                  'Expo Framework',
                  'Next.js',
                  'TypeScript',
                  'Custom Hooks',
                  'Tailwind CSS',
                  'REST APIs & Supabase',
                ].map((tag) => (
                  <span
                    key={tag}
                    className={`px-3.5 py-1 rounded-full text-[11px] font-mono border transition-all ${
                      isDark
                        ? 'bg-white/5 border-white/10 text-white/80 hover:border-white/30'
                        : 'bg-white border-slate-200 text-slate-700 shadow-2xs hover:border-slate-300'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Current Position & Status */}
            <div className={`p-4 rounded-sm border flex flex-wrap items-center gap-6 ${
              isDark ? 'bg-[#151515] border-white/10' : 'bg-white border-slate-200 shadow-xs'
            }`}>
              <div className={`w-12 h-12 rounded-sm border flex items-center justify-center shrink-0 ${
                isDark ? 'bg-white/5 border-white/10 text-[#00D8FE]' : 'bg-sky-50 border-sky-200 text-sky-600'
              }`}>
                <Boxes className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <p className={`text-[10px] uppercase tracking-[0.2em] font-mono ${
                  isDark ? 'text-white/40' : 'text-slate-400'
                }`}>
                  Current Role
                </p>
                <p className={`text-xs sm:text-sm font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  React Native & Mobile Developer @ InterNational Group
                </p>
                <p className={`text-xs ${isDark ? 'text-white/50' : 'text-slate-500'}`}>
                  Cairo, Egypt • Military Status: <span className={isDark ? 'text-white font-medium' : 'text-slate-900 font-medium'}>Exempt</span>
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className={`px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-all flex items-center gap-2 shadow-sm ${
                  isDark 
                    ? 'bg-white text-black hover:bg-white/90' 
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                id="btn-hero-resume"
                onClick={onOpenResume}
                className={`px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-widest border transition-all flex items-center gap-2 ${
                  isDark
                    ? 'bg-white/5 hover:bg-white/10 text-white border-white/15'
                    : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300 shadow-2xs'
                }`}
              >
                <Download className="w-3.5 h-3.5 opacity-70" />
                <span>View Full CV</span>
              </button>

              <button
                id="btn-hero-copy-email"
                onClick={handleCopyEmail}
                className={`px-4 py-3 rounded-full text-xs font-medium uppercase tracking-wider border transition-all flex items-center gap-1.5 ${
                  isDark
                    ? 'bg-transparent hover:bg-white/5 text-white/60 hover:text-white border-white/10'
                    : 'bg-transparent hover:bg-slate-100 text-slate-600 hover:text-slate-900 border-slate-200'
                }`}
                title="Copy Email Address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500">Email Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Interactive Fast Jump */}
            <div className={`pt-2 flex flex-wrap items-center gap-2 text-[11px] ${
              isDark ? 'text-white/40' : 'text-slate-500'
            }`}>
              <span className="uppercase tracking-wider text-[10px] font-mono">Simulate:</span>
              <button
                onClick={() => onSelectProjectDemo('coffee-brain')}
                className={`px-3 py-1 rounded-full border transition-colors uppercase tracking-wider text-[10px] font-mono ${
                  isDark
                    ? 'bg-white/5 hover:bg-white/10 text-[#00D8FE] border-white/10'
                    : 'bg-white hover:bg-sky-50 text-sky-600 border-slate-200 shadow-2xs'
                }`}
              >
                Coffee Brain (ReactJS Web)
              </button>
              <button
                onClick={() => onSelectProjectDemo('calm-cue')}
                className={`px-3 py-1 rounded-full border transition-colors uppercase tracking-wider text-[10px] font-mono ${
                  isDark
                    ? 'bg-white/5 hover:bg-white/10 text-white/80 border-white/10'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200 shadow-2xs'
                }`}
              >
                Calm Cue (React Native)
              </button>
              <button
                onClick={() => onSelectProjectDemo('diabetes-expert')}
                className={`px-3 py-1 rounded-full border transition-colors uppercase tracking-wider text-[10px] font-mono ${
                  isDark
                    ? 'bg-white/5 hover:bg-white/10 text-white/80 border-white/10'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200 shadow-2xs'
                }`}
              >
                DES Clinical (Expo)
              </button>
            </div>
          </div>

          {/* Right Column: React Architecture & Live Hook Interactive Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className={`p-6 sm:p-8 rounded-sm border shadow-xl relative overflow-hidden transition-colors ${
              isDark ? 'bg-[#151515] border-white/10' : 'bg-white border-slate-200'
            }`}>
              {/* Header with React Theme */}
              <div className={`flex items-center justify-between pb-4 border-b ${
                isDark ? 'border-white/10' : 'border-slate-200'
              }`}>
                <div className="flex items-center gap-2.5">
                  <div className={`w-7 h-7 rounded-sm flex items-center justify-center border ${
                    isDark ? 'bg-white/5 border-white/10 text-[#00D8FE]' : 'bg-sky-50 border-sky-200 text-sky-600'
                  }`}>
                    <Code className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className={`text-[10px] uppercase tracking-[0.2em] font-mono ${
                      isDark ? 'text-white/40' : 'text-slate-400'
                    }`}>
                      React Engineering
                    </p>
                    <h3 className={`text-base font-light tracking-tight ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      Component & State Architecture
                    </h3>
                  </div>
                </div>

                {/* Sub-tabs */}
                <div className="flex items-center gap-1 p-0.5 rounded-full border bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-[10px] font-mono">
                  <button
                    onClick={() => setActiveTab('architecture')}
                    className={`px-2.5 py-1 rounded-full transition-all ${
                      activeTab === 'architecture'
                        ? (isDark ? 'bg-white text-black font-semibold' : 'bg-slate-900 text-white font-semibold')
                        : (isDark ? 'text-white/60 hover:text-white' : 'text-slate-600 hover:text-slate-900')
                    }`}
                  >
                    Spec
                  </button>
                  <button
                    onClick={() => setActiveTab('hook-demo')}
                    className={`px-2.5 py-1 rounded-full transition-all flex items-center gap-1 ${
                      activeTab === 'hook-demo'
                        ? (isDark ? 'bg-white text-black font-semibold' : 'bg-slate-900 text-white font-semibold')
                        : (isDark ? 'text-white/60 hover:text-white' : 'text-slate-600 hover:text-slate-900')
                    }`}
                  >
                    <span>JSX Demo</span>
                  </button>
                </div>
              </div>

              {activeTab === 'architecture' ? (
                <div className="mt-5 space-y-4">
                  <div className={`border-b pb-3 ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                    <div className="flex items-center justify-between">
                      <p className={`text-[10px] uppercase tracking-[0.2em] font-mono ${
                        isDark ? 'text-white/40' : 'text-slate-400'
                      }`}>
                        01 / Frontend Philosophy
                      </p>
                      <span className="text-[10px] font-mono text-sky-500 font-medium">React 18 / 19</span>
                    </div>
                    <p className={`text-xs sm:text-sm font-medium mt-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Atomic Components & Custom Hooks
                    </p>
                    <p className={`text-xs font-light mt-0.5 leading-relaxed ${isDark ? 'text-white/50' : 'text-slate-500'}`}>
                      Decoupling UI layers from business logic via specialized hooks (`useAuth`, `useInventory`, `useInference`).
                    </p>
                  </div>

                  <div className={`border-b pb-3 ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                    <div className="flex items-center justify-between">
                      <p className={`text-[10px] uppercase tracking-[0.2em] font-mono ${
                        isDark ? 'text-white/40' : 'text-slate-400'
                      }`}>
                        02 / Cross-Platform Target
                      </p>
                      <span className="text-[10px] font-mono text-emerald-500 font-medium">iOS + Android</span>
                    </div>
                    <p className={`text-xs sm:text-sm font-medium mt-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      React Native CLI & Expo SDK
                    </p>
                    <p className={`text-xs font-light mt-0.5 leading-relaxed ${isDark ? 'text-white/50' : 'text-slate-500'}`}>
                      Unified codebase sharing design tokens, business logic, and API synchronization routines.
                    </p>
                  </div>

                  <div className={`border-b pb-3 ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                    <div className="flex items-center justify-between">
                      <p className={`text-[10px] uppercase tracking-[0.2em] font-mono ${
                        isDark ? 'text-white/40' : 'text-slate-400'
                      }`}>
                        03 / Performance & Renders
                      </p>
                      <span className="text-[10px] font-mono text-amber-500 font-medium">60 FPS Native</span>
                    </div>
                    <p className={`text-xs sm:text-sm font-medium mt-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Virtual DOM & FlatList Profiling
                    </p>
                    <p className={`text-xs font-light mt-0.5 leading-relaxed ${isDark ? 'text-white/50' : 'text-slate-500'}`}>
                      Eliminating re-renders with `useCallback`, `useMemo`, and native-driven animation drivers.
                    </p>
                  </div>
                </div>
              ) : (
                /* Live Interactive React Hook Playground */
                <div className="mt-5 space-y-3">
                  <div className={`p-4 rounded-sm border font-mono text-[11px] leading-relaxed ${
                    isDark ? 'bg-[#0A0A0A] border-white/10 text-white/80' : 'bg-slate-900 text-slate-100 border-slate-800'
                  }`}>
                    <p className="text-sky-400 font-semibold">// Live React Component State</p>
                    <p className="mt-1">
                      <span className="text-purple-400">const</span> [activeStep, setActiveStep] = <span className="text-blue-400">useState</span>({hookCount});
                    </p>
                    <p className="text-slate-400 text-[10px] mt-1">
                      Current VDOM render counter: <span className="text-emerald-400 font-bold">{hookCount}</span>
                    </p>
                    
                    <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[10px] text-white/50">Simulate State Update:</span>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setHookCount((c) => Math.max(1, c - 1))}
                          className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-white text-[11px]"
                        >
                          -
                        </button>
                        <span className="px-2 text-white font-bold">{hookCount}</span>
                        <button
                          onClick={() => setHookCount((c) => c + 1)}
                          className="px-2 py-0.5 rounded bg-sky-500 hover:bg-sky-400 text-white text-[11px]"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className={`p-3 rounded-sm border text-[11px] font-light ${
                    isDark ? 'bg-white/5 border-white/10 text-white/70' : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}>
                    <p className="flex items-center gap-1.5 font-medium text-xs mb-1 text-sky-500">
                      <Sparkles className="w-3.5 h-3.5" />
                      Dynamic UI Reconciliation
                    </p>
                    React minimizes browser repaints through virtual tree comparison. Notice how only changed nodes update.
                  </div>
                </div>
              )}

              {/* Terminal footer */}
              <div className={`mt-5 p-3 rounded-sm border font-mono text-[10px] ${
                isDark ? 'bg-[#0A0A0A] border-white/10 text-white/60' : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}>
                <div className="flex items-center justify-between pb-1 mb-1 border-b border-black/10 dark:border-white/10">
                  <span className="text-sky-500">shafeek@react-workspace:~$</span>
                  <span className="font-semibold text-emerald-500">READY</span>
                </div>
                <p>npx create-react-app --template typescript</p>
                <p className="text-white/40 dark:text-white/40 text-[9px] mt-0.5">
                  Building responsive web interfaces & mobile apps with precision
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

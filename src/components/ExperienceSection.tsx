import React from 'react';
import { 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Building2, 
  ShieldCheck,
  Award,
  Atom
} from 'lucide-react';
import { experienceData, educationData, profileData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const ExperienceSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="experience" className={`py-24 border-b relative transition-colors duration-300 ${
      isDark ? 'bg-[#0A0A0A] border-white/10' : 'bg-white border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          
          {/* Left Column: Professional Experience */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-[10px] uppercase tracking-[0.25em] font-mono ${
                  isDark ? 'text-white/40' : 'text-slate-400'
                }`}>
                  02 / Experience
                </span>
                <span className={`w-8 h-[1px] ${isDark ? 'bg-white/20' : 'bg-slate-300'}`} />
              </div>
              <h2 className={`text-4xl sm:text-5xl font-light tracking-tight ${
                isDark ? 'text-[#F5F5F5]' : 'text-slate-900'
              }`}>
                Engineering Career
              </h2>
              <p className={`text-sm sm:text-base mt-2 font-light leading-relaxed ${
                isDark ? 'text-[#A3A3A3]' : 'text-slate-600'
              }`}>
                Hands-on production development building component architectures, mobile-first applications, and reactive state pipelines.
              </p>
            </div>

            <div className={`relative pl-6 sm:pl-8 border-l space-y-10 ${
              isDark ? 'border-white/15' : 'border-slate-200'
            }`}>
              {experienceData.map((exp) => (
                <div key={exp.id} className="relative group">
                  {/* Timeline Dot */}
                  <div className={`absolute -left-[31px] sm:-left-[39px] top-2 w-3 h-3 rounded-full border-2 ${
                    isDark ? 'bg-white border-[#0A0A0A]' : 'bg-sky-600 border-white shadow-xs'
                  }`} />

                  <div className={`p-8 rounded-sm border transition-all shadow-xl space-y-4 ${
                    isDark 
                      ? 'bg-[#151515] border-white/10 hover:border-white/25' 
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300 shadow-xs'
                  }`}>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className={`text-2xl font-light tracking-tight ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}>
                          {exp.role}
                        </h3>
                        <div className={`flex items-center gap-2 text-xs uppercase tracking-widest font-mono mt-1 ${
                          isDark ? 'text-white/50' : 'text-slate-500'
                        }`}>
                          <Building2 className="w-3.5 h-3.5" />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border ${
                          isDark ? 'bg-[#0A0A0A] text-white/70 border-white/10' : 'bg-white text-slate-700 border-slate-200 shadow-2xs'
                        }`}>
                          <Calendar className="w-3 h-3 opacity-60" />
                          {exp.period}
                        </span>
                        <p className={`text-[10px] uppercase tracking-widest mt-1 flex items-center justify-end gap-1 ${
                          isDark ? 'text-white/40' : 'text-slate-400'
                        }`}>
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    {/* Framework Highlight */}
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-mono uppercase tracking-wider ${
                      isDark ? 'bg-white/5 border-white/10 text-[#00D8FE]' : 'bg-sky-50 border-sky-200 text-sky-700'
                    }`}>
                      <Atom className="w-3.5 h-3.5" />
                      <span>{exp.framework}</span>
                    </div>

                    {/* Highlights from CV */}
                    <ul className="space-y-2.5 mt-3">
                      {exp.highlights.map((item, i) => (
                        <li key={i} className={`flex items-start gap-2.5 text-xs font-light leading-relaxed ${
                          isDark ? 'text-white/70' : 'text-slate-700'
                        }`}>
                          <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                            isDark ? 'text-white/80' : 'text-sky-600'
                          }`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className={`flex flex-wrap gap-1.5 pt-4 border-t ${
                      isDark ? 'border-white/10' : 'border-slate-200'
                    }`}>
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider border ${
                            isDark ? 'bg-[#0A0A0A] text-white/50 border-white/10' : 'bg-white text-slate-600 border-slate-200'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Military Credentials */}
          <div className="lg:col-span-5 space-y-10">
            <div id="education">
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-[10px] uppercase tracking-[0.25em] font-mono ${
                  isDark ? 'text-white/40' : 'text-slate-400'
                }`}>
                  03 / Credentials
                </span>
                <span className={`w-8 h-[1px] ${isDark ? 'bg-white/20' : 'bg-slate-300'}`} />
              </div>
              <h2 className={`text-4xl sm:text-5xl font-light tracking-tight ${
                isDark ? 'text-[#F5F5F5]' : 'text-slate-900'
              }`}>
                Academic & Status
              </h2>
              <p className={`text-sm mt-2 font-light ${
                isDark ? 'text-[#A3A3A3]' : 'text-slate-600'
              }`}>
                Formal computer science degree, verified legal standing, and readiness.
              </p>
            </div>

            {/* University Card */}
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-sm border transition-all shadow-xl space-y-4 ${
                  isDark 
                    ? 'bg-[#151515] border-white/10 hover:border-white/20' 
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className={`text-[10px] font-mono uppercase tracking-[0.2em] ${
                      isDark ? 'text-white/40' : 'text-slate-400'
                    }`}>
                      Academic Degree
                    </span>
                    <h3 className={`text-xl font-light mt-1 tracking-tight ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {edu.degree}
                    </h3>
                    <p className={`text-xs uppercase tracking-widest font-mono mt-0.5 ${
                      isDark ? 'text-white/60' : 'text-slate-600'
                    }`}>
                      {edu.institution}
                    </p>
                  </div>
                  <span className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border ${
                    isDark ? 'bg-[#0A0A0A] text-white/70 border-white/10' : 'bg-white text-slate-700 border-slate-200'
                  }`}>
                    {edu.period}
                  </span>
                </div>

                <p className={`text-xs flex items-center gap-1.5 font-light ${
                  isDark ? 'text-white/40' : 'text-slate-500'
                }`}>
                  <MapPin className="w-3.5 h-3.5" />
                  {edu.location}
                </p>

                <div className={`space-y-2 pt-3 border-t ${
                  isDark ? 'border-white/10' : 'border-slate-200'
                }`}>
                  {edu.details.map((detail, i) => (
                    <p key={i} className={`text-xs leading-relaxed flex items-start gap-2 font-light ${
                      isDark ? 'text-white/70' : 'text-slate-700'
                    }`}>
                      <Award className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                        isDark ? 'text-white/80' : 'text-sky-600'
                      }`} />
                      <span>{detail}</span>
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Military Service Status Card */}
            <div className={`p-8 rounded-sm border space-y-4 ${
              isDark ? 'bg-[#151515] border-white/10' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-sm border flex items-center justify-center ${
                  isDark ? 'bg-white/5 border-white/15 text-white' : 'bg-sky-50 border-sky-200 text-sky-600'
                }`}>
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`text-sm font-medium tracking-wider uppercase ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    Military Service
                  </h4>
                  <p className={`text-xs font-mono uppercase tracking-widest ${
                    isDark ? 'text-white/60' : 'text-slate-600'
                  }`}>
                    Status: <span className="font-semibold text-emerald-500">{profileData.militaryStatus}</span>
                  </p>
                </div>
              </div>
              <p className={`text-xs font-light leading-relaxed ${
                isDark ? 'text-[#A3A3A3]' : 'text-slate-600'
              }`}>
                Formally exempt from Egyptian military obligations. Fully cleared for immediate domestic, remote, or international contracts without service interruptions.
              </p>
            </div>

            {/* Availability Banner */}
            <div className={`p-8 rounded-sm border space-y-3 ${
              isDark ? 'bg-[#151515] border-white/15' : 'bg-slate-50 border-slate-200'
            }`}>
              <span className={`text-[10px] font-mono uppercase tracking-[0.2em] ${
                isDark ? 'text-white/40' : 'text-slate-400'
              }`}>
                Engagement Status
              </span>
              <p className={`text-lg font-light tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {profileData.availability}
              </p>
              <p className={`text-xs font-light leading-relaxed ${
                isDark ? 'text-white/50' : 'text-slate-500'
              }`}>
                Seeking React Developer roles (React.js, Next.js), React Native cross-platform mobile positions, or Frontend engineering challenges.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

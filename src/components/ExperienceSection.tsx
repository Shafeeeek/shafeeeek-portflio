import React from 'react';
import { 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Building2, 
  ShieldCheck,
  Award
} from 'lucide-react';
import { experienceData, educationData, profileData } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-b border-white/10 relative bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          
          {/* Left Column: Professional Experience */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">02 / Experience</span>
                <span className="w-8 h-[1px] bg-white/20" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-light text-[#F5F5F5] tracking-tight">
                Career History
              </h2>
              <p className="text-[#A3A3A3] text-sm sm:text-base mt-2 font-light leading-relaxed">
                Production software engineering in cross-platform mobile environments and systematic application building.
              </p>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l border-white/15 space-y-10">
              {experienceData.map((exp) => (
                <div key={exp.id} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-3 h-3 rounded-full bg-white border-2 border-[#0A0A0A]" />

                  <div className="p-8 rounded-sm bg-[#151515] border border-white/10 hover:border-white/25 transition-all shadow-xl space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-2xl font-light text-white tracking-tight">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-white/50 uppercase tracking-widest font-mono mt-1">
                          <Building2 className="w-3.5 h-3.5" />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-[#0A0A0A] text-white/70 border border-white/10">
                          <Calendar className="w-3 h-3 text-white/40" />
                          {exp.period}
                        </span>
                        <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1 flex items-center justify-end gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    {/* Framework Highlight */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-[11px] font-mono uppercase tracking-wider">
                      <span>{exp.framework}</span>
                    </div>

                    {/* Highlights from CV */}
                    <ul className="space-y-2.5 mt-3">
                      {exp.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-white/70 font-light leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-white/80 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#0A0A0A] text-white/50 border border-white/10"
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
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">03 / Credentials</span>
                <span className="w-8 h-[1px] bg-white/20" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-light text-[#F5F5F5] tracking-tight">
                Education & Status
              </h2>
              <p className="text-[#A3A3A3] text-sm mt-2 font-light">
                Formal computer science degree, verified legal standing, and readiness.
              </p>
            </div>

            {/* University Card */}
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="p-8 rounded-sm bg-[#151515] border border-white/10 hover:border-white/20 transition-all shadow-xl space-y-4"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">
                      Academic Degree
                    </span>
                    <h3 className="text-xl font-light text-white mt-1 tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-xs text-white/60 uppercase tracking-widest font-mono mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-[#0A0A0A] text-white/70 border border-white/10">
                    {edu.period}
                  </span>
                </div>

                <p className="text-xs text-white/40 flex items-center gap-1.5 font-light">
                  <MapPin className="w-3.5 h-3.5" />
                  {edu.location}
                </p>

                <div className="space-y-2 pt-3 border-t border-white/10">
                  {edu.details.map((detail, i) => (
                    <p key={i} className="text-xs text-white/70 leading-relaxed flex items-start gap-2 font-light">
                      <Award className="w-3.5 h-3.5 text-white/80 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Military Service Status Card */}
            <div className="p-8 rounded-sm bg-[#151515] border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/15 flex items-center justify-center text-white">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white tracking-wider uppercase">Military Service</h4>
                  <p className="text-xs text-white/60 font-mono uppercase tracking-widest">
                    Status: <span className="text-white font-semibold">{profileData.militaryStatus}</span>
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#A3A3A3] font-light leading-relaxed">
                Formally exempt from Egyptian military obligations. Fully cleared for immediate domestic, remote, or overseas relocation without interruption.
              </p>
            </div>

            {/* Availability Banner */}
            <div className="p-8 rounded-sm bg-[#151515] border border-white/15 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">
                Engagement Status
              </span>
              <p className="text-lg font-light text-white tracking-tight">
                {profileData.availability}
              </p>
              <p className="text-xs text-white/50 font-light leading-relaxed">
                Open to Mobile Developer roles (React Native / Expo), Frontend positions, or Full-Stack software engineering.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

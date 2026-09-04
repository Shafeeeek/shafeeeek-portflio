import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin,
  FileText
} from 'lucide-react';
import { profileData, experienceData, educationData, projectsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedText, setCopiedText] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyPlainText = () => {
    const text = `
MOHAMED ALAAELDIN SHAFEEK
${profileData.email} | ${profileData.phone} | ${profileData.location}
LinkedIn: ${profileData.linkedInUrl} | GitHub: ${profileData.githubUrl}

SUMMARY
${profileData.summary}

PROFESSIONAL EXPERIENCE
InterNational Group For Import & Export — Mobile Application Developer (02/2025 – 2026 | Cairo)
React Native & Expo Framework
• Worked on mobile application development using React Native and the Expo framework.
• Developed cross-platform app features with a focus on clean UI, reusable components, and mobile-first user experience.

EDUCATION
Future University in Egypt, Cairo, Egypt — Bachelor of Computer Science (2021 – 2025 | Cairo)

TECHNICAL SKILLS
• Mobile Development: React Native, Expo, JavaScript, TypeScript
• Programming Languages: Python, Java, C++, JavaScript, TypeScript
• Web Development: Next.Js, HTML, CSS, JavaScript, Django, ReactJS, Bootstrap, PHP
• Databases: MySQL, MongoDB, Supabase, Firebase
• Machine Learning & AI: scikit-learn, pandas, NumPy, PyTorch, TensorFlow, NLP, Computer Vision
• Desktop Applications: JavaFX

PROJECTS
1. Calm Cue - Anxiety Management App | React Native, TypeScript, Supabase (09/2025 – 12/2025)
• Developed a cross-platform mental health application using React Native CLI and TypeScript, designed to provide users with accessible tools to manage and alleviate anxiety.
• Integrated Supabase to construct a secure backend infrastructure, implementing robust user authentication to ensure the privacy and safety of sensitive mental health data.
• Engineered a responsive, calming user interface deployed natively on both iOS and Android, focusing on a seamless user experience during high-stress moments.

2. Coffee Brain AI-Powered Management System, Graduation Project (2024 – 2025)
• Developed AI-powered inventory management system for SMEs integrating automation, real-time tracking, and intelligent analytics.
• Implemented image processing for product scanning and recognition, enabling faster and accurate stock updates.
• Integrated NLP for sentiment analysis to analyze customer reviews and extract actionable business insights.
• Built features including automated purchase order generation, role-based access control, and real-time reporting.
• Technologies: ReactJS, Django REST API, NLP, Computer Vision

3. Diabetes Expert System (DES) Mobile App | React Native, Expo, Python (02/2026 – 05/2026)
• Developed a cross-platform mobile application using React Native and Expo to assess user diabetes risk through an interactive clinical questionnaire.
• Integrated a rule-based inference engine to evaluate user responses across 24+ weighted medical parameters, tracking symptoms, family history, and lifestyle habits.
• Designed a dynamic mobile UI that calculates risk scores and delivers personalized diagnostic classifications alongside actionable dietary and health recommendations.

SOFT SKILLS
Communication, Problem Solving, Adaptability, Fast Learner, Teamwork, Time Management, Critical Thinking, Analytical Mindset

MILITARY SERVICE
Military Status: Exempt
    `.trim();

    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#0A0A0A] border border-white/15 rounded-sm shadow-2xl overflow-hidden my-auto max-h-[95vh] flex flex-col">
        
        {/* Modal Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0A0A0A] border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2.5">
            <FileText className="w-4 h-4 text-white/70" />
            <span className="text-xs uppercase tracking-widest font-semibold text-white">Official Curriculum Vitae</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="btn-print-cv"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-semibold bg-white text-black hover:bg-white/90 transition-all shadow-sm"
              title="Print CV or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              id="btn-copy-plain-cv"
              onClick={handleCopyPlainText}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-medium bg-white/5 hover:bg-white/10 text-white/80 border border-white/15 transition-colors"
              title="Copy plain-text CV to clipboard"
            >
              {copiedText ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Copy Plain Text</span>
                </>
              )}
            </button>

            <button
              id="btn-close-resume-modal"
              onClick={onClose}
              className="p-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Paper Preview */}
        <div className="p-4 sm:p-8 overflow-y-auto bg-[#0A0A0A] text-[#F5F5F5] flex justify-center">
          <div className="w-full max-w-3xl bg-[#151515] text-[#F5F5F5] p-8 sm:p-12 rounded-sm shadow-xl border border-white/10 font-sans text-xs sm:text-sm leading-normal print:bg-white print:text-black print:p-0 print:border-none print:shadow-none">
            
            {/* CV Header */}
            <div className="text-center pb-6 border-b border-white/10">
              <h1 className="text-2xl sm:text-3xl font-light tracking-tight text-white uppercase">
                MOHAMED ALAAELDIN SHAFEEK
              </h1>
              
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-white/60 mt-3 font-light">
                <a href={`mailto:${profileData.email}`} className="flex items-center gap-1 hover:text-white font-mono">
                  <Mail className="w-3 h-3" />
                  <span>{profileData.email}</span>
                </a>
                <span>•</span>
                <a href={`tel:${profileData.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1 hover:text-white font-mono">
                  <Phone className="w-3 h-3" />
                  <span>{profileData.phone}</span>
                </a>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>{profileData.location}</span>
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-white/60 mt-1.5 font-mono">
                <a 
                  href={profileData.linkedInUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white underline flex items-center gap-1"
                >
                  <Linkedin className="w-3 h-3" />
                  <span>{profileData.linkedIn}</span>
                </a>
                <span>•</span>
                <a 
                  href={profileData.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white underline flex items-center gap-1"
                >
                  <Github className="w-3 h-3" />
                  <span>{profileData.github}</span>
                </a>
              </div>
            </div>

            {/* SUMMARY */}
            <div className="mt-6">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-white border-b border-white/10 pb-1.5 mb-3">
                SUMMARY
              </h2>
              <p className="text-white/70 leading-relaxed font-light text-justify">
                {profileData.summary}
              </p>
            </div>

            {/* PROFESSIONAL EXPERIENCE */}
            <div className="mt-6">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-white border-b border-white/10 pb-1.5 mb-3">
                PROFESSIONAL EXPERIENCE
              </h2>
              {experienceData.map((exp) => (
                <div key={exp.id} className="mb-4">
                  <div className="flex justify-between items-baseline font-medium text-white">
                    <span>{exp.company}, <span className="font-light italic text-white/70">{exp.role}</span></span>
                    <span className="text-xs font-light text-white/50 font-mono">{exp.period} | cairo</span>
                  </div>
                  <p className="text-xs italic text-white/50 mb-1.5">{exp.framework}</p>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-white/70 text-xs leading-relaxed font-light">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* EDUCATION */}
            <div className="mt-6">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-white border-b border-white/10 pb-1.5 mb-3">
                EDUCATION
              </h2>
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-baseline">
                  <div>
                    <span className="font-medium text-white">{edu.institution}</span>, {edu.location}, <span className="italic text-white/70">{edu.degree}</span>
                  </div>
                  <span className="text-xs text-white/50 shrink-0 font-mono">{edu.period} | cairo</span>
                </div>
              ))}
            </div>

            {/* TECHNICAL SKILLS */}
            <div className="mt-6">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-white border-b border-white/10 pb-1.5 mb-3">
                TECHNICAL SKILLS
              </h2>
              <div className="space-y-1.5 text-xs text-white/70 leading-relaxed font-light">
                <p>
                  <span className="font-medium text-white">Mobile Development:</span> React Native, Expo, JavaScript, TypeScript
                </p>
                <p>
                  <span className="font-medium text-white">Programming Languages:</span> Python, Java, C++, JavaScript, TypeScript
                </p>
                <p>
                  <span className="font-medium text-white">Web Development:</span> Next.Js, HTML, CSS, JavaScript, Django, ReactJS, Bootstrap, PHP
                </p>
                <p>
                  <span className="font-medium text-white">Databases:</span> MySQL, MongoDB, Supabase, Firebase
                </p>
                <p>
                  <span className="font-medium text-white">Machine Learning & AI:</span> scikit-learn, pandas, NumPy, PyTorch, TensorFlow, NLP, Computer Vision
                </p>
                <p>
                  <span className="font-medium text-white">Desktop Applications:</span> JavaFX
                </p>
              </div>
            </div>

            {/* PROJECTS */}
            <div className="mt-6">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-white border-b border-white/10 pb-1.5 mb-3">
                PROJECTS
              </h2>
              
              <div className="space-y-4">
                {/* Calm Cue */}
                <div>
                  <div className="flex justify-between items-baseline font-medium text-white">
                    <span>Calm Cue - Anxiety Management App | React Native, TypeScript, Supabase</span>
                    <span className="text-xs font-light text-white/50 font-mono">09/2025 – 12/2025</span>
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-white/70 text-xs leading-relaxed mt-1 font-light">
                    <li>Developed a cross-platform mental health application using React Native CLI and TypeScript, designed to provide users with accessible tools to manage and alleviate anxiety.</li>
                    <li>Integrated Supabase to construct a secure backend infrastructure, implementing robust user authentication to ensure the privacy and safety of sensitive mental health data.</li>
                    <li>Engineered a responsive, calming user interface deployed natively on both iOS and Android, focusing on a seamless user experience during high-stress moments.</li>
                  </ul>
                </div>

                {/* Coffee Brain */}
                <div>
                  <div className="flex justify-between items-baseline font-medium text-white">
                    <span>Coffee Brain AI-Powered Management System, Graduation Project</span>
                    <span className="text-xs font-light text-white/50 font-mono">2024 – 2025</span>
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-white/70 text-xs leading-relaxed mt-1 font-light">
                    <li>Developed AI-powered inventory management system for SMEs integrating automation, real-time tracking, and intelligent analytics.</li>
                    <li>Implemented image processing for product scanning and recognition, enabling faster and accurate stock updates.</li>
                    <li>Integrated NLP for sentiment analysis to analyze customer reviews and extract actionable business insights.</li>
                    <li>Built features including automated purchase order generation, role-based access control, and real-time reporting.</li>
                    <li>Technologies: ReactJS, Django REST API, NLP, Computer Vision</li>
                  </ul>
                </div>

                {/* DES */}
                <div>
                  <div className="flex justify-between items-baseline font-medium text-white">
                    <span>Diabetes Expert System (DES) Mobile App | React Native, Expo, Python</span>
                    <span className="text-xs font-light text-white/50 font-mono">02/2026 – 05/2026</span>
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-white/70 text-xs leading-relaxed mt-1 font-light">
                    <li>Developed a cross-platform mobile application using React Native and Expo to assess user diabetes risk through an interactive clinical questionnaire.</li>
                    <li>Integrated a rule-based inference engine to evaluate user responses across 24+ weighted medical parameters, tracking symptoms, family history, and lifestyle habits.</li>
                    <li>Designed a dynamic mobile UI that calculates risk scores and delivers personalized diagnostic classifications alongside actionable dietary and health recommendations.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SOFT SKILLS */}
            <div className="mt-6">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-white border-b border-white/10 pb-1.5 mb-3">
                SOFT SKILLS
              </h2>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-white/70 font-light">
                <p>• Communication</p>
                <p>• Teamwork</p>
                <p>• Problem Solving</p>
                <p>• Time Management</p>
                <p>• Adaptability</p>
                <p>• Critical Thinking</p>
                <p>• Fast Learner</p>
                <p>• Analytical Mindset</p>
              </div>
            </div>

            {/* MILITARY SERVICE */}
            <div className="mt-6">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-white border-b border-white/10 pb-1.5 mb-3">
                MILITARY SERVICE
              </h2>
              <p className="text-xs text-white/80">
                <span className="font-medium text-white">Military Status:</span> Exempt
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

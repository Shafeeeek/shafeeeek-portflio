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
import { useTheme } from '../context/ThemeContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedText, setCopiedText] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyPlainText = () => {
    const text = `
MOHAMED ALAAELDIN SHAFEEK
React & React Native Developer
${profileData.email} | ${profileData.phone} | ${profileData.location}
LinkedIn: ${profileData.linkedInUrl} | GitHub: ${profileData.githubUrl}

SUMMARY
${profileData.summary}

PROFESSIONAL EXPERIENCE
InterNational Group For Import & Export — React Native & Mobile Developer (02/2025 – 2026 | Cairo)
Framework: React Native CLI & Expo Framework
• Built responsive cross-platform mobile apps with React Native, emphasizing modular component design and fluid UI.
• Formulated reusable state hooks, optimized navigation routing, and connected real-time API integrations.
• Ensured 60fps frame rates with FlatList optimizations, native memory awareness, and clean TypeScript typings.

EDUCATION
Future University in Egypt, Cairo, Egypt — Bachelor of Computer Science (2021 – 2025 | Cairo)

TECHNICAL SKILLS
• React & Mobile: React.js (18/19), React Native CLI, Expo SDK, Next.js, TypeScript, Custom Hooks, Redux/Context
• Languages: TypeScript, JavaScript (ES6+), Python, Java, C++
• Backend & Cloud: REST APIs, Django REST, Supabase, Firebase, MySQL, MongoDB
• Machine Learning & AI: Computer Vision (Image OCR), NLP Sentiment, scikit-learn, PyTorch, TensorFlow

PROJECTS
1. Calm Cue - Anxiety Management App | React Native, TypeScript, Supabase (09/2025 – 12/2025)
• Developed cross-platform mental health app with interactive 4x4 box breathing, audio pacing, and grounding exercises.
• Integrated Supabase auth, encrypted local state vaults, and native haptic feedback for sensory grounding.

2. Coffee Brain AI Management System - Graduation Project | ReactJS, Django REST, Computer Vision (2024 – 2025)
• Architected ReactJS Single Page Application with dynamic dashboards, automated reordering, and real-time inventory.
• Integrated CV camera scanner for barcode/product recognition and BERT NLP for customer sentiment reviews.

3. Diabetes Expert System (DES) Mobile App | React Native, Expo, Python (02/2026 – 05/2026)
• Built interactive clinical diagnostic questionnaire using React Native & Expo evaluating 24+ weighted health rules.
• Computed immediate real-time risk stratification and tailored lifestyle and dietary guidance.

SOFT SKILLS
Communication, Problem Solving, Component Architecture, Fast Learner, Teamwork, Time Management, Analytical Mindset

MILITARY SERVICE
Military Status: Exempt
    `.trim();

    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      {/* Modal Container */}
      <div className={`relative w-full max-w-4xl border rounded-sm shadow-2xl overflow-hidden my-auto max-h-[95vh] flex flex-col transition-colors ${
        isDark ? 'bg-[#0A0A0A] border-white/15 text-white' : 'bg-white border-slate-300 text-slate-900'
      }`}>
        
        {/* Modal Toolbar */}
        <div className={`flex items-center justify-between px-6 py-4 border-b shrink-0 ${
          isDark ? 'bg-[#0A0A0A] border-white/10' : 'bg-slate-100 border-slate-200'
        }`}>
          <div className="flex items-center gap-2.5">
            <FileText className={`w-4 h-4 ${isDark ? 'text-white/70' : 'text-sky-600'}`} />
            <span className={`text-xs uppercase tracking-widest font-mono font-semibold ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Curriculum Vitae • React Developer
            </span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              id="btn-print-cv"
              onClick={handlePrint}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-semibold transition-all shadow-xs ${
                isDark 
                  ? 'bg-white text-black hover:bg-white/90' 
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
              title="Print CV or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              id="btn-copy-plain-cv"
              onClick={handleCopyPlainText}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-medium border transition-colors ${
                isDark
                  ? 'bg-white/5 hover:bg-white/10 text-white/80 border-white/15'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300 shadow-2xs'
              }`}
              title="Copy plain-text CV to clipboard"
            >
              {copiedText ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-500 font-semibold">Copied!</span>
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
              className={`p-1.5 rounded-full transition-colors ${
                isDark 
                  ? 'text-white/50 hover:text-white hover:bg-white/10' 
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200'
              }`}
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Paper Preview */}
        <div className={`p-4 sm:p-8 overflow-y-auto flex justify-center ${
          isDark ? 'bg-[#0A0A0A]' : 'bg-slate-200/60'
        }`}>
          <div className={`w-full max-w-3xl p-8 sm:p-12 rounded-sm shadow-xl border font-sans text-xs sm:text-sm leading-normal print:bg-white print:text-black print:p-0 print:border-none print:shadow-none ${
            isDark ? 'bg-[#151515] text-[#F5F5F5] border-white/10' : 'bg-white text-slate-800 border-slate-200 shadow-md'
          }`}>
            
            {/* CV Header */}
            <div className={`text-center pb-6 border-b ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
              <h1 className={`text-2xl sm:text-3xl font-light tracking-tight uppercase ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                MOHAMED ALAAELDIN SHAFEEK
              </h1>
              <p className="text-xs font-mono font-medium text-sky-500 mt-1 uppercase tracking-wider">
                React & React Native Developer
              </p>
              
              <div className={`flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs mt-3 font-light ${
                isDark ? 'text-white/60' : 'text-slate-600'
              }`}>
                <a href={`mailto:${profileData.email}`} className="flex items-center gap-1 hover:text-sky-500 font-mono">
                  <Mail className="w-3 h-3" />
                  <span>{profileData.email}</span>
                </a>
                <span>•</span>
                <a href={`tel:${profileData.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1 hover:text-sky-500 font-mono">
                  <Phone className="w-3 h-3" />
                  <span>{profileData.phone}</span>
                </a>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>{profileData.location}</span>
                </span>
              </div>

              <div className={`flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs mt-1.5 font-mono ${
                isDark ? 'text-white/60' : 'text-slate-600'
              }`}>
                <a 
                  href={profileData.linkedInUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-sky-500 underline flex items-center gap-1"
                >
                  <Linkedin className="w-3 h-3" />
                  <span>{profileData.linkedIn}</span>
                </a>
                <span>•</span>
                <a 
                  href={profileData.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-sky-500 underline flex items-center gap-1"
                >
                  <Github className="w-3 h-3" />
                  <span>{profileData.github}</span>
                </a>
              </div>
            </div>

            {/* SUMMARY */}
            <div className="mt-6">
              <h2 className={`text-xs font-semibold uppercase tracking-widest border-b pb-1.5 mb-3 ${
                isDark ? 'text-white border-white/10' : 'text-slate-900 border-slate-200'
              }`}>
                SUMMARY
              </h2>
              <p className={`leading-relaxed font-light text-justify ${
                isDark ? 'text-white/70' : 'text-slate-700'
              }`}>
                {profileData.summary}
              </p>
            </div>

            {/* PROFESSIONAL EXPERIENCE */}
            <div className="mt-6">
              <h2 className={`text-xs font-semibold uppercase tracking-widest border-b pb-1.5 mb-3 ${
                isDark ? 'text-white border-white/10' : 'text-slate-900 border-slate-200'
              }`}>
                PROFESSIONAL EXPERIENCE
              </h2>
              {experienceData.map((exp) => (
                <div key={exp.id} className="mb-4">
                  <div className={`flex justify-between items-baseline font-medium ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    <span>{exp.company}, <span className={`font-light italic ${isDark ? 'text-white/70' : 'text-slate-600'}`}>{exp.role}</span></span>
                    <span className={`text-xs font-light font-mono ${isDark ? 'text-white/50' : 'text-slate-500'}`}>{exp.period} | cairo</span>
                  </div>
                  <p className={`text-xs italic mb-1.5 font-mono ${isDark ? 'text-white/50' : 'text-slate-500'}`}>{exp.framework}</p>
                  <ul className={`list-disc list-outside pl-4 space-y-1 text-xs leading-relaxed font-light ${
                    isDark ? 'text-white/70' : 'text-slate-700'
                  }`}>
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* EDUCATION */}
            <div className="mt-6">
              <h2 className={`text-xs font-semibold uppercase tracking-widest border-b pb-1.5 mb-3 ${
                isDark ? 'text-white border-white/10' : 'text-slate-900 border-slate-200'
              }`}>
                EDUCATION
              </h2>
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-baseline">
                  <div>
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>{edu.institution}</span>, {edu.location}, <span className={`italic ${isDark ? 'text-white/70' : 'text-slate-600'}`}>{edu.degree}</span>
                  </div>
                  <span className={`text-xs shrink-0 font-mono ${isDark ? 'text-white/50' : 'text-slate-500'}`}>{edu.period} | cairo</span>
                </div>
              ))}
            </div>

            {/* TECHNICAL SKILLS */}
            <div className="mt-6">
              <h2 className={`text-xs font-semibold uppercase tracking-widest border-b pb-1.5 mb-3 ${
                isDark ? 'text-white border-white/10' : 'text-slate-900 border-slate-200'
              }`}>
                TECHNICAL SKILLS
              </h2>
              <div className={`space-y-1.5 text-xs leading-relaxed font-light ${
                isDark ? 'text-white/70' : 'text-slate-700'
              }`}>
                <p>
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>React & Mobile:</span> React.js, React Native (CLI & Expo), Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS
                </p>
                <p>
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>Programming Languages:</span> TypeScript, JavaScript, Python, Java, C++
                </p>
                <p>
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>Web & Backend:</span> Next.js, ReactJS, Django REST API, HTML5, CSS3, RESTful APIs, Node.js basics
                </p>
                <p>
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>Databases & Cloud:</span> Supabase, Firebase, MySQL, MongoDB
                </p>
                <p>
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>Machine Learning & AI:</span> scikit-learn, pandas, NumPy, PyTorch, TensorFlow, NLP (Sentiment Analysis), Computer Vision (Image OCR)
                </p>
                <p>
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>Desktop & Tools:</span> JavaFX, Git, GitHub, VS Code, Postman
                </p>
              </div>
            </div>

            {/* PROJECTS */}
            <div className="mt-6">
              <h2 className={`text-xs font-semibold uppercase tracking-widest border-b pb-1.5 mb-3 ${
                isDark ? 'text-white border-white/10' : 'text-slate-900 border-slate-200'
              }`}>
                PROJECTS
              </h2>
              
              <div className="space-y-4">
                {/* Calm Cue */}
                <div>
                  <div className={`flex justify-between items-baseline font-medium ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    <span>Calm Cue - Anxiety Management App | React Native, TypeScript, Supabase</span>
                    <span className={`text-xs font-light font-mono ${isDark ? 'text-white/50' : 'text-slate-500'}`}>09/2025 – 12/2025</span>
                  </div>
                  <ul className={`list-disc list-outside pl-4 space-y-1 text-xs leading-relaxed mt-1 font-light ${
                    isDark ? 'text-white/70' : 'text-slate-700'
                  }`}>
                    <li>Developed a cross-platform mental health application using React Native CLI and TypeScript, designed to provide users with accessible tools to manage and alleviate anxiety.</li>
                    <li>Integrated Supabase to construct a secure backend infrastructure, implementing robust user authentication to ensure the privacy and safety of sensitive mental health data.</li>
                    <li>Engineered a responsive, calming user interface deployed natively on both iOS and Android, focusing on a seamless user experience during high-stress moments.</li>
                  </ul>
                </div>

                {/* Coffee Brain */}
                <div>
                  <div className={`flex justify-between items-baseline font-medium ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    <span>Coffee Brain AI-Powered Management System, Graduation Project</span>
                    <span className={`text-xs font-light font-mono ${isDark ? 'text-white/50' : 'text-slate-500'}`}>2024 – 2025</span>
                  </div>
                  <ul className={`list-disc list-outside pl-4 space-y-1 text-xs leading-relaxed mt-1 font-light ${
                    isDark ? 'text-white/70' : 'text-slate-700'
                  }`}>
                    <li>Developed AI-powered inventory management system for SMEs integrating automation, real-time tracking, and intelligent analytics.</li>
                    <li>Built single page frontend with ReactJS featuring real-time state, low-latency table rendering, and responsive controls.</li>
                    <li>Implemented image processing for product scanning and recognition, enabling faster and accurate stock updates.</li>
                    <li>Integrated NLP for sentiment analysis to analyze customer reviews and extract actionable business insights.</li>
                    <li>Built features including automated purchase order generation, role-based access control, and real-time reporting.</li>
                    <li>Technologies: ReactJS, Django REST API, NLP, Computer Vision</li>
                  </ul>
                </div>

                {/* DES */}
                <div>
                  <div className={`flex justify-between items-baseline font-medium ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    <span>Diabetes Expert System (DES) Mobile App | React Native, Expo, Python</span>
                    <span className={`text-xs font-light font-mono ${isDark ? 'text-white/50' : 'text-slate-500'}`}>02/2026 – 05/2026</span>
                  </div>
                  <ul className={`list-disc list-outside pl-4 space-y-1 text-xs leading-relaxed mt-1 font-light ${
                    isDark ? 'text-white/70' : 'text-slate-700'
                  }`}>
                    <li>Developed a cross-platform mobile application using React Native and Expo to assess user diabetes risk through an interactive clinical questionnaire.</li>
                    <li>Integrated a rule-based inference engine to evaluate user responses across 24+ weighted medical parameters, tracking symptoms, family history, and lifestyle habits.</li>
                    <li>Designed a dynamic mobile UI that calculates risk scores and delivers personalized diagnostic classifications alongside actionable dietary and health recommendations.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SOFT SKILLS */}
            <div className="mt-6">
              <h2 className={`text-xs font-semibold uppercase tracking-widest border-b pb-1.5 mb-3 ${
                isDark ? 'text-white border-white/10' : 'text-slate-900 border-slate-200'
              }`}>
                SOFT SKILLS
              </h2>
              <div className={`grid grid-cols-2 gap-x-4 gap-y-1 text-xs font-light ${
                isDark ? 'text-white/70' : 'text-slate-700'
              }`}>
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
              <h2 className={`text-xs font-semibold uppercase tracking-widest border-b pb-1.5 mb-3 ${
                isDark ? 'text-white border-white/10' : 'text-slate-900 border-slate-200'
              }`}>
                MILITARY SERVICE
              </h2>
              <p className={`text-xs ${isDark ? 'text-white/80' : 'text-slate-800'}`}>
                <span className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>Military Status:</span> Exempt
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

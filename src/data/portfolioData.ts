import { ProfileInfo, ExperienceItem, EducationItem, Project, SkillCategory } from '../types';

export const profileData: ProfileInfo = {
  name: 'Mohamed Alaaeldin Shafeek',
  title: 'React & React Native Developer | Software Engineer',
  email: 'mohmedshii02@gmail.com',
  phone: '+20 100 460 3038',
  location: 'El Mokattam, Cairo, Egypt',
  linkedIn: 'linkedin.com/in/mohamed-a-shafeek-',
  linkedInUrl: 'https://linkedin.com/in/mohamed-a-shafeek-',
  github: 'github.com/Shafeeeek',
  githubUrl: 'https://github.com/Shafeeeek',
  summary:
    'Computer Science graduate and React Developer specializing in React.js, React Native, Expo, and TypeScript. Experienced in architecting responsive web applications, component libraries, custom React hooks, and cross-platform mobile systems for iOS & Android. Skilled with state management, REST APIs, Supabase, Firebase, and full-stack integrations with high attention to performance and clean code.',
  militaryStatus: 'Exempt',
  availability: 'Open to React / React Native / Frontend Developer Roles (Cairo & Remote)',
};

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'React Native & Mobile Developer',
    company: 'InterNational Group For Import & Export',
    location: 'Cairo, Egypt',
    period: '02/2025 – 2026',
    framework: 'React Native & Expo Ecosystem',
    highlights: [
      'Engineered cross-platform mobile applications using React Native and the Expo framework with modular React architecture.',
      'Developed reusable component libraries with strict TypeScript typing, responsive layouts, and intuitive mobile-first UX.',
      'Integrated RESTful APIs and asynchronous data pipelines, optimizing list rendering, state updates, and memory overhead.',
      'Maintained consistent design tokens and atomic UI patterns across both iOS and Android deployment targets.',
    ],
    skills: ['React Native', 'Expo', 'TypeScript', 'JavaScript (ES6+)', 'React Hooks', 'Component Systems', 'REST APIs', 'Mobile UX'],
  },
];

export const educationData: EducationItem[] = [
  {
    institution: 'Future University in Egypt (FUE)',
    location: 'Cairo, Egypt',
    degree: 'Bachelor of Computer Science',
    period: '2021 – 2025',
    details: [
      'Focused on Modern Web Architecture, React Ecosystem, Object-Oriented Programming, Machine Learning, Data Structures, and Database Management.',
      'Graduation Project: "Coffee Brain AI-Powered Management System" (Built with ReactJS, Django REST API, Computer Vision, and NLP).',
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: 'coffee-brain',
    title: 'Coffee Brain AI System',
    subtitle: 'ReactJS Web Management Platform (Graduation Project)',
    category: 'Full-Stack & AI',
    period: '2024 – 2025',
    tagline: 'Full-stack SME inventory & analytics web application engineered in ReactJS, integrating computer vision product recognition, review NLP, and real-time operations.',
    technologies: ['ReactJS', 'TypeScript', 'Django REST API', 'Computer Vision', 'NLP', 'Component Hierarchy', 'RESTful API'],
    points: [
      'Architected the interactive ReactJS single-page application dashboard featuring responsive layouts, modular widgets, and real-time inventory management.',
      'Built camera-assisted product barcode and image scanning modules using image processing pipelines connected to backend REST endpoints.',
      'Integrated natural language processing (NLP) models to automatically classify customer sentiment from reviews into actionable business charts.',
      'Implemented automated purchase order drafting, role-based access control (RBAC), and fast client-side state caching.',
    ],
    keyMetrics: [
      { label: 'Frontend Stack', value: 'ReactJS / Modular SPA' },
      { label: 'AI Capabilities', value: 'CV & NLP Sentiment' },
      { label: 'Backend API', value: 'Django REST API' },
    ],
    accentColor: '#00D8FE', // React Cyan
    demoType: 'coffee-brain',
  },
  {
    id: 'calm-cue',
    title: 'Calm Cue',
    subtitle: 'Anxiety Alleviation React Native App',
    category: 'Mobile',
    period: '09/2025 – 12/2025',
    tagline: 'Cross-platform mobile application built with React Native CLI and TypeScript, providing guided therapeutic box-breathing and grounding tools.',
    technologies: ['React Native CLI', 'TypeScript', 'Supabase Auth', 'Custom Hooks', 'Mobile UX', 'Encrypted Storage'],
    points: [
      'Developed a cross-platform mental health application using React Native CLI and TypeScript, designed to provide users with accessible tools to manage and alleviate anxiety.',
      'Constructed a secure backend infrastructure with Supabase, implementing encrypted user authentication to guarantee privacy for sensitive biometric & mental health logs.',
      'Engineered an immersive, animated breathing engine utilizing requestAnimationFrame pacing and haptic sensory feedback for high-stress relief.',
      'Built native responsive interfaces deployed identically on both iOS and Android with unified styling tokens.',
    ],
    keyMetrics: [
      { label: 'Framework', value: 'React Native CLI' },
      { label: 'Target Platforms', value: 'iOS & Android' },
      { label: 'Cloud Backend', value: 'Supabase Encrypted' },
    ],
    accentColor: '#10b981', // emerald
    demoType: 'calm-cue',
  },
  {
    id: 'diabetes-expert-system',
    title: 'Diabetes Expert System (DES)',
    subtitle: 'Clinical Diagnostic Inference Mobile App',
    category: 'Healthcare Mobile',
    period: '02/2026 – 05/2026',
    tagline: 'Cross-platform healthcare application built with React Native and Expo, evaluating 24+ weighted medical metrics with an automated clinical inference engine.',
    technologies: ['React Native', 'Expo SDK', 'Python', 'Inference Rules', 'Clinical Scoring', 'Dynamic Forms'],
    points: [
      'Developed a cross-platform mobile application using React Native and Expo to assess user diabetes risk through a multi-step interactive clinical questionnaire.',
      'Integrated a rule-based inference engine evaluating user responses across 24+ weighted medical parameters, analyzing symptoms, family history, and biometric indicators.',
      'Designed dynamic state-driven questionnaire components that calculate risk scores instantaneously and generate personalized dietary and screening recommendations.',
    ],
    keyMetrics: [
      { label: 'Medical Rules', value: '24+ Parameters' },
      { label: 'Engine Type', value: 'Weighted Clinical Inference' },
      { label: 'Mobile Architecture', value: 'React Native + Expo' },
    ],
    accentColor: '#0ea5e9', // sky blue
    demoType: 'diabetes-expert',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'React & Frontend Ecosystem',
    iconName: 'Atom',
    description: 'Core expertise in modern React architectures, component systems, lifecycle patterns, and cross-platform mobile interfaces.',
    skills: [
      'React.js (18 / 19)',
      'React Native CLI',
      'Expo Framework',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'React Custom Hooks',
      'Component Architecture',
      'Virtual DOM Optimization',
      'Tailwind CSS & CSS3',
      'REST API Integration',
      'Responsive Web & Mobile UI',
    ],
  },
  {
    category: 'Programming Languages',
    iconName: 'Code2',
    description: 'Clean coding practices across functional, object-oriented, and strongly typed languages.',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C++'],
  },
  {
    category: 'Backend & Web Frameworks',
    iconName: 'Globe',
    description: 'Full-stack RESTful services, server-side APIs, and architectural patterns.',
    skills: ['Django REST Framework', 'Next.js API Routes', 'PHP', 'HTML5 / Semantic Web', 'Bootstrap', 'JSON / RESTful Standards'],
  },
  {
    category: 'Databases & Cloud Storage',
    iconName: 'Database',
    description: 'Cloud databases, encrypted user authentication, real-time sync, and relational schemas.',
    skills: ['Supabase', 'Firebase Firestore & Auth', 'MySQL', 'MongoDB', 'Data Modeling', 'RBAC Security'],
  },
  {
    category: 'Machine Learning & AI Integration',
    iconName: 'Brain',
    description: 'Integrating intelligent features into React and mobile client applications.',
    skills: ['Computer Vision (Image Scanning)', 'NLP (Sentiment Analysis)', 'Rule-Based Inference Engines', 'scikit-learn', 'PyTorch', 'TensorFlow', 'pandas', 'NumPy'],
  },
  {
    category: 'Engineering Best Practices',
    iconName: 'Layers',
    description: 'Software design principles, agile workflows, and performance profiling.',
    skills: ['Git & Version Control', 'Component Lifecycle Management', 'Memoization & Re-render Optimization', 'Clean Code Principles', 'Cross-Browser Compatibility'],
  },
];

export const softSkillsList = [
  { name: 'Component-Driven Thinking', desc: 'Breaking complex user interfaces into clean, maintainable, reusable React blocks.' },
  { name: 'Problem Solving & Debugging', desc: 'Systematic root-cause tracing with React DevTools and performance profiling.' },
  { name: 'Fast Learner & Adaptable', desc: 'Rapidly adopting latest React RFCs, Next.js updates, and Expo SDK releases.' },
  { name: 'Technical Communication', desc: 'Clear dialogue on API contracts, state management, and UX architecture.' },
  { name: 'Teamwork & Code Review', desc: 'Collaborative GitHub workflow with clean branching and constructive feedback.' },
  { name: 'Performance Focus', desc: 'Preventing unnecessary re-renders with strategic hooks and memoization.' },
  { name: 'Attention to UX & Detail', desc: 'Translating design specs into pixel-precise, responsive interfaces.' },
  { name: 'Critical Thinking', desc: 'Evaluating architectural trade-offs between client and server components.' },
];

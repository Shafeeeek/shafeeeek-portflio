import { ProfileInfo, ExperienceItem, EducationItem, Project, SkillCategory } from '../types';

export const profileData: ProfileInfo = {
  name: 'Mohamed Alaaeldin Shafeek',
  title: 'Mobile Application Developer & Software Engineer',
  email: 'mohmedshii02@gmail.com',
  phone: '+20 100 460 3038',
  location: 'El Mokattam, Cairo, Egypt',
  linkedIn: 'linkedin.com/in/mohamed-a-shafeek-',
  linkedInUrl: 'https://linkedin.com/in/mohamed-a-shafeek-',
  github: 'github.com/Shafeeeek',
  githubUrl: 'https://github.com/Shafeeeek',
  summary:
    'Computer Science graduate with a strong focus on mobile application development using React Native and Expo. Experienced with JavaScript, TypeScript, REST APIs, Firebase, authentication, notifications, responsive UI development, and full-stack application projects. Strong foundation in software engineering, databases, and problem solving.',
  militaryStatus: 'Exempt',
  availability: 'Open to Full-Time & Contract Roles (Cairo & Remote)',
};

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Mobile Application Developer',
    company: 'InterNational Group For Import & Export',
    location: 'Cairo, Egypt',
    period: '02/2025 – 2026',
    framework: 'React Native & Expo Framework',
    highlights: [
      'Worked on cross-platform mobile application development using React Native and the Expo framework.',
      'Developed cross-platform app features with a strict focus on clean UI, reusable components, and mobile-first user experience.',
      'Optimized application responsiveness and collaborated on smooth integration with REST APIs and cloud services.',
    ],
    skills: ['React Native', 'Expo', 'TypeScript', 'JavaScript', 'Mobile UI/UX', 'Component Architecture', 'REST APIs'],
  },
];

export const educationData: EducationItem[] = [
  {
    institution: 'Future University in Egypt (FUE)',
    location: 'Cairo, Egypt',
    degree: 'Bachelor of Computer Science',
    period: '2021 – 2025',
    details: [
      'Comprehensive study in Software Engineering, Mobile Architectures, Machine Learning, Data Structures, and Database Management.',
      'Graduation Project: "Coffee Brain AI-Powered Management System" (Recognized for smart automation & computer vision).',
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: 'calm-cue',
    title: 'Calm Cue',
    subtitle: 'Anxiety Management & Mental Health App',
    category: 'Mobile',
    period: '09/2025 – 12/2025',
    tagline: 'Cross-platform mobile application built to provide accessible, calming tools to alleviate acute anxiety and stress.',
    technologies: ['React Native CLI', 'TypeScript', 'Supabase', 'User Auth', 'Mobile-First UX'],
    points: [
      'Developed a cross-platform mental health application using React Native CLI and TypeScript, designed to provide users with accessible tools to manage and alleviate anxiety.',
      'Integrated Supabase to construct a secure backend infrastructure, implementing robust user authentication to ensure privacy and safety of sensitive mental health data.',
      'Engineered a responsive, calming user interface deployed natively on both iOS and Android, focusing on a seamless user experience during high-stress moments.',
    ],
    keyMetrics: [
      { label: 'Platform', value: 'iOS & Android' },
      { label: 'Architecture', value: 'React Native CLI' },
      { label: 'Backend', value: 'Supabase Auth' },
    ],
    accentColor: '#10b981', // emerald
    demoType: 'calm-cue',
  },
  {
    id: 'diabetes-expert-system',
    title: 'Diabetes Expert System (DES)',
    subtitle: 'Clinical Inference & Health Assessment Mobile App',
    category: 'Healthcare Mobile',
    period: '02/2026 – 05/2026',
    tagline: 'Cross-platform clinical mobile app evaluating 24+ weighted medical parameters with a rule-based inference engine.',
    technologies: ['React Native', 'Expo', 'Python', 'Inference Engine', 'Clinical Scoring'],
    points: [
      'Developed a cross-platform mobile application using React Native and Expo to assess user diabetes risk through an interactive clinical questionnaire.',
      'Integrated a rule-based inference engine to evaluate user responses across 24+ weighted medical parameters, tracking symptoms, family history, and lifestyle habits.',
      'Designed a dynamic mobile UI that calculates risk scores and delivers personalized diagnostic classifications alongside actionable dietary and health recommendations.',
    ],
    keyMetrics: [
      { label: 'Parameters', value: '24+ Clinical Indicators' },
      { label: 'Engine', value: 'Rule-Based Inference' },
      { label: 'UI Framework', value: 'Expo / React Native' },
    ],
    accentColor: '#0ea5e9', // sky blue
    demoType: 'diabetes-expert',
  },
  {
    id: 'coffee-brain',
    title: 'Coffee Brain AI System',
    subtitle: 'AI-Powered Inventory & Analytics Management (Graduation Project)',
    category: 'Full-Stack & AI',
    period: '2024 – 2025',
    tagline: 'Intelligent inventory management system for SMEs integrating computer vision, sentiment analysis, and automated purchase orders.',
    technologies: ['ReactJS', 'Django REST API', 'Computer Vision', 'NLP', 'Sentiment Analysis'],
    points: [
      'Developed an AI-powered inventory management system for SMEs integrating automation, real-time tracking, and intelligent analytics.',
      'Implemented image processing for product scanning and recognition, enabling faster and accurate stock updates.',
      'Integrated NLP for sentiment analysis to analyze customer reviews and extract actionable business insights.',
      'Built features including automated purchase order generation, role-based access control (RBAC), and real-time reporting.',
    ],
    keyMetrics: [
      { label: 'AI Models', value: 'CV & NLP' },
      { label: 'Backend', value: 'Django REST API' },
      { label: 'Security', value: 'Role-Based Access' },
    ],
    accentColor: '#f59e0b', // amber
    demoType: 'coffee-brain',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Mobile Development',
    iconName: 'Smartphone',
    description: 'Native-feel cross-platform engineering with high performance and smooth gesture interactions.',
    skills: ['React Native', 'Expo Framework', 'React Native CLI', 'TypeScript', 'JavaScript', 'Mobile UI/UX', 'Cross-Platform (iOS/Android)', 'Component Architecture'],
  },
  {
    category: 'Programming Languages',
    iconName: 'Code2',
    description: 'Object-oriented, functional, and strongly-typed system engineering.',
    skills: ['TypeScript', 'JavaScript (ES6+)', 'Python', 'Java', 'C++'],
  },
  {
    category: 'Web & Full-Stack',
    iconName: 'Globe',
    description: 'Full-stack application development, API design, and responsive interfaces.',
    skills: ['ReactJS', 'Next.js', 'Django REST API', 'HTML5 & CSS3', 'Bootstrap', 'PHP', 'REST APIs'],
  },
  {
    category: 'Databases & Cloud',
    iconName: 'Database',
    description: 'Secure data models, relational and NoSQL storage, and cloud authentication.',
    skills: ['Supabase', 'Firebase', 'MySQL', 'MongoDB', 'Authentication & Authorization', 'User Privacy'],
  },
  {
    category: 'Machine Learning & AI',
    iconName: 'Brain',
    description: 'Applied AI implementations in predictive modeling, computer vision, and NLP.',
    skills: ['Computer Vision', 'NLP (Sentiment Analysis)', 'PyTorch', 'TensorFlow', 'scikit-learn', 'pandas', 'NumPy', 'Rule-Based Inference Engines'],
  },
  {
    category: 'Desktop & Software Foundations',
    iconName: 'Layers',
    description: 'Solid computer science foundations in software architecture and algorithms.',
    skills: ['JavaFX', 'Data Structures & Algorithms', 'Role-Based Access Control (RBAC)', 'Problem Solving'],
  },
];

export const softSkillsList = [
  { name: 'Communication', desc: 'Clear cross-functional alignment and technical discussions.' },
  { name: 'Problem Solving', desc: 'Root-cause analysis and pragmatic engineering decisions.' },
  { name: 'Adaptability', desc: 'Rapidly embracing new frameworks, SDKs, and mobile trends.' },
  { name: 'Fast Learner', desc: 'Quick mastery of emerging technologies and complex workflows.' },
  { name: 'Teamwork', desc: 'Collaborative development with agile code reviews.' },
  { name: 'Time Management', desc: 'Consistent delivery of project milestones and features.' },
  { name: 'Critical Thinking', desc: 'Evaluating trade-offs between performance and complexity.' },
  { name: 'Analytical Mindset', desc: 'Data-driven debugging and algorithmic optimization.' },
];

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Mobile' | 'Full-Stack & AI' | 'Healthcare Mobile';
  period: string;
  tagline: string;
  technologies: string[];
  points: string[];
  keyMetrics?: { label: string; value: string }[];
  accentColor: string;
  githubUrl?: string;
  demoType: 'calm-cue' | 'diabetes-expert' | 'coffee-brain';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  framework: string;
  highlights: string[];
  skills: string[];
}

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  period: string;
  details: string[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: string[];
  description: string;
}

export interface ProfileInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedIn: string;
  linkedInUrl: string;
  github: string;
  githubUrl: string;
  summary: string;
  militaryStatus: string;
  availability: string;
}


export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  grade?: string;
  courses: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  period: string;
  github?: string;
  liveUrl?: string;
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  date: string;
}

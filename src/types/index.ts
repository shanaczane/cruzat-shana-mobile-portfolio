export interface Theme {
  background: string;
  headerBg: string;
  navBg: string;
  cardBg: string;
  text: string;
  textSecondary: string;
  accent: string;
  skillBarBg: string;
  tagBg: string;
}

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  instagram: string;
  profileImage: any;
}

export interface TechStackCategory {
  id: string;
  category: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}
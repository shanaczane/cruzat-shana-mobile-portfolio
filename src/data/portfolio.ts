import { ProfileData, TechStackCategory, Project } from "../types";

const profileImg = "https://i.imgur.com/JBuoOcS.jpeg";

export const profileData: ProfileData = {
  name: "Shana Czane M. Cruzat",
  title: "BS Computer Science Student",
  bio: "I’m passionate about learning new technologies and applying them to real-world projects. I enjoy building practical solutions that help me grow as a developer.",
  email: "shanaczanecruzat@gmail.com",
  github: "https://github.com/shanaczane",
  linkedin: "https://www.linkedin.com/in/shana-cruzat-12b6052a3/",
  instagram: "https://instagram.com/shanaczane",
  profileImage: profileImg,
};

export const techStack: TechStackCategory[] = [
  {
    id: "1",
    category: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "TailwindCSS",
      "Bootstrap",
      "Vite",
    ],
  },
  {
    id: "2",
    category: "Backend",
    skills: ["Node.js", "Express.js", "Python"],
  },
  {
    id: "3",
    category: "Databases",
    skills: ["MongoDB", "MySQL"],
  },
  {
    id: "4",
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Vercel"],
  },
  {
    id: "5",
    category: "Programming Languages",
    skills: ["C++", "Python", "PHP"],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "FurSure",
    description:
      "An ongoing pet care companion app that centralizes services, allowing users to book appointments and manage pet information in one convenient platform.",
    technologies: ["React", "Supabase", "Node.js"],
    link: "https://github.com/shanaczane/FurSure-frontend",
  },
  {
    id: "2",
    title: "Computer Shop System",
    description:
      "A system for monitoring and managing computer usage in a shop, with user tracking, full CRUD, and organized data management.",
    technologies: ["PHP", "HTML", "CSS"],
    link: "https://github.com/shanaczane/computer_shop_system",
  },
  {
    id: "3",
    title: "Pinoy Recipe Finder",
    description:
      "Beautiful weather app with 7-day forecasts, location-based weather, and interactive maps.",
    technologies: ["React", "JavaScript", "HTML", "Tailwind"],
    link: "https://github.com/shanaczane/pinoy-recipe-finder",
  },
  {
    id: "4",
    title: "School Management System",
    description:
      "A system that enrolls students and teachers in their respective classes and subjects.",
    technologies: ["PHP", "HTML", "CSS"],
    link: "https://github.com/shanaczane/school_management_system",
  },
];

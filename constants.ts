
import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "AHAMED SALIM WUNNAM",
  title: "Software Engineering Student",
  bio: "Aspiring software engineer currently in Level 200 at Ghana Communication Technology University. I am passionate about full-stack development, algorithmic problem solving, and the integration of AI into modern web applications. Currently building a solid foundation in software architecture and modern development tools.",
  email: "ahamedsalim2005@gmail.com",
  github: "https://github.com/AhmedSalim",
  linkedin: "https://www.linkedin.com/in/ahamed-salim-759214372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  education: [
    {
      degree: "BSc. Software Engineering (Level 200)",
      institution: "GHANA COMMUNICATION TECHNOLOGY UNIVERSITY",
      period: "2025 - Present",
      details: "Actively studying core software engineering principles, data structures, object-oriented programming, and database management systems."
    }
  ],
  projects: [
    {
      id: "p1",
      title: "Academic Portfolio Hub",
      description: "A responsive and interactive portfolio built to showcase academic achievements and technical skills using React and Tailwind CSS.",
      tags: ["React", "TypeScript", "Tailwind"],
      imageUrl: "https://picsum.photos/seed/portfolio/600/400",
      githubUrl: "https://github.com/AhmedSalim",
      category: "Coding"
    },
    {
      id: "p2",
      title: "Neural Network Explorer",
      description: "A research-focused project exploring basic neural network implementations for pattern recognition in small datasets.",
      tags: ["Python", "TensorFlow", "Research"],
      imageUrl: "https://picsum.photos/seed/ai/600/400",
      githubUrl: "https://github.com/AhmedSalim",
      category: "Research"
    },
    {
      id: "p3",
      title: "Modern UI/UX Patterns",
      description: "A collection of reusable, highly accessible UI components developed as part of a university project on human-computer interaction.",
      tags: ["Figma", "React", "CSS"],
      imageUrl: "https://picsum.photos/seed/design/600/400",
      category: "Coding"
    }
  ],
  skills: [
    { name: "HTML", level: 5, category: "Language" },
    { name: "CSS", level: 5, category: "Language" },
    { name: "JavaScript", level: 4, category: "Language" },
    { name: "C++", level: 4, category: "Language" },
    { name: "SQL", level: 4, category: "Tool" }
  ],
  experience: [
    {
      id: "e1",
      role: "Software Engineering Student",
      organization: "GCTU",
      period: "2025 - Present",
      description: [
        "Developing core software development skills through project-based learning.",
        "Collaborating with peers on system design and software architecture assignments.",
        "Exploring emerging technologies in web development and artificial intelligence."
      ]
    }
  ]
};

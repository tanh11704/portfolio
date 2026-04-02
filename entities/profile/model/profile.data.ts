export type HeroStat = {
  label: string;
  value: string;
};

export type AboutValue = {
  title: string;
  description: string;
  icon: "heart" | "users";
};

export type SkillItem = {
  name: string;
};

export type PhilosophyItem = {
  title: string;
  description: string;
};

export type ProfileData = {
  name: string;
  role: string;
  heroTitle: string;
  heroDescription: string;
  availabilityText: string;
  specialization: HeroStat;
  coreStack: HeroStat;
  approach: HeroStat;
  avatarSrc: string;
  reliabilityLabel: string;
  reliabilityValue: string;
  resumeFile: string;
  aboutTitle: string;
  aboutDescription: string;
  aboutValues: AboutValue[];
  philosophyBadge: string;
  philosophyTitle: string;
  philosophyDescription: string;
  skillsTitle: string;
  skillsVersion: string;
  skills: SkillItem[];
  engineeringPhilosophyTitle: string;
  philosophyItems: PhilosophyItem[];
  contactPageBadge: string;
  contactPageTitle: string;
  contactPageDescription: string;
  email: string;
  phone: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
};

export const profileData: ProfileData = {
  name: "Phước Anh",
  role: "Java Backend Developer",
  heroTitle: "Hi, I'm Phước Anh.",
  heroDescription:
    "A Java Backend Developer who loves building robust, scalable, and clean systems.",
  availabilityText: "Available for new opportunities",
  specialization: {
    label: "Specialization",
    value: "Microservices & APIs",
  },
  coreStack: {
    label: "Core Stack",
    value: "Java, Spring Boot, SQL",
  },
  approach: {
    label: "Approach",
    value: "Stability & Clean Code",
  },
  avatarSrc: "/avatar.jpg",
  reliabilityLabel: "Reliability First",
  reliabilityValue: "System Architect",
  resumeFile: "/TranPhuocAnh_Fresher_Java.pdf",
  aboutTitle: "About Me",
  aboutDescription:
    "I thrive behind the scenes, ensuring the stability and protection of the entire system architecture. As a developer with strong sincerity and teamwork values, I focus on dependable backend foundations that teams can build on with confidence.",
  aboutValues: [
    {
      title: "Sincerity",
      description:
        "Honest communication and transparency in every line of code and interaction.",
      icon: "heart",
    },
    {
      title: "Teamwork",
      description:
        "Collaboration is key. The strongest systems are built through shared goals.",
      icon: "users",
    },
  ],
  philosophyBadge: "Engineering Mindset",
  philosophyTitle: "Tech Stack & Programming Philosophy",
  philosophyDescription:
    "Meticulous energy meets sustainable architecture. I build systems that endure, balancing Virgo precision with Taurus stability.",
  skillsTitle: "Core Technical Skills",
  skillsVersion: "Version 2.4.6",
  skills: [
    { name: "Java 17+" },
    { name: "Spring Boot" },
    { name: "Hibernate" },
    { name: "MySQL/PostgreSQL" },
    { name: "Git" },
    { name: "Postman" },
    { name: "Docker" },
    { name: "JUnit/Mockito" },
  ],
  engineeringPhilosophyTitle: "Engineering Philosophy",
  philosophyItems: [
    {
      title: "Human-Centric Design",
      description:
        "Write code for humans first, machines second. Clear naming, logical structure, and documentation are requirements.",
    },
    {
      title: "Performance Discipline",
      description:
        "Performance obsessed: optimize SQL queries before scaling. Scale out only after the core data layer is efficient.",
    },
    {
      title: "Test-Driven Reliability",
      description:
        "Core logic is covered by unit tests. High coverage ensures confidence during refactoring and deployment.",
    },
  ],
  contactPageBadge: "Contact",
  contactPageTitle: "Get in touch",
  contactPageDescription:
    "Whether you are hiring, exploring collaboration, or want to talk architecture — send a message. I usually reply within a few business days.",
  email: "anhtp117@gmail.com",
  phone: "+84 (0) 773 605 741",
  location: "Da Nang City, Vietnam",
  githubUrl: "https://github.com/tanh11704",
  linkedinUrl: "https://www.linkedin.com/tanh11704",
};

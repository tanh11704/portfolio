export type HeroStat = {
  label: string;
  value: string;
};

export type AboutValue = {
  title: string;
  description: string;
  icon: "heart" | "users";
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
  aboutTitle: string;
  aboutDescription: string;
  aboutValues: AboutValue[];
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
};

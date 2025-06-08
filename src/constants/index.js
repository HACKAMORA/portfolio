export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: `Système de Détection d'Intrusion (IDS)`,
    desc: `Développement d'un système de détection d'intrusion pour surveiller le trafic réseau et alerter en cas d'activités suspectes ou malveillantes.`,
    subdesc:
      `Ce projet utilise des techniques d'analyse de paquets et de signature pour identifier les menaces courantes, avec une interface de visualisation des alertes en temps réel.`,
    href: '#', // À remplacer par votre lien GitHub ou de démonstration
    texture: '/textures/project/project1.mp4', // Utilisation d'une texture existante
    logo: '/assets/project-logo1.png', // Utilisation d'un logo existant
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png', // Placeholder
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/react.svg', // Utilisé une icône existante
      },
      {
        id: 2,
        name: 'Scapy',
        path: '/assets/github.svg', // Utilisé une icône existante
      },
      {
        id: 3,
        name: 'Machine Learning',
        path: '/assets/tailwindcss.png', // Utilisé une icône existante
      },
      {
        id: 4,
        name: 'Flask',
        path: '/assets/typescript.png', // Utilisé une icône existante
      },
    ],
  },
  {
    title: `Application de Cryptographie Avancée`,
    desc: `Mise en œuvre et démonstration de divers algorithmes de chiffrement et de déchiffrement pour la sécurisation des données.`,
    subdesc:
      `Cette application permet d'explorer des chiffrements symétriques (AES, DES) et asymétriques (RSA), ainsi que des fonctions de hachage (SHA-256), avec une interface utilisateur intuitive.`,
    href: '#', // À remplacer par votre lien GitHub ou de démonstration
    texture: '/textures/project/project2.mp4', // Utilisation d'une texture existante
    logo: '/assets/project-logo2.png', // Utilisation d'un logo existant
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png', // Placeholder
    tags: [
      {
        id: 1,
        name: 'Java',
        path: '/assets/react.svg', // Utilisé une icône existante
      },
      {
        id: 2,
        name: 'Spring Boot',
        path: '/assets/github.svg', // Utilisé une icône existante
      },
      {
        id: 3,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 4,
        name: 'Cryptography',
        path: '/assets/tailwindcss.png', // Utilisé une icône existante
      },
    ],
  },
  {
    title: `Audit de Sécurité Web et Rapports de Pentesting`,
    desc: `Réalisation d'audits de sécurité sur des applications web et génération de rapports détaillés sur les vulnérabilités découvertes.`,
    subdesc:
      `Analyse des failles OWASP Top 10 (Injection, XSS, Broken Auth, etc.) et proposition de mesures correctives, avec utilisation d'outils de pentesting reconnus.`,
    href: '#', // À remplacer par votre lien GitHub ou de démonstration
    texture: '/textures/project/project3.mp4', // Utilisation d'une texture existante
    logo: '/assets/project-logo3.png', // Utilisation d'un logo existant
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png', // Placeholder
    tags: [
      {
        id: 1,
        name: 'Burp Suite',
        path: '/assets/react.svg', // Utilisé une icône existante
      },
      {
        id: 2,
        name: 'OWASP ZAP',
        path: '/assets/github.svg', // Utilisé une icône existante
      },
      {
        id: 3,
        name: 'Kali Linux',
        path: '/assets/tailwindcss.png', // Utilisé une icône existante
      },
      {
        id: 4,
        name: 'Nmap',
        path: '/assets/typescript.png', // Utilisé une icône existante
      },
    ],
  },
];

export const education = [
  {
    title: "Engineering Program – Cybersecurity and Digital Trust",
    school: "National Institute of Posts and Telecommunications",
    duration: "Rabat — 2024 - Present",
    description: "Specialized training in cybersecurity: cryptography, network security, secure operating systems, system administration, threat analysis, risk analysis, and IT auditing.",
  },
  {
    title: "Bachelor's in Mathematical and Computer Sciences",
    school: "Faculty of Sciences Ain Chock",
    duration: "Casablanca — 2022 - 2024",
    description: "Strong background in mathematics, theoretical computer science, algorithms, software development, and programming.",
  },
  {
    title: "Bootcamp Arkx – Développement Web Fullstack (MERN)",
    school: "Arkx",
    duration: "Casablanca — 2024",
    description: "Intensive training in fullstack web development using MongoDB, Express.js, React.js, Node.js.",
  },
];

export const workExperiences = [
  {
    id: 1,
    name: "3W ACADEMY",
    pos: "Fullstack Web Developer (Internship)",
    duration: "Casablanca — June 2023 - Feb 2024",
    title: "Development of complete web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
    icon: "/assets/react.svg",
    animation: "idle",
  },
  {
    id: 2,
    name: "Innovatel",
    pos: "Event Organization: SMART CITY SALON 2023",
    duration: "Casablanca — May 2023",
    title: "Participation in the logistical management of tech events: reception, security, coordination with stakeholders.",
    icon: "/assets/star.png",
    animation: "idle",
  },
];

export const technicalSkills = {
  languagesFrameworks: ["JavaScript", "Node.js", "React.js", "HTML/CSS", "MongoDB", "Express.js"],
  tools: ["Git", "GitHub", "VS Code", "Postman", "Wireshark", "Burp Suite"],
  methodologies: ["Agile", "Scrum", "Résolution de problèmes", "Travail en équipe"],
};

export const volunteering = [
  {
    role: "President – INPT Blockchain Club",
    organization: "Rabat",
    duration: "2024 – Present",
    description: "Member of the organizing team for the February 27–28, 2025 conference at INPT, focusing on cybersecurity and digital trust.",
  },
  {
    role: "Member – CAS Club (Social Affairs Club)",
    organization: "Rabat",
    duration: "2024 – Present",
  },
  {
    role: "Member – IODSE",
    organization: "Casablanca",
    duration: "2024 – Present",
  },
];

export const softSkills = ["Team Spirit", "Leadership", "Communication"];

export const languages = [
  { name: "French", level: "Good level" },
  { name: "Arabic", level: "Fluent" },
  { name: "English", level: "Intermediate" },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

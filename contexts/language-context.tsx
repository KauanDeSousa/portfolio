'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Language = 'en' | 'pt-BR';

type LanguageContextType = {
    language: Language;
    setLanguage: (language: Language) => void;
    t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations
const translations = {
    en: {
        // Header
        about: 'About',
        projects: 'Projects',
        skills: 'Skills',
        contact: 'Contact',

        // Hero
        fullStackDeveloper: 'Full Stack Developer',
        heroTagline: 'Crafting immersive digital experiences with code and creativity',
        downloadCV: 'Download CV',
        contactMe: 'Contact Me',
        scrollDown: 'Scroll Down',

        // About
        aboutTitle: 'About me',
        aboutSubtitle: 'A little more about me',
        aboutMeName: 'My experience as a DEV',
        aboutMeDescription: `I am a developer who is passionate about technology and driven by the creation of intelligent, functional and visually impressive solutions. I have extensive knowledge of a variety of web and mobile technologies that allow me to work end-to-end in the development of robust, high-performance applications with an excellent user experience.

                            My specialty begins with a solid foundation in HTML, CSS and JavaScript, with which I build modern, responsive and highly interactive interfaces. I have extensive experience with React and React Native, frameworks that I use to develop high-level web and mobile applications, with a focus on performance, scalability and usability.

                            I use Next.js to take my applications to the next level, optimizing SEO and loading with advanced techniques such as server-side rendering and static site generation. For styling, I rely on the productivity and visual consistency offered by Tailwind CSS, allowing me to create clean, cohesive interfaces with a unique identity.

                            In the desktop world, I use Electron.js to transform web applications into multiplatform software, offering complete experiences for Windows, macOS and Linux users, without giving up web technology.

                            My stack also extends to the backend, where I have an extremely solid foundation in NestJS, Node.js, Prisma, Express, as well as expertise with PHP and Laravel, frameworks with which I develop APIs, complex systems and secure and scalable integrations. I am also fluent in Vue.js and in the use of relational databases such as MySQL, allowing me to create complete solutions, from the database to the front-end.

                            This combination of skills allows me to deliver complete products, with high technical quality, modern design and total focus on the user experience. I am always looking for new challenges that allow me to apply my knowledge and evolve even further as a developer.`,
        readMore: 'Read More...',
        readLess: 'Read Less...',
        // Projects
        projectsTitle: 'Projects',
        projectsSubtitle: 'Check out some of my recent work',
        viewAllProjects: 'View all projects',
        ecommerceTitle: 'MatchMaker',
        ecommerceDesc: 'Amateur Football Team Management & Matchmaking Platform with custom API backend.',
        dashboardTitle: 'carDi Digital',
        dashboardDesc: 'Landing Page Of The Intelligent Restaurant and Business Management System.',
        aiTaskTitle: 'carDi Store',
        aiTaskDesc: 'Delivery and Order Management Platform & Marketplace Of Registered Stores.',

        // Skills
        softSkillsTitle: 'Soft Skills',
        softSkillsSubtitle: 'The human side of my technical expertise',
        problemSolving: 'Problem Solving',
        problemSolvingDesc: 'Analytical approach to breaking down complex problems into manageable solutions.',
        teamCollaboration: 'Team Collaboration',
        teamCollaborationDesc: 'Effective communication and collaboration in diverse team environments.',
        creativeThinking: 'Creative Thinking',
        creativeThinkingDesc: 'Innovative approaches to technical challenges and user experience design.',
        timeManagement: 'Time Management',
        timeManagementDesc: 'Efficient prioritization and delivery of projects within tight deadlines.',
        attentionToDetail: 'Attention to Detail',
        attentionToDetailDesc: 'Meticulous focus on code quality, performance, and user experience.',
        communication: 'Communication',
        communicationDesc: 'Clear articulation of technical concepts to both technical and non-technical stakeholders.',

        // Tech Stack
        techStackTitle: 'Tech Stack',
        techStackSubtitle: 'Technologies I work with',

        // Contact
        contactTitle: 'Contact Me',
        contactSubtitle: "Let's work together on your next project",
        name: 'Name',
        email: 'Email',
        message: 'Message',
        sending: 'Sending...',
        sendMessage: 'Send Message',
        messageSent: 'Message Sent!',
        thankYou: "Thank you for reaching out. I'll get back to you soon.",
        connectWithMe: 'Connect With Me',

        // Footer
        allRightsReserved: 'All rights reserved.',
        builtWith: 'Built with Next.js, TailwindCSS, and Framer Motion',
    },
    'pt-BR': {
        // Header
        about: 'Sobre',
        projects: 'Projetos',
        skills: 'Habilidades',
        contact: 'Contato',

        // Hero
        fullStackDeveloper: 'Desenvolvedor Full Stack',
        heroTagline: 'Criando experiências digitais imersivas com código e criatividade',
        downloadCV: 'Download CV',
        contactMe: 'Fale Comigo',
        scrollDown: 'Rolar para Baixo',

        // About
        aboutTitle: 'Sobre mim',
        aboutSubtitle: 'Um pouco mais sobre mim',
        aboutMeName: 'Minha experiência como DEV',
        aboutMeDescription: `Sou um desenvolvedor apaixonado por tecnologia e movido pela criação de soluções inteligentes, funcionais e visualmente impressionantes. Possuo amplo domínio em uma variedade de tecnologias web e mobile que me permitem atuar de ponta a ponta no desenvolvimento de aplicações robustas, performáticas e com excelente experiência do usuário.

                            Minha especialidade começa pela base sólida em HTML, CSS e JavaScript, com os quais construo interfaces modernas, responsivas e altamente interativas. Tenho vasta experiência com React e React Native, frameworks que utilizo para desenvolver aplicações web e mobile de alto nível, com foco em desempenho, escalabilidade e usabilidade.

                            Utilizo Next.js para levar minhas aplicações ao próximo nível, otimizando o SEO e o carregamento com técnicas avançadas como server-side rendering e static site generation. Para estilização, aposto na produtividade e na consistência visual oferecida pelo Tailwind CSS, permitindo criar interfaces limpas, coesas e com identidade única.

                            No universo desktop, utilizo Electron.js para transformar aplicações web em softwares multiplataforma, oferecendo experiências completas para usuários de Windows, macOS e Linux, sem abrir mão da tecnologia web.

                            Minha stack também se estende ao backend, onde possuo uma base extremamente sólida em NestJS, Node.js, Prisma, Express, além de expertise com PHP e Laravel, frameworks com os quais desenvolvo APIs, sistemas complexos e integrações seguras e escaláveis. Também sou fluente em Vue.js e no uso de bancos de dados relacionais como MySQL, permitindo criar soluções completas, do banco de dados ao front-end.

                            Essa combinação de habilidades me permite entregar produtos completos, com alta qualidade técnica, design moderno e foco total na experiência do usuário. Estou sempre em busca de novos desafios que me permitam aplicar meu conhecimento e evoluir ainda mais como desenvolvedor.`,
        readMore: 'Leia Mais...',
        readLess: 'Leia Menos...',
        // Projects
        projectsTitle: 'Projetos',
        projectsSubtitle: 'Confira alguns dos meus trabalhos recentes',
        viewAllProjects: 'Ver todos os projetos',
        ecommerceTitle: 'MatchMaker',
        ecommerceDesc: 'Plataforma de gerenciamento e criação de partidas de times de futebol amador com backend de API personalizado.',
        dashboardTitle: 'carDi Digital',
        dashboardDesc: 'Landing Page do sistema inteligente de gestão de restaurantes e negócios.',
        aiTaskTitle: 'carDi Store',
        aiTaskDesc: 'Plataforma de entrega e gerenciamento de pedidos e marketplace de lojas cadastradas.',

        // Skills
        softSkillsTitle: 'Habilidades Interpessoais',
        softSkillsSubtitle: 'O lado humano da minha expertise técnica',
        problemSolving: 'Resolução de Problemas',
        problemSolvingDesc: 'Abordagem analítica para decompor problemas complexos em soluções gerenciáveis.',
        teamCollaboration: 'Colaboração em Equipe',
        teamCollaborationDesc: 'Comunicação eficaz e colaboração em ambientes de equipe diversos.',
        creativeThinking: 'Pensamento Criativo',
        creativeThinkingDesc: 'Abordagens inovadoras para desafios técnicos e design de experiência do usuário.',
        timeManagement: 'Gestão de Tempo',
        timeManagementDesc: 'Priorização eficiente e entrega de projetos dentro de prazos apertados.',
        attentionToDetail: 'Atenção aos Detalhes',
        attentionToDetailDesc: 'Foco meticuloso na qualidade do código, desempenho e experiência do usuário.',
        communication: 'Comunicação',
        communicationDesc: 'Articulação clara de conceitos técnicos para stakeholders técnicos e não técnicos.',

        // Tech Stack
        techStackTitle: 'Stack Tecnológica',
        techStackSubtitle: 'Tecnologias com as quais trabalho',

        // Contact
        contactTitle: 'Entre em Contato',
        contactSubtitle: 'Vamos trabalhar juntos no seu próximo projeto',
        name: 'Nome',
        email: 'Email',
        message: 'Mensagem',
        sending: 'Enviando...',
        sendMessage: 'Enviar Mensagem',
        messageSent: 'Mensagem Enviada!',
        thankYou: 'Obrigado pelo contato. Retornarei em breve.',
        connectWithMe: 'Conecte-se Comigo',

        // Footer
        allRightsReserved: 'Todos os direitos reservados.',
        builtWith: 'Construído com Next.js, TailwindCSS e Framer Motion',
    },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>('en');
    const [mounted, setMounted] = useState(false);

    // Load language preference from localStorage on mount
    useEffect(() => {
        setMounted(true);
        const savedLanguage = localStorage.getItem('language-preference');
        if (savedLanguage === 'en' || savedLanguage === 'pt-BR') {
            setLanguageState(savedLanguage);
        }
    }, []);

    // Function to set language and save to localStorage
    const setLanguage = (newLanguage: Language) => {
        setLanguageState(newLanguage);
        localStorage.setItem('language-preference', newLanguage);
    };

    // Translation function
    const t = (key: string): string => {
        if (!mounted) return '';
        return (translations[language as keyof typeof translations] as Record<string, string>)[key] || key;
    };

    return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}

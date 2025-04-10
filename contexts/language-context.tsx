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

'use client';

import type React from 'react';

import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import ProjectCard from '@/components/project-card';
import SkillsSection from '@/components/skills-section';
import TechStack from '@/components/tech-stack';
import ThemeToggle from '@/components/theme-toggle';
import LanguageToggle from '@/components/language-toggle';
import ContactForm from '@/components/contact-form';
import HeroSection from '@/components/hero-section';
import MobileMenu from '@/components/mobile-menu';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/50">
            <header className="container mx-auto py-6 px-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold tracking-tighter">
                    <span className="text-primary">KAUAN</span>VITOR
                </Link>
                <div className="flex items-center gap-4">
                    <nav className="hidden md:flex gap-6">
                        <NavLinks />
                    </nav>
                    <div className="flex items-center gap-2">
                        <LanguageToggle />
                        <ThemeToggle />
                    </div>
                    <MobileMenu />
                </div>
            </header>

            <main className="container mx-auto px-4 pb-20">
                <HeroSection />
                <ProjectsSection />
                <SkillsSection />
                <TechStack />
                <ContactSection />
            </main>

            <Footer />
        </div>
    );
}

function NavLinks() {
    return (
        <>
            <NavLink href="#about" translationKey="about" />
            <NavLink href="#projects" translationKey="projects" />
            <NavLink href="#skills" translationKey="skills" />
            <NavLink href="#contact" translationKey="contact" />
        </>
    );
}

function NavLink({ href, translationKey }: { href: string; translationKey: string }) {
    return <TranslatedLink href={href} translationKey={translationKey} className="hover:text-primary transition-colors" />;
}

function TranslatedLink({ href, translationKey, className }: { href: string; translationKey: string; className?: string }) {
    return <ClientTranslatedLink href={href} translationKey={translationKey} className={className} />;
}

function ProjectsSection() {
    return (
        <section id="projects" className="py-20">
            <TranslatedHeading translationKey="projectsTitle" />
            <TranslatedSubheading translationKey="projectsSubtitle" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard
                    titleKey="dashboardTitle"
                    descriptionKey="dashboardDesc"
                    tags={['Next.js', 'TypeScript', 'TailwindCSS', 'REST API', 'MySQL']}
                    image="/cardi-landing-page.png"
                    demoUrl="https://www.cardi.digital/"
                    repoUrl="https://github.com/carDi-Dev"
                />
                <ProjectCard
                    titleKey="aiTaskTitle"
                    descriptionKey="aiTaskDesc"
                    tags={['Next.js', 'TypeScript', 'TailwindCSS', 'REST API', 'MySQL']}
                    image="/cardi-store.png"
                    demoUrl="https://stores.cardi.digital/"
                    repoUrl="https://github.com/carDi-Dev"
                />
                <ProjectCard
                    titleKey="ecommerceTitle"
                    descriptionKey="ecommerceDesc"
                    tags={['Next.js', 'TypeScript', 'TailwindCSS', 'Prisma', 'Postgresql', 'Vercel']}
                    image="/match-maker.png"
                    demoUrl="https://match-maker-five.vercel.app/"
                    repoUrl="https://github.com/KauanDeSousa/MatchMaker"
                />
            </div>

            <div className="mt-10 text-center">
                <ClientTranslatedLink
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/KauanDeSousa"
                    translationKey="viewAllProjects"
                    className="inline-flex items-center text-primary hover:underline"
                    icon={<ArrowRight className="ml-2 h-4 w-4" />}
                />
            </div>
        </section>
    );
}

function ContactSection() {
    return (
        <section id="contact" className="py-20">
            <TranslatedHeading translationKey="contactTitle" />
            <TranslatedSubheading translationKey="contactSubtitle" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <ContactForm />

                <div className="bg-card rounded-lg p-6 shadow-lg border border-border h-fit">
                    <TranslatedText translationKey="connectWithMe" className="text-xl font-semibold mb-4" as="h3" />
                    <div className="space-y-4">
                        <a
                            href="mailto:kauanvitor9@hotmail.com"
                            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Mail className="h-5 w-5" />
                            <span>kauanvitor9@hotmail.com</span>
                        </a>
                        <a
                            href="https://github.com/KauanDeSousa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Github className="h-5 w-5" />
                            <span>github.com/KauanDeSousa</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/kauan-vitor-670075238/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Linkedin className="h-5 w-5" />
                            <span>linkedin.com/in/KauanVitor</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="bg-card border-t border-border py-10">
            <div className="container mx-auto px-4 text-center">
                <p className="text-muted-foreground">
                    © {new Date().getFullYear()} KauanVitor Portfolio. <TranslatedText translationKey="allRightsReserved" as="span" />
                </p>
                <TranslatedText translationKey="builtWith" className="text-sm text-muted-foreground mt-2" as="p" />
            </div>
        </footer>
    );
}

function TranslatedHeading({ translationKey }: { translationKey: string }) {
    return <TranslatedText translationKey={translationKey} className="text-3xl font-bold mb-2" as="h2" />;
}

function TranslatedSubheading({ translationKey }: { translationKey: string }) {
    return <TranslatedText translationKey={translationKey} className="text-muted-foreground mb-10" as="p" />;
}

function TranslatedText({
    translationKey,
    className,
    as: Component = 'div',
}: {
    translationKey: string;
    className?: string;
    as?: React.ElementType;
}) {
    return <ClientTranslatedText translationKey={translationKey} className={className} as={Component} />;
}

// Client components that use the language context
function ClientTranslatedText({
    translationKey,
    className,
    as: Component = 'div',
}: {
    translationKey: string;
    className?: string;
    as?: React.ElementType;
}) {
    const { t } = useLanguage();
    return <Component className={className}>{t(translationKey)}</Component>;
}

function ClientTranslatedLink({
    href,
    translationKey,
    className,
    icon,
    target,
    rel,
}: {
    href: string;
    translationKey: string;
    className?: string;
    icon?: React.ReactNode;
    target?: string;
    rel?: string;
}) {
    const { t } = useLanguage();
    return (
        <Link href={href} className={className} target={target} rel={rel}>
            {t(translationKey)}
            {icon}
        </Link>
    );
}

// Import at the top of the file
import { useLanguage } from '@/contexts/language-context';

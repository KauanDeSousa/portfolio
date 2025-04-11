'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { useState } from 'react'; // Importe o useState
import { Button } from '@/components/ui/button'; // Importe seu componente Button
import Link from 'next/link';

export default function AboutMeSection() {
    const { t } = useLanguage();
    const [expanded, setExpanded] = useState(false); // Estado para controlar a expansão

    const skills = [
        {
            icon: <Code className="md:h-8 md:w-8 h-6 w-6 text-primary" />,
            titleKey: 'aboutMeName',
            descriptionKey: 'aboutMeDescription',
        },
    ];

    return (
        <section id="about" className="py-20">
            <h2 className="text-3xl font-bold mb-2">{t('aboutTitle')}</h2>
            <p className="text-muted-foreground mb-10">{t('aboutSubtitle')}</p>

            <div className="grid grid-cols-1 gap-6">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.titleKey}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true, margin: '-100px' }}
                    >
                        <Card className="h-full">
                            <CardContent className="pt-6">
                                <h3 className="md:text-xl text-base font-semibold mb-2 flex items-end gap-2 justify-center md:justify-normal">
                                    <span>{skill.icon}</span>
                                    {t(skill.titleKey)}
                                    <span>{skill.icon}</span>
                                </h3>
                                <div className="space-y-2">
                                    <p className={`text-muted-foreground text-justify ${!expanded ? 'line-clamp-4' : ''}`}>
                                        {t(skill.descriptionKey)}
                                    </p>
                                    <Button
                                        variant="link"
                                        className="p-0 h-auto text-primary hover:no-underline"
                                        onClick={(e) => {
                                            e.preventDefault(); // Previne o comportamento padrão do link
                                            setExpanded(!expanded);
                                            document.getElementById('about')?.scrollIntoView({
                                                behavior: 'smooth',
                                            });
                                        }}
                                    >
                                        {expanded ? t('readLess') : t('readMore')}
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

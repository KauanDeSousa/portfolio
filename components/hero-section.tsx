'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/language-context';

export default function HeroSection() {
    const { t } = useLanguage();

    return (
        <section id="hero" className="py-20 flex flex-col items-center justify-center min-h-[80vh] mb-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto"
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mb-6 inline-block"
                >
                    <div className="md:w-40 md:h-40 w-32 h-32 rounded-full overflow-hidden border-4 border-primary mx-auto">
                        <img src="/eu.png" alt="Profile" className="w-full h-full object-cover object-top" />
                    </div>
                </motion.div>

                <motion.h1
                    className="text-2xl md:text-6xl font-bold mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <span className="text-primary">{t('fullStackDeveloper')}</span>
                </motion.h1>

                <motion.p
                    className="md:text-xl text-base text-muted-foreground mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    {t('heroTagline')}
                </motion.p>

                <motion.div
                    className="flex flex-col md:flex-wrap gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <Button size="lg" className="gap-2" onClick={() => window.open('/curriculo.pdf', '_blank')}>
                        <Download className="h-4 w-4" /> {t('downloadCV')}
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="#contact" className="gap-2">
                            {t('contactMe')}
                        </Link>
                    </Button>
                </motion.div>
            </motion.div>

            <motion.div
                className="absolute sm:bottom-20 -bottom-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
            >
                <Link href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
                    <span className="text-sm mb-2">{t('scrollDown')}</span>
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
                        <ArrowDown className="h-5 w-5" />
                    </motion.div>
                </Link>
            </motion.div>
        </section>
    );
}

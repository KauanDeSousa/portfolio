'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

interface ProjectCardProps {
    titleKey: string;
    descriptionKey: string;
    tags: string[];
    image: string;
    demoUrl: string;
    repoUrl: string;
}

export default function ProjectCard({ titleKey, descriptionKey, tags, image, demoUrl, repoUrl }: ProjectCardProps) {
    const { t } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
        >
            <Card className="overflow-hidden h-full flex flex-col group">
                <div className="overflow-hidden relative">
                    <motion.img
                        src={image}
                        alt={t(titleKey)}
                        className="w-full h-48 object-cover transition-transform"
                        whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="flex gap-2">
                            <Button size="sm" variant="secondary" asChild>
                                <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="gap-1">
                                    <ExternalLink className="h-4 w-4" /> Demo
                                </a>
                            </Button>
                            <Button size="sm" variant="secondary" asChild>
                                <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="gap-1">
                                    <Github className="h-4 w-4" /> Code
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
                <CardContent className="flex-grow pt-6">
                    <h3 className="text-xl font-bold mb-2">{t(titleKey)}</h3>
                    <p className="text-muted-foreground mb-4">{t(descriptionKey)}</p>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2 pt-0">
                    {tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="font-normal">
                            {tag}
                        </Badge>
                    ))}
                </CardFooter>
            </Card>
        </motion.div>
    );
}

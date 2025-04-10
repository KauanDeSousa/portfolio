'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    // Handle theme toggle and save to localStorage
    const toggleTheme = () => {
        const newTheme = theme === 'dark' || theme === 'system' ? 'light' : 'dark';
        setTheme(newTheme);
        // The next-themes library handles localStorage automatically
    };

    if (!mounted) return null;

    return (
        <Button variant="ghost" size="icon" onClick={toggleTheme} className="relative" aria-label="Toggle theme">
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <motion.div
                className="absolute inset-0 rounded-full"
                initial={false}
                animate={{
                    backgroundColor: theme === 'dark' || theme === 'system' ? 'rgba(124, 58, 237, 0.2)' : 'rgba(234, 179, 8, 0.2)',
                }}
                transition={{ duration: 0.5 }}
            />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}

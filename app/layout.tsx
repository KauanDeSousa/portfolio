import type React from 'react';
import '@/app/globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/contexts/language-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'KauanVitor Portfolio - Full Stack Developer',
    description: 'Portfolio website showcasing my projects and skills as a full stack developer',
    generator: 'Kauan Vitor',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange storageKey="theme-preference">
                    <LanguageProvider>{children}</LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}

import './globals.css';

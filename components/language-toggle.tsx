'use client';

import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { Check, ChevronDown, Globe } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export default function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'pt-BR', label: 'Português' },
    ];

    // Get current language label
    const currentLanguage = languages.find((lang) => lang.code === language)?.label || 'English';

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2">
                    <Globe className="h-4 w-4 mr-1" />
                    <span>{currentLanguage}</span>
                    <ChevronDown className="h-3 w-3 opacity-50" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[150px]">
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => setLanguage(lang.code as 'en' | 'pt-BR')}
                        className="flex items-center justify-between"
                    >
                        {lang.label}
                        {language === lang.code && <Check className="h-4 w-4 ml-2" />}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

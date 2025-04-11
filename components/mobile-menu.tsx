'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';

export default function MobileMenu() {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    const menuItems = [
        { href: '#about', key: 'about' },
        { href: '#projects', key: 'projects' },
        { href: '#skills', key: 'skills' },
        { href: '#contact', key: 'contact' },
    ];

    return (
        <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" aria-label="Menu" className="[&_svg]:size-8">
                        <Menu className="w-8 h-8" />
                    </Button>
                </SheetTrigger>

                <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
                    <div className="flex flex-col h-full">
                        <div className="p-4 border-b">
                            <div className="flex justify-between items-center">
                                <span className="text-xl font-bold">
                                    <span className="text-primary">KAUAN</span>VITOR
                                </span>
                                <Button variant="ghost" size="icon" onClick={closeMenu} className="[&_svg]:size-8">
                                    <X className="h-8 w-8" />
                                </Button>
                            </div>
                        </div>
                        <nav className="flex-1 p-4">
                            <AnimatePresence>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ staggerChildren: 0.1 }}
                                    className="flex flex-col space-y-4"
                                >
                                    {menuItems.map((item) => (
                                        <motion.div
                                            key={item.href}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Link
                                                href={item.href}
                                                className="block py-3 px-4 text-lg hover:bg-muted rounded-md transition-colors hover:text-primary"
                                                onClick={closeMenu}
                                            >
                                                {t(item.key)}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </nav>
                        <div className="p-4 border-t">
                            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} KauanVitor Portfolio</p>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}

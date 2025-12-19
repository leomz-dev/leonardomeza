"use client";

import Link from "next/link";
import { useState } from "react";

export default function AboutHeader() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/5">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="text-xl font-bold tracking-tight dark:text-white">Leonardo Meza</div>

                <nav className="hidden md:flex items-center gap-1 bg-gray-100 dark:bg-zinc-800/50 rounded-full px-2 py-1 border border-gray-200 dark:border-white/5">
                    <Link className="px-4 py-1.5 text-sm font-medium rounded-full bg-white dark:bg-zinc-700/50 dark:text-white shadow-sm transition-all" href="/about">
                        Sobre mí
                    </Link>
                    <Link className="px-4 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors" href="/projects">
                        Proyectos
                    </Link>
                    <Link className="px-4 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors" href="/blog">
                        Blog
                    </Link>
                    <Link className="px-4 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors" href="/media">
                        Media
                    </Link>
                </nav>

                <Link className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors" href="/contact">
                    Contacto
                </Link>

                <button
                    className="md:hidden text-gray-600 dark:text-gray-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-6 py-4 bg-white dark:bg-background-dark border-t border-gray-200 dark:border-white/5">
                    <div className="flex flex-col gap-4">
                        <Link href="/about" className="text-sm font-medium dark:text-white" onClick={() => setIsOpen(false)}>Sobre mí</Link>
                        <Link href="/projects" className="text-sm font-medium text-gray-600 dark:text-gray-400" onClick={() => setIsOpen(false)}>Proyectos</Link>
                        <Link href="/blog" className="text-sm font-medium text-gray-600 dark:text-gray-400" onClick={() => setIsOpen(false)}>Blog</Link>
                        <Link href="/media" className="text-sm font-medium text-gray-600 dark:text-gray-400" onClick={() => setIsOpen(false)}>Media</Link>
                        <Link href="/contact" className="text-sm font-medium text-gray-600 dark:text-gray-400" onClick={() => setIsOpen(false)}>Contacto</Link>
                    </div>
                </div>
            )}
        </header>
    );
}

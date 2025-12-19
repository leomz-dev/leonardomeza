"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GalleryItem {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    className?: string;
}

interface MasonryGalleryProps {
    items: GalleryItem[];
    className?: string;
}

export default function MasonryGallery({ items, className }: MasonryGalleryProps) {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    return (
        <div className={cn("columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 p-4", className)}>
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer"
                    onClick={() => setSelectedId(index.toString())}
                >
                    <Image
                        src={item.src}
                        alt={item.alt}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        {item.title && <h3 className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>}
                        {item.description && <p className="text-white/80 text-sm mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.description}</p>}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

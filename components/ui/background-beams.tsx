"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "absolute h-full w-full inset-0 overflow-hidden pointer-events-none fade-in-0 duration-500",
                className
            )}
        >
            <div
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
                }}
                className="absolute inset-0 z-0 h-full w-full mask-[radial-gradient(100%_100%_at_top_center,white,transparent)]"
            ></div>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                    transition: {
                        duration: 2,
                        ease: "easeInOut",
                    },
                }}
                className="absolute inset-0 z-0 bg-transparent h-full w-full mask-[radial-gradient(100%_100%_at_top_center,black,transparent)]"
            >
                <div className="absolute inset-0 h-full w-full bg-linear-to-r from-transparent via-neutral-500/10 to-transparent blur-3xl" />
                <div className="absolute inset-0 h-full w-full bg-linear-to-b from-transparent via-neutral-500/10 to-transparent blur-3xl translate-y-full animate-beam" />
            </motion.div>
            <Beams />
        </div>
    );
};

export const Beams = () => {
    return (
        <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
        >
            <motion.path
                d="M0,0 L100,0 L100,100 L0,100 Z"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.1 }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
            />
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#818cf8" stopOpacity="0" />
                    <stop offset="50%" stopColor="#818cf8" stopOpacity="1" />
                    <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
};

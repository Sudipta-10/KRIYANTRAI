"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative pt-24 pb-16 px-6 overflow-hidden flex flex-col items-center">

            {/* Floating Elements (Background) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute left-[10%] top-[30%] flex items-center gap-2 bg-purple-100 text-purple-900 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm border border-purple-200"
            >
                <div className="w-5 h-5 rounded-full bg-purple-400 border border-white" />
                Maria
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute right-[15%] top-[70%] flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-semibold shadow-md border border-gray-200 text-gray-800"
            >
                <span className="text-primary">✨</span> Kriyantrai AI
            </motion.div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto text-center z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]"
                >
                    Get from brainstorm to<br />breakthrough with Kriyantrai
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-gray-600 mb-10"
                >
                    Collaborative AI workflows that help your team build the right thing, faster
                </motion.p>

                {/* Email Signup */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-md mx-auto flex flex-col gap-3"
                >
                    <div className="relative" suppressHydrationWarning>
                        <input
                            type="email"
                            placeholder="Enter your work email"
                            className="w-full h-14 px-5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-lg shadow-sm"
                            data-gramm="false"
                            data-gramm_editor="false"
                            autoComplete="off"
                            suppressHydrationWarning
                        />
                        {/* Fake 'T' icon inside input as per reference */}
                        <div className="absolute right-2 top-2 w-10 h-10 bg-indigo-900 rounded-full flex items-center justify-center text-white font-bold opacity-80 cursor-pointer hover:opacity-100 transition-opacity">
                            t
                        </div>
                    </div>
                    <button className="w-full h-14 bg-primary hover:bg-primary-hover text-white text-lg font-semibold rounded-full shadow-md transition-colors">
                        Sign up free
                    </button>
                </motion.div>
            </div>

            {/* Decorative Black Card Block */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mt-20 w-full max-w-5xl bg-[#111] rounded-[2rem] h-[400px] flex items-center justify-center relative overflow-hidden shadow-2xl"
            >
                {/* Play button overlay */}
                <div className="absolute w-20 h-20 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer border border-white/10 hover:scale-105 transition-transform">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-2" />
                </div>

                <div className="text-center font-black text-6xl md:text-8xl text-white leading-none tracking-tighter opacity-90">
                    GET<br />GREAT<br />DONE.
                </div>

                {/* Bottom floating logo on card */}
                <div className="absolute bottom-6 bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 font-bold text-xl">
                    <img src="/logo.png" alt="Kriyantrai Logo" className="h-6 w-auto" />
                </div>
            </motion.div>

        </section>
    );
}

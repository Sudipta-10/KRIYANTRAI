"use client";

import React, { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import GranularCursorEffect from './GranularCursorEffect';

export default function Hero() {
    const cursorRef = useRef({ x: 0, y: 0, active: false });

    const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        cursorRef.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            active: true,
        };
    }, []);

    const onMouseLeave = useCallback(() => {
        cursorRef.current.active = false;
    }, []);

    return (
        <section
            className="relative min-h-screen pt-28 pb-20 px-6 overflow-hidden flex flex-col items-center justify-center"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
        >

            {/* Cursor-reactive granular background (antigravity-style circular motion) */}
            <GranularCursorEffect cursorRef={cursorRef} />

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

            {/* Main Content + Card, vertically centered in viewport */}
            <div className="max-w-5xl mx-auto text-center z-10 flex flex-col items-center gap-12">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="tracking-tight mb-8 flex flex-col items-center justify-center text-center w-full leading-[1.2]"
                >
                    <span className="text-3xl md:text-4xl font-bold text-black mb-2 uppercase tracking-wide">
                        POWERING THE NEXT ERA OF
                    </span>
                    <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F67112] to-[#A1F9F3] animate-slow-pulse mb-6 pb-2">
                        AI EXCELLENCE
                    </span>
                    <span className="text-8xl md:text-5xl font-bold text-black mb-2">
                        BUILD FASTER...
                    </span>
                    <span className="text-8xl md:text-5xl font-bold text-black">
                        AUTOMATE SMARTER...
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-gray-600 mb-8"
                >
                    Talk to us today for empowering businesses to harness transformation.{" "}
                    Empowering businesses to harness the transformative power of artificial
                    intelligence. From strategy to implementation, we deliver intelligent
                    solutions that drive real results.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <button className="px-8 py-3 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold shadow-md transition-colors">
                        Start Your AI Journey
                    </button>
                    <button className="px-8 py-3 rounded-full border border-gray-300 bg-white/70 backdrop-blur-sm text-gray-900 hover:bg-white shadow-sm transition-colors">
                        Explore Solutions
                    </button>
                </motion.div>

                {/* Decorative Black Card Block */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="w-full bg-[#111] rounded-[2rem] h-[360px] md:h-[400px] flex items-center justify-center relative overflow-hidden shadow-2xl"
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
            </div>

        </section>
    );
}

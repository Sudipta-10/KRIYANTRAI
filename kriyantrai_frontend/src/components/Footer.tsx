import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full relative overflow-hidden text-black pt-24 pb-12 px-6 sm:px-12 mt-4 transition-all duration-700 ease-in-out"
            style={{
                background: "linear-gradient(270deg, #153776, #A1F9F3)",
                backgroundSize: "600% 600%",
                animation: "gradientFlow 15s ease infinite"
            }}
        >
            <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-16 pt-10">
                {/* Top Section: Logo/Info & Links */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="md:col-span-2 flex flex-col gap-6 transform hover:-translate-y-1 transition-transform duration-300">
                        <div className="flex items-center gap-3">
                            <img src="/logo-original.png" alt="Kriyantrai Logo" className="h-10 w-auto" />
                            <span className="font-bold text-2xl text-black">Kriyantrai</span>
                        </div>
                        <p className="text-black text-sm leading-relaxed max-w-sm font-medium">
                            Transforming businesses with AI, Machine Learning, and Automation. We create intelligent solutions that drive innovation, efficiency, and growth.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center hover:bg-[#153776] hover:text-white hover:scale-110 transition-all duration-300 shadow-lg group">
                                <svg className="w-5 h-5 text-black group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center hover:bg-[#153776] hover:text-white hover:scale-110 transition-all duration-300 shadow-lg group">
                                <svg className="w-5 h-5 text-black group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-lg mb-2 text-black">Company</h4>
                        <a href="#" className="text-gray-900 font-medium hover:text-[#153776] hover:translate-x-1 transition-all duration-300 text-sm">About</a>
                        <a href="#" className="text-gray-900 font-medium hover:text-[#153776] hover:translate-x-1 transition-all duration-300 text-sm">Work</a>
                        <a href="#" className="text-gray-900 font-medium hover:text-[#153776] hover:translate-x-1 transition-all duration-300 text-sm">Contact</a>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-lg mb-2 text-black">Services</h4>
                        <a href="#" className="text-gray-900 font-medium hover:text-[#153776] hover:translate-x-1 transition-all duration-300 text-sm">Development</a>
                        <a href="#" className="text-gray-900 font-medium hover:text-[#153776] hover:translate-x-1 transition-all duration-300 text-sm">Data & Analytics</a>
                        <a href="#" className="text-gray-900 font-medium hover:text-[#153776] hover:translate-x-1 transition-all duration-300 text-sm">AI & Automation</a>
                        <a href="#" className="text-gray-900 font-medium hover:text-[#153776] hover:translate-x-1 transition-all duration-300 text-sm">ML & DL</a>
                    </div>
                </div>

                {/* Middle Section: Contact Details horizontal strip */}
                <div className="relative pt-10 pb-6 group">
                    {/* Divider Line with Animated Dot */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-black/20"></div>
                    <div className="absolute top-[-3.5px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-black shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:scale-150"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-black font-medium">
                        <div className="flex items-center gap-4 group/item hover:text-[#153776] transition-colors duration-300">
                            <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center group-hover/item:bg-[#153776] group-hover/item:text-white transition-colors duration-300 shadow-md">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <a href="mailto:info@kriyantrai.com" className="hover:text-[#153776] transition-colors duration-300">info@kriyantrai.com</a>
                        </div>

                        <div className="flex items-center gap-4 justify-center md:justify-center group/item hover:text-[#153776] transition-colors duration-300">
                            <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center group-hover/item:bg-[#153776] group-hover/item:text-white transition-colors duration-300 shadow-md">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            </div>
                            <span>+91 6289946256</span>
                        </div>

                        <div className="flex items-center gap-4 justify-start md:justify-end group/item hover:text-[#153776] transition-colors duration-300">
                            <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center group-hover/item:bg-[#153776] group-hover/item:text-white transition-colors duration-300 shadow-md">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </div>
                            <span>Kolkata, India</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Copyright */}
                <div className="text-center text-sm text-black font-semibold pt-8 pb-4">
                    © 2025-26 Kriyantrai. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

import React from 'react';

export default function ContactSalesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-transparent relative z-10 w-full overflow-x-hidden">
            <main className="flex-1 pt-24 pb-12 px-4 sm:px-6 flex items-center justify-center bg-white/50 relative z-10 w-full">
                <div className="w-full max-w-6xl flex flex-col gap-8">
                    <div className="bg-white rounded-2xl w-full relative shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row my-auto">
                        {/* Left Side: Content */}
                        <div className="flex-1 p-8 md:p-14 flex flex-col justify-center bg-white">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">Talk to our Sales team</h2>

                            <ul className="space-y-6 mb-12">
                                <li className="flex gap-4">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A1F9F3] flex items-center justify-center text-gray-900 mt-0.5">
                                        <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </span>
                                    <span className="text-gray-700 text-lg leading-relaxed">
                                        Learn how your team can ramp up productivity with better collaboration.
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A1F9F3] flex items-center justify-center text-gray-900 mt-0.5">
                                        <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </span>
                                    <span className="text-gray-700 text-lg leading-relaxed">
                                        Watch Miro in action with your own live demo, customized for your business.
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A1F9F3] flex items-center justify-center text-gray-900 mt-0.5">
                                        <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </span>
                                    <span className="text-gray-700 text-lg leading-relaxed">
                                        See what scaling without friction looks like when you use kriyantrai Enterprise to fit your exact needs.
                                    </span>
                                </li>
                            </ul>

                            <div className="mt-2 pt-10 border-t border-gray-100 pr-10">
                                <h3 className="text-2xl font-bold text-gray-900 mb-5 tracking-tight">Let's connect</h3>
                                <div className="space-y-4 text-gray-700 text-[17px] leading-relaxed">
                                    <p>
                                        At Kriyantrai, we begin by understanding your challenges from the ground level. We carefully listen to your problem and design the solution for you.
                                    </p>
                                    <p>
                                        Our team commits the best resources and expertise to solve your problems in a way that aligns with your vision. With Kriyantrai, you get solutions built around your choice — precise, practical, and performance-driven.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="flex-1 bg-[#A1F9F3] p-8 md:p-14 flex flex-col justify-center">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-tight max-w-md">
                                Fill out this quick form and we'll get back to you shortly
                            </h3>

                            <form className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-900 mb-1.5" htmlFor="firstName">First Name</label>
                                        <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#153776] focus:border-[#153776] outline-none transition-colors" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-900 mb-1.5" htmlFor="lastName">Last Name</label>
                                        <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#153776] focus:border-[#153776] outline-none transition-colors" placeholder="Doe" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-1.5" htmlFor="email">Work Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#153776] focus:border-[#153776] outline-none transition-colors" placeholder="john@company.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-1.5" htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#153776] focus:border-[#153776] outline-none transition-colors" placeholder="+91 0000000000" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-1.5" htmlFor="useCase">Use Case</label>
                                    <select id="useCase" defaultValue="" className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#153776] focus:border-[#153776] outline-none transition-colors">
                                        <option value="" disabled>Please select...</option>
                                        <option value="ai">Artificial Intelligence</option>
                                        <option value="data">Data Solutions</option>
                                        <option value="automation">Process Automation</option>
                                        <option value="generative">Generative AI Services</option>
                                        <option value="bi">Business Intelligence</option>
                                        <option value="appdev">Application Development</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-1.5" htmlFor="message">Message (required)</label>
                                    <textarea id="message" rows={4} required className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#153776] focus:border-[#153776] outline-none resize-none transition-colors" placeholder="Your space to ask questions, tell us your goals, or anything else you need from us."></textarea>
                                </div>

                                <div className="pt-2">
                                    <p className="text-sm text-gray-800 mb-6">
                                        By clicking submit you agree to our Terms of Service and Privacy Policy.
                                    </p>
                                    <button type="submit" className="px-8 py-3.5 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg shadow-md transition-colors w-full sm:w-auto">
                                        Contact Sales
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Bottom Details Row */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-transparent pb-10">
                        {/* Contact Details Column */}
                        <div className="flex flex-col gap-6">
                            <div className="grid grid-cols-[100px_1fr] gap-4">
                                <span className="font-bold text-[#1a2b4b]">Website:</span>
                                <a href="https://www.kriyantrai.com" className="text-[#153776] font-medium hover:underline">www.kriyantrai.com</a>

                                <span className="font-bold text-[#1a2b4b]">Phone:</span>
                                <span className="text-gray-700">+91 6289946256</span>

                                <span className="font-bold text-[#1a2b4b]">Email:</span>
                                <a href="mailto:info@kriyantrai.com" className="text-gray-700 hover:text-primary transition-colors">info@kriyantrai.com</a>

                                <span className="font-bold text-[#1a2b4b]">Address:</span>
                                <span className="text-gray-700 leading-relaxed">
                                    68/88 AMARPALLY JESSORE ROAD KOLKATA,<br />KOLKATA, 700074
                                </span>
                            </div>
                            <button className="w-full bg-[#153776] hover:bg-[#0d2146] transition-colors text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-2 shadow-sm">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                Request a Meeting
                            </button>
                        </div>

                        {/* Business Hours Card */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col justify-center gap-4 h-[160px]">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1a2b4b] flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <h4 className="text-xl font-bold text-[#1a2b4b]">Business Hours</h4>
                            </div>
                            <p className="text-gray-600 ml-14">Monday - Friday: 8:00 AM - 5:00 PM IST</p>
                        </div>

                        {/* Global Reach Card */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col justify-center gap-4 h-[160px]">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#153776] flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                                </div>
                                <h4 className="text-xl font-bold text-[#1a2b4b]">Global Reach</h4>
                            </div>
                            <p className="text-gray-600 ml-14">Serving clients worldwide with innovative solutions</p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Animated Gradient Footer */}
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
        </div>
    );
}

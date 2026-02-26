"use client";

import React, { useState } from 'react';
import Footer from '@/components/Footer';

export default function CareerPage() {
    const [showForm, setShowForm] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="flex flex-col min-h-screen bg-transparent relative z-10 w-full overflow-x-hidden">
            {/* Main content centered with top padding for navbar */}
            <main className="flex-1 pt-32 pb-16 px-4 sm:px-6 flex items-center justify-center bg-white/50 relative z-10 w-full">
                <div className="max-w-4xl w-full mx-auto flex flex-col items-center justify-center text-center gap-8 bg-white p-8 md:p-16 rounded-3xl shadow-xl border border-gray-100">

                    <div className="inline-block px-4 py-1.5 rounded-full bg-[#153776]/10 text-[#153776] font-semibold text-sm mb-2">
                        Careers at Kriyantrai
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tight mb-2">
                        Coming Soon
                    </h1>

                    <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed mb-6 font-medium">
                        We are building our careers portal! In the meantime, we are excited to announce our upcoming <span className="font-bold text-[#153776] underline decoration-[#A1F9F3] underline-offset-4">Internship Program</span>.
                    </p>

                    {/* Internship Advertisements */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mb-8">
                        <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center gap-3 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <div className="w-14 h-14 bg-[#A1F9F3]/30 rounded-full flex items-center justify-center text-[#153776] mb-2 shadow-sm">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                            </div>
                            <h3 className="font-bold text-xl text-black">Earn Certificates</h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">Gain official verification of your skills and experience working with state-of-the-art tech.</p>
                        </div>
                        <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center gap-3 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <div className="w-14 h-14 bg-[#F67112]/10 rounded-full flex items-center justify-center text-[#F67112] mb-2 shadow-sm">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                            </div>
                            <h3 className="font-bold text-xl text-black">Real-World Projects</h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">Work alongside our expert engineers on actual production code and live AI deployments.</p>
                        </div>
                    </div>

                    {/* Notify Me Button & Form Logic */}
                    {!showForm && !submitted && (
                        <button
                            onClick={() => setShowForm(true)}
                            className="bg-[#153776] hover:bg-[#0d2146] text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg flex items-center gap-3 border-2 border-transparent hover:border-[#A1F9F3]"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                            Notify Me
                        </button>
                    )}

                    {showForm && !submitted && (
                        <div className="w-full max-w-md bg-gray-50 p-8 rounded-2xl border border-gray-200 mt-2 animate-in fade-in zoom-in duration-300 shadow-inner">
                            <h3 className="text-2xl font-bold text-black mb-2">Get Notified</h3>
                            <p className="text-gray-600 text-sm mb-6">Leave your details below and we will reach out as soon as intern applications open.</p>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-2" htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-3.5 rounded-xl border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#153776] focus:border-[#153776] outline-none transition-all shadow-sm"
                                        placeholder="you@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-2" htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        required
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full px-4 py-3.5 rounded-xl border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#153776] focus:border-[#153776] outline-none transition-all shadow-sm"
                                        placeholder="+91 0000000000"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="mt-4 w-full bg-[#F67112] hover:bg-[#e0620c] text-white font-bold py-4 px-6 rounded-xl transition-colors shadow-md text-lg"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    )}

                    {/* Success Message UI */}
                    {submitted && (
                        <div className="w-full max-w-lg bg-green-50/50 p-8 rounded-2xl border border-green-200 mt-2 animate-in fade-in slide-in-from-bottom-4 duration-500 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 shadow-sm border-4 border-white">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Got it!</h3>
                            <p className="text-green-800 font-medium text-lg leading-relaxed px-4">
                                When we will offer internship you will be notified.
                            </p>
                        </div>
                    )}

                </div>
            </main>

            {/* Same global footer used on all pages */}
            <Footer />
        </div>
    );
}

import React from 'react';
import Link from 'next/link';

export default function Footer() {
    const footerLinks = {
        Product: [
            "Online whiteboard",
            "Apps & Integrations",
            "Templates",
            "Kriyantraiverse",
            "Kriyantrai Developer Platform",
            "Kriyantrai for Devices",
            "Enterprise Guard",
            "Accessibility",
            "Changelog"
        ],
        Solutions: [
            "Meetings and Workshops",
            "Brainstorming & Ideation",
            "Agile practices",
            "Diagramming",
            "Research & Design",
            "Strategy & Planning",
            "Mind Map",
            "Concept Map",
            "Online Sticky Notes",
            "Flowchart Maker",
            "Wireframe"
        ],
        Resources: [
            "Kriyantrai Academy",
            "Help Center",
            "Blog",
            "Status",
            "Kriyantrai Community",
            "Kriyantrai Events",
            "Solution Partners",
            "Kriyantrai Security"
        ],
        Company: [
            "About us",
            "Careers 🚀",
            "Kriyantrai in the News",
            "Customer Stories"
        ],
        "Plans and Pricing": [
            "Pricing",
            "Business",
            "Enterprise",
            "Consultants",
            "Education",
            "Startups",
            "NPOs",
            "Contact sales →"
        ]
    };

    return (
        <footer className="bg-[#111] text-white pt-24 pb-12 px-6 lg:px-12 mt-20 relative z-20">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 border-b border-gray-800 pb-20">

                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="font-bold text-lg mb-8 tracking-wide text-gray-100">{category}</h4>
                            <ul className="space-y-5">
                                {links.map((link) => (
                                    <li key={link}>
                                        <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>

                <div className="pt-12 flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <img src="/logo.png" alt="Kriyantrai Logo" className="h-10 w-auto" />
                        </Link>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 font-medium">
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Manage Cookies</Link>
                        <span>© 2026 Kriyantrai clone. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

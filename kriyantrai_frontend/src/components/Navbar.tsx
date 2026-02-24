import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">


            {/* Glassmorphism Navbar */}
            <nav className="bg-white/30 backdrop-blur-md border-b border-white/20 transition-all duration-300">
                <div className="w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    {/* Logo - left */}
                    <div className="flex items-center flex-1">
                        <Link href="/" className="flex items-center gap-2 group">
                            <img src="/logo.png" alt="Kriyantrai Logo" className="h-10 w-auto" />
                            <span className="font-bold text-xl text-black">Kriyantrai</span>
                        </Link>
                    </div>

                    {/* Nav links - center */}
                    <div className="hidden lg:flex items-center justify-center gap-6 text-sm font-medium text-black flex-1">
                        <Link href="#" className="hover:text-primary transition-colors">
                            Products
                        </Link>
                        <Link href="#" className="hover:text-primary transition-colors flex items-center gap-1">
                            Solutions <span className="text-black/60 text-xs">▼</span>
                        </Link>
                        <Link href="#" className="hover:text-primary transition-colors">
                            About Us
                        </Link>
                        <Link href="#" className="hover:text-primary transition-colors">Use Cases</Link>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center justify-end gap-5 text-sm font-medium text-black flex-1">
                        <Link href="#" className="hidden md:block hover:text-primary transition-colors">Careers</Link>
                        <Link href="#" className="hidden md:block px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                            Contact sales
                        </Link>
                    </div>

                </div>
            </nav>
        </header>
    );
}

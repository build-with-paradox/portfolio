"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const isActiveLink = (path) =>
        typeof window !== "undefined" && window.location.pathname === path
            ? "text-green-400 border-b-2 border-green-400"
            : "text-white";

    return (
        <nav className="fixed shadow-lg bg-zinc-950 opacity-95 w-full z-50 font-sans ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center font-cursive">
                        <Link href="#">
                            <h1 className="text-xl font-bold text-gray-200 tracking-wide hover:text-white transition duration-300 hover:glow-effect">
                                Prashant
                            </h1>
                        </Link>
                    </div>


                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 font-midium">
                        <Link href="#" className={`px-2 py-1 text-green-500 text-sm hover:text-green-400 transition ${isActiveLink("#")}`}>
                            Home
                        </Link>
                        <Link href="#about" className={`px-2 py-1 text-sm underline-offset-8 decoration-2 hover:text-green-400 transition ${isActiveLink("#about")}`}>
                            About
                        </Link>
                        <Link href="#work" className={`px-2 py-1 text-sm hover:text-green-400 transition ${isActiveLink("#work")}`}>
                            Work
                        </Link>
                        <Link href="#experience" className={`px-2 py-1 text-sm hover:text-green-400 transition ${isActiveLink("#experience")}`}>
                            Experience
                        </Link>
                        <Link href="#workprocess" className={`px-2 py-1 text-sm hover:text-green-400 transition ${isActiveLink("#experience")}`}>
                            Work Process
                        </Link>
                        <Link href="#contactus" className={`px-2 py-1 text-sm hover:text-green-400 transition ${isActiveLink("#contactus")}`}>
                            Contact Me
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-white hover:bg-gray-800 px-3 py-2 rounded-md">
                            {isOpen ? <RxCross1 className="h-5 w-5" /> : <RxHamburgerMenu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-zinc-950 bg-opacity-90 z-20 md:hidden transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <div className={`flex flex-col bg-black w-56 h-full p-4 transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg text-white font-bold hover:glow-effect">Prashant</h2>
                        <button onClick={toggleMenu} className="text-white hover:text-gray-400">
                            <RxCross1 className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="mt-10 space-y-4">
                        <div className="w-full hover:bg-zinc-900 rounded-md">
                            <Link href="#" className={`flex items-center px-3 py-2 text-sm font-medium hover:text-green-400 transition ${isActiveLink("#")}`}>
                                Home
                            </Link>
                        </div>
                        <div className="w-full hover:bg-zinc-900 rounded-md">
                            <Link href="#about" className={`flex items-center px-3 py-2 text-sm font-medium hover:text-green-400 transition ${isActiveLink("#about")}`}>
                                About
                            </Link>
                        </div>

                        <div className="w-full hover:bg-zinc-900 rounded-md">
                            <Link href="#work" className={`flex items-center px-3 py-2 text-sm font-medium hover:text-green-400 transition ${isActiveLink("#work")}`}>
                                Work
                            </Link>
                        </div>

                        <div className="w-full hover:bg-zinc-900 rounded-md">
                            <Link href="#experience" className={`flex items-center px-3 py-2 text-sm font-medium hover:text-green-400 transition ${isActiveLink("#experience")}`}>
                                Experience
                            </Link>
                        </div>

                        <div className="w-full hover:bg-zinc-900 rounded-md">
                            <Link href="#contactus" className={`flex items-center px-3 py-2 text-sm font-medium hover:text-green-400 transition ${isActiveLink("#contactus")}`}>
                                Contacts
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Importing Menu and X icons for mobile toggle

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    useEffect(() => {
        const sections = ["home", "about", "works", "contacts"].map((id) =>
            document.getElementById(id)
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: document.getElementById("scroll-root"),
                rootMargin: "-40% 0px -40% 0px",
                threshold: 0.1,
            }
        );


        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    const navItems = [
        { label: "home", href: "#home", active: activeSection === "home" },
        { label: "about-me", href: "#about", active: activeSection === "about" },
        { label: "works", href: "#works", active: activeSection === "works" },
        { label: "contacts", href: "#contacts", active: activeSection === "contacts" },
    ];

    return (
        <nav className="p-4 fixed top-0 left-0 right-0 z-50 bg-transparent">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-semibold">
                    <span className="text-purple-500 font-bold">{`</>Rafi`}</span> <span className="hidden sm:inline">Mufadhal Difany</span>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-5">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <Link
                                href={item.href}
                                className={`text-white hover:text-gray-300 ${
                                    item.active ? "font-bold" : ""
                                }`}
                            >
                                <span className="text-purple-500">#</span>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-t border-gray-700 shadow-lg">
                    <ul className="py-4 px-6 space-y-4">
                        {navItems.map((item) => (
                            <li key={item.label} className="border-b border-gray-700 pb-2">
                                <Link
                                    href={item.href}
                                    className={`block text-white hover:text-gray-300 ${
                                        item.active ? "font-bold" : ""
                                    }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="text-purple-500">#</span>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}

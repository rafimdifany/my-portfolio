"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");

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
                rootMargin: "-40% 0px -40% 0px", // Fokus di tengah viewport
                threshold: 0.1, // Tidak terlalu strict
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
                    <span className="text-purple-500 font-bold">{`</>Rafi`}</span> Mufadhal Difany
                </div>
                <ul className="flex space-x-5">
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
            </div>
        </nav>
    );
}

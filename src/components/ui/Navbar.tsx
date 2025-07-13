"use client";

import Link from "next/link";
import {useEffect, useState} from "react";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "works", "about", "contacts"]

            for (const section of sections) {
                const element = document.getElementById(section);
                if(element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll()

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])


    const navItems = [
        { label: "home", href: "#home", icon: "#", active: activeSection === "home" },
        { label: "works", href: "#works", icon: "#", active: activeSection === "works" },
        { label: "about-me", href: "#about", icon: "#", active: activeSection === "about" },
        { label: "contacts", href: "#contacts", icon: "#", active: activeSection === "contacts" }
    ]

    return (
        <nav className="p-4 fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-lg font-semibold"><span className={`text-purple-500 font-bold`}>{`</>Rafi`}</span> Mufadhal Difany</div>
            <ul className="flex space-x-5">
                {navItems.map((item) => (
                    <li key={item.label}>
                        <Link
                            href={item.href}
                            className={`text-white hover:text-gray-300 ${item.active ? "font-bold" : ""}`}
                            onClick={() => setActiveSection(item.href.substring(1))}
                        >
                            <span className={`text-purple-500`}>#</span>{item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        </nav>
    );
}
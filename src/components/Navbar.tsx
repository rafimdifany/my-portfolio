import Link from "next/link";

export default function Navbar() {

    const currentPath = typeof window !== "undefined" ? window.location.pathname : "";

    const navItems = [
        { label: "home", href: "/", icon: "#", active: currentPath === "/" },
        { label: "works", href: "/portfolio", icon: "#", active: currentPath === "/portfolio" },
        { label: "about-me", href: "/about", icon: "#", active: currentPath === "/about" },
        { label: "contacts", href: "/contact", icon: "#", active: currentPath === "/contact" }
    ]

    return (
        <nav className="p-4 fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-lg font-semibold">Rafi</div>
            <ul className="flex space-x-5">
                {navItems.map((item) => (
                    <li key={item.label}>
                        <Link
                            href={item.href}
                            className={`text-white hover:text-gray-300 ${item.active ? "font-bold" : ""}`}
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
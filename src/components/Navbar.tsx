import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-lg font-semibold">Rafi</div>
            <ul className="flex space-x-4">
                <li>
                    <Link href="/" className="text-gray-300 hover:text-white"><span className="text-purple-500">#</span>home</Link>
                </li>
                <li>
                    <a href="/portfolio" className="text-gray-300 hover:text-white"><span
                        className="text-purple-500">#</span>works</a>
                </li>
                <li>
                    <a href="/about" className="text-gray-300 hover:text-white"><span
                        className="text-purple-500">#</span>about-me</a>
                </li>
                <li>
                    <a href="/contact" className="text-gray-300 hover:text-white"><span
                        className="text-purple-500">#</span>contacts</a>
                </li>
            </ul>
        </div>
        </nav>
    );
}
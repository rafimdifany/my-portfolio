import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Works from "@/components/sections/Works";
import Contacts from "@/components/sections/Contacts";

export default function Home() {
    return (
        <div className="h-screen bg-gray-900">
            <Navbar />

            <main
                id="scroll-root"
                className="h-screen overflow-y-auto md:snap-y md:snap-mandatory scroll-smooth"
            >
                <Hero/>
                <About/>
                <Works/>
                <Contacts/>
            </main>
        </div>
    );
}

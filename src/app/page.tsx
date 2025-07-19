import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

export default function Home() {
    return (
        <div className="h-screen">
            <Navbar />

            <main
                id="scroll-root"
                className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth"
            >
                <Hero/>
                <About/>
                <section
                    id="works"
                    className="h-screen snap-start flex items-center justify-center"
                >
                    <h1 className="text-4xl">Works Section</h1>
                </section>
                <section
                    id="contacts"
                    className="h-screen snap-start flex items-center justify-center"
                >
                    <h1 className="text-4xl">Contacts Section</h1>
                </section>
            </main>
        </div>
    );
}

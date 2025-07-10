import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <div className="h-screen">
            {/* Fixed navbar will overlay content */}
            <Navbar />

            <main className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
                <section
                    id="home"
                    className="h-screen snap-start flex items-center justify-center"
                >
                    <h1 className="text-4xl">Home Section</h1>
                </section>
                <section
                    id="works"
                    className="h-screen snap-start flex items-center justify-center"
                >
                    <h1 className="text-4xl">Works Section</h1>
                </section>
                <section
                    id="about"
                    className="h-screen snap-start flex items-center justify-center"
                >
                    <h1 className="text-4xl">About Section</h1>
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
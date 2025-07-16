import {Button} from "@/components/ui/Button";
import {ChevronDown} from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="h-screen snap-start flex items-center justify-center relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="mb-8">
                        <div
                            className={`w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-accent p-1`}>
                            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                                <span className="text-5xl font-bold text-purple-500">{`</>`}</span>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-tr from-purple-500 to-foreground bg-clip-text text-transparent">
                        Full Stack Developer
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        I <span className={`text-purple-500 font-bold`}>create</span> beautiful, functional web
                        applications that <span className={`text-purple-500 font-bold`}>solve</span> real-world
                        problems.
                        Passionate about <span className={`text-purple-500 font-bold`}>clean code</span> and <span
                        className={`text-purple-500 font-bold`}>exceptional</span> user
                        experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Button size="lg" className={`cursor-pointer`}>View My Work</Button>
                        <Button variant="outline" size="lg" className={`cursor-pointer`}>Contact Me</Button>

                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-6 h-6 text-muted-foreground"/>
            </div>
        </section>
    );
}
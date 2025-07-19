import {Button} from "@/components/ui/Button";
import {Download, MapPin} from "lucide-react";

export default function About() {

    const skills = [
        { name: "React", category: "Frontend" },
        { name: "Angular", category: "Language" },
        { name: "Java", category: "Backend" },
        { name: "PostgreSQL", category: "Database" },
        { name: "MySQL", category: "Database" },
        { name: "Git", category: "Tools" },
        { name: "Figma", category: "Design" },
        { name: "Google Cloud Platform", category: "Infrastructure" }
    ]
    return (
        <section
            id="about"
            className="h-screen snap-start flex justify-center text-foreground "
        >
            <div className="container mx-auto px-6 mt-30">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-foreground">About Me</h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-semibold text-purple-500 mb-4">Hello, I&#39;m Rafi!</h3>
                            <p className="text-foreground mb-6 leading-relaxed">
                                I&#39;m a passionate full-stack developer with over 3 years of experience building
                                web applications. I love turning complex problems into simple, beautiful designs.
                                When I&#39;m not coding, you can find me exploring new technologies or playing video games.
                            </p>

                            <div className="flex items-center gap-2 mb-6">
                                <MapPin className={`text-purple-500`}/>
                                <span>Jakarta, Indonesia</span>
                            </div>

                            <Button variant="outline" className="mb-8 text-purple-500 hover:bg-purple-500 hover:text-foreground cursor-pointer">
                                <Download className="w-4 h-4 mr-2" />
                                Download Resume
                            </Button>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold mb-6 text-purple-500">Skills & Technologies</h4>
                            <div className="grid grid-cols-2 gap-4">
                                {skills.map((skill, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full"/>
                                        <span className="text-sm">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
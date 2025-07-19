import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/Card";
import {ExternalLink, Github} from "lucide-react";
import {Button} from "@/components/ui/Button";
import {Badge} from "@/components/ui/Badge";


export default function Works() {

    const works = [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL",
            tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
            image: "/placeholder.svg",
            github: "#",
            live: "#"
        },
        {
            title: "Task Management App",
            description: "A collaborative task management tool with real-time updates",
            tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
            image: "/placeholder.svg",
            github: "#",
            live: "#"
        },
        {
            title: "Weather Dashboard",
            description: "A responsive weather app with location-based forecasts",
            tech: ["React", "Tailwind CSS", "Weather API"],
            image: "/placeholder.svg",
            github: "#",
            live: "#"
        }
    ];

    return (
        <section
            id="works"
            className="h-screen snap-start flex items-center justify-center bg-gray-800 text-white"
        >
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {works.map((work, index) => (
                            <Card key={index}
                                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                                    <img
                                        src={work.image}
                                        alt={work.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                <CardHeader>
                                    <CardTitle className="text-xl">{work.title}</CardTitle>
                                    <CardDescription>{work.description}</CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {work.tech.map((tech, techIndex) => (
                                            <Badge key={techIndex} variant="secondary" className="text-xs">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="flex gap-2">
                                        <Button size="sm" variant="outline" asChild>
                                            <a href={work.github} target="_blank" rel="noopener noreferrer">
                                                <Github className="w-4 h-4"/>
                                                Code
                                            </a>
                                        </Button>
                                        <Button size="sm" asChild>
                                            <a href={work.live} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-4 h-4"/>
                                                Live Demo
                                            </a>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
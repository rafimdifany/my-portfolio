import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/Card";
import {ExternalLink, Github} from "lucide-react";
import {Button} from "@/components/ui/Button";
import {Badge} from "@/components/ui/Badge";
import Image from "next/image";


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
            className="min-h-screen md:snap-start flex items-center justify-center text-foreground py-16 md:py-0"
        >
            <div className="container mx-auto px-4 sm:px-6 pt-16 md:pt-0">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Featured Projects</h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {works.map((work, index) => (
                            <Card key={index}
                                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                                    <Image
                                        src={work.image}
                                        alt={work.title}
                                        width={300}
                                        height={200}
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

                                    <div className="flex flex-wrap gap-2">
                                        <Button size="sm" variant="outline" asChild className="w-full sm:w-auto">
                                            <a href={work.github} target="_blank" rel="noopener noreferrer">
                                                <Github className="w-4 h-4 mr-1"/>
                                                Code
                                            </a>
                                        </Button>
                                        <Button size="sm" asChild className="w-full sm:w-auto">
                                            <a href={work.live} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-4 h-4 mr-1"/>
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
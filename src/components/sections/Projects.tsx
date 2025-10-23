'use client';

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import { projects } from "@/data/portfolio";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

const ProjectsSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = useMemo(() => {
    const base = Array.from(new Set(projects.map((project) => project.category)));
    return ["All", ...base];
  }, []);

  const cardHover = shouldReduceMotion ? undefined : { y: -6 };

  const projectGrid = (category: string) => {
    const scoped =
      category === "All"
        ? projects
        : projects.filter((project) => project.category === category);

    return (
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {scoped.map((project) => (
          <motion.article
            key={project.id}
            whileHover={cardHover}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3, once: true }}
            transition={{
              duration: shouldReduceMotion ? 0.2 : 0.5,
              ease: [0.26, 0.86, 0.44, 0.99],
            }}
            className="group h-full"
          >
            <Card className="flex h-full flex-col overflow-hidden border-white/10 bg-white/[0.03] backdrop-blur transition group-hover:border-cyan-400/40 group-hover:bg-cyan-500/[0.07]">
              <div className="relative h-48 overflow-hidden">
                {project.images !== "" ? (
        <img
          src={project.images}
          alt="Project Screenshot"
          className="w-full h-48 object-cover rounded-lg"
        />
      ) : (
        <div className="relative h-48 overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,165,233,0.28),rgba(129,140,248,0.2))]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.28),transparent_70%)] opacity-60" />
        </div>
      )}
              </div>
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-cyan-300">
                  <span>{project.category}</span>
                  <span className="text-[10px] text-slate-400">FEATURED</span>
                </div>
                <CardTitle className="text-2xl text-white">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm text-slate-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="border-white/10 bg-white/10 text-[11px] font-medium text-slate-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="mt-auto flex flex-wrap gap-3 border-t border-white/5 bg-white/[0.02] p-6">
                <Button
                  asChild
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-cyan-500/30 hover:shadow-lg"
                >
                  <Link href={project.liveUrl} target="_blank">
                    <ExternalLink className="mr-2 size-4" />
                    Live Demo
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="flex-1 border-white/20 text-white hover:border-cyan-400/40"
                >
                  <Link href={project.sourceUrl} target="_blank">
                    <Github className="mr-2 size-4" />
                    Source
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.article>
        ))}
      </div>
    );
  };

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 rounded-[3rem] border border-white/10 bg-slate-950/40 py-24 shadow-[0_40px_120px_-60px_rgba(59,130,246,0.4)]"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-col gap-6 text-center">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.35em] text-cyan-200">
            Projects
          </span>
          <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
            Product narratives crafted with code, motion, and words.
          </h2>
          <p className="mx-auto max-w-3xl text-base text-slate-300 md:text-lg">
            A selection of recent work spanning product launches, developer
            tooling, and open-source design systems. Each project blends elegant
            storytelling with purposeful interactivity.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="flex-wrap">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                {projectGrid(category)}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

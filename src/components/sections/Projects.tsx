'use client';

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";

import { projects, type Project } from "@/data/portfolio";
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

const ProjectsSection = () => {
  const [category, setCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = useMemo(() => {
    const unique = new Set(projects.map((project) => project.category));
    return ["All", ...Array.from(unique)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (category === "All") {
      return projects;
    }
    return projects.filter((project) => project.category === category);
  }, [category]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = activeProject ? "hidden" : previous || "";
    return () => {
      document.body.style.overflow = previous || "";
    };
  }, [activeProject]);

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

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((tab) => {
            const isActive = tab === category;
            return (
              <Button
                key={tab}
                variant={isActive ? "default" : "outline"}
                className={
                  isActive
                    ? "border-white/20 bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/30"
                    : "border-white/10 bg-white/[0.02] text-slate-200 hover:border-cyan-400/40 hover:text-white"
                }
                onClick={() => setCategory(tab)}
              >
                {tab}
              </Button>
            );
          })}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="group h-full"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <Card className="flex h-full flex-col overflow-hidden border-white/10 bg-white/[0.03] backdrop-blur transition group-hover:border-cyan-400/40 group-hover:bg-cyan-500/[0.07]">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,165,233,0.3),rgba(240,171,252,0.2))]" />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.3),transparent_70%)] opacity-60" />
                </div>
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between text-xs uppercase text-cyan-300">
                    <span>{project.category}</span>
                    <span className="text-[10px] tracking-[0.4em] text-slate-400">
                      FEATURED
                    </span>
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
                <CardFooter className="mt-auto flex flex-col gap-3 border-t border-white/5 bg-white/[0.02] p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-cyan-500/30 hover:shadow-lg"
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
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full justify-between rounded-xl border border-white/10 bg-white/5 text-sm text-slate-200 hover:border-cyan-400/60 hover:bg-cyan-500/10"
                    onClick={() => setActiveProject(project)}
                  >
                    Preview case study
                    <ExternalLink className="size-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject ? (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={overlayVariants}
      onClick={onClose}
    >
      <motion.div
        layout
        onClick={(event) => event.stopPropagation()}
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 24 }}
        transition={{ type: "spring", stiffness: 200, damping: 24 }}
        className="relative mx-4 max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 shadow-[0_40px_120px_-60px_rgba(56,189,248,0.6)] backdrop-blur-xl"
      >
        <button
          className="absolute right-6 top-6 flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400/60 hover:text-white"
          onClick={onClose}
          type="button"
          aria-label="Close project preview"
        >
          <X className="size-4" />
        </button>
        <div className="overflow-y-auto px-8 pb-10 pt-10 sm:px-12">
          <div className="flex flex-col gap-3 text-sm text-slate-300">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.35em] text-cyan-200">
              {project.category}
            </span>
            <h3 className="text-3xl font-semibold text-white">
              {project.title}
            </h3>
            <p className="text-base text-slate-300">{project.description}</p>
          </div>
          <div className="mt-8 space-y-8">
            {project.images.map((image, index) => (
              <motion.div
                key={image.id}
                className={`rounded-3xl border border-white/10 bg-gradient-to-br ${image.palette} p-8 text-white shadow-[0_24px_80px_-60px_rgba(56,189,248,0.6)]`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="text-sm uppercase tracking-[0.35em] text-white/80">
                  {image.title}
                </div>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90">
                  {image.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild className="bg-white text-slate-900 hover:bg-slate-100">
              <Link href={project.liveUrl} target="_blank">
                <ExternalLink className="mr-2 size-4" />
                Visit Live Experience
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/20 text-white hover:border-cyan-400/40"
            >
              <Link href={project.sourceUrl} target="_blank">
                <Github className="mr-2 size-4" />
                Explore Source
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsSection;

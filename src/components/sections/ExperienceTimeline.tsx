'use client';

import { motion } from "framer-motion";
import { Calendar, Download, MapPin } from "lucide-react";

import { experiences } from "@/data/portfolio";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const ExperienceTimeline = () => {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 sm:px-10 lg:flex-row lg:gap-24">
        <aside className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-7rem)] lg:flex-1">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 shadow-[0_20px_120px_-60px_rgba(56,189,248,0.5)] backdrop-blur">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">
              Experience
            </p>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Leading teams to craft resilient, human-centered product surfaces.
            </h2>
            <p className="mt-4 text-base text-slate-300">
              Over the last decade, I&apos;ve bridged engineering and UX—shipping
              enterprise platforms, design systems, and motion-rich experiences
              that scale globally.
            </p>
            <Button
              asChild
              className="mt-8 w-full justify-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/30"
            >
              <a href="/Rafi_Mufadhal_Difany_CV.pdf" target="_blank" rel="noreferrer">
                <Download className="mr-2 size-4" />
                Download CV
              </a>
            </Button>
          </div>
        </aside>
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-[11px] hidden w-px bg-gradient-to-b from-white/40 via-white/10 to-transparent sm:block" />
          <div className="space-y-14">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.25, 1, 0.5, 1],
                }}
                viewport={{ once: true, amount: 0.4 }}
                className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-[0_24px_80px_-60px_rgba(56,189,248,0.6)] backdrop-blur"
              >
                <div className="absolute -left-3.5 top-10 hidden size-3 rounded-full border border-cyan-300 bg-slate-950 shadow-[0_0_20px_rgba(59,130,246,0.6)] sm:flex" />
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 font-medium text-slate-200">
                    {experience.company}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="size-4 text-cyan-300" />
                    {experience.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="size-4 text-cyan-300" />
                    {experience.location}
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  <h3 className="text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <ul className="space-y-3 text-sm text-slate-300">
                    {experience.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.01] p-4 transition hover:border-cyan-400/40 hover:bg-cyan-500/5"
                      >
                        <span className="mt-1 flex size-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="border-white/10 bg-white/10 text-xs text-slate-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;

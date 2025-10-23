'use client';

import { motion, useReducedMotion } from "framer-motion";

import { techStack } from "@/data/portfolio";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/Tooltip";

const TechStackSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="tech-stack"
      className="relative scroll-mt-24 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.35em] text-emerald-200">
            Tech Stack
          </span>
          <h2 className="mt-6 text-balance text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
            A product-oriented toolkit spanning frontend, backend, and craft ops.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-300 md:text-lg">
            Opinionated tooling refined across large-scale platforms and
            high-velocity teams. Each capability pairs technical proficiency
            with a UX writer&apos;s perspective on clarity and tone.
          </p>
        </div>

        <div className="mt-16 space-y-10">
          {techStack.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: shouldReduceMotion ? 0.2 : 0.6,
                delay: shouldReduceMotion ? 0 : categoryIndex * 0.12,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 shadow-[0_30px_100px_-60px_rgba(74,222,128,0.45)] backdrop-blur"
            >
              <div className="flex flex-col gap-6 border-b border-white/5 pb-8 md:flex-row md:items-center md:justify-between">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-white md:text-3xl">
                    {category.title}
                  </h3>
                  <p className="max-w-2xl text-sm text-slate-300 md:text-base">
                    {category.summary}
                  </p>
                </div>
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/80">
                  {category.items.length} crafts
                </span>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {category.items.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{
                        duration: shouldReduceMotion ? 0.18 : 0.5,
                        delay: shouldReduceMotion ? 0 : index * 0.06,
                      }}
                      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_80px_-60px_rgba(74,222,128,0.5)] transition hover:border-emerald-400/40 hover:bg-emerald-400/5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-emerald-300">
                            <Icon className="size-6" />
                          </div>
                          <div>
                            <p className="text-lg font-medium text-white">
                              {item.name}
                            </p>
                            <p className="text-sm text-slate-400">
                              {item.level}
                            </p>
                          </div>
                        </div>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span
                              tabIndex={0}
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-white/70 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-slate-950"
                              aria-label={`${item.name} experience details`}
                            >
                              {item.experience}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs text-left text-slate-100">
                            {item.level} &mdash; {item.description}
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <p className="mt-5 text-sm leading-relaxed text-slate-300">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;

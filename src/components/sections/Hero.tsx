'use client';

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail } from "lucide-react";

import { Button } from "@/components/ui/Button";

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: [0.4, 0.7, 0.4],
    scale: [0.85, 1.05, 0.85],
    rotate: [0, 12, -8, 0],
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 pb-24 pt-24 shadow-[0_30px_120px_-40px_rgba(56,189,248,0.4)] sm:px-12 md:px-16 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-500/30 via-purple-500/20 to-teal-500/30 blur-3xl"
          variants={glowVariants}
          initial="initial"
          animate="animate"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(94,234,212,0.12),_rgba(15,23,42,0.3))]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(56,189,248,0.08)_50%,transparent_100%)] opacity-60" />
        <div className="absolute inset-0 bg-[linear-gradient(#ffffff0a_1px,transparent_1px)] bg-[length:32px_32px] opacity-[0.15]" />
      </div>
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-16 md:flex-row md:items-center md:justify-between">
          <motion.div
            className="max-w-3xl space-y-8"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-slate-100 shadow-lg shadow-cyan-500/10 backdrop-blur">
              <span className="flex size-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
              Senior Frontend Engineer &amp; UX Writer
            </div>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
                Designing polished web experiences with motion-first craft and a
                writer&apos;s attention to detail.
              </h1>
              <p className="max-w-2xl text-pretty text-lg text-slate-300 md:text-xl">
                I build immersive product surfaces with Next.js, TypeScript, and
                shadcn/ui—pairing thoughtful UX writing with cohesive motion
                systems that make complex products feel effortless.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <Button asChild className="group relative overflow-hidden">
                <motion.a
                  href="/Rafi_Mufadhal_Difany_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className="flex items-center gap-2"
                >
                  <Download className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                  Download CV
                  <span className="absolute inset-0 -z-10 translate-x-[-120%] bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-transparent transition-transform duration-500 group-hover:translate-x-[100%]" />
                </motion.a>
              </Button>
              <Button asChild variant="outline" className="border-white/20 text-white">
                <motion.a
                  href="#contact"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className="flex items-center gap-2"
                >
                  <Mail className="size-4" />
                  Contact Me
                </motion.a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-md pr-4 md:mx-0 md:flex-1 md:pr-0"
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60 p-8 shadow-2xl shadow-cyan-500/20 backdrop-blur">
              <div className="mb-8 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-slate-300">
                <div className="flex size-2 rounded-full bg-cyan-400" />
                Craft Principles
              </div>
              <div className="space-y-6 text-sm text-slate-300">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="font-medium text-white">Narrative UX</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Content-first flows that guide users with empathetic
                    microcopy and purposeful structure.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="font-medium text-white">Motion Systems</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Intentional, physics-inspired motion that reinforces mental
                    models without getting in the way.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="font-medium text-white">Inclusive Craft</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Accessibility as a design constraint, ensuring every
                    experience works for every human.
                  </p>
                </div>
              </div>
              <motion.div
                className="mt-8 inline-flex items-center gap-2 text-sm text-cyan-300"
                whileHover={{ x: 4 }}
              >
                View latest work
                <ArrowUpRight className="size-4" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

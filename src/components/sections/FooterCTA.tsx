'use client';

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Send } from "lucide-react";

import { socialLinks } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

const FooterCTA = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer
      id="contact"
      className="relative mt-24 overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24 text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(56,189,248,0.12),transparent)] opacity-60" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 text-center sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: shouldReduceMotion ? 0.2 : 0.7,
            ease: [0.25, 1, 0.5, 1],
          }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.35em] text-cyan-200">
            Let&apos;s build something magical
          </span>
          <h2 className="text-pretty text-4xl font-semibold sm:text-5xl">
            Ready to elevate your next product launch?
          </h2>
          <p className="mx-auto max-w-3xl text-base text-slate-200 md:text-lg">
            I partner with teams to ship thoughtful, motion-rich experiences
            that connect with users and stand out in the market. Drop me a line
            and let&apos;s co-create something remarkable.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            delay: shouldReduceMotion ? 0 : 0.1,
            duration: shouldReduceMotion ? 0.2 : 0.7,
            ease: [0.25, 1, 0.5, 1],
          }}
        >
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white px-8 py-6 text-base font-semibold text-slate-900 shadow-xl shadow-cyan-500/25 transition hover:bg-slate-100"
          >
            <Link
              href="mailto:hello@rafimufadhal.com"
              onClick={() => trackEvent("contact_click", { location: "footer" })}
            >
              <span className="flex items-center gap-3">
                <Send className="size-5" />
                Start a conversation
              </span>
            </Link>
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            delay: shouldReduceMotion ? 0 : 0.2,
            duration: shouldReduceMotion ? 0.2 : 0.7,
            ease: [0.25, 1, 0.5, 1],
          }}
          className="flex flex-wrap justify-center gap-4 text-sm text-slate-200"
        >
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.id}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-400/60 hover:text-white"
                whileHover={shouldReduceMotion ? undefined : { y: -3 }}
              >
                <Icon className="size-4 text-cyan-300 transition group-hover:text-white" />
                {link.label}
              </motion.a>
            );
          })}
        </motion.div>
        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
          &copy; {new Date().getFullYear()} Rafi Mufadhal Difany - Engineered with care.
        </p>
      </div>
    </footer>
  );
};

export default FooterCTA;

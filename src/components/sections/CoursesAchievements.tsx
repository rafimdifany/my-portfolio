'use client';

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { courses } from "@/data/portfolio";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const CoursesAchievementsSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="courses"
      className="relative scroll-mt-24 rounded-[3rem] border border-white/10 bg-white/[0.02] py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),transparent_65%)]" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.35em] text-purple-200">
            Courses &amp; Achievements
          </span>
          <h2 className="mt-6 text-balance text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
            Lifelong learning to deepen craft, storytelling, and systems design.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-300 md:text-lg">
            Curated programs that sharpened my voice as a UX writer, broadened
            my systems thinking, and infused responsible AI practices into the
            products I build.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: shouldReduceMotion ? 0.2 : 0.55,
                delay: shouldReduceMotion ? 0 : index * 0.08,
              }}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              className="h-full"
            >
              <Card className="flex h-full flex-col overflow-hidden rounded-[2rem] border-white/10 bg-slate-950/70 backdrop-blur transition hover:border-purple-400/40 hover:bg-purple-500/[0.07]">
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-purple-200">
                    <span>{course.provider}</span>
                    <span>{course.year}</span>
                  </div>
                  <CardTitle className="text-2xl text-white">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-slate-300">
                    {course.focus}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto" />
                <CardFooter className="border-t border-white/5 bg-white/[0.03] p-6">
                  <Button
                    asChild
                    variant="ghost"
                    className="group w-full justify-between rounded-xl border border-white/10 bg-white/10 text-sm text-slate-100 hover:border-purple-400/50 hover:bg-purple-500/20"
                  >
                    <Link href={course.certificateUrl} target="_blank">
                      View certificate
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesAchievementsSection;

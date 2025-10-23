import Hero from "@/components/sections/Hero";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import ProjectsSection from "@/components/sections/Projects";
import TechStackSection from "@/components/sections/TechStack";
import CoursesAchievementsSection from "@/components/sections/CoursesAchievements";
import FooterCTA from "@/components/sections/FooterCTA";
import { StructuredData } from "@/components/seo/StructuredData";
import { PageTransition } from "@/components/ui/PageTransition";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <StructuredData />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,_rgba(30,64,175,0.15),_transparent_70%)]" />
      <PageTransition>
        <main className="relative mx-auto flex w-full max-w-7xl flex-col gap-24 px-4 pb-24 pt-16 sm:px-6 md:gap-28 lg:px-8">
          <Hero />
          <ExperienceTimeline />
          <ProjectsSection />
          <TechStackSection />
          <CoursesAchievementsSection />
          <FooterCTA />
        </main>
      </PageTransition>
    </div>
  );
}

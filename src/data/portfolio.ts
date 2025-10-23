import type { LucideIcon } from "lucide-react";
import {
  Atom,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Palette,
  Radar,
  Rocket,
  ShieldCheck,
  Sparkles,
  TestTube2,
} from "lucide-react";

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    id: "aurora-labs",
    company: "Aurora Labs",
    role: "Senior Frontend Engineer",
    period: "2023 — Present",
    location: "Remote",
    highlights: [
      "Leading the rebuild of an enterprise observability platform using Next.js App Router and React Server Components.",
      "Introduced motion design system with Framer Motion, improving perceived performance and reducing bounce rate by 24%.",
      "Partnered with Product Design to craft adaptive UX for 5 user personas across mobile and desktop surfaces.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "TanStack Query",
      "Storybook",
    ],
  },
  {
    id: "zenith",
    company: "Zenith AI Studio",
    role: "Lead UI Engineer",
    period: "2020 — 2023",
    location: "Singapore",
    highlights: [
      "Architected design system adopted across 7 product squads, enabling 2x faster feature delivery.",
      "Shipped collaborative prompt builder with real-time cursor presence and delightful micro-interactions.",
      "Mentored a team of 6 engineers, driving accessibility audits and performance budgets across the org.",
    ],
    tech: [
      "React",
      "Zustand",
      "GraphQL",
      "Tailwind CSS",
      "Radix UI",
      "Jest",
    ],
  },
  {
    id: "northwind",
    company: "Northwind Commerce",
    role: "Frontend Engineer",
    period: "2018 — 2020",
    location: "Jakarta, Indonesia",
    highlights: [
      "Reimagined checkout funnel with progressive disclosure and contextual coaching, boosting conversions by 18%.",
      "Implemented CI pipeline for visual regression testing with Playwright and Chromatic.",
      "Collaborated with backend team to define GraphQL schema that halved client-side over-fetching.",
    ],
    tech: ["Next.js", "Redux Toolkit", "Tailwind CSS", "GraphQL", "Playwright"],
  },
  {
    id: "freelance",
    company: "Freelance & Advisory",
    role: "Product Designer & Engineer",
    period: "2015 — 2018",
    location: "Remote",
    highlights: [
      "Delivered polished marketing sites and dashboards for startups across fintech, health, and edtech verticals.",
      "Authored content strategy, UX writing, and onboarding flows with a conversion-first mindset.",
      "Facilitated design sprints and usability research to align stakeholders around evidence-based decisions.",
    ],
    tech: ["React", "Vue", "Sass", "Figma", "Adobe XD", "Notion"],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  category: "AI" | "Product" | "Open Source" | "Developer Tooling";
  tech: string[];
  liveUrl: string;
  sourceUrl: string;
  images: Array<{
    id: string;
    title: string;
    description: string;
    palette: string;
  }>;
};

export const projects: Project[] = [
  {
    id: "signal-canvas",
    title: "Signal Canvas",
    description:
      "An adaptive analytics workspace for product teams to orchestrate experiments, manage cohorts, and narrate insights.",
    category: "Product",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Supabase"],
    liveUrl: "https://signal-canvas.com",
    sourceUrl: "https://github.com/rafi-dev/signal-canvas",
    images: [
      {
        id: "canvas-overview",
        title: "Experiment Overview",
        description:
          "Story-driven dashboard with contextual metrics and motion-enhanced drilldowns.",
        palette: "from-purple-500 via-sky-500 to-emerald-500",
      },
      {
        id: "canvas-timeline",
        title: "Research Timeline",
        description:
          "Timeline view with annotated milestones and team moments for playback.",
        palette: "from-amber-400 via-rose-500 to-slate-900",
      },
    ],
  },
  {
    id: "neon-orbit",
    title: "Neon Orbit",
    description:
      "Interactive launch site with cinematic scroll choreography for a satellite intelligence company.",
    category: "Product",
    tech: ["Next.js", "Three.js", "Tailwind", "Framer Motion"],
    liveUrl: "https://neonorbit.space",
    sourceUrl: "https://github.com/rafi-dev/neon-orbit",
    images: [
      {
        id: "orbit-hero",
        title: "Immersive Hero",
        description:
          "Parallax hero with volumetric glow and scroll-synced telemetry readouts.",
        palette: "from-slate-900 via-indigo-800 to-cyan-500",
      },
      {
        id: "orbit-showcase",
        title: "Payload Showcase",
        description:
          "Modular showcase carousel with progressive disclosure and physics inspired motion.",
        palette: "from-fuchsia-500 via-violet-500 to-blue-500",
      },
    ],
  },
  {
    id: "atelier-ui",
    title: "Atelier UI",
    description:
      "Open-source design system starter built on shadcn/ui patterns with opinionated motion primitives.",
    category: "Open Source",
    tech: ["React", "Tailwind", "Framer Motion", "Storybook"],
    liveUrl: "https://atelier-ui.dev",
    sourceUrl: "https://github.com/rafi-dev/atelier-ui",
    images: [
      {
        id: "atelier-library",
        title: "Component Library",
        description:
          "Composable primitives with a11y baked in and theme-aware animation tokens.",
        palette: "from-rose-500 via-orange-400 to-yellow-300",
      },
      {
        id: "atelier-tokens",
        title: "Token Playground",
        description:
          "Live playground to inspect semantic tokens with instant preview on motion states.",
        palette: "from-emerald-400 via-teal-500 to-slate-900",
      },
    ],
  },
  {
    id: "relay-copilot",
    title: "Relay Copilot",
    description:
      "AI-assisted incident response surface with contextual summaries and suggested runbooks.",
    category: "AI",
    tech: ["Next.js", "LangChain", "Tailwind", "Supabase", "Vercel AI"],
    liveUrl: "https://relaycopilot.ai",
    sourceUrl: "https://github.com/rafi-dev/relay-copilot",
    images: [
      {
        id: "copilot-console",
        title: "Console",
        description:
          "Incident heatmap with auto prioritization and conversational insights.",
        palette: "from-indigo-400 via-blue-500 to-slate-950",
      },
      {
        id: "copilot-chat",
        title: "Guided Response",
        description:
          "Conversational agent with suggested actions and inline diff previews.",
        palette: "from-cyan-500 via-sky-400 to-purple-600",
      },
    ],
  },
  {
    id: "pulse-kit",
    title: "Pulse Kit",
    description:
      "Developer tooling suite for measuring frontend performance budgets with delightful DX.",
    category: "Developer Tooling",
    tech: ["Node.js", "Next.js", "Turborepo", "Tailwind"],
    liveUrl: "https://pulsekit.dev",
    sourceUrl: "https://github.com/rafi-dev/pulse-kit",
    images: [
      {
        id: "pulse-dashboard",
        title: "Metrics Canvas",
        description:
          "Progressive disclosure of Lighthouse scores with snapshot comparisons.",
        palette: "from-emerald-500 via-lime-400 to-slate-900",
      },
      {
        id: "pulse-cli",
        title: "CLI Experience",
        description:
          "Command line interface with tasteful ANSI theming and actionable recommendations.",
        palette: "from-slate-900 via-zinc-800 to-sky-400",
      },
    ],
  },
  {
    id: "atlas-notes",
    title: "Atlas Notes",
    description:
      "Rich knowledge base for engineering teams with multiplayer editing and semantic search.",
    category: "Product",
    tech: ["Next.js", "Convex", "Tailwind", "Framer Motion"],
    liveUrl: "https://atlasnotes.app",
    sourceUrl: "https://github.com/rafi-dev/atlas-notes",
    images: [
      {
        id: "atlas-editor",
        title: "Editor Canvas",
        description:
          "Collaborative editor with live avatars, real-time cursors, and presence transitions.",
        palette: "from-blue-500 via-sky-500 to-emerald-500",
      },
      {
        id: "atlas-search",
        title: "Semantic Search",
        description:
          "Contextual search overlay with command palette UX and keyboard driven interactions.",
        palette: "from-slate-900 via-indigo-900 to-purple-500",
      },
    ],
  },
];

export type TechStackItem = {
  id: string;
  name: string;
  level: "Advanced" | "Intermediate" | "Familiar";
  experience: string;
  description: string;
  icon: LucideIcon;
};

export type TechStackCategory = {
  id: string;
  title: string;
  summary: string;
  items: TechStackItem[];
};

export const techStack: TechStackCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    summary:
      "Crafting high-performing interfaces with a balance of craft, accessibility, and motion.",
    items: [
      {
        id: "tech-next",
        name: "Next.js",
        level: "Advanced",
        experience: "6 yrs",
        description:
          "Server-first architectures, App Router, ISR/SSG, and edge rendering strategies.",
        icon: Rocket,
      },
      {
        id: "tech-react",
        name: "React",
        level: "Advanced",
        experience: "8 yrs",
        description:
          "Component architectures, concurrent features, and performance instrumentation.",
        icon: Code2,
      },
      {
        id: "tech-tailwind",
        name: "Tailwind CSS",
        level: "Advanced",
        experience: "6 yrs",
        description:
          "Design tokens, utility-first architecture, and custom theming systems.",
        icon: Layers3,
      },
      {
        id: "tech-motion",
        name: "Framer Motion",
        level: "Advanced",
        experience: "5 yrs",
        description:
          "Motion systems, choreography, and micro-interaction libraries.",
        icon: Sparkles,
      },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    summary:
      "Building resilient APIs and automation that support delightful frontend experiences.",
    items: [
      {
        id: "tech-node",
        name: "Node.js",
        level: "Advanced",
        experience: "7 yrs",
        description:
          "API design, observability, and performance tuning for serverless workloads.",
        icon: Atom,
      },
      {
        id: "tech-graphql",
        name: "GraphQL",
        level: "Advanced",
        experience: "5 yrs",
        description:
          "Schema design, Federation, and client patterns with Apollo and urql.",
        icon: GitBranch,
      },
      {
        id: "tech-database",
        name: "PostgreSQL",
        level: "Intermediate",
        experience: "6 yrs",
        description:
          "Data modeling, indexing, and performance diagnostics for product analytics.",
        icon: Database,
      },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    summary:
      "Cloud-native tooling, CI/CD automation, and observability pipelines for teams at scale.",
    items: [
      {
        id: "tech-aws",
        name: "AWS",
        level: "Intermediate",
        experience: "5 yrs",
        description:
          "Serverless architectures, Step Functions, and infrastructure as code.",
        icon: Cloud,
      },
      {
        id: "tech-vercel",
        name: "Vercel",
        level: "Advanced",
        experience: "4 yrs",
        description:
          "Edge functions, preview deployments, and performance analytics for Next.js apps.",
        icon: Radar,
      },
      {
        id: "tech-turborepo",
        name: "Turborepo",
        level: "Intermediate",
        experience: "3 yrs",
        description:
          "Monorepo orchestration, caching strategies, and developer experience tooling.",
        icon: Rocket,
      },
    ],
  },
  {
    id: "testing",
    title: "Testing & Quality",
    summary:
      "Designing reliable test harnesses and automation that keep releases confident.",
    items: [
      {
        id: "tech-playwright",
        name: "Playwright",
        level: "Advanced",
        experience: "4 yrs",
        description:
          "Visual regression, accessibility audits, and resilient end-to-end suites.",
        icon: ShieldCheck,
      },
      {
        id: "tech-vitest",
        name: "Vitest",
        level: "Intermediate",
        experience: "3 yrs",
        description:
          "Unit testing, component harnesses, and mutation testing for React ecosystems.",
        icon: TestTube2,
      },
      {
        id: "tech-ux",
        name: "UX Research",
        level: "Advanced",
        experience: "7 yrs",
        description:
          "Moderated studies, heuristic evaluations, and UX writing for product-led growth.",
        icon: Palette,
      },
    ],
  },
];

export type Course = {
  id: string;
  title: string;
  provider: string;
  year: string;
  certificateUrl: string;
  focus: string;
};

export const courses: Course[] = [
  {
    id: "ux-writing",
    title: "UX Writing & Content Strategy",
    provider: "UX Content Collective",
    year: "2024",
    certificateUrl: "https://uxccertificate.com/rafi-ux-writing",
    focus:
      "Crafting voice and tone systems, conversation design, and microcopy for digital products.",
  },
  {
    id: "design-systems",
    title: "Design Systems for Developers",
    provider: "Smashing Magazine",
    year: "2023",
    certificateUrl: "https://smashingconf.com/certificates/design-systems",
    focus:
      "Scalable tokens, documentation workflows, and governance for multi-brand ecosystems.",
  },
  {
    id: "motion",
    title: "Motion Design for React",
    provider: "Framer",
    year: "2022",
    certificateUrl: "https://learn.framer.com/certificates/motion-for-react",
    focus:
      "Principles of animation, micro-interactions, and storytelling with motion for interfaces.",
  },
  {
    id: "ai",
    title: "Human-Centered AI",
    provider: "Stanford Online",
    year: "2021",
    certificateUrl: "https://online.stanford.edu/certificates/human-centered-ai",
    focus:
      "Responsible AI practices, prototyping, and evaluation aligned with inclusive design.",
  },
];

export type SocialLink = {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
};

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/rafi-dev",
    icon: Code2,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/rafi-difany",
    icon: Layers3,
  },
  {
    id: "dribbble",
    label: "Dribbble",
    href: "https://dribbble.com/rafi",
    icon: Palette,
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:hello@rafimufadhal.com",
    icon: Sparkles,
  },
];

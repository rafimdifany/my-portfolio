# 🌐 Rafi Mufadhal Difany — My Portfolio

[![Live Site](https://img.shields.io/badge/Live-Vercel-000000?logo=vercel&logoColor=white)](https://my-portfolio-psi-sandy-75.vercel.app)
[![Built with Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#-license)

Welcome! This repo contains the source for my personal portfolio site — a fast, modern, **Next.js** (App Router) & **TypeScript** project deployed on **Vercel**. It’s where I showcase selected work, side‑projects, and a bit about what I do as a software engineer.

> **Status:** Actively evolving. Expect frequent updates as I add more case studies, blog posts, and UI polish.

---

## 🔗 Quick Links
- **Live:** https://my-portfolio-psi-sandy-75.vercel.app
- **Issues / Feedback:** Please open a [GitHub Issue](../../issues/new) with details or screenshots.
- **Contact:** See [Contact](#-contact) section below.

---

## 📌 Table of Contents
- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Configuration & Environment Variables](#-configuration--environment-variables)
- [Deployment](#-deployment)
- [Roadmap](#-roadmap)
- [Contributing / Feedback](#-contributing--feedback)
- [Contact](#-contact)
- [License](#-license)

---

## 💡 About the Project

This portfolio is a lightweight web app built with the **Next.js App Router** and **TypeScript**. It’s optimized for quick iteration so I can easily publish new projects, experiment with UI patterns, and integrate backend services when needed (APIs, analytics, content sources).

The app was initially scaffolded with `create-next-app` and then customized for portfolio use (sections, theming, project data, etc.).

> **Why Next.js?** Built‑in routing, server & client rendering flexibility, excellent DX, and a seamless deployment flow to Vercel.

---

## ✨ Features

- **Hero / Intro Section** – Brief overview + call‑to‑action.
- **Projects Gallery** – Highlight select work; each entry can link to details, GitHub, or live demos.
- **Experience Snapshot** – Roles, tech, and domains I’ve worked in (fintech, microservices, cross‑platform apps, etc.).
- **Responsive UI** – Mobile‑first; scales nicely to desktop.
- **Dark Mode Ready** (toggle or auto — implement as you like).
- **Contact / Social Links** – Quick ways to reach me.
- **Easy Content Updates** – Project metadata stored in code (or future CMS).

_Not all sections may be live yet — see [Roadmap](#-roadmap) for what’s coming._

---

## 🛠 Tech Stack

| Layer | Tech | Notes |
|-------|------|-------|
| Framework | **Next.js** | App Router; hybrid rendering. |
| Language | **TypeScript** | Strict types for safer refactors. |
| Styling | CSS Modules / Global CSS *(add Tailwind or other utility CSS if you prefer)* |
| Build / Bundler | Next.js (SWC / Turbopack under the hood) |
| Deploy | **Vercel** (CI from Git) |
| Linting | ESLint config in repo |
| Formatting | (Optional) Prettier — add if not yet configured |

**Want Tailwind?** Run: `npx @next/codemod add-tailwind` (or follow the Tailwind docs) and update styling approach.

---

## ▶️ Getting Started

**Prereqs**
- Node.js 18+ (align with Next.js recommended version)
- npm (bundled) or your preferred package manager

**Clone & Install**
```bash
git clone https://github.com/rafimdifany/my-portfolio.git
cd my-portfolio
npm install
```

**Start Dev Server**
```bash
npm run dev
# browse http://localhost:3000
```

**Build Production Bundle**
```bash
npm run build
npm start   # or: npm run start
```

---

## 🗂 Project Structure

```text
my-portfolio/
├─ public/              # Static assets (images, icons, etc.)
├─ src/                 # App source
│  ├─ app/              # App Router pages, layouts, metadata
│  ├─ components/       # Reusable UI components
│  ├─ data/             # Project/experience config (optional)
│  ├─ lib/              # Utilities, hooks, helpers
│  └─ styles/           # Global styles / modules
├─ package.json         # Scripts & deps
├─ tsconfig.json        # TypeScript config
├─ next.config.ts       # Next.js config
└─ README.md            # You are here
```

_Note: Directory names reflect common organization; adjust to match your actual repo if different._

---

## ⚙️ Configuration & Environment Variables

If you integrate APIs (contact form, analytics, CMS, etc.), create a `.env.local` file:

```bash
# example
NEXT_PUBLIC_SITE_URL=https://my-portfolio-psi-sandy-75.vercel.app
CONTACT_FORM_ENDPOINT=https://api.example.com/contact
ANALYTICS_WRITE_KEY=...
```

Values in `.env.local` override `.env` and are **never committed** by default (see `.gitignore`).

---

## 🚀 Deployment

This project is deployed on **Vercel**. You can deploy your own fork in minutes:

1. Push your repo to GitHub.
2. Log in to Vercel and **Import Project** from Git.
3. Accept detected framework = Next.js.
4. Add required environment variables (if any).
5. Deploy — Vercel will build & give you a production URL.
6. (Optional) Set up a custom domain.

**CLI Deploy (alt):**
```bash
npm i -g vercel
vercel
vercel --prod
```

---

## 🗺 Roadmap

- [ ] Add real project cards + filtering by tech.
- [ ] Dark / light theme switch.
- [ ] Contact form w/ email or webhook integration.
- [ ] Blog / notes section (MDX or CMS).
- [ ] Multilingual (EN / ID) content.
- [ ] Add analytics + events (MoEngage / GA / Plausible).
- [ ] Automated Lighthouse check in CI.

Have suggestions? Open an [Issue](../../issues/new) or start a [Discussion](../../discussions) (if enabled).

---

## 🤝 Contributing / Feedback

This is a personal project, but I welcome **bug reports, UI suggestions, and feature ideas**.  
PRs are OK for small fixes (typos, config, docs). For bigger changes, please open an issue first.

**Run lint before PR:**
```bash
npm run lint
```

---

## 📬 Contact

**Rafi Mufadhal Difany**  
Software Engineer • Fintech / Microservices / Web Apps  
Indonesia

- X / Twitter: https://x.com/rafimdifany
- Instagram: https://instagram.com/rafimdifany
- LinkedIn: https://linkedin.com/in/rafimdifany
- Email: rafimdifany@gmail.com

> Want to work together? Open an issue or reach out via social.

---

## 📝 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE)

---

## 🌍 Bahasa Indonesia

<details>
<summary>Klik untuk versi Bahasa Indonesia</summary>

Repo ini berisi source code untuk **website portofolio pribadi** saya (Next.js + TypeScript, deploy di Vercel). Di sini saya menampilkan proyek, pengalaman kerja, dan kontak.

**Cara menjalankan di lokal:**
```bash
git clone https://github.com/rafimdifany/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

Buka `http://localhost:3000`.

**Deploy ke Vercel:** Import repo dari GitHub → build otomatis → dapat URL live.

Saran / bug? Silakan buat Issue. Terima kasih!

</details>

---

### Thanks for visiting! ⭐
If this helped you build your own portfolio, feel free to fork & star.

---

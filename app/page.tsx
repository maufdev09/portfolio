import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Database,
  Github,
  Layers3,
  Mail,
  MapPin,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/button";
import { Hero3DScene } from "@/components/hero-3d-scene";
import { ProjectCard } from "@/components/project-card";
import { getProjects } from "@/lib/projects";

const skills = [
  {
    icon: Code2,
    label: "MERN Stack",
    text: "MongoDB, Express, React, Node.js apps with clean architecture.",
  },
  {
    icon: Smartphone,
    label: "React Native",
    text: "Cross-platform mobile screens, navigation, and API-driven UX.",
  },
  {
    icon: Database,
    label: "Prisma + MongoDB",
    text: "Typed data models, project upload flows, and scalable APIs.",
  },
  {
    icon: Layers3,
    label: "Modern UI",
    text: "Tailwind, shadcn-style components, motion, and responsive design.",
  },
];

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen overflow-hidden">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-background/75 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link
            className="text-sm font-black uppercase tracking-[0.28em] text-white/90"
            href="/"
          >
            Maruf
          </Link>
          <div className="hidden items-center gap-7 text-sm font-semibold text-muted-foreground md:flex">
            <Link className="hover:text-foreground" href="#work">
              Work
            </Link>
            <Link className="hover:text-foreground" href="#skills">
              Skills
            </Link>
            <Link className="hover:text-foreground" href="#contact">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <section className="relative min-h-screen px-4 sm:px-6 pt-24 sm:pt-28">
        <div className="mesh-grid absolute inset-0 -z-10 opacity-70" />
        <div className="absolute left-1/2 top-20 -z-10 h-56 w-56 sm:h-80 sm:w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 pb-16">
          {/* LEFT CONTENT */}
          <div className="max-w-2xl text-center lg:text-left">
            <p className="inline-flex rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs sm:text-sm font-bold text-primary backdrop-blur">
              MERN Stack & React Native Developer
            </p>

            <h1 className="mt-6 text-3xl sm:text-5xl lg:text-7xl font-black leading-tight">
              Mruf Ahmed builds digital products with depth.
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 text-muted-foreground">
              I am Maruf Ahmed, focused on Next.js, React, React Native,
              Node.js, MongoDB, Prisma, Tailwind, dark interfaces, and animated
              3D product experiences.
            </p>

            {/* SKILLS */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {["Next.js", "MERN", "React Native"].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white/10 bg-white/[0.045] p-3 text-center lg:text-left"
                >
                  <p className="text-sm font-black text-white">{item}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Production ready
                  </p>
                </div>
              ))}
            </div>

            {/* BADGES */}
            <div className="mt-5 flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground justify-center lg:justify-start">
              <span className="flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2">
                <MapPin className="h-4 w-4 text-primary" />
                Available for remote projects
              </span>

              <span className="flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2">
                <Sparkles className="h-4 w-4 text-accent" />
                Creative frontend engineering
              </span>
            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button asChild className="w-full sm:w-auto">
                <Link href="#work">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link href="https://github.com/" target="_blank">
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-xl">
            <div className="absolute -inset-4 sm:-inset-6 -z-10 rounded-[2rem] blur-2xl bg-[radial-gradient(circle_at_25%_25%,rgba(53,241,218,.3),transparent_38%),radial-gradient(circle_at_78%_70%,rgba(255,122,89,.24),transparent_35%)]" />

            <div className="relative rounded-lg border border-white/10 bg-white/[0.06] p-3 backdrop-blur-xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md">
                <Image
                  priority
                  src="/images/mruf-ahmed.jpg"
                  alt="Mruf Ahmed"
                  fill
                  sizes="(min-width: 1024px) 400px, 100vw"
                  className="object-cover object-[52%_28%]"
                />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(5,7,13,.82)_100%)]" />

                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-teal-200">
                    Developer profile
                  </p>
                  <p className="mt-1 text-lg sm:text-2xl font-black text-white">
                    Mruf Ahmed
                  </p>
                </div>
              </div>

              {/* FLOATING TAGS */}
              <div className="hidden sm:block absolute -right-5 top-8 rounded-lg border border-primary/30 bg-[#071317]/90 px-3 py-2 text-xs sm:text-sm font-bold text-white backdrop-blur">
                MERN
              </div>

              <div className="hidden sm:block absolute -bottom-5 left-7 rounded-lg border border-accent/30 bg-[#170d0a]/90 px-3 py-2 text-xs sm:text-sm font-bold text-white backdrop-blur">
                React Native
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="border-y border-white/10 bg-white/[0.035] px-4 sm:px-6 py-16 sm:py-20 backdrop-blur"
      >
        <div className="mx-auto max-w-7xl">
          {/* HEADER */}
          <div className="max-w-2xl text-center md:text-left">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-primary">
              What I do
            </p>

            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black leading-tight">
              Clean builds with cinematic polish.
            </h2>
          </div>

          {/* GRID */}
          <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill.label}
                className="group rounded-xl border border-white/10 bg-white/[0.045] p-4 sm:p-5 
          shadow-[0_12px_40px_rgba(0,0,0,.2)] backdrop-blur 
          transition-all duration-300 
          hover:-translate-y-1 hover:border-primary/40"
              >
                {/* ICON */}
                <skill.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary transition-transform group-hover:scale-110" />

                {/* TITLE */}
                <h3 className="mt-4 text-base sm:text-lg font-bold">
                  {skill.label}
                </h3>

                {/* TEXT */}
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {skill.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {[
            [
              "01",
              "Full-stack apps",
              "Typed APIs, MongoDB models, dashboards, and deployment-ready structure.",
            ],
            [
              "02",
              "Mobile interfaces",
              "React Native screens with fast flows, clean navigation, and app-like polish.",
            ],
            [
              "03",
              "Creative UI",
              "Dark themes, 3D motion, glass layers, and modern product storytelling.",
            ],
          ].map(([number, title, text]) => (
            <div
              key={title}
              className="group rounded-xl border border-white/10 
        bg-[linear-gradient(145deg,rgba(255,255,255,.08),rgba(255,255,255,.025))] 
        p-5 sm:p-6 backdrop-blur 
        transition-all duration-300 
        hover:-translate-y-1 hover:border-primary/40"
            >
              {/* NUMBER */}
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white/10">
                {number}
              </p>

              {/* TITLE */}
              <h3 className="mt-2 text-lg sm:text-xl font-black text-white">
                {title}
              </h3>

              {/* TEXT */}
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Selected work
              </p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Projects uploaded through Prisma.
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link href="/admin/6589" prefetch={false}>
                Add Project
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-white/10 bg-black/35 px-5 py-20 text-white"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-200">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Let’s build something polished.
            </h2>
          </div>
          <Button asChild>
            <Link href="mailto:mrufahmed@example.com">
              <Mail className="h-4 w-4" />
              Email Me
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, Database, Github, Layers3, Mail, MapPin, Smartphone, Sparkles } from "lucide-react";
import { Button } from "@/components/button";
import { Hero3DScene } from "@/components/hero-3d-scene";
import { ProjectCard } from "@/components/project-card";
import { getProjects } from "@/lib/projects";

const skills = [
  { icon: Code2, label: "MERN Stack", text: "MongoDB, Express, React, Node.js apps with clean architecture." },
  { icon: Smartphone, label: "React Native", text: "Cross-platform mobile screens, navigation, and API-driven UX." },
  { icon: Database, label: "Prisma + MongoDB", text: "Typed data models, project upload flows, and scalable APIs." },
  { icon: Layers3, label: "Modern UI", text: "Tailwind, shadcn-style components, motion, and responsive design." }
];

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen overflow-hidden">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-background/75 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link className="text-sm font-black uppercase tracking-[0.28em] text-white/90" href="/">
            Maruf
          </Link>
          <div className="hidden items-center gap-7 text-sm font-semibold text-muted-foreground md:flex">
            <Link className="hover:text-foreground" href="#work">Work</Link>
            <Link className="hover:text-foreground" href="#skills">Skills</Link>
            <Link className="hover:text-foreground" href="#contact">Contact</Link>
          </div>
        </nav>
      </header>

      <section className="relative min-h-[94vh] px-5 pt-28">
        <div className="mesh-grid absolute inset-0 -z-10 opacity-70" />
        <div className="absolute left-1/2 top-28 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 pb-16 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="max-w-2xl">
            <p className="inline-flex rounded-md border border-white/10 bg-white/5 px-3 py-1 text-sm font-bold text-primary shadow-[0_0_35px_rgba(53,241,218,.18)] backdrop-blur">
              MERN Stack & React Native Developer
            </p>
            <h1 className="mt-7 text-5xl font-black leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
              Mruf Ahmed builds digital products with depth.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              I am Mruf Ahmed, focused on Next.js, React, React Native, Node.js, MongoDB, Prisma,
              Tailwind, dark interfaces, and animated 3D product experiences.
            </p>
            <div className="mt-7 grid max-w-xl grid-cols-3 gap-3">
              {["Next.js", "MERN", "React Native"].map((item) => (
                <div className="rounded-lg border border-white/10 bg-white/[0.045] p-3 backdrop-blur" key={item}>
                  <p className="text-sm font-black text-white">{item}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Production ready</p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2">
                <MapPin className="h-4 w-4 text-primary" />
                Available for remote projects
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2">
                <Sparkles className="h-4 w-4 text-accent" />
                Creative frontend engineering
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="#work">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://github.com/" target="_blank">
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto grid w-full max-w-3xl gap-4 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_25%_25%,rgba(53,241,218,.3),transparent_38%),radial-gradient(circle_at_78%_70%,rgba(255,122,89,.24),transparent_35%)] blur-2xl" />
            <div className="relative z-10 self-center rounded-lg border border-white/10 bg-white/[0.06] p-3 shadow-[0_30px_120px_rgba(0,0,0,.45)] backdrop-blur-xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md">
                <Image
                  priority
                  src="/images/mruf-ahmed.jpg"
                  alt="Mruf Ahmed"
                  fill
                  sizes="(min-width: 1024px) 320px, 90vw"
                  className="object-cover object-[52%_28%]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(5,7,13,.82)_100%)]" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-200">Developer profile</p>
                  <p className="mt-1 text-2xl font-black text-white">Mruf Ahmed</p>
                </div>
              </div>
              <div className="absolute -right-5 top-8 rounded-lg border border-primary/30 bg-[#071317]/90 px-4 py-3 text-sm font-bold text-white shadow-[0_0_55px_rgba(53,241,218,.22)] backdrop-blur">
                MERN
              </div>
              <div className="absolute -bottom-5 left-7 rounded-lg border border-accent/30 bg-[#170d0a]/90 px-4 py-3 text-sm font-bold text-white shadow-[0_0_55px_rgba(255,122,89,.2)] backdrop-blur">
                React Native
              </div>
            </div>
            <div className="min-h-[380px]">
              <Hero3DScene />
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="border-y border-white/10 bg-white/[0.035] px-5 py-20 backdrop-blur">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">What I do</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Clean builds with cinematic polish.</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <div className="rounded-lg border border-white/10 bg-white/[0.045] p-5 shadow-[0_18px_70px_rgba(0,0,0,.22)] backdrop-blur transition hover:-translate-y-1 hover:border-primary/45" key={skill.label}>
                <skill.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-5 text-lg font-bold">{skill.label}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{skill.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {[
            ["01", "Full-stack apps", "Typed APIs, MongoDB models, dashboards, and deployment-ready structure."],
            ["02", "Mobile interfaces", "React Native screens with fast flows, clean navigation, and app-like polish."],
            ["03", "Creative UI", "Dark themes, 3D motion, glass layers, and modern product storytelling."]
          ].map(([number, title, text]) => (
            <div className="rounded-lg border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,.08),rgba(255,255,255,.025))] p-6 backdrop-blur" key={title}>
              <p className="text-5xl font-black text-white/10">{number}</p>
              <h3 className="-mt-4 text-xl font-black text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Selected work</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">Projects uploaded through Prisma.</h2>
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

      <section id="contact" className="border-t border-white/10 bg-black/35 px-5 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-200">Contact</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Let’s build something polished.</h2>
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

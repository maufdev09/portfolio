import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import type { ProjectView } from "@/lib/projects";
import { Button } from "@/components/button";

export function ProjectCard({ project }: { project: ProjectView }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] text-card-foreground shadow-[0_20px_80px_rgba(0,0,0,.24)] backdrop-blur transition hover:-translate-y-1 hover:border-primary/35 hover:shadow-glow">
      <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(57,211,200,.28),transparent_30%),linear-gradient(135deg,#111827,#243447_45%,#0b1215)]">
            <span className="text-sm font-semibold text-white/80">{project.title}</span>
          </div>
        )}
      </div>
      <div className="space-y-4 p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {project.featured ? "Featured build" : "Project"}
          </p>
          <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.summary}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              className="rounded-md border border-white/10 bg-white/[0.055] px-2.5 py-1 text-xs font-medium text-white/82"
              key={tech}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          {project.liveUrl ? (
            <Button asChild size="sm">
              <Link href={project.liveUrl}>
                <ArrowUpRight className="h-4 w-4" />
                Live
              </Link>
            </Button>
          ) : null}
          {project.githubUrl ? (
            <Button asChild size="sm" variant="outline">
              <Link href={project.githubUrl}>
                <Github className="h-4 w-4" />
                Code
              </Link>
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}

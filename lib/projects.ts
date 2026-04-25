import { prisma } from "@/lib/prisma";

export type ProjectView = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  description: string | null;
  imageUrl: string | null;
  liveUrl: string | null;
  githubUrl: string | null;
  techStack: string[];
  featured: boolean;
};

export const fallbackProjects: ProjectView[] = [
  {
    id: "fallback-1",
    title: "MERN Commerce Dashboard",
    slug: "mern-commerce-dashboard",
    summary: "A fast admin dashboard for orders, products, analytics, and secure role-based workflows.",
    description: "Built with React, Node.js, Express, MongoDB, and clean dashboard UX patterns.",
    imageUrl: null,
    liveUrl: "#",
    githubUrl: "#",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    featured: true
  },
  {
    id: "fallback-2",
    title: "React Native Service App",
    slug: "react-native-service-app",
    summary: "A cross-platform mobile experience with polished screens, reusable components, and API sync.",
    description: "Focused on smooth navigation, offline-aware UI states, and mobile-first delivery.",
    imageUrl: null,
    liveUrl: "#",
    githubUrl: "#",
    techStack: ["React Native", "Expo", "REST API", "MongoDB"],
    featured: true
  },
  {
    id: "fallback-3",
    title: "Portfolio Project CMS",
    slug: "portfolio-project-cms",
    summary: "A simple Prisma and MongoDB backed upload flow for publishing portfolio work.",
    description: "Includes a Next.js admin form, API route, and homepage rendering.",
    imageUrl: null,
    liveUrl: "#",
    githubUrl: "#",
    techStack: ["Next.js", "Prisma", "MongoDB", "shadcn/ui"],
    featured: false
  }
];

export async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: [{ featured: "desc" }, { createdAt: "desc" }]
    });

    return projects.length ? projects : fallbackProjects;
  } catch {
    return fallbackProjects;
  }
}

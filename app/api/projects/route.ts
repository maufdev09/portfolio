import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export async function GET() {
  const projects = await prisma.project.findMany({
    orderBy: [{ featured: "desc" }, { createdAt: "desc" }]
  });

  return NextResponse.json(projects);
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const title = String(formData.get("title") ?? "").trim();
    const summary = String(formData.get("summary") ?? "").trim();
    const description = String(formData.get("description") ?? "").trim();
    const imageUrl = String(formData.get("imageUrl") ?? "").trim();
    const liveUrl = String(formData.get("liveUrl") ?? "").trim();
    const githubUrl = String(formData.get("githubUrl") ?? "").trim();
    const techStack = String(formData.get("techStack") ?? "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
    const featured = formData.get("featured") === "on";

    if (!title || !summary || techStack.length === 0) {
      return NextResponse.json(
        { message: "Title, summary, and at least one tech item are required." },
        { status: 400 }
      );
    }

    const project = await prisma.project.create({
      data: {
        title,
        slug: `${slugify(title)}-${Date.now().toString(36)}`,
        summary,
        description: description || null,
        imageUrl: imageUrl || null,
        liveUrl: liveUrl || null,
        githubUrl: githubUrl || null,
        techStack,
        featured
      }
    });

    return NextResponse.redirect(new URL("/#work", request.url), 303);
  } catch {
    return NextResponse.json(
      { message: "Could not upload project. Check DATABASE_URL and Prisma setup." },
      { status: 500 }
    );
  }
}

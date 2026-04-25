import Link from "next/link";
import { ArrowLeft, UploadCloud } from "lucide-react";
import { Button } from "@/components/button";

export default function PrivateAdminPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_18%_10%,rgba(53,241,218,.16),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(255,122,89,.14),transparent_24%),linear-gradient(180deg,#05070d,#0a111a)] px-5 py-10 text-foreground">
      <div className="mx-auto max-w-3xl">
        <Button asChild variant="ghost">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </Button>

        <section className="mt-8 rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_90px_rgba(0,0,0,.32)] backdrop-blur-xl">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Private Admin</p>
              <h1 className="mt-2 text-3xl font-black">Upload a project</h1>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                This private route saves projects to MongoDB through Prisma and shows them on the homepage.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <UploadCloud className="h-7 w-7 text-primary" />
            </div>
          </div>

          <form action="/api/projects" className="mt-8 grid gap-5" method="post">
            <label className="grid gap-2 text-sm font-semibold">
              Project title
              <input
                className="h-11 rounded-md border border-white/10 bg-black/25 px-3 text-foreground outline-none ring-ring transition placeholder:text-muted-foreground focus:ring-2"
                name="title"
                placeholder="Mobile food delivery app"
                required
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold">
              Summary
              <textarea
                className="min-h-24 rounded-md border border-white/10 bg-black/25 px-3 py-3 text-foreground outline-none ring-ring transition placeholder:text-muted-foreground focus:ring-2"
                name="summary"
                placeholder="Short project summary for the project card"
                required
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold">
              Description
              <textarea
                className="min-h-28 rounded-md border border-white/10 bg-black/25 px-3 py-3 text-foreground outline-none ring-ring transition placeholder:text-muted-foreground focus:ring-2"
                name="description"
                placeholder="Optional deeper description"
              />
            </label>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold">
                Image URL
                <input
                  className="h-11 rounded-md border border-white/10 bg-black/25 px-3 text-foreground outline-none ring-ring transition placeholder:text-muted-foreground focus:ring-2"
                  name="imageUrl"
                  placeholder="https://..."
                  type="url"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold">
                Tech stack
                <input
                  className="h-11 rounded-md border border-white/10 bg-black/25 px-3 text-foreground outline-none ring-ring transition placeholder:text-muted-foreground focus:ring-2"
                  name="techStack"
                  placeholder="Next.js, Prisma, MongoDB"
                  required
                />
              </label>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold">
                Live URL
                <input
                  className="h-11 rounded-md border border-white/10 bg-black/25 px-3 text-foreground outline-none ring-ring transition placeholder:text-muted-foreground focus:ring-2"
                  name="liveUrl"
                  placeholder="https://..."
                  type="url"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold">
                GitHub URL
                <input
                  className="h-11 rounded-md border border-white/10 bg-black/25 px-3 text-foreground outline-none ring-ring transition placeholder:text-muted-foreground focus:ring-2"
                  name="githubUrl"
                  placeholder="https://github.com/..."
                  type="url"
                />
              </label>
            </div>

            <label className="flex items-center gap-3 text-sm font-semibold">
              <input className="h-4 w-4 accent-teal-600" name="featured" type="checkbox" />
              Featured project
            </label>

            <Button className="w-full sm:w-fit" type="submit">
              <UploadCloud className="h-4 w-4" />
              Upload Project
            </Button>
          </form>
        </section>
      </div>
    </main>
  );
}

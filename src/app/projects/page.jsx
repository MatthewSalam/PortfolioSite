import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ProjectCard from "../../components/ProjectCard";
import Footer from "../../components/Footer";
import { projects } from "../../data/projects";

export const metadata = {
  title: "Projects | Matthew Salam",
  description: "Everything I've built, from flagship products to small experiments.",
};

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="top-glow" />
      <div className="relative z-10">
        <section className="px-6 pb-24 pt-32">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:text-black dark:hover:text-white"
            >
              <ArrowLeft size={16} />
              Back home
            </Link>

            <p className="mt-10 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              All Projects
            </p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
              Everything I&apos;ve built.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-neutral-500">
              Flagship products, side projects and experiments, all in one place.
            </p>

            <div className="project-list mt-16 grid gap-8 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
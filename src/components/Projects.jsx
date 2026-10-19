import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          Projects
        </p>
        <h2 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
          Work I&apos;m proud of.
        </h2>

        <div className="project-list mt-16 space-y-8">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} variant="featured" />
          ))}
        </div>

        <Link
          href="/projects"
          className="mt-12 inline-flex items-center gap-2 text-lg text-blue-500 transition hover:underline"
        >
          Check out everything I&apos;ve built
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
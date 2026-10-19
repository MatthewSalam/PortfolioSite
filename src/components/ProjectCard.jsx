"use client";

import { useState } from "react";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import { VscGithub } from "react-icons/vsc";
import ImageModal from "./ImageModal";

function LinkButton({ link }) {
  const isGithub = link.href.includes("github.com");
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium"
    >
      {isGithub ? <VscGithub size={14} /> : <ArrowUpRight size={14} />}
      {link.label}
    </a>
  );
}

function Preview({ project, className, onOpen }) {
  const [failed, setFailed] = useState(false);
  const hasImage = project.image && !failed;

  return (
    <div
      className={`overflow-hidden rounded-xl border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5 ${className}`}
    >
      {hasImage ? (
        <button
          type="button"
          onClick={onOpen}
          aria-label={`View ${project.title} screenshot full screen`}
          className="group relative block h-full w-full cursor-zoom-in"
        >
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
          />
          <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-md bg-black/70 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 backdrop-blur transition group-hover:opacity-100 group-focus-visible:opacity-100">
            <Maximize2 size={12} />
            Full screen
          </span>
        </button>
      ) : (
        <div className="flex h-full w-full items-center justify-center p-4 text-center text-sm font-semibold text-neutral-500">
          {project.title}
        </div>
      )}
    </div>
  );
}

export default function ProjectCard({ project, variant = "compact" }) {
  const [open, setOpen] = useState(false);

  const tags = (
    <ul className="flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <li
          key={tag}
          className="rounded-md bg-black/5 px-2.5 py-1 text-xs text-neutral-600 dark:bg-white/10 dark:text-neutral-300"
        >
          {tag}
        </li>
      ))}
    </ul>
  );

  const links = (
    <div className="flex flex-wrap gap-3">
      {project.links.map((link) => (
        <LinkButton key={link.href} link={link} />
      ))}
    </div>
  );

  const modal = open && (
    <ImageModal
      src={project.image}
      alt={`${project.title} full screenshot`}
      title={project.title}
      onClose={() => setOpen(false)}
    />
  );

  if (variant === "featured") {
    return (
      <>
        <article className="project-card grid gap-6 rounded-2xl border border-black/10 bg-black/[0.02] p-5 dark:border-white/10 dark:bg-white/[0.03] md:grid-cols-[340px_1fr]">
          <Preview
            project={project}
            className="aspect-video w-full"
            onOpen={() => setOpen(true)}
          />
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
            <p className="text-neutral-500">{project.description}</p>
            {tags}
            <div className="mt-auto pt-2">{links}</div>
          </div>
        </article>
        {modal}
      </>
    );
  }

  return (
    <>
      <article className="project-card flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.03]">
        <Preview
          project={project}
          className="aspect-video w-full rounded-none border-0"
          onOpen={() => setOpen(true)}
        />
        <div className="flex flex-1 flex-col gap-4 p-5">
          <h3 className="text-lg font-bold tracking-tight">{project.title}</h3>
          <p className="text-sm text-neutral-500">{project.description}</p>
          {tags}
          <div className="mt-auto pt-2">{links}</div>
        </div>
      </article>
      {modal}
    </>
  );
}
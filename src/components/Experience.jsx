const EXPERIENCE = [
  {
    role: "Junior Fullstack Developer",
    company: "TechPro Institute",
    period: "Sep 2026 — Present",
    description:
      "Building and testing FastAPI applications and contributing to web design and development tasks as part of a team.",
  },
  {
    role: "Intern",
    company: "Anettcomm Technologies",
    period: "Feb 2025 — Aug 2025",
    description:
      "Web design and development, FastAPI applications, and WordPress CMS work. Also designed digital flyers and posters in Canva.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-3xl px-6 py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">
        Background
      </p>
      <h2 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
        Experience
      </h2>

      <ul className="mt-12">
        {EXPERIENCE.map((item) => (
          <li
            key={`${item.company}-${item.period}`}
            className="border-b border-black/10 py-6 first:pt-0 dark:border-white/10"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="text-lg font-semibold">
                {item.role} — {item.company}
              </h3>
              <span className="shrink-0 font-mono text-xs text-neutral-500">
                {item.period}
              </span>
            </div>
            <p className="mt-2 leading-relaxed text-neutral-500">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
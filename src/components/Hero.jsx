import { ArrowDown, Download, Mail } from "lucide-react";
import { VscGithub } from "react-icons/vsc";
import { IoLogoLinkedin } from "react-icons/io5";
      import AboutDropdown from "@/components/AboutDropdown";

const DOC_ID = "PASTE_YOUR_GOOGLE_DOC_ID_HERE";
const RESUME_URL = `https://docs.google.com/document/d/1JjZCE1Xg0f0MleQbNomuqiRxMiw2KqE5ChLig2RxLXU/export?format=pdf`;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pb-24 pt-32 text-center"
    >
      {/* Role pill */}
      <span className="rounded-lg border px-3 py-1 text-sm text-neutral-500 dark:border-white/15">
        Developer
      </span>

      {/* Name */}
      <h1 className="mt-6 text-6xl font-bold tracking-tight md:text-8xl">
        Oluwatunmise Matthew
        <br />
        Salam
      </h1>

      {/* Intro statement */}
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-500 md:text-xl">
        I build whatever you can think of and bring your ideas to life. 
      </p>


      <AboutDropdown />

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#projects"
          className="rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition hover:opacity-80 dark:bg-white dark:text-black"
        >
          View My Work
        </a>
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="glass inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold"
        >
          <Download size={18} />
          Resume
        </a>
      </div>

      {/* Socials */}
      <ul className="mt-12 flex items-center gap-8 text-2xl text-neutral-500">
        <li>
          <a
            href="https://github.com/MatthewSalam"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-black dark:hover:text-white"
          >
            <VscGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/oluwatunmisesalam"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-black dark:hover:text-white"
          >
            <IoLogoLinkedin />
          </a>
        </li>
        <li>
          <a
            href="mailto:yourname@gmail.com"
            aria-label="Email"
            className="transition hover:text-black dark:hover:text-white"
          >
            <Mail size={24} />
          </a>
        </li>
      </ul>

      {/* Scroll cue */}
      <div className="absolute bottom-8 flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
        Scroll
        <ArrowDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
}

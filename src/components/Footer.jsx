import { Mail } from "lucide-react";
import { VscGithub } from "react-icons/vsc";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="px-6 pb-10 pt-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-base font-semibold">Matthew Salam</p>
            <p className="text-sm text-neutral-500">Developer</p>
          </div>

          <ul className="flex items-center gap-6 text-xl text-neutral-500">
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
                href="mailto:salammatthew7@gmail.com"
                aria-label="Email"
                className="transition hover:text-black dark:hover:text-white"
              >
                <Mail size={20} />
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-10 border-t border-black/10 pt-8 text-center text-sm text-neutral-500 dark:border-white/10">
          © {new Date().getFullYear()} Matthew Salam
        </div>
      </div>
    </footer>
  );
}
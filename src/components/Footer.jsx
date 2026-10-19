"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { VscGithub } from "react-icons/vsc";
import { IoLogoLinkedin } from "react-icons/io5";

const TIME_ZONE = "Africa/Lagos"; // WAT

function useClock() {
  // Start empty so the server and first client render match (avoids hydration errors).
  const [time, setTime] = useState("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: TIME_ZONE,
    });

    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export default function Footer() {
  const time = useClock();

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

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-black/10 pt-8 text-sm text-neutral-500 sm:flex-row dark:border-white/10">
          <p>© {new Date().getFullYear()} Matthew Salam</p>

          <p className="font-mono">
            <time className="inline-block min-w-[8ch] tabular-nums">
              {time || "--:--:--"}
            </time>{" "}
            WAT
          </p>
        </div>
      </div>
    </footer>
  );
}
"use client"
import { useEffect, useState } from "react"
import Link from "next/link";
import Image from "next/image";
import { RiWhatsappFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";
import { VscGithub } from "react-icons/vsc";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import ThemeToggle from "./ThemeToggle";

const RESUME_URL =
  "https://docs.google.com/document/d/1JjZCE1Xg0f0MleQbNomuqiRxMiw2KqE5ChLig2RxLXU/preview";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <div
        className={`fixed inset-x-0 top-0 z-50 px-3 transition-[padding] duration-300 ${
          scrolled ? "pt-3" : "pt-0"
        }`}
      >
        <header
          className={`mx-auto flex items-center justify-between text-black backdrop-blur-lg transition-all duration-300 dark:text-white ${
            scrolled
              ? "h-14 max-w-4xl rounded-full border border-black/10 bg-white/70 px-6 shadow-lg dark:border-white/10 dark:bg-white/10"
              : "h-20 max-w-[120rem] rounded-none border border-transparent border-b-black/10 bg-white/50 px-5 shadow-md dark:border-b-white/10 dark:bg-white/5"
          }`}
        >
          <div className="h-10 w-auto flex items-center">
            <Link href={RESUME_URL}>
              MS.
            </Link>
          </div>

          {/* Desktop nav links */}
          <nav className="hidden md:flex">
            <ul className="flex gap-6 text-sm items-center">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-lg px-5 py-2.5 text-sm font-medium inline-block"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          {/* Social icons — always visible */}
          <div className="hidden md:flex">
            <ul className="flex gap-6 text-sm items-center">
              <li><a href="https://wa.me/+2348167519762" aria-label="WhatsApp" target="_blank" rel="noreferrer"><RiWhatsappFill /></a></li>
              <li><a href="linkedin.com/in/oluwatunmisesalam" aria-label="Email"><IoLogoLinkedin /></a></li>
              <li><a href="https://github.com/MatthewSalam" aria-label="X / Twitter" target="_blank" rel="noreferrer"><VscGithub /></a></li>
              <li><ThemeToggle /></li>
              <li>
                <Link
                  href="/#contact"
                  className={`rounded-full bg-black font-semibold text-white transition-all duration-300 hover:opacity-80 dark:bg-white dark:text-black ${
                    scrolled ? "px-5 py-2 text-xs" : "px-6 py-3 text-sm"
                  }`}
                >
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Theme toggle + hamburger — mobile only */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              className="text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile menu modal */}
      <div className={`fixed inset-0 bg-white dark:bg-[#0a0a0a] text-black dark:text-white z-40 flex flex-col items-center justify-center gap-10 transition-all duration-300 md:hidden ${
        menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>

        <nav>
          <ul className="flex flex-col items-center gap-8 text-lg font-medium">
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
            <li><Link href="/#contact" onClick={() => setMenuOpen(false)}>Get In Touch</Link></li>
            <li><a href={RESUME_URL} onClick={() => setMenuOpen(false)}>Resume</a></li>
          </ul>
        </nav>

        {/* Social icons in mobile menu */}
        <ul className="flex gap-8 text-xl">
          <li><a href="https://wa.me/+2348167519762" target="_blank" rel="noreferrer"><RiWhatsappFill /></a></li>
          <li><a href="linkedin.com/in/oluwatunmisesalam"><IoLogoLinkedin /></a></li>
          <li><a href="https://github.com/MatthewSalam" target="_blank" rel="noreferrer"><VscGithub /></a></li>
        </ul>
      </div>
    </>
  )
}
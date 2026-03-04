"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Video", href: "#video" },
];

const SKILLS = [
  { name: "React Native", color: "#61dafb" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "React", color: "#61dafb" },
  { name: "Expo", color: "#a855f7" },
  { name: "JavaScript", color: "#f7df1e" },
  { name: "Zustand", color: "#f97316" },
  { name: "Git", color: "#f05032" },
  { name: "CI/CD", color: "#a855f7" },
  { name: "REST APIs", color: "#10b981" },
  { name: "Redux", color: "#764abc" },
  { name: "React Query", color: "#ff4154" },
  { name: "App Store / Play Store", color: "#a855f7" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "skills", "experience", "video"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="relative overflow-x-hidden" style={{ background: "#0d0d1a" }}>

      {/* Background glow blobs */}
      <div style={{ position: "absolute", width: 500, height: 500, background: "#7e22ce", borderRadius: "9999px", filter: "blur(120px)", opacity: 0.3, top: "0%", left: "-10%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 400, height: 400, background: "#a855f7", borderRadius: "9999px", filter: "blur(120px)", opacity: 0.2, top: "55%", right: "-8%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 300, height: 300, background: "#581c87", borderRadius: "9999px", filter: "blur(100px)", opacity: 0.25, bottom: "5%", left: "35%", pointerEvents: "none" }} />

      {/* Navbar */}
      <nav className="sticky top-0 z-20 flex items-center justify-between px-5 py-3 md:px-16" style={{ background: "rgba(13,13,26,0.85)", backdropFilter: "blur(12px)" }}>
        <span className="font-bold text-white tracking-tight text-base md:text-lg">Manuel Bolla</span>
        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8 text-base">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                className="transition-colors relative"
                style={{ color: isActive ? "#a855f7" : "#a1a1aa" }}
              >
                {label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-purple-500" />
                )}
              </a>
            );
          })}
          <a
            href="https://calendly.com/manuelbolla/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-purple-500 px-4 py-1.5 text-purple-400 hover:bg-purple-500 hover:text-white transition-colors"
          >
            Book a Call
          </a>
        </div>
        {/* Mobile: just book a call button */}
        <a
          href="https://calendly.com/manuelbolla/15min"
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden rounded-md border border-purple-500 px-3 py-1 text-sm text-purple-400 hover:bg-purple-500 hover:text-white transition-colors"
        >
          Book a Call
        </a>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative z-10 flex flex-col-reverse items-center justify-center gap-10 px-6 py-16 text-center md:flex-row md:justify-between md:px-16 md:text-left lg:px-28"
        style={{ minHeight: "100dvh" }}
      >
        {/* Left: text */}
        <div className="flex-1">
          <p className="text-base md:text-lg tracking-widest uppercase text-white font-semibold">
            &ldquo;A goal without a plan is just a wish&rdquo;
          </p>
          <h1 className="mt-3 font-bold text-white text-2xl md:text-4xl lg:text-5xl">
            <span className="text-purple-400">Manuel Bolla Agrelo</span>
          </h1>
          <div className="mt-4 flex items-center justify-center gap-3 md:justify-start">
            <p className="font-medium text-purple-300 text-base md:text-lg lg:text-xl">
              React Native Developer
            </p>
            <span className="rounded-full bg-purple-600/20 border border-purple-500/40 px-3 py-1 text-sm font-semibold text-purple-300">
              4+ YOE
            </span>
          </div>
          <p className="mt-2 text-zinc-400 text-base md:text-lg">
            TypeScript &middot; Expo &middot; Buenos Aires, Argentina
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-base font-medium md:justify-start">
            <a
              href="https://www.linkedin.com/in/manuel-bolla-agrelo/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-purple-600 px-6 py-2.5 text-white hover:bg-purple-500 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Manubolla"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-600 px-6 py-2.5 text-zinc-300 hover:border-purple-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="/portfolio/manuel-bolla-agrelo-resume.pdf"
              download
              className="rounded-full border border-purple-500 px-6 py-2.5 text-purple-400 hover:bg-purple-500 hover:text-white transition-colors flex items-center gap-2"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Resume
            </a>
          </div>
        </div>

        {/* Right: photo */}
        <div className="relative flex-shrink-0">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle at 60% 40%, rgba(168,85,247,0.15) 0%, transparent 70%)",
              transform: "scale(1.15)",
            }}
          />
          <div className="overflow-hidden rounded-full mx-auto" style={{ width: "min(320px, 72vw)", height: "min(320px, 72vw)", boxShadow: "0 0 0 2px #a855f7" }}>
            <Image
              src="/portfolio/profile.jpeg"
              alt="Manuel Bolla Agrelo"
              width={320}
              height={320}
              className="object-cover w-full h-full"
              style={{ objectPosition: "center 10%", transform: "scale(1.2)", transformOrigin: "center 30%" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* About / Intro */}
      <section
        id="about"
        className="relative z-10 px-6 py-16 md:px-16 lg:px-28"
      >
        <h2 className="text-center font-semibold tracking-wide text-white text-2xl md:text-3xl lg:text-4xl">
          Let Me{" "}
          <span className="text-purple-400">Introduce</span>{" "}
          Myself
        </h2>

        <div className="mx-auto mt-10 max-w-3xl space-y-5 leading-relaxed text-zinc-300 text-base md:text-lg">
          <p>
            I&apos;m a <span className="font-semibold text-purple-400">TypeScript React Native developer</span> who
            enjoys building apps that feel great to use. I like getting involved beyond just coding —
            thinking about how the product works, how people use it, and how it can be better.
          </p>
          <p>
            I&apos;m fluent in{" "}
            <span className="font-semibold italic text-purple-400">
              TypeScript, React Native, React, and Expo
            </span>
            .
          </p>
          <p>
            My interests include building{" "}
            <span className="font-semibold italic text-purple-400">
              social, health &amp; fitness, fintech, and travel apps
            </span>{" "}
            that improve everyday life.
          </p>
          <p>
            I&apos;m interested in product-driven companies that focus on quality, innovation, and user
            experience — teams where I can contribute to the product beyond just shipping features.
          </p>
        </div>

      </section>

      {/* Skills */}
      <section id="skills" className="relative z-10 px-6 py-16 md:px-16 lg:px-28">
        <h2 className="text-center font-bold uppercase tracking-widest text-white text-2xl md:text-3xl lg:text-4xl">
          Professional <span className="text-purple-400">Skills</span>
        </h2>
        <p className="mt-3 text-center text-zinc-500 text-sm md:text-base">Technologies I work with</p>

        <div className="mx-auto mt-12 max-w-3xl flex flex-wrap justify-center gap-3">
          {SKILLS.map(({ name, color }) => (
            <span
              key={name}
              className="rounded-full border px-5 py-2 text-sm md:text-base font-medium transition-all hover:scale-105"
              style={{
                borderColor: color + "55",
                color: color,
                background: color + "11",
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="relative z-10 px-6 py-16 md:px-16 lg:px-28">
        <h2 className="text-center font-bold uppercase tracking-widest text-white text-2xl md:text-3xl lg:text-4xl">
          Work <span className="text-purple-400">Experience</span>
        </h2>

        <div className="mx-auto mt-12 max-w-3xl space-y-10">

          {/* Nicasource */}
          <div className="relative border-l-2 border-zinc-800 pl-6">
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-purple-500 bg-[#0d0d1a]" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-semibold text-white text-lg md:text-xl">React Native Developer</h3>
                <p className="text-purple-400 text-base md:text-lg">Nicasource</p>
              </div>
              <span className="text-zinc-500 text-sm md:text-base">2021 — 2025 · United States</span>
            </div>
            <ul className="mt-4 space-y-3 leading-7 text-zinc-400 text-base md:text-lg list-disc list-inside">
              <li>Developed and maintained multiple client applications using React Native, React.js, Expo, and TypeScript.</li>
              <li>Played a key role in building an employee scheduling system from 0 to 1 — serving over <span className="font-bold text-white">100k users</span> and helping the company surpass <span className="font-bold text-purple-300">$20M ARR</span>.</li>
              <li>Defined the app&apos;s technical architecture, introducing folder structure and separation of concerns that improved scalability and developer onboarding.</li>
              <li>Owned the full mobile release process — CI/CD pipelines, Google Play and App Store publishing.</li>
              <li>Reduced app initial load time by <span className="font-bold text-purple-300">70%</span> by identifying and fixing key performance bottlenecks.</li>
              <li>Built data visualization graphs to monitor sensor device information, reference points, and trends.</li>
            </ul>
          </div>

          {/* BINIT */}
          <div className="relative border-l-2 border-zinc-800 pl-6">
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-purple-500 bg-[#0d0d1a]" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-semibold text-white text-lg md:text-xl">React Native Developer</h3>
                <p className="text-purple-400 text-base md:text-lg">BINIT</p>
              </div>
              <span className="text-zinc-500 text-sm md:text-base">Feb 2021 — Nov 2021 · Argentina</span>
            </div>
            <ul className="mt-4 space-y-3 leading-7 text-zinc-400 text-base md:text-lg list-disc list-inside">
              <li>Contributed to &quot;Keko Carsharing&quot; mobile app using React Native, Expo, and TypeScript.</li>
              <li>Owned the Google Maps integration — custom clustering system, interactive map points, and in-map car booking.</li>
              <li>Led migration to a newer React Native version, improving performance by <span className="font-bold text-purple-300">20%</span>.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Video */}
      <section id="video" className="relative z-10 px-6 py-16 md:px-16 lg:px-28">
        <h2 className="text-center font-bold uppercase tracking-widest text-white text-2xl md:text-3xl lg:text-4xl">
          Watch My <span className="text-purple-400">Introduction</span>
        </h2>
        <p className="mt-3 text-center text-zinc-500 text-sm md:text-base">A quick look at who I am and how I work</p>
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingBottom: "56.25%", boxShadow: "0 0 0 1px rgba(168,85,247,0.3)" }}>
            <iframe
              src="https://www.youtube.com/embed/xevLOKA0mFQ"
              title="Manuel Bolla Agrelo — Presentation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-purple-500 bg-[#0d0d1a] text-purple-400 shadow-lg hover:bg-purple-500 hover:text-white transition-colors"
          aria-label="Back to top"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-800 py-10 text-center">
        <div className="flex justify-center gap-5 mb-4">
          <a href="https://github.com/Manubolla" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-colors hover:border-purple-500 hover:text-purple-400">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/manuel-bolla-agrelo/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-colors hover:border-purple-500 hover:text-purple-400">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="mailto:manubolla17@gmail.com" aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-colors hover:border-purple-500 hover:text-purple-400">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
        <p className="text-zinc-600 text-sm md:text-base">Designed &amp; built by Manuel Bolla Agrelo</p>
      </footer>

    </div>
  );
}

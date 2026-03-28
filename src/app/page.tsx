"use client";

import { useState } from "react";

function EuroLabel({
  project,
  year,
  techStack,
  aiUsed,
}: {
  project: string;
  year: string;
  techStack: string[];
  aiUsed: string;
}) {
  return (
    <div className="border border-border text-[11px] leading-snug w-fit mb-6">
      <div className="flex">
        <div className="px-3 py-1.5 border-r border-border">
          <span className="font-medium uppercase tracking-[0.08em] text-secondary">
            Project
          </span>
        </div>
        <div className="px-3 py-1.5 font-medium">{project}</div>
        <div className="px-3 py-1.5 border-l border-border font-medium">
          {year}
        </div>
      </div>
      <div className="border-t border-border px-3 py-1.5">
        <span className="font-medium uppercase tracking-[0.08em] text-secondary">
          Tech Stack
        </span>
        <div className="mt-0.5">{techStack.join(" · ")}</div>
      </div>
      <div className="border-t border-border px-3 py-1.5">
        <span className="font-medium uppercase tracking-[0.08em] text-accent-terra">
          AI Used
        </span>
        <div className="mt-0.5">{aiUsed}</div>
      </div>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block border border-border px-2 py-0.5 text-[11px] font-medium uppercase tracking-[0.08em] text-secondary">
      {children}
    </span>
  );
}

const card =
  "bg-[#FFFFFF] dark:bg-[#221F1B] shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)]";

export default function Home() {
  const [emailRevealed, setEmailRevealed] = useState(false);

  return (
    <div className="max-w-[1120px] mx-auto px-6 sm:px-8 lg:px-16">
      {/* Header */}
      <header className={`${card} flex items-center justify-between py-4 px-6 sm:px-8 mt-6`}>
        <span className="text-sm font-semibold tracking-[-0.02em]">
          lizm.dev
        </span>
        <nav className="flex items-center gap-6 text-[11px] font-medium uppercase tracking-[0.08em] text-secondary">
          <a href="#work" className="hover:text-foreground">
            Work
          </a>
          <a href="#about" className="hover:text-foreground">
            About
          </a>
          <a href="#contact" className="hover:text-foreground">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-20 pb-20 sm:pt-28 sm:pb-28">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em] leading-tight">
          LIZ MYERS
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-secondary max-w-[680px] leading-relaxed">
          I build things that show people what&apos;s possible.
        </p>
        <p className="mt-3 text-sm sm:text-base text-secondary">
          Creative Technologist · Developer Advocate · 5 Languages
        </p>
        <div className="mt-4 flex items-center gap-3 text-sm text-secondary">
          <span className="text-foreground font-medium">🇬🇧 EN</span>
          <span>·</span>
          <span title="Coming soon">🇩🇪 DE</span>
          <span>·</span>
          <span title="Coming soon">🇫🇷 FR</span>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="pb-20 sm:pb-28">
        <h2 className="text-xs font-medium uppercase tracking-[0.08em] text-secondary mb-10">
          Selected Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Card 1: Blue Plaques */}
          <div className="bg-[#FFFFFF] dark:bg-[#221F1B] p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)]">
            <EuroLabel
              project="Blue Plaques"
              year="2026"
              techStack={["React Native", "Expo SDK 55"]}
              aiUsed="Claude API + AI curation"
            />
            <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] mb-3">
              London&apos;s history, made alive.
            </h3>
            <p className="text-secondary leading-relaxed max-w-[480px] mb-4">
              A mobile guide to London&apos;s 1,000+ blue heritage plaques —
              blending location awareness with AI-curated stories. Evolved from
              a simple map to a rich discovery experience across three major
              versions.
            </p>
            <p className="text-sm font-medium text-accent-blue mb-4">
              30,000+ LinkedIn impressions on the concept alone
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Tag>React Native</Tag>
              <Tag>Expo</Tag>
              <Tag>AI</Tag>
              <Tag>iOS</Tag>
            </div>
            <div className="flex gap-4 text-sm">
              <a
                href="https://github.com/LizMyers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue font-medium hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/lizmyers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue font-medium hover:underline"
              >
                LinkedIn post
              </a>
            </div>
          </div>

          {/* Card 2: LingoWise */}
          <div className="bg-[#FFFFFF] dark:bg-[#221F1B] p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)]">
            <EuroLabel
              project="LingoWise Ecosystem"
              year="2024–2026"
              techStack={[
                "React Native",
                "Chrome Extensions",
                "AppScript",
              ]}
              aiUsed="Gemini API"
            />
            <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] mb-3">
              One language learning problem. Five surfaces.
            </h3>
            <p className="text-secondary leading-relaxed max-w-[480px] mb-4">
              A flywheel of language learning tools — mobile app, Chrome
              extension, Google Workspace add-ons — all connected by the insight
              that learning sticks when it meets you where you already are.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Tag>React Native</Tag>
              <Tag>Chrome Extension</Tag>
              <Tag>Gemini</Tag>
              <Tag>AppScript</Tag>
            </div>
            <div className="flex gap-4 text-sm">
              <a
                href="https://lingowise.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue font-medium hover:underline"
              >
                lingowise.ai
              </a>
              <a
                href="https://chromewebstore.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue font-medium hover:underline"
              >
                LingoClip on Chrome Store
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="pb-20 sm:pb-28">
        <h2 className="text-xs font-medium uppercase tracking-[0.08em] text-secondary mb-10">
          About
        </h2>
        <div className={`${card} p-6 sm:p-8 max-w-[680px]`}>
          <p className="text-lg sm:text-xl leading-relaxed text-secondary italic">
            RISD-trained. I learned to set hot metal type and why it was called
            leading. Now I build AI products that help people learn and connect —
            in five languages, across two continents.
          </p>
          <div className="mt-10 flex items-center gap-8">
            {["Amazon", "Google", "Microsoft"].map((company) => (
              <span
                key={company}
                className="text-sm font-medium uppercase tracking-[0.08em] text-secondary/50"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="pb-24 sm:pb-32">
        <h2 className="text-xs font-medium uppercase tracking-[0.08em] text-secondary mb-10">
          Contact
        </h2>
        <div className={`${card} p-6 sm:p-8 min-h-[240px]`}>
        <div className="flex flex-col gap-3 text-sm sm:text-base">
          <div>
            <span className="text-secondary mr-3">Email</span>
            {emailRevealed ? (
              <a
                href="mailto:liz@lizm.dev"
                className="text-accent-blue font-medium hover:underline"
              >
                liz@lizm.dev
              </a>
            ) : (
              <button
                onClick={() => setEmailRevealed(true)}
                className="text-accent-blue font-medium hover:underline cursor-pointer"
              >
                Reveal
              </button>
            )}
          </div>
          <div>
            <span className="text-secondary mr-3">LinkedIn</span>
            <a
              href="https://linkedin.com/in/lizmyers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-blue font-medium hover:underline"
            >
              linkedin.com/in/lizmyers
            </a>
          </div>
          <div>
            <span className="text-secondary mr-3">GitHub</span>
            <a
              href="https://github.com/LizMyers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-blue font-medium hover:underline"
            >
              github.com/LizMyers
            </a>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}

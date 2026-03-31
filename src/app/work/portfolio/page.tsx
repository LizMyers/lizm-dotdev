import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Simple Portfolio — Liz Myers",
  description:
    "A minimal, component-driven portfolio built with Next.js and Tailwind.",
};

export default function Portfolio() {
  return (
    <>
      {/* Hero banner */}
      <section className="bg-placeholder">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1
            className="font-bold tracking-[-0.02em]"
            style={{ fontSize: "var(--text-2xl)" }}
          >
            Simple Portfolio
          </h1>
          <p className="text-muted mt-2" style={{ fontSize: "var(--text-sm)" }}>
            HERO
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <Link
          href="/#work"
          className="text-muted hover:text-foreground transition-colors inline-block mb-12"
          style={{ fontSize: "var(--text-sm)" }}
        >
          &larr; Back to work
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12">
          {/* Main content — 2/3 */}
          <div className="space-y-12">
            <div className="space-y-4" style={{ fontSize: "var(--text-base)" }}>
              <p>
                This site. A minimal portfolio built with Next.js and Tailwind CSS,
                designed for clarity and speed. Component-driven architecture with
                shared Header and Footer, fluid typography, and system-aware dark mode.
              </p>
              <p className="text-muted">
                Built entirely with Claude Code and Figma — from wireframe to
                deployment on Vercel.
              </p>
            </div>

            <div className="space-y-8">
              <div className="aspect-video bg-placeholder rounded-sm" />
              <div className="aspect-video bg-placeholder rounded-sm" />
            </div>
          </div>

          {/* Sidebar — 1/3 */}
          <aside className="space-y-8">
            <div className="border border-border rounded-sm p-6">
              <h3 className="font-medium" style={{ fontSize: "var(--text-sm)" }}>
                Stack
              </h3>
              <p className="text-muted mt-1" style={{ fontSize: "var(--text-xs)" }}>
                Next.js, Tailwind CSS, TypeScript, Vercel
              </p>
            </div>

            <div className="border border-border rounded-sm p-6">
              <h3 className="font-medium" style={{ fontSize: "var(--text-sm)" }}>
                Design
              </h3>
              <p className="text-muted mt-1" style={{ fontSize: "var(--text-xs)" }}>
                Figma wireframes, Space Grotesk, black &amp; white with
                system-aware dark mode
              </p>
            </div>

            <div className="space-y-3" style={{ fontSize: "var(--text-sm)" }}>
              <a
                href="https://github.com/LizMyers/lizm-dotdev"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-foreground hover:opacity-70 transition-opacity underline"
              >
                GitHub
              </a>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

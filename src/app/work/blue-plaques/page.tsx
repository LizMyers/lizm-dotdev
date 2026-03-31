import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "London Blue Plaques — Liz Myers",
  description:
    "A mobile guide to London's 1,000+ blue heritage plaques, blending location awareness with AI-curated stories.",
};

export default function BluePlaques() {
  return (
    <>
      {/* Hero banner */}
      <section className="bg-placeholder">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1
            className="font-bold tracking-[-0.02em]"
            style={{ fontSize: "var(--text-2xl)" }}
          >
            London Blue Plaques
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
                A mobile guide to London&apos;s 1,000+ blue heritage plaques —
                blending location awareness with AI-curated stories. Built with
                React Native and Expo SDK 55, powered by the Claude API for
                intelligent content curation.
              </p>
              <p className="text-muted">
                Evolved from a simple map to a rich discovery experience across
                three major versions. 30,000+ LinkedIn impressions on the concept
                alone.
              </p>
            </div>

            {/* Content blocks with image placeholders */}
            <div className="space-y-8">
              <div className="aspect-video bg-placeholder rounded-sm" />
              <div className="aspect-video bg-placeholder rounded-sm" />
              <div className="aspect-video bg-placeholder rounded-sm" />
            </div>
          </div>

          {/* Sidebar — 1/3 */}
          <aside className="space-y-8">
            <div className="border border-border rounded-sm p-6">
              <div className="aspect-video bg-placeholder rounded-sm mb-4" />
              <h3 className="font-medium" style={{ fontSize: "var(--text-sm)" }}>
                Curated walk with Claude
              </h3>
              <p className="text-muted mt-1" style={{ fontSize: "var(--text-xs)" }}>
                AI-generated walking routes connecting nearby plaques into themed
                historical journeys.
              </p>
            </div>

            <div className="border border-border rounded-sm p-6">
              <div className="aspect-video bg-placeholder rounded-sm mb-4" />
              <h3 className="font-medium" style={{ fontSize: "var(--text-sm)" }}>
                Local Audio
              </h3>
              <p className="text-muted mt-1" style={{ fontSize: "var(--text-xs)" }}>
                Location-triggered audio narratives that bring each plaque&apos;s
                story to life as you approach.
              </p>
            </div>

            <div className="border border-border rounded-sm p-6">
              <div className="aspect-video bg-placeholder rounded-sm mb-4" />
              <h3 className="font-medium" style={{ fontSize: "var(--text-sm)" }}>
                Multiple Languages
              </h3>
              <p className="text-muted mt-1" style={{ fontSize: "var(--text-xs)" }}>
                Stories available in English, French, and German — making
                London&apos;s history accessible to international visitors.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-3" style={{ fontSize: "var(--text-sm)" }}>
              <a
                href="https://github.com/LizMyers"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-foreground hover:opacity-70 transition-opacity underline"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/lizmyers"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-foreground hover:opacity-70 transition-opacity underline"
              >
                LinkedIn post
              </a>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

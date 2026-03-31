import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LingoWise Ecosystem — Liz Myers",
  description:
    "A flywheel of language learning tools across five surfaces — mobile, Chrome, Google Workspace.",
};

export default function LingoWise() {
  return (
    <>
      {/* Hero banner */}
      <section className="bg-placeholder">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1
            className="font-bold tracking-[-0.02em]"
            style={{ fontSize: "var(--text-2xl)" }}
          >
            LingoWise Ecosystem
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
                A flywheel of language learning tools — mobile app, Chrome
                extension, Google Workspace add-ons — all connected by the insight
                that learning sticks when it meets you where you already are.
              </p>
              <p className="text-muted">
                Built with React Native, Chrome Extensions, and Google AppScript.
                Powered by the Gemini API for intelligent language assistance.
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
                Mobile App
              </h3>
              <p className="text-muted mt-1" style={{ fontSize: "var(--text-xs)" }}>
                Core vocabulary and grammar practice, with spaced repetition and
                contextual examples.
              </p>
            </div>

            <div className="border border-border rounded-sm p-6">
              <div className="aspect-video bg-placeholder rounded-sm mb-4" />
              <h3 className="font-medium" style={{ fontSize: "var(--text-sm)" }}>
                Chrome Extension
              </h3>
              <p className="text-muted mt-1" style={{ fontSize: "var(--text-xs)" }}>
                LingoClip — highlight any text on the web and get instant
                translations with context.
              </p>
            </div>

            <div className="border border-border rounded-sm p-6">
              <div className="aspect-video bg-placeholder rounded-sm mb-4" />
              <h3 className="font-medium" style={{ fontSize: "var(--text-sm)" }}>
                Google Workspace
              </h3>
              <p className="text-muted mt-1" style={{ fontSize: "var(--text-xs)" }}>
                Add-ons for Docs and Sheets that bring language tools into your
                daily workflow.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-3" style={{ fontSize: "var(--text-sm)" }}>
              <a
                href="https://lingowise.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-foreground hover:opacity-70 transition-opacity underline"
              >
                lingowise.ai
              </a>
              <a
                href="https://chromewebstore.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-foreground hover:opacity-70 transition-opacity underline"
              >
                LingoClip on Chrome Store
              </a>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

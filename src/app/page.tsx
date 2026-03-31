import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 items-center">
          <div>
            <p className="text-muted mb-2" style={{ fontSize: "var(--text-xl)" }}>
              Hello I&apos;m
            </p>
            <h1
              className="font-bold tracking-[-0.03em] leading-[1.1]"
              style={{ fontSize: "var(--text-xl)", fontFamily: "var(--font-sans)" }}
            >
              Liz Myers
            </h1>
            <p
              className="text-muted mt-4 max-w-md"
              style={{ fontSize: "var(--text-lg)" }}
            >
              I build stuff that show what&apos;s possible with AI.
            </p>
          </div>
          <div className="aspect-square bg-placeholder rounded-sm" />
        </div>
      </section>

      {/* Latest Work */}
      <section id="work" className="max-w-5xl mx-auto px-6 pb-24">
        <h2
          className="lowercase tracking-[0.2em] text-muted mb-8"
          style={{ fontSize: "var(--text-sm)" }}
        >
          latest work
        </h2>
        <ProjectCard
          title="London Blue Plaques"
          description="A mobile guide to London's 1,000+ heritage plaques, blending location awareness with AI-curated stories."
          href="/work/blue-plaques"
        />
        <ProjectCard
          title="LingoWise Ecosystem"
          description="A flywheel of language-learning tools across five surfaces — mobile, Chrome extension, Google Workspace add-ons."
          href="/work/lingowise"
        />
        <ProjectCard
          title="Simple Portfolio"
          description="This site. A minimal, component-driven portfolio built with Next.js and Tailwind — designed for clarity."
          href="/work/portfolio"
        />
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-6 pb-24">
        <h2
          className="lowercase tracking-[0.2em] text-muted mb-8"
          style={{ fontSize: "var(--text-xs)" }}
        >
          about
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12">
          <div className="space-y-4" style={{ fontSize: "var(--text-sm)" }}>
            <p>
              Creative Technologist and Developer Advocate with a background in
              design (RISD) and a focus on building tools that make emerging
              technology accessible.
            </p>
            <p>
              I work at the intersection of design, code, and AI — prototyping
              experiences that help people understand what&apos;s possible. Fluent
              in English, French, and German, with working knowledge of Italian
              and Spanish.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="aspect-square bg-placeholder rounded-sm" />
            <div className="aspect-square bg-placeholder rounded-sm" />
            <div className="aspect-square bg-placeholder rounded-sm" />
            <div className="aspect-square bg-placeholder rounded-sm" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 pb-24">
        <h2
          className="lowercase tracking-[0.2em] text-muted mb-8"
          style={{ fontSize: "var(--text-xs)" }}
        >
          contact
        </h2>
        <p className="text-muted" style={{ fontSize: "var(--text-sm)" }}>
          Get in touch via the links below, or reach out directly at{" "}
          <a href="mailto:liz@lizm.dev" className="text-foreground hover:opacity-70 transition-opacity underline">
            liz@lizm.dev
          </a>
        </p>
      </section>
    </>
  );
}

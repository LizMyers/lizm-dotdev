import { LinkedinLogo, GithubLogo, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-bold" style={{ fontSize: "var(--text-sm)", fontFamily: "var(--font-syne)" }}>
              Liz Myers
            </p>
            <p className="text-muted mt-1" style={{ fontSize: "var(--text-xs)" }}>
              Creative Technologist, prototyping the future with Claude Code and Figma.
            </p>
          </div>
          <div className="flex gap-5">
            <a
              href="https://linkedin.com/in/lizmyers"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="w-[50px] h-[50px] rounded-full bg-accent text-accent-fg flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <LinkedinLogo size={27} weight="bold" />
            </a>
            <a
              href="https://github.com/LizMyers"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="w-[50px] h-[50px] rounded-full bg-accent text-accent-fg flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <GithubLogo size={27} weight="bold" />
            </a>
            <a
              href="mailto:liz@lizm.dev"
              aria-label="Email"
              title="Email"
              className="w-[50px] h-[50px] rounded-full bg-accent text-accent-fg flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <EnvelopeSimple size={27} weight="bold" />
            </a>
          </div>
        </div>
        <p className="text-muted mt-8" style={{ fontSize: "var(--text-xs)" }}>
          &copy; {new Date().getFullYear()} Liz Myers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

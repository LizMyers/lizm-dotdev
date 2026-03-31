"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-200 ${
        scrolled
          ? "shadow-sm border-b border-border bg-background/90 backdrop-blur-sm"
          : "bg-background"
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-bold tracking-tight"
          style={{ fontSize: "1.65rem", fontFamily: "var(--font-syne)" }}
        >
          Liz Myers
        </Link>
        <nav className="flex gap-8">
          <Link
            href="/#work"
            className="text-muted hover:text-foreground transition-colors lowercase tracking-wide font-semibold"
            style={{ fontSize: "var(--text-sm)" }}
          >
            work
          </Link>
          <Link
            href="/#about"
            className="text-muted hover:text-foreground transition-colors lowercase tracking-wide font-semibold"
            style={{ fontSize: "var(--text-sm)" }}
          >
            about
          </Link>
          <Link
            href="/#contact"
            className="text-muted hover:text-foreground transition-colors lowercase tracking-wide font-semibold"
            style={{ fontSize: "var(--text-sm)" }}
          >
            contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

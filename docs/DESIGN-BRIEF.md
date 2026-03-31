# lizm.dev — Design Brief for Claude Code
*Portfolio site for Liz Myers. Built in Next.js + Tailwind. Deploy to Vercel.*

---

## The Site in One Sentence
A lean, precise, personal portfolio that holds both Swiss engineering discipline and English creative wit — built to land DevRel and community roles in London and Dublin.

---

## Personality
- Swiss grid precision meets English whimsy
- Hot metal type tradition meets AI-era prototyping
- Minimal but warm — engineered but human
- NOT: corporate, template-y, flashy, over-animated

---

## Icons
**Phosphor Icons** — use throughout for UI icons (social links, arrows, tags, etc.)
```
npm install @phosphor-icons/react
```
Consistent weight: `regular` or `bold` only. No mixing weights.

---

## Typography

**Font:** Space Grotesk (Google Fonts)
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
font-family: 'Space Grotesk', sans-serif;
```

- Headings: Space Grotesk 600-700, tight letter-spacing (-0.02em)
- Body: Space Grotesk 400, comfortable line-height (1.6)
- Labels/metadata: Space Grotesk 500, uppercase, wide letter-spacing (0.08em), small size (11-12px)

---

## Colour Palette

```css
--background: #FAF7F2;        /* warm white */
--text-primary: #2C2C2C;      /* charcoal */
--text-secondary: #6B6560;    /* warm grey text */
--accent-blue: #012169;       /* London blue */
--accent-terra: #C4623A;      /* terracotta — used sparingly */
--grid-lines: #D9D3C7;        /* subtle warm grey for grid */
--border: #E8E3DC;            /* light warm border */
```

**Usage rules:**
- London blue: primary CTAs, links, active states, headings on hover
- Terracotta: one unexpected pop per section — a label, a highlight, a dot. Never more than one instance visible at a time.
- Never use pure black or pure white

---

## Background: Graph Paper Grid

Subtle graph paper grid across the entire site. Light, almost invisible — felt more than seen.

```css
background-color: #FAF7F2;
background-image:
  linear-gradient(#D9D3C7 1px, transparent 1px),
  linear-gradient(90deg, #D9D3C7 1px, transparent 1px);
background-size: 24px 24px;
```

The grid should be subtle (opacity ~0.4) — it's structural, not decorative.

---

## Layout

**Grid system:** 12-column, 8px base unit. All spacing in multiples of 8.
**Max width:** 1120px, centered
**Content width:** ~680px for text (readability)
**Margins:** Generous. White space is structure.

---

## Project Cards: Euro Label Style

Each project card has a structured label box in the top corner — like a technical drawing annotation or a Braun product manual detail.

```
┌─────────────────────────────┐
│ PROJECT          │ 2026      │
├──────────────────┤           │
│ TECH STACK       │           │
│ React Native     │           │
│ Expo SDK 55      │           │
├──────────────────┤           │
│ AI USED          │           │
│ Gemini API       │           │
└─────────────────────────────┘
```

Style: thin border (1px, --border colour), monospace or Space Grotesk 500 uppercase labels, small text (11px), charcoal on warm white. The terracotta accent appears here as the project category dot or label.

---

## Site Structure

### Page: Single page (index)

**Section 1: Hero**
```
[Name: LIZ MYERS — large, Space Grotesk 700]
[One-liner: "I build things that show people what's possible."]
[Sub: Creative Technologist · Developer Advocate · 5 Languages]
[Language flags: 🇬🇧 EN · 🇩🇪 DE · 🇫🇷 FR  (EN active, others "coming soon")]
```
- Clean, centered or left-aligned (your call)
- No hero image yet (v1 ships without it)
- Lots of white space below

**Section 2: Work**
Two project cards, side by side on desktop, stacked on mobile.

Card 1: **Blue Plaques**
- Euro label: Project / 2026 / React Native, Expo SDK 55 / Claude API + AI curation
- Headline: "London's history, made alive."
- 2-3 sentences: what it is, the design insight, v1→v3 evolution
- "30,000+ LinkedIn impressions on the concept alone"
- Tags: [React Native] [Expo] [AI] [iOS]
- Links: [GitHub] [LinkedIn post]

Card 2: **LingoWise Ecosystem**
- Euro label: Project / 2024–2026 / React Native, Chrome Extensions, AppScript / Gemini API
- Headline: "One language learning problem. Five surfaces."
- 2-3 sentences: the flywheel story, user research insight
- Links: [lingowise.ai] [LingoClip on Chrome Store]

**Section 3: About**
Short. Three sentences. Then the logo row.

Example copy:
*"RISD-trained. I learned to set hot metal type and why it was called leading. Now I build AI products that help people learn and connect — in five languages, across two continents."*

Logo row (small, greyscale): Amazon · Google · Microsoft

**Section 4: Contact**
```
Email: [reveal on click]
LinkedIn: linkedin.com/in/lizmyers
GitHub: github.com/LizMyers
```

---

## Dark Mode

Dark mode should feel like a lit drafting table at night — not pure black.

```css
--background: #1A1814;        /* very dark warm brown, not black */
--text-primary: #F0EBE3;      /* warm off-white */
--text-secondary: #9E9790;    /* muted warm grey */
--accent-blue: #4A90D9;       /* lighter blue for dark bg */
--accent-terra: #D4784D;      /* slightly lighter terracotta */
--grid-lines: #2C2825;        /* barely visible grid */
--border: #2E2B27;
```

---

## Responsive

- Mobile first
- Single column on mobile, two column on desktop for cards
- Navigation collapses to minimal on mobile (no hamburger — just scroll)
- Graph paper grid scales with viewport

---

## What NOT to do
- No animations on v1 (add later, intentionally)
- No hero image (add when photo/illustration is ready)
- No skill bars, percentages, or progress indicators
- No gradient blobs or glassmorphism
- No Comic Sans (obviously)
- No dark patterns or cookie banners blocking content
- No more than 2 typeface weights visible at once

---

## The Feel Test
Load the page. In 3 seconds a visitor should think:
*"This person is precise, warm, and has something to say."*

Not: *"This is a developer portfolio."*
Not: *"This is a design agency."*

Just: *"I want to know more."*

---

*Build it. Ship it. Iterate in public.*

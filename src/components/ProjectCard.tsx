import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
}

export default function ProjectCard({
  title,
  description,
  href,
}: ProjectCardProps) {
  return (
    <Link href={href} className="block group">
      <article className="py-6 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 items-start">
        <div className="aspect-[2/1] bg-placeholder rounded-sm" />
        <div>
          <h3
            className="font-medium group-hover:opacity-70 transition-opacity"
            style={{ fontSize: "var(--text-lg)" }}
          >
            {title}
          </h3>
          <p
            className="text-muted mt-2 leading-relaxed"
            style={{ fontSize: "var(--text-sm)" }}
          >
            {description}
          </p>
        </div>
      </article>
    </Link>
  );
}

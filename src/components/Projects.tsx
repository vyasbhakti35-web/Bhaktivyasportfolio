import { projects } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section className="section-padding border-t border-[#1e3347]/60">
      <div className="container-narrow">
        <SectionHeading
          id="projects"
          label="Projects"
          title="Data projects & case studies"
          description="End-to-end analytics projects spanning SQL, Python, and interactive Power BI dashboards."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-[#7a9ab5]/50">
          GitHub and Demo links are placeholders — swap in your real URLs in{" "}
          <code className="rounded bg-[#111c2b] px-1.5 py-0.5 font-mono text-[#14b8a6]/70">
            src/data/portfolio.ts
          </code>
        </p>
      </div>
    </section>
  );
}

type Project = (typeof projects)[number];

function ProjectCard({ project }: { project: Project }) {
  const isPlaceholder = (url: string) => url === "#";

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#1e3347] bg-[#111c2b] p-6 transition-all duration-300 hover:border-[#14b8a6]/40 hover:shadow-[0_0_48px_-12px] hover:shadow-[#14b8a6]/25">
      {/* Top accent bar */}
      <div className="mb-5 h-0.5 w-10 rounded-full bg-[#14b8a6]/70 transition-all duration-300 group-hover:w-16" />

      {/* Highlight badge */}
      <span className="mb-3 inline-flex w-fit items-center rounded-full bg-[#14b8a6]/12 px-2.5 py-0.5 text-xs font-medium text-[#14b8a6]">
        {project.highlight}
      </span>

      {/* Title */}
      <h3 className="text-lg font-semibold text-[#e8f4fc] leading-snug">
        {project.title}
      </h3>

      {/* Description or bullet points */}
      {"bullets" in project && project.bullets ? (
        <ul className="mt-3 flex-1 space-y-2">
          {(project.bullets as readonly string[]).map((b) => (
            <li
              key={b.slice(0, 40)}
              className="flex items-start gap-2 text-sm leading-relaxed text-[#7a9ab5]"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#14b8a6]/60" aria-hidden />
              {b}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[#7a9ab5]">
          {project.description}
        </p>
      )}

      {/* Tech tags */}
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md border border-[#1e3347] bg-[#0d1825] px-2.5 py-0.5 text-xs font-medium text-[#7a9ab5] transition-colors group-hover:border-[#14b8a6]/25 group-hover:text-[#e8f4fc]"
          >
            {tag}
          </li>
        ))}
      </ul>

      {/* Action buttons */}
      <div className="mt-6 flex gap-3">
        <a
          href={project.repoUrl}
          className={`relative flex items-center gap-1.5 rounded-lg border px-4 py-2 text-sm transition-all ${
            isPlaceholder(project.repoUrl)
              ? "border-dashed border-[#1e3347]/80 text-[#7a9ab5]/50 cursor-not-allowed"
              : "border-[#1e3347] text-[#7a9ab5] hover:border-[#14b8a6]/50 hover:text-[#14b8a6]"
          }`}
          aria-label={`GitHub repository for ${project.title}${isPlaceholder(project.repoUrl) ? " (placeholder)" : ""}`}
          onClick={isPlaceholder(project.repoUrl) ? (e) => e.preventDefault() : undefined}
          title={isPlaceholder(project.repoUrl) ? "Placeholder — add your GitHub URL in portfolio.ts" : undefined}
        >
          <GitHubIcon />
          GitHub
          {isPlaceholder(project.repoUrl) && (
            <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#1e3347] text-[8px] text-[#7a9ab5]/60">
              ?
            </span>
          )}
        </a>
        <a
          href={project.liveUrl}
          className={`relative flex items-center gap-1.5 rounded-lg border px-4 py-2 text-sm transition-all ${
            isPlaceholder(project.liveUrl)
              ? "border-dashed border-[#14b8a6]/20 bg-[#14b8a6]/05 text-[#14b8a6]/40 cursor-not-allowed"
              : "border-[#14b8a6]/30 bg-[#14b8a6]/10 text-[#14b8a6] hover:bg-[#14b8a6]/20"
          }`}
          aria-label={`Live demo for ${project.title}${isPlaceholder(project.liveUrl) ? " (placeholder)" : ""}`}
          onClick={isPlaceholder(project.liveUrl) ? (e) => e.preventDefault() : undefined}
          title={isPlaceholder(project.liveUrl) ? "Placeholder — add your demo URL in portfolio.ts" : undefined}
        >
          <ExternalLinkIcon />
          Demo
          {isPlaceholder(project.liveUrl) && (
            <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#1e3347] text-[8px] text-[#7a9ab5]/60">
              ?
            </span>
          )}
        </a>
      </div>
    </article>
  );
}

function GitHubIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

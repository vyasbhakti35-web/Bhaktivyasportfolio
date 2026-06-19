import { site } from "../data/portfolio";
import Avatar from "./Avatar";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden data-grid-bg">
      {/* Ambient glow orbs */}
      <div className="glow-orb -left-48 top-10 h-[500px] w-[500px] bg-[#14b8a6]/15" aria-hidden />
      <div className="glow-orb -right-48 bottom-10 h-[400px] w-[400px] bg-[#0ea5e9]/10" aria-hidden />
      <div className="glow-orb left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 bg-[#14b8a6]/08" aria-hidden />

      <div className="section-padding container-narrow relative flex min-h-screen flex-col justify-center pb-20 pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">

          {/* ── Left: text content ── */}
          <div>
            {/* Availability badge */}
            <div className="animate-fade-up animate-delay-1 mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#14b8a6]/30 bg-[#14b8a6]/10 px-4 py-1.5 text-sm text-[#14b8a6]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#14b8a6]" />
              {site.availability}
            </div>

            {/* Name */}
            <h1 className="animate-fade-up animate-delay-2 text-5xl font-semibold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
              Hi, I'm{" "}
              <span className="gradient-text">{site.firstName}</span>
              <span className="text-[#14b8a6]">.</span>
            </h1>

            {/* Role */}
            <p className="animate-fade-up animate-delay-3 mt-3 text-2xl font-medium text-[#14b8a6] md:text-3xl">
              {site.title}
            </p>

            {/* Tagline */}
            <p className="animate-fade-up animate-delay-4 mt-5 max-w-2xl text-lg leading-relaxed text-[#7a9ab5] md:text-xl">
              {site.tagline}
            </p>

            {/* CTA buttons */}
            <div className="animate-fade-up animate-delay-5 mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#14b8a6] px-7 py-3.5 text-sm font-semibold text-[#070d14] transition-all hover:scale-[1.03] hover:shadow-[0_0_28px_-4px] hover:shadow-[#14b8a6]/60 active:scale-[0.98]"
              >
                View Projects
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#1e3347] px-7 py-3.5 text-sm font-medium transition-all hover:border-[#14b8a6]/50 hover:text-[#14b8a6]"
              >
                Get in Touch
              </a>
              <a
                href={site.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full border border-[#1e3347] px-7 py-3.5 text-sm font-medium text-[#7a9ab5] transition-all hover:border-[#14b8a6]/50 hover:text-[#14b8a6]"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
                </svg>
                Resume
              </a>
            </div>

            {/* Social links */}
            <div className="animate-fade-up animate-delay-5 mt-14 flex items-center gap-5">
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#7a9ab5] transition-colors hover:text-[#14b8a6]"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
                <span>LinkedIn</span>
              </a>
              <span className="h-4 w-px bg-[#1e3347]" />
              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#7a9ab5] transition-colors hover:text-[#14b8a6]"
                aria-label="GitHub"
              >
                <GitHubIcon />
                <span>GitHub</span>
              </a>
              <span className="h-4 w-px bg-[#1e3347]" />
              <span className="text-sm text-[#7a9ab5]">{site.location}</span>
            </div>
          </div>

          {/* ── Right: photo + analytics snapshot card ── */}
          <div className="animate-fade-up animate-delay-3 flex flex-col items-center gap-5 lg:items-end">
            <Avatar size="lg" />
            <AnalyticsSnapshot />
          </div>

        </div>

        {/* Decorative mini bar chart — bottom corner */}
        <div className="absolute bottom-12 right-0 hidden opacity-15 lg:block" aria-hidden>
          <MiniBarChart />
        </div>
      </div>
    </section>
  );
}

const kpis = [
  { label: "Projects",     value: "4+",   bar: 80, color: "#14b8a6" },
  { label: "Best Accuracy",value: "97%",  bar: 97, color: "#0ea5e9" },
  { label: "Tools Used",   value: "10+",  bar: 72, color: "#14b8a6" },
  { label: "Certifications",value: "3",   bar: 55, color: "#0ea5e9" },
];

function AnalyticsSnapshot() {
  return (
    <div className="w-full max-w-[260px] overflow-hidden rounded-2xl border border-[#1e3347] bg-[#0d1825]/90 backdrop-blur-sm">
      {/* Header bar */}
      <div className="flex items-center gap-2 border-b border-[#1e3347] px-4 py-2.5">
        {/* Fake window dots */}
        <span className="h-2 w-2 rounded-full bg-[#1e3347]" />
        <span className="h-2 w-2 rounded-full bg-[#1e3347]" />
        <span className="h-2 w-2 rounded-full bg-[#1e3347]" />
        <span className="ml-2 text-xs font-medium uppercase tracking-widest text-[#14b8a6]/70">
          Analytics Snapshot
        </span>
      </div>

      {/* KPI rows */}
      <ul className="divide-y divide-[#1e3347]/50 px-4">
        {kpis.map((kpi) => (
          <li key={kpi.label} className="py-2.5">
            <div className="mb-1 flex items-center justify-between gap-3">
              <span className="text-xs text-[#7a9ab5]">{kpi.label}</span>
              <span
                className="text-sm font-bold tabular-nums"
                style={{ color: kpi.color }}
              >
                {kpi.value}
              </span>
            </div>
            {/* Mini progress bar */}
            <div className="h-1 w-full overflow-hidden rounded-full bg-[#1e3347]">
              <div
                className="h-full rounded-full animate-bar-fill"
                style={{
                  width: `${kpi.bar}%`,
                  background: `linear-gradient(90deg, ${kpi.color}99, ${kpi.color})`,
                }}
              />
            </div>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="border-t border-[#1e3347] px-4 py-2 text-center">
        <span className="text-[10px] text-[#7a9ab5]/50 uppercase tracking-widest">
          Open to new opportunities
        </span>
      </div>
    </div>
  );
}

function MiniBarChart() {
  const bars = [40, 65, 50, 80, 55, 90, 70, 95, 60, 85];
  return (
    <div className="flex items-end gap-1.5 pr-8">
      {bars.map((h, i) => (
        <div key={i} className="w-5 rounded-t-sm bg-[#14b8a6]" style={{ height: `${h}px` }} />
      ))}
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

import { education } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Education() {
  const primary = education.filter((e) => !e.secondary);
  const secondary = education.filter((e) => e.secondary);

  return (
    <section className="section-padding border-t border-[#1e3347]/60">
      <div className="container-narrow">
        <SectionHeading
          id="education"
          label="Education"
          title="Academic background"
          description="The foundation behind my analytical mindset and technical skills."
        />

        <ol className="relative mt-12 space-y-0 border-l-2 border-[#1e3347] pl-8">
          {primary.map((edu, i) => (
            <li
              key={edu.institution + edu.degree}
              className="relative pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <span
                className={`absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                  edu.current
                    ? "border-[#14b8a6] bg-[#14b8a6]/20"
                    : "border-[#1e3347] bg-[#070d14]"
                }`}
                aria-hidden
              >
                {edu.current && (
                  <span className="h-2 w-2 rounded-full bg-[#14b8a6] animate-pulse" />
                )}
              </span>

              <div className="rounded-2xl border border-[#1e3347] bg-[#111c2b] p-6 transition-all hover:border-[#14b8a6]/30">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-[#e8f4fc] leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="mt-1 font-medium text-[#14b8a6]">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="text-right">
                    <time className="rounded-full border border-[#1e3347] bg-[#0d1825] px-3 py-1 text-sm text-[#7a9ab5]">
                      {edu.period}
                    </time>
                    <p className="mt-2 text-sm text-[#7a9ab5]">{edu.location}</p>
                  </div>
                </div>

                {edu.current && (
                  <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#14b8a6]/12 px-3 py-1 text-xs font-medium text-[#14b8a6]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#14b8a6]" />
                    Currently enrolled
                  </span>
                )}

                <p className="mt-4 text-sm leading-relaxed text-[#7a9ab5]">
                  {edu.description}
                </p>
              </div>

              {i < primary.length - 1 && <span className="sr-only">Next degree</span>}
            </li>
          ))}
        </ol>

        {/* Secondary / additional credentials */}
        {secondary.length > 0 && (
          <div className="mt-4 pl-8">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-[#7a9ab5]/60">
              Additional credentials
            </p>
            {secondary.map((edu) => (
              <div
                key={edu.institution + edu.degree}
                className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#1e3347]/60 bg-[#111c2b]/50 px-5 py-4"
              >
                <div>
                  <p className="text-sm font-medium text-[#e8f4fc]/70">{edu.degree}</p>
                  <p className="mt-0.5 text-xs text-[#7a9ab5]">
                    {edu.institution} · {edu.location}
                  </p>
                </div>
                <time className="text-xs text-[#7a9ab5]/60">{edu.period}</time>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

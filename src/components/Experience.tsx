import { experience } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section className="section-padding border-t border-[#1e3347]/60 bg-[#0d1825]/40">
      <div className="container-narrow">
        <SectionHeading
          id="experience"
          label="Experience"
          title="Where I've worked"
          description="Professional roles where I applied data and technical skills in real-world settings."
        />

        <ol className="relative mt-12 space-y-0 border-l-2 border-[#1e3347] pl-8">
          {experience.map((job, i) => (
            <li key={job.role + job.company} className="relative pb-12 last:pb-0">
              {/* Timeline dot */}
              <span
                className={`absolute -left-[41px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                  i === 0
                    ? "border-[#14b8a6] bg-[#14b8a6]/20"
                    : "border-[#1e3347] bg-[#070d14]"
                }`}
                aria-hidden
              >
                {i === 0 && (
                  <span className="h-2 w-2 rounded-full bg-[#14b8a6]" />
                )}
              </span>

              <article className="rounded-2xl border border-[#1e3347] bg-[#111c2b] p-6 transition-all duration-300 hover:border-[#14b8a6]/30 hover:shadow-[0_0_32px_-10px] hover:shadow-[#14b8a6]/15">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-[#e8f4fc] leading-snug">
                      {job.role}
                    </h3>
                    <p className="mt-1 font-medium text-[#14b8a6]">{job.company}</p>
                  </div>
                  <time className="rounded-full border border-[#1e3347] bg-[#0d1825] px-3 py-1 text-sm text-[#7a9ab5]">
                    {job.period}
                  </time>
                </div>

                {/* Bullet points */}
                <ul className="mt-4 space-y-2">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet.slice(0, 32)}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-[#7a9ab5]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#14b8a6]/60" aria-hidden />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

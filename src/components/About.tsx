import { about } from "../data/portfolio";
import Avatar from "./Avatar";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section className="section-padding border-t border-[#1e3347]/60">
      <div className="container-narrow">
        <SectionHeading
          id="about"
          label="About Me"
          title="Turning data into decisions"
          description="A quick look at who I am and what drives my passion for data analytics."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_auto]">
          {/* Bio block */}
          <div className="space-y-6">
            {/* Avatar row — only visible on mobile/tablet (hero shows it on desktop) */}
            <div className="flex items-center gap-5 lg:hidden">
              <Avatar size="md" />
              <div>
                <p className="font-semibold text-[#e8f4fc]">Bhakti Vyas</p>
                <p className="text-sm text-[#14b8a6]">Aspiring Data Analyst</p>
              </div>
            </div>

            <div className="space-y-5 text-[#7a9ab5] leading-relaxed">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>

          {/* KPI stat cards */}
          <div className="flex flex-wrap gap-4 lg:flex-col lg:gap-4">
            {about.highlights.map((h, i) => (
              <KpiCard key={h.label} value={h.value} label={h.label} index={i} />
            ))}
          </div>
        </div>

        {/* Education quick-reference */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          <EduCard
            degree="MS in Computer Science"
            school="Long Island University, Brooklyn"
            period="2024\2026"
            current
          />
          <EduCard
            degree="BE in Computer Engineering"
            school="KJ Institute of Engineering, Gujarat"
            period="2017\2021"
          />
        </div>
      </div>
    </section>
  );
}

/* ── KPI dashboard-style stat widget ── */
function KpiCard({
  value,
  label,
  index,
}: {
  value: string;
  label: string;
  index: number;
}) {
  const sparkHeights = [
    [4, 7, 5, 10, 8, 13, 10, 16],
    [6, 10, 8, 6, 11, 9, 14, 12],
    [8, 6, 12, 9, 14, 11, 16, 14],
  ];
  const bars = sparkHeights[index % 3];

  return (
    <div className="group min-w-[152px] overflow-hidden rounded-2xl border border-[#1e3347] bg-[#111c2b] px-5 py-4 transition-all duration-300 hover:border-[#14b8a6]/40 hover:shadow-[0_0_24px_-8px] hover:shadow-[#14b8a6]/25">
      {/* Sparkline */}
      <div className="mb-3 flex items-end gap-[3px]" aria-hidden>
        {bars.map((h, i) => (
          <div
            key={i}
            className="w-[4px] rounded-t-sm bg-[#14b8a6]/30 transition-colors duration-300 group-hover:bg-[#14b8a6]/55"
            style={{ height: `${h}px` }}
          />
        ))}
      </div>

      {/* Value */}
      <p className="animate-counter-pop text-3xl font-bold text-[#14b8a6]" style={{ animationDelay: `${index * 120}ms` }}>
        {value}
      </p>

      {/* Label */}
      <p className="mt-1 text-sm text-[#7a9ab5]">{label}</p>

      {/* Bottom accent line */}
      <div className="mt-3 h-[2px] w-6 rounded-full bg-[#14b8a6]/30 transition-all duration-300 group-hover:w-full group-hover:bg-[#14b8a6]/20" />
    </div>
  );
}

/* ── Education quick-reference card ── */
function EduCard({
  degree,
  school,
  period,
  current,
}: {
  degree: string;
  school: string;
  period: string;
  current?: boolean;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-[#1e3347] bg-[#111c2b] p-5 transition-all hover:border-[#14b8a6]/30">
      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#14b8a6]/15 text-[#14b8a6]">
        <GraduationIcon />
      </div>
      <div className="min-w-0">
        <p className="font-medium text-[#e8f4fc]">{degree}</p>
        <p className="mt-0.5 text-sm text-[#7a9ab5]">
          {school}&nbsp;&middot;&nbsp;{period}
        </p>
        {current && (
          <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-[#14b8a6]/10 px-2 py-0.5 text-[10px] font-medium text-[#14b8a6]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#14b8a6]" />
            Enrolled
          </span>
        )}
      </div>
    </div>
  );
}

function GraduationIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  );
}

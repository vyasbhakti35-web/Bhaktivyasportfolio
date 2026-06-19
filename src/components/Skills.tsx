import { skills } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section className="section-padding border-t border-[#1e3347]/60 bg-[#0d1825]/50 data-scatter-bg">
      <div className="container-narrow">
        <SectionHeading
          id="skills"
          label="Skills"
          title="Tools & technologies"
          description="My data analytics toolkit — from querying databases to building interactive dashboards."
        />

        {/* Line chart motif */}
        <div className="mt-8 mb-10 h-8 overflow-hidden opacity-15" aria-hidden>
          <LineChartMotif />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((group) => (
            <SkillCard key={group.category} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}

type SkillGroup = (typeof skills)[number];

function SkillCard({ group }: { group: SkillGroup }) {
  return (
    <div className="group rounded-2xl border border-[#1e3347] bg-[#111c2b] p-6 transition-all duration-300 hover:border-[#14b8a6]/35 hover:shadow-[0_0_32px_-10px] hover:shadow-[#14b8a6]/20">
      {/* Card header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#14b8a6]/12 text-lg"
            role="img"
            aria-label={group.category}
          >
            {group.icon}
          </span>
          <h3 className="font-semibold text-[#e8f4fc]">{group.category}</h3>
        </div>
        {/* Mini inline bar chart */}
        <MiniGroupBars items={group.items as unknown as { name: string; level: number }[]} />
      </div>

      {/* Proficiency bars */}
      <ul className="space-y-3.5">
        {(group.items as unknown as { name: string; level: number }[]).map((item, i) => (
          <li key={item.name}>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-sm text-[#7a9ab5]">{item.name}</span>
              <span className="text-xs font-medium tabular-nums text-[#14b8a6]">
                {item.level}%
              </span>
            </div>
            {/* Track */}
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#1e3347]">
              {/* Fill */}
              <div
                className={`h-full rounded-full animate-bar-fill bar-delay-${i} bg-gradient-to-r from-[#14b8a6] to-[#0ea5e9]`}
                style={{ width: `${item.level}%` }}
                role="progressbar"
                aria-valuenow={item.level}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={item.name}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MiniGroupBars({ items }: { items: { name: string; level: number }[] }) {
  const max = Math.max(...items.map((i) => i.level));
  return (
    <div className="flex items-end gap-[3px]" aria-hidden>
      {items.map((item) => (
        <div
          key={item.name}
          className="w-[5px] rounded-t-sm bg-[#14b8a6]/40 transition-all duration-300 group-hover:bg-[#14b8a6]/70"
          style={{ height: `${Math.round((item.level / max) * 24)}px` }}
        />
      ))}
    </div>
  );
}

function LineChartMotif() {
  return (
    <svg viewBox="0 0 800 32" className="w-full" preserveAspectRatio="none" fill="none">
      <polyline
        points="0,28 80,16 160,22 240,8 320,18 400,6 480,14 560,4 640,11 720,2 800,9"
        stroke="#14b8a6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="0,30 80,24 160,29 240,16 320,26 400,14 480,22 560,12 640,19 720,10 800,16"
        stroke="#0ea5e9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
      {/* Data points */}
      {[
        [80, 16], [240, 8], [400, 6], [560, 4], [720, 2],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.5" fill="#14b8a6" opacity="0.8" />
      ))}
    </svg>
  );
}

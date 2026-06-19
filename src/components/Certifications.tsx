import { certifications } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section className="section-padding border-t border-[#1e3347]/60 bg-[#0d1825]/40">
      <div className="container-narrow">
        <SectionHeading
          id="certifications"
          label="Certifications"
          title="Credentials & training"
          description="Verified certifications from industry-recognized programs."
        />

        <ul className="mt-10 flex flex-wrap gap-4">
          {certifications.map((cert) => (
            <li
              key={cert.title}
              className="group flex items-center gap-4 rounded-2xl border border-[#1e3347] bg-[#111c2b] px-6 py-5 transition-all duration-300 hover:border-[#14b8a6]/40 hover:shadow-[0_0_28px_-8px] hover:shadow-[#14b8a6]/20"
            >
              {/* Icon circle */}
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#14b8a6]/12 text-2xl transition-colors group-hover:bg-[#14b8a6]/20"
                role="img"
                aria-label={cert.title}
              >
                {cert.icon}
              </span>

              {/* Text */}
              <div>
                <p className="font-semibold text-[#e8f4fc] leading-snug">{cert.title}</p>
                <div className="mt-1 flex items-center gap-2">
                  <CiscoIcon />
                  <span className="text-sm text-[#7a9ab5]">{cert.issuer}</span>
                </div>
              </div>

              {/* Verified badge */}
              <span className="ml-auto hidden shrink-0 items-center gap-1 rounded-full bg-[#14b8a6]/10 px-2.5 py-1 text-xs font-medium text-[#14b8a6] sm:flex">
                <CheckIcon />
                Verified
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function CiscoIcon() {
  return (
    <svg className="h-4 w-10 text-[#7a9ab5]" viewBox="0 0 80 24" fill="currentColor" aria-hidden>
      <rect x="0" y="8" width="6" height="8" rx="1" opacity="0.5" />
      <rect x="9" y="4" width="6" height="16" rx="1" opacity="0.7" />
      <rect x="18" y="0" width="6" height="24" rx="1" />
      <rect x="27" y="4" width="6" height="16" rx="1" opacity="0.7" />
      <rect x="36" y="8" width="6" height="8" rx="1" opacity="0.5" />
    </svg>
  );
}

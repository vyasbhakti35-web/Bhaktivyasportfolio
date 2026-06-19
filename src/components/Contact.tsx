import { site } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section className="section-padding border-t border-[#1e3347]/60">
      <div className="container-narrow">
        <div className="relative overflow-hidden rounded-3xl border border-[#1e3347] bg-gradient-to-br from-[#111c2b] via-[#0d1825] to-[#111c2b] p-8 md:p-12">
          {/* Background glow */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#14b8a6]/08 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[#0ea5e9]/08 blur-3xl"
            aria-hidden
          />

          <SectionHeading
            id="contact"
            label="Contact"
            title="Let's connect"
            description="Open to data analyst roles, internships, and collaborations. I'd love to hear from you."
          />

          <div className="relative mt-10 grid gap-8 md:grid-cols-2">
            {/* Left: contact info */}
            <div className="space-y-5">
              <ContactItem
                icon={<EmailIcon />}
                label="Email"
                value={site.email}
                href={`mailto:${site.email}`}
              />
              <ContactItem
                icon={<PhoneIcon />}
                label="Phone"
                value={site.phone}
                href={`tel:${site.phone.replace(/\D/g, "").replace(/^/, "+")}`}
              />
              <ContactItem
                icon={<LinkedInIcon />}
                label="LinkedIn"
                value="bhakti-vyas-a64aa3348"
                href={site.social.linkedin}
                external
              />
            </div>

            {/* Right: mailto CTA */}
            <div className="flex flex-col justify-center gap-4">
              <p className="text-sm text-[#7a9ab5] leading-relaxed">
                The fastest way to reach me is via email. I typically respond
                within 24 hours and am always happy to discuss data, analytics,
                and career opportunities.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#14b8a6] px-6 py-3 text-sm font-semibold text-[#070d14] transition-all hover:scale-[1.03] hover:shadow-[0_0_24px_-4px] hover:shadow-[#14b8a6]/60"
                >
                  <EmailIcon />
                  Send Email
                </a>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#1e3347] px-6 py-3 text-sm font-medium transition-all hover:border-[#14b8a6]/50 hover:text-[#14b8a6]"
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-xl border border-[#1e3347] bg-[#0d1825]/60 p-4 transition-all hover:border-[#14b8a6]/40 hover:bg-[#111c2b]"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#14b8a6]/12 text-[#14b8a6] transition-colors group-hover:bg-[#14b8a6]/20">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs text-[#7a9ab5]">{label}</p>
        <p className="truncate text-sm font-medium text-[#e8f4fc]">{value}</p>
      </div>
    </a>
  );
}

function EmailIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

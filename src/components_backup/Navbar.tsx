import { useEffect, useState } from "react";
import { navLinks, site } from "../data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#1e3347]/70 bg-[#070d14]/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
        {/* Logo / Name */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-[#e8f4fc] transition-colors hover:text-[#14b8a6]"
          onClick={() => setMenuOpen(false)}
        >
          {site.firstName}
          <span className="text-[#14b8a6]">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-sm text-[#7a9ab5] transition-colors hover:text-[#e8f4fc]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume download button */}
        <a
          href={site.resumeUrl}
          download
          className="hidden items-center gap-1.5 rounded-full border border-[#1e3347] bg-[#111c2b] px-5 py-2 text-sm font-medium text-[#e8f4fc] transition-all hover:border-[#14b8a6]/50 hover:text-[#14b8a6] md:inline-flex"
        >
          <DownloadIcon />
          Resume
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#1e3347] md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {menuOpen ? (
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="border-t border-[#1e3347] bg-[#070d14] px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="block text-lg font-medium text-[#e8f4fc] transition-colors hover:text-[#14b8a6]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-[#1e3347]">
              <a
                href={site.resumeUrl}
                download
                className="inline-flex items-center gap-1.5 rounded-full border border-[#1e3347] px-5 py-2 text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                <DownloadIcon />
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function DownloadIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
    </svg>
  );
}

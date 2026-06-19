import { site } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1e3347]/60 px-6 py-8 md:px-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-[#7a9ab5] sm:flex-row">
        <p>
          © {year} <span className="text-[#e8f4fc]">{site.name}</span>. Built with React & Tailwind CSS.
        </p>
        <a
          href="#"
          className="transition-colors hover:text-[#14b8a6]"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

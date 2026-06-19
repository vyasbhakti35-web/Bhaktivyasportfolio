type Props = {
  id: string;
  label: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ id, label, title, description }: Props) {
  return (
    <div id={id} className="scroll-mt-28">
      {/* Label row with mini bar-chart accent */}
      <div className="mb-2 flex items-center gap-3">
        <MiniBarAccent />
        <p className="text-sm font-medium uppercase tracking-widest text-[#14b8a6]">
          {label}
        </p>
      </div>
      <h2 className="font-display text-3xl tracking-tight md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-3 max-w-xl text-[#7a9ab5]">{description}</p>
      )}
    </div>
  );
}

function MiniBarAccent() {
  const bars = [3, 5, 4, 7, 5];
  return (
    <span className="flex items-end gap-[2px]" aria-hidden>
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-[3px] rounded-sm bg-[#14b8a6]"
          style={{ height: `${h * 2}px`, opacity: 0.4 + i * 0.13 }}
        />
      ))}
    </span>
  );
}

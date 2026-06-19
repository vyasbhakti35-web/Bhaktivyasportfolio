import { useState } from "react";
import { site } from "../data/portfolio";

type Size = "sm" | "md" | "lg";

const sizeMap: Record<Size, { outer: string; ring: string; text: string }> = {
  sm: { outer: "h-16 w-16",  ring: "ring-2",  text: "text-lg font-semibold" },
  md: { outer: "h-28 w-28",  ring: "ring-2",  text: "text-3xl font-bold" },
  lg: { outer: "h-48 w-48 md:h-56 md:w-56 lg:h-64 lg:w-64", ring: "ring-[3px]", text: "text-6xl font-bold" },
};

export default function Avatar({ size = "lg" }: { size?: Size }) {
  const [imgError, setImgError] = useState(false);
  const hasPhoto = site.photoUrl && site.photoUrl !== "" && !imgError;
  const { outer, ring, text } = sizeMap[size];

  return (
    <div className={`relative shrink-0 ${outer}`}>
      {/* Decorative teal ring with glow */}
      <div
        className={`absolute inset-0 rounded-full ${ring} ring-[#14b8a6]/50 shadow-[0_0_32px_-4px] shadow-[#14b8a6]/30`}
        aria-hidden
      />
      {/* Subtle outer pulse ring */}
      <div
        className="absolute -inset-1.5 rounded-full border border-[#14b8a6]/15"
        aria-hidden
      />

      {hasPhoto ? (
        <img
          src={site.photoUrl}
          alt={`${site.name} profile photo`}
          className="h-full w-full rounded-full object-cover object-top"
          onError={() => setImgError(true)}
        />
      ) : (
        <div
          className={`flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#14b8a6]/25 to-[#0ea5e9]/15 ${text} text-[#14b8a6]`}
          aria-label={`${site.name} initials`}
        >
          BV
        </div>
      )}
    </div>
  );
}

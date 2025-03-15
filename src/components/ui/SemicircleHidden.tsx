interface SemicircleProps {
  position: "top" | "bottom";
}

export function Semicircle({ position }: SemicircleProps) {
  return (
    <div
      className={`absolute !z-10 ${
        position === "top" ? "-top-6" : "-bottom-6"
      } left-[39%] -translate-x-1/2 h-14 w-14 bg-[var(--background)] rounded-full`}
    />
  );
}

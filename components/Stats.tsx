const STATS = [
  { value: "92%", label: "Visual immersion" },
  { value: "68%", label: "Interaction focus" },
  { value: "3×", label: "Motion depth" },
] as const;

export default function Stats() {
  return (
    <div className="hero-stats-block">
      <p className="flex items-center gap-2.5 font-mono text-[9px] tracking-[0.45em] text-white/35">
        <span className="inline-block size-[3px] bg-ember" />
        EXPERIENCE METRICS
      </p>
      <div className="mt-5 flex items-stretch gap-6 md:gap-12">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="hero-stat border-l border-white/10 pl-4 md:pl-5"
          >
            <p className="text-[clamp(1.5rem,2.6vw,2.4rem)] font-medium leading-none tracking-[0.04em] text-bone">
              {stat.value}
            </p>
            <p className="mt-2.5 font-mono text-[8px] uppercase leading-relaxed tracking-[0.28em] text-white/40 md:text-[9px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

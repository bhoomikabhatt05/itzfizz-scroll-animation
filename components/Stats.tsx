const STATS = [
  { index: "01", value: "92%", label: "Visual immersion" },
  { index: "02", value: "68%", label: "Interaction focus" },
  { index: "03", value: "3×", label: "Motion depth" },
] as const;

export default function Stats() {
  return (
    <div className="hero-stats-block">
      <p className="flex items-center gap-2.5 font-mono text-[9px] tracking-[0.35em] text-white/35">
        <span className="inline-block size-[3px] bg-ember" />
        EXPERIENCE METRICS · DEMO
      </p>
      <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-baseline md:gap-10">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="hero-stat border-t border-white/10 pt-3 md:border-t-0 md:border-l md:pt-0 md:pl-5"
          >
            <p className="flex items-baseline gap-3">
              <span className="font-mono text-[9px] tracking-[0.25em] text-white/30">
                {stat.index}
              </span>
              <span className="text-[clamp(1.35rem,2vw,1.9rem)] leading-none font-medium tracking-[0.03em] text-bone">
                {stat.value}
              </span>
            </p>
            <p className="mt-2 pl-8 font-mono text-[8px] tracking-[0.28em] text-white/40 uppercase md:mt-2.5 md:pl-0 md:text-[9px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

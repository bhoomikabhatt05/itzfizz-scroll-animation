const STATS = [
  { index: "01", value: "92%", label: "Visual immersion" },
  { index: "02", value: "68%", label: "Interaction focus" },
  { index: "03", value: "84%", label: "Scroll response" },
  { index: "04", value: "100%", label: "Transform motion" },
] as const;

export default function Stats() {
  return (
    <div className="hero-stats-block">
      <p className="flex items-center gap-2.5 font-mono text-[9px] tracking-[0.35em] text-white/35">
        <span className="inline-block size-[3px] bg-ember" />
        EXPERIENCE METRICS · DEMO
      </p>
      <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 md:flex md:flex-row md:items-baseline md:gap-10">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="hero-stat border-t border-white/[0.07] pt-3 md:border-t-0 md:border-l md:pt-0 md:pl-5"
          >
            <p className="flex items-baseline gap-3">
              <span className="font-mono text-[9px] tracking-[0.25em] text-white/30">
                {stat.index}
              </span>
              <span className="text-[clamp(1.2rem,1.8vw,1.7rem)] leading-none font-medium tracking-[0.03em] text-bone/85">
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

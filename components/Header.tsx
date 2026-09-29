export default function Header() {
  return (
    <header className="hero-header absolute inset-x-0 top-0 z-30">
      <div className="flex items-center justify-between px-6 py-5 md:px-12 md:py-7">
        <span className="text-[13px] font-semibold tracking-[0.32em] text-bone">
          ITZFIZZ
          <sup className="ml-0.5 text-[8px] font-normal tracking-normal text-white/50">
            ®
          </sup>
        </span>
        <span className="font-mono text-[9px] tracking-[0.45em] text-white/40">
          DIGITAL EXPERIENCE
        </span>
      </div>
      <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent md:inset-x-12" />
    </header>
  );
}

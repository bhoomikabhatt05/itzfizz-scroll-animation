export default function Header() {
  return (
    <header className="hero-header absolute inset-x-0 top-0 z-30">
      <div className="flex items-center justify-between px-6 py-5 md:px-12 md:py-6">
        <span className="text-[12px] font-semibold tracking-[0.3em] text-bone/90">
          ITZFIZZ
          <sup className="ml-0.5 text-[8px] font-normal tracking-normal text-white/40">
            ®
          </sup>
        </span>
        <span className="font-mono text-[9px] tracking-[0.4em] text-white/35">
          DIGITAL EXPERIENCE
        </span>
      </div>
      <div className="hero-header-rule absolute bottom-0 left-6 h-px bg-gradient-to-r from-white/[0.09] via-white/[0.05] to-transparent right-[45%] md:right-[40%] md:left-12" />
    </header>
  );
}

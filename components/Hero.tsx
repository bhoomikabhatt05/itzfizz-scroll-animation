"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import Header from "./Header";
import Stats from "./Stats";
import ScrollCar from "./ScrollCar";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (!prefersReducedMotion) {
        const intro = gsap.timeline({ defaults: { ease: "power4.out" } });
        intro
          .fromTo(
            ".hero-header",
            { opacity: 0, y: -14 },
            { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
            0,
          )
          .fromTo(
            ".hero-eyebrow",
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.9 },
            0.15,
          )
          .fromTo(
            ".hero-line > span",
            { yPercent: 118 },
            { yPercent: 0, duration: 1.15, stagger: 0.1 },
            0.25,
          )
          .fromTo(
            ".hero-copy",
            { opacity: 0, y: 22 },
            { opacity: 1, y: 0, duration: 0.9 },
            0.6,
          )
          .fromTo(
            ".hero-stat",
            { opacity: 0, y: 26 },
            { opacity: 1, y: 0, duration: 0.85, stagger: 0.09 },
            0.75,
          )
          .fromTo(
            ".hero-car-img",
            { opacity: 0, scale: 0.96 },
            { opacity: 1, scale: 1, duration: 1.35, ease: "power3.out" },
            0.55,
          )
          .fromTo(
            ".hero-hint-inner",
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.9 },
            1.05,
          );
      }

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        if (prefersReducedMotion) return;

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.fromTo(
          ".hero-car",
          { x: () => window.innerWidth * 0.02, rotation: 0, scale: 1 },
          {
            x: () => window.innerWidth * -0.02,
            rotation: 0.2,
            scale: 1.01,
            duration: 0.22,
          },
          0,
        )
          .to(
            ".hero-car",
            {
              x: () => window.innerWidth * -1.06,
              rotation: 1.2,
              scale: 1.05,
              duration: 0.78,
            },
            0.22,
          )
          .fromTo(
            ".bg-word",
            { y: 0, opacity: 1 },
            { y: -130, opacity: 0.25, duration: 1 },
            0,
          )
          .fromTo(
            ".glow",
            { opacity: 0.6, scale: 1 },
            { opacity: 0.9, scale: 1.1, duration: 0.6 },
            0,
          )
          .to(
            ".glow",
            { opacity: 0.15, scale: 1.16, duration: 0.4 },
            0.6,
          )
          .fromTo(
            ".circle-geo",
            { rotation: 0, opacity: 1 },
            { rotation: 48, opacity: 0.3, duration: 1 },
            0,
          )
          .fromTo(
            ".bg-tick",
            { opacity: 1 },
            { opacity: 0.2, duration: 0.6 },
            0.4,
          )
          .fromTo(
            ".hero-headline-block",
            { y: 0, opacity: 1 },
            { y: -80, opacity: 0, duration: 0.92 },
            0,
          )
          .fromTo(
            ".hero-copy-block",
            { y: 0, opacity: 1 },
            { y: -40, opacity: 0, duration: 0.8 },
            0,
          )
          .fromTo(
            ".hero-stats-block",
            { y: 0, opacity: 1 },
            { y: -24, opacity: 0, duration: 0.7 },
            0,
          )
          .fromTo(".hero-hint", { opacity: 1 }, { opacity: 0, duration: 0.12 }, 0);
      });

      mm.add("(max-width: 1023.98px)", () => {
        if (prefersReducedMotion) return;

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.fromTo(
          ".hero-car",
          { x: () => window.innerWidth * 0.02, rotation: 0, scale: 1 },
          {
            x: () => window.innerWidth * -0.02,
            rotation: 0.2,
            scale: 1.01,
            duration: 0.22,
          },
          0,
        )
          .to(
            ".hero-car",
            {
              x: () => window.innerWidth * -1.08,
              rotation: 0.8,
              scale: 1.03,
              duration: 0.78,
            },
            0.22,
          )
          .fromTo(
            ".bg-word",
            { y: 0, opacity: 1 },
            { y: -70, opacity: 0.25, duration: 1 },
            0,
          )
          .fromTo(
            ".glow",
            { opacity: 0.6, scale: 1 },
            { opacity: 0.9, scale: 1.08, duration: 0.6 },
            0,
          )
          .to(
            ".glow",
            { opacity: 0.15, scale: 1.12, duration: 0.4 },
            0.6,
          )
          .fromTo(
            ".circle-geo",
            { rotation: 0, opacity: 1 },
            { rotation: 40, opacity: 0.3, duration: 1 },
            0,
          )
          .fromTo(
            ".bg-tick",
            { opacity: 1 },
            { opacity: 0.2, duration: 0.6 },
            0.4,
          )
          .fromTo(
            ".hero-headline-block",
            { y: 0, opacity: 1 },
            { y: -40, opacity: 0, duration: 0.92 },
            0,
          )
          .fromTo(
            ".hero-copy-block",
            { y: 0, opacity: 1 },
            { y: -30, opacity: 0, duration: 0.8 },
            0,
          )
          .fromTo(
            ".hero-stats-block",
            { y: 0, opacity: 1 },
            { y: -18, opacity: 0, duration: 0.7 },
            0,
          )
          .fromTo(".hero-hint", { opacity: 1 }, { opacity: 0, duration: 0.12 }, 0);
      });

      document.fonts?.ready.then(() => ScrollTrigger.refresh());
    },
    { scope: sectionRef, dependencies: [] },
  );

  return (
    <section ref={sectionRef} className="relative h-[220vh]" aria-label="Itzfizz hero">
      <div className="sticky top-0 h-svh overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="bg-tick absolute inset-y-0 left-1/4 w-px bg-white/[0.03]" />
          <div className="bg-tick absolute inset-y-0 left-2/4 w-px bg-white/[0.03]" />
          <div className="bg-tick absolute inset-y-0 left-3/4 w-px bg-white/[0.03]" />
          <div className="bg-word absolute inset-0 flex items-center justify-center">
            <span className="text-outline-faint select-none whitespace-nowrap text-[23vw] font-bold leading-none tracking-tight">
              ITZFIZZ
            </span>
          </div>
          <div className="glow absolute top-1/2 right-[6%] size-[52vw] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,92,41,0.12),transparent_62%)] blur-2xl" />
          <div className="circle-geo absolute top-1/2 right-[10%] size-[40vw] -translate-y-1/2 rounded-full border border-white/[0.05]" />
          <span className="bg-tick absolute top-[29%] left-[7%] size-[2px] rounded-full bg-white/25" />
          <span className="bg-tick absolute top-[64%] left-[12%] size-[2px] rounded-full bg-white/15" />
          <span className="bg-tick absolute top-[24%] right-[30%] size-[2px] rounded-full bg-white/20" />
        </div>

        <Header />

        <div className="absolute top-[16%] left-6 z-10 max-w-[80vw] md:top-[26%] md:left-12">
          <p className="hero-eyebrow flex items-center gap-3 font-mono text-[9px] tracking-[0.45em] text-white/40">
            <span className="inline-block h-px w-8 bg-ember/70" />
            INTERACTIVE SHOWREEL — 2026
          </p>
          <h1 className="hero-headline-block mt-7">
            <span className="hero-line block overflow-hidden py-[0.07em]">
              <span className="block text-[clamp(2.75rem,10vw,9rem)] leading-[1.04] font-medium tracking-[clamp(0.14em,3vw,0.3em)] text-bone">
                WELCOME
              </span>
            </span>
            <span className="hero-line block overflow-hidden py-[0.07em]">
              <span className="text-outline block text-[clamp(2.75rem,10vw,9rem)] leading-[1.04] font-medium tracking-[clamp(0.14em,3vw,0.3em)]">
                ITZFIZZ
              </span>
            </span>
          </h1>
          <div className="hero-copy-block mt-9 max-w-[280px]">
            <p className="hero-copy text-[13px] leading-relaxed text-white/45">
              A scroll-driven study in motion — every pixel tied to the journey.
              Crafted with Next.js, TypeScript and GSAP ScrollTrigger.
            </p>
          </div>
        </div>

        <div className="absolute bottom-[13%] left-6 z-10 md:bottom-[11%] md:left-12">
          <Stats />
        </div>

        <ScrollCar className="hero-car absolute top-[56%] right-[2%] w-[88vw] -translate-y-1/2 will-change-transform md:top-1/2 md:right-[2%] md:w-[56vw] md:max-w-[880px]" />

        <div className="hero-hint absolute bottom-7 left-1/2 z-30 -translate-x-1/2">
          <div className="hero-hint-inner flex flex-col items-center gap-3">
            <span className="font-mono text-[8px] tracking-[0.5em] text-white/35">
              SCROLL TO EXPLORE
            </span>
            <span className="relative block h-9 w-px overflow-hidden bg-white/15">
              <span className="animate-hint absolute inset-x-0 top-0 h-1/2 bg-ember" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

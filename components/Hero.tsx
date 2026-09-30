"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import Header from "./Header";
import Stats from "./Stats";
import ScrollCar from "./ScrollCar";

const SCRUB = 1.5;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const vw = () => window.innerWidth;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (!prefersReducedMotion) {
        const intro = gsap.timeline({ defaults: { ease: "power4.out" } });
        intro
          .fromTo(
            ".hero-header",
            { opacity: 0, y: -14 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
            0,
          )
          .fromTo(
            ".hero-eyebrow",
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.8 },
            0.1,
          )
          .fromTo(
            ".hero-line > span",
            { yPercent: 118 },
            { yPercent: 0, duration: 1.05, stagger: 0.09 },
            0.2,
          )
          .fromTo(
            ".hero-car-img",
            { opacity: 0, scale: 0.94, y: 14, filter: "blur(6px)" },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 1.15,
              ease: "power3.out",
              clearProps: "filter",
            },
            0.35,
          )
          .fromTo(
            ".hero-copy",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8 },
            0.6,
          )
          .fromTo(
            ".hero-stat",
            { opacity: 0, y: 22 },
            { opacity: 1, y: 0, duration: 0.75, stagger: 0.08 },
            0.72,
          )
          .fromTo(
            ".hero-progress",
            { opacity: 0 },
            { opacity: 1, duration: 0.5 },
            0.9,
          );
      }

      if (!prefersReducedMotion) {
        const label =
          section.querySelector<HTMLElement>(".hero-progress-label");
        const fill = section.querySelector<HTMLElement>(".hero-progress-fill");
        let phase = "";
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          onUpdate: (self) => {
            const p = self.progress;
            if (fill) gsap.set(fill, { scaleY: Math.max(p, 0.001) });
            const next = p < 0.15 ? "01" : p < 0.4 ? "02" : p < 0.65 ? "03" : "04";
            if (next !== phase) {
              phase = next;
              if (label) label.textContent = next;
            }
          },
        });
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
            scrub: SCRUB,
            invalidateOnRefresh: true,
          },
        });

        tl.fromTo(
          ".hero-car",
          { x: () => vw() * 0.02, rotation: 0, scale: 1 },
          {
            x: () => vw() * -0.02,
            rotation: 0.15,
            scale: 1.005,
            duration: 0.3,
          },
          0,
        )
          .to(
            ".hero-car",
            {
              x: () => vw() * -0.8,
              rotation: 0.6,
              scale: 1.03,
              duration: 0.63,
            },
            0.3,
          )
          .to(
            ".hero-car",
            {
              x: () => vw() * -1.06,
              rotation: 0.8,
              scale: 1.04,
              duration: 0.07,
            },
            0.93,
          )
          .fromTo(
            ".hero-car-drift",
            { y: 0 },
            { y: -10, duration: 0.5 },
            0,
          )
          .to(".hero-car-drift", { y: -3, duration: 0.5 }, 0.5)
          .fromTo(
            ".hero-car-shadow",
            { opacity: 0.55, scaleX: 1 },
            { opacity: 0.32, scaleX: 0.86, duration: 0.7 },
            0.3,
          )
          .fromTo(
            ".hero-headline-block",
            { x: 0, y: 0, opacity: 1 },
            {
              x: () => vw() * 0.015,
              y: -70,
              opacity: 0,
              duration: 0.88,
            },
            0,
          )
          .to(
            ".hero-line-to",
            {
              scale: 1.06,
              transformOrigin: "left center",
              duration: 0.5,
            },
            0.3,
          )
          .fromTo(
            ".hero-copy-block",
            { y: 0, opacity: 1 },
            { y: -30, opacity: 0, duration: 0.75 },
            0,
          )
          .fromTo(
            ".hero-stats-block",
            { y: 0, opacity: 1 },
            { y: -20, opacity: 0, duration: 0.6 },
            0,
          )
          .fromTo(
            ".hero-header-rule",
            { scaleX: 1, opacity: 1, transformOrigin: "left center" },
            { scaleX: 0.55, opacity: 0.5, duration: 1 },
            0,
          )
          .fromTo(
            ".bg-word",
            { y: 0, opacity: 1 },
            { y: -110, opacity: 0.18, duration: 1 },
            0,
          )
          .fromTo(
            ".glow",
            { opacity: 0.5, scale: 1 },
            { opacity: 0.8, scale: 1.08, duration: 0.5 },
            0,
          )
          .to(
            ".glow",
            {
              opacity: 0.12,
              scale: 1.14,
              x: () => vw() * -0.06,
              duration: 0.5,
            },
            0.5,
          )
          .fromTo(
            ".circle-geo",
            { rotation: 0, opacity: 1 },
            {
              rotation: 42,
              opacity: 0.3,
              x: () => vw() * -0.04,
              duration: 1,
            },
            0,
          )
          .fromTo(
            ".bg-tick",
            { y: 0, opacity: 1 },
            { y: -50, opacity: 0.15, duration: 0.65 },
            0.35,
          )
          .fromTo(
            ".hero-next",
            { opacity: 0, y: 28 },
            { opacity: 1, y: 0, duration: 0.23 },
            0.62,
          );
      });

      mm.add("(max-width: 1023.98px)", () => {
        if (prefersReducedMotion) return;

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: SCRUB,
            invalidateOnRefresh: true,
          },
        });

        tl.fromTo(
          ".hero-car",
          { x: () => vw() * 0.02, rotation: 0, scale: 1 },
          {
            x: () => vw() * -0.02,
            rotation: 0.15,
            scale: 1.005,
            duration: 0.3,
          },
          0,
        )
          .to(
            ".hero-car",
            {
              x: () => vw() * -0.82,
              rotation: 0.5,
              scale: 1.02,
              duration: 0.63,
            },
            0.3,
          )
          .to(
            ".hero-car",
            {
              x: () => vw() * -1.08,
              rotation: 0.6,
              scale: 1.03,
              duration: 0.07,
            },
            0.93,
          )
          .fromTo(
            ".hero-car-drift",
            { y: 0 },
            { y: -8, duration: 0.5 },
            0,
          )
          .to(".hero-car-drift", { y: -2, duration: 0.5 }, 0.5)
          .fromTo(
            ".hero-car-shadow",
            { opacity: 0.55, scaleX: 1 },
            { opacity: 0.32, scaleX: 0.86, duration: 0.7 },
            0.3,
          )
          .fromTo(
            ".hero-headline-block",
            { x: 0, y: 0, opacity: 1 },
            {
              x: () => vw() * 0.01,
              y: -36,
              opacity: 0,
              duration: 0.88,
            },
            0,
          )
          .to(
            ".hero-line-to",
            {
              scale: 1.05,
              transformOrigin: "left center",
              duration: 0.5,
            },
            0.3,
          )
          .fromTo(
            ".hero-copy-block",
            { y: 0, opacity: 1 },
            { y: -24, opacity: 0, duration: 0.75 },
            0,
          )
          .fromTo(
            ".hero-stats-block",
            { y: 0, opacity: 1 },
            { y: -16, opacity: 0, duration: 0.6 },
            0,
          )
          .fromTo(
            ".hero-header-rule",
            { scaleX: 1, opacity: 1, transformOrigin: "left center" },
            { scaleX: 0.55, opacity: 0.5, duration: 1 },
            0,
          )
          .fromTo(
            ".bg-word",
            { y: 0, opacity: 1 },
            { y: -60, opacity: 0.18, duration: 1 },
            0,
          )
          .fromTo(
            ".glow",
            { opacity: 0.5, scale: 1 },
            { opacity: 0.8, scale: 1.06, duration: 0.5 },
            0,
          )
          .to(
            ".glow",
            {
              opacity: 0.12,
              scale: 1.1,
              x: () => vw() * -0.05,
              duration: 0.5,
            },
            0.5,
          )
          .fromTo(
            ".circle-geo",
            { rotation: 0, opacity: 1 },
            {
              rotation: 32,
              opacity: 0.3,
              x: () => vw() * -0.03,
              duration: 1,
            },
            0,
          )
          .fromTo(
            ".bg-tick",
            { y: 0, opacity: 1 },
            { y: -30, opacity: 0.15, duration: 0.65 },
            0.35,
          )
          .fromTo(
            ".hero-next",
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.23 },
            0.62,
          );
      });

      document.fonts?.ready.then(() => ScrollTrigger.refresh());
    },
    { scope: sectionRef, dependencies: [] },
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[220vh]"
      aria-label="Itzfizz hero"
    >
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
          <div className="glow absolute top-1/2 right-[6%] size-[52vw] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,92,41,0.09),transparent_62%)] blur-2xl" />
          <div className="circle-geo absolute top-1/2 right-[10%] size-[40vw] -translate-y-1/2 rounded-full border border-white/[0.04]" />
          <span className="bg-tick absolute top-[29%] left-[7%] size-[2px] rounded-full bg-white/20" />
          <span className="bg-tick absolute top-[64%] left-[12%] size-[2px] rounded-full bg-white/15" />
          <span className="bg-tick absolute top-[24%] right-[30%] size-[2px] rounded-full bg-white/15" />
        </div>

        <Header />

        <div className="absolute top-[15%] left-6 z-10 max-w-[80vw] md:top-[22%] md:left-12">
          <p className="hero-eyebrow flex items-center gap-3 font-mono text-[10px] tracking-[0.35em] text-white/40">
            <span className="inline-block h-px w-8 bg-ember/70" />
            ITZFIZZ / MOTION STUDY 01
          </p>
          <h1 className="hero-headline-block mt-6">
            <span className="hero-line block overflow-hidden py-[0.07em]">
              <span className="block text-[clamp(2.5rem,11.5vw,8.5rem)] leading-[1.02] font-medium tracking-[clamp(0.06em,1.2vw,0.16em)] text-bone">
                WELCOME
              </span>
            </span>
            <span className="hero-line hero-line-to block overflow-hidden py-[0.07em]">
              <span className="block text-[clamp(1.5rem,3.6vw,3.25rem)] leading-[1.1] font-light tracking-[0.22em] text-bone/65">
                TO ITZFIZZ
              </span>
            </span>
          </h1>
          <div className="hero-copy-block mt-8 max-w-[300px]">
            <p className="hero-copy text-[13px] leading-relaxed text-white/45 md:text-sm">
              A scroll-driven study in motion — every pixel tied to the
              journey. Crafted with Next.js, TypeScript and GSAP ScrollTrigger.
            </p>
          </div>
        </div>

        <div className="hero-next absolute bottom-[22%] left-6 z-10 max-w-[80vw] md:bottom-[24%] md:left-12">
          <p className="flex items-center gap-3 font-mono text-[9px] tracking-[0.4em] text-white/40">
            <span className="inline-block h-px w-8 bg-ember/70" />
            02 — TRANSITION
          </p>
          <p className="mt-4 text-[clamp(1.6rem,3.4vw,2.9rem)] leading-none font-medium tracking-[0.12em] text-bone/90">
            BUILT TO MOVE
          </p>
        </div>

        <div className="absolute right-6 bottom-[7%] left-6 z-10 md:right-auto md:bottom-[9%] md:left-12">
          <Stats />
        </div>

        <ScrollCar className="hero-car absolute top-[56%] right-[2%] w-[90vw] -translate-y-1/2 will-change-transform [filter:drop-shadow(0_28px_48px_rgba(0,0,0,0.55))] md:top-[57%] md:right-[2%] md:w-[58vw] md:max-w-[880px]" />

        <div className="hero-progress absolute top-1/2 right-4 z-30 flex -translate-y-1/2 flex-col items-center gap-3 md:right-8">
          <span className="font-mono text-[8px] tracking-[0.3em] text-white/35 [writing-mode:vertical-rl] md:text-[9px]">
            SCROLL
          </span>
          <span className="relative block h-16 w-px overflow-hidden bg-white/10 md:h-24">
            <span className="hero-progress-fill absolute inset-0 origin-top scale-y-0 bg-ember" />
          </span>
          <span className="hero-progress-label font-mono text-[8px] tracking-[0.2em] text-white/40 md:text-[9px]">
            01
          </span>
        </div>
      </div>
    </section>
  );
}

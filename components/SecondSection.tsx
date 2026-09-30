"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export default function SecondSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduced) return;

      gsap.fromTo(
        ".reveal-item",
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      );
    },
    { scope: sectionRef, dependencies: [] },
  );

  return (
    <section
      ref={sectionRef}
      className="relative border-t border-white/[0.06] px-6 py-32 md:px-12 md:py-56"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="reveal-item flex items-center gap-3 font-mono text-[10px] tracking-[0.45em] text-white/35">
          <span className="inline-block size-[3px] bg-ember" />
          02 — TRANSITION
        </p>
        <h2 className="reveal-item mt-8 text-[clamp(2.6rem,7.5vw,6rem)] leading-[1.02] font-medium tracking-[0.06em] text-bone">
          BUILT TO MOVE
        </h2>
        <p className="reveal-item mt-10 max-w-xl text-sm leading-relaxed text-white/45 md:text-base">
          A scroll-driven study in motion,
          <br />
          where interaction becomes part of
          <br />
          the visual language.
        </p>
        <p className="reveal-item mt-12 font-mono text-[9px] leading-loose tracking-[0.4em] text-white/35">
          NEXT
          <br />
          SCROLL TO CONTINUE →
        </p>
      </div>
    </section>
  );
}

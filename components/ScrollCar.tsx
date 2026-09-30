"use client";

import { useEffect, useRef, useState } from "react";

type AssetState = "pending" | "loaded" | "missing";

export default function ScrollCar({ className = "" }: { className?: string }) {
  const [asset, setAsset] = useState<AssetState>("pending");
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setAsset("missing");
    }
  }, []);

  if (asset === "missing") {
    return (
      <div className={className}>
        <CarSilhouette />
      </div>
    );
  }

  return (
    <div className={className}>
      <div
        aria-hidden="true"
        className="hero-car-shadow absolute right-[10%] -bottom-4 left-[10%] h-10 rounded-[100%] bg-black/70 blur-2xl md:-bottom-6"
      />
      <div className="hero-car-drift relative">
        {/* eslint-disable-next-line @next/next/no-img-element -- plain img is required for the load/error fallback swap */}
        <img
          ref={imgRef}
          src="/car.png"
          alt="Itzfizz GT concept vehicle in profile"
          draggable={false}
          onLoad={() => setAsset("loaded")}
          onError={() => setAsset("missing")}
          className="hero-car-img block h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}

function CarSilhouette() {
  return (
    <div className="flex w-full flex-col items-center">
      <svg
        viewBox="0 0 900 320"
        className="h-auto w-full"
        role="img"
        aria-label="Itzfizz GT concept vehicle silhouette"
      >
        <defs>
          <linearGradient id="silhouette-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgb(242 240 235 / 0.16)" />
            <stop offset="55%" stopColor="rgb(242 240 235 / 0.07)" />
            <stop offset="100%" stopColor="rgb(242 240 235 / 0.02)" />
          </linearGradient>
        </defs>
        <ellipse cx="450" cy="292" rx="380" ry="14" fill="rgb(0 0 0 / 0.55)" />
        <path
          d="M42 252 L42 236 C70 228 110 222 150 216 L268 200 C312 148 352 118 410 110 L556 106 C636 110 700 142 742 192 L806 210 C842 214 860 226 862 240 L862 252 L744 252 A44 44 0 0 1 656 252 L244 252 A44 44 0 0 1 156 252 Z"
          fill="url(#silhouette-body)"
          stroke="rgb(242 240 235 / 0.25)"
          strokeWidth="1.5"
        />
        <circle
          cx="200"
          cy="252"
          r="30"
          fill="#0a0a0a"
          stroke="rgb(242 240 235 / 0.3)"
          strokeWidth="1.5"
        />
        <circle
          cx="700"
          cy="252"
          r="30"
          fill="#0a0a0a"
          stroke="rgb(242 240 235 / 0.3)"
          strokeWidth="1.5"
        />
        <circle
          cx="200"
          cy="252"
          r="10"
          fill="none"
          stroke="rgb(242 240 235 / 0.25)"
        />
        <circle
          cx="700"
          cy="252"
          r="10"
          fill="none"
          stroke="rgb(242 240 235 / 0.25)"
        />
      </svg>
      <p className="mt-2 font-mono text-[9px] tracking-[0.5em] text-white/25">
        ITZFIZZ — GT CONCEPT
      </p>
    </div>
  );
}

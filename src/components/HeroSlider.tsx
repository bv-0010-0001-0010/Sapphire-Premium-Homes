"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

type Slide = {
  image: string;
  tag?: string;
  heading?: string;
  subheading?: string;
  cta?: { label: string; href: string } | null;
  brickVeneer?: boolean;
  highEnd?: boolean;
};

const slides: Slide[] = [
  {
    image: "/images/hero-1.jpg",
    tag: "BEST HOME DISPLAY",
    heading: "Australia's BIGGEST and THE BEST DISPLAY HOME",
    cta: { label: "More Information", href: "/display-home" },
  },
  {
    image: "/images/hero-2.jpg",
    tag: "SHAPING FUTURE",
    heading: "Architecture",
    cta: { label: "Let's get started", href: "/enquire" },
  },
  {
    image: "/images/hero-3.jpg",
    tag: "premier builder",
    heading: "for LUXURY homes",
    subheading: "Sydney's",
    cta: null,
  },
  {
    image: "/images/hero-4.jpg",
    subheading: "AS STANDARD",
    highEnd: true,
    cta: { label: "Explore now", href: "#inclusions" },
  },
  {
    image: "/images/hero-5.jpg",
    tag: "CLADDING FREE HOMES",
    heading: "BRICK VENEER",
    subheading: "BOTH FLOORS",
    brickVeneer: true,
    cta: null,
  },
  {
    image: "/images/hero-6.jpg",
    heading: "Australia's Biggest Display Home",
    subheading: "Opening soon.",
    cta: null,
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const mountedRef = useRef(false);
  const animatingRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    const timer = setInterval(() => {
      if (!animatingRef.current) {
        animatingRef.current = true;
        setTimeout(() => {
          if (mountedRef.current) {
            setCurrent((prev) => (prev + 1) % slides.length);
            setAnimKey((k) => k + 1);
          }
          animatingRef.current = false;
        }, 500);
      }
    }, 6000);
    return () => {
      mountedRef.current = false;
      clearInterval(timer);
    };
  }, []);

  const slide = slides[current];

  return (
    /* Full viewport — sits under transparent fixed navbar */
    <section className="relative w-full overflow-hidden" style={{ height: "100svh", minHeight: 640 }}>
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100 hero-slide-active" : "opacity-0 pointer-events-none"
          } ${i % 2 === 0 ? "hero-slide-even" : ""}`}
        >
          {/* Ken Burns wrapper — overflow hidden so zoom doesn't bleed */}
          <div className="absolute inset-0 overflow-hidden hero-img-container">
            <Image
              key={i === current ? `active-${animKey}` : `idle-${i}`}
              src={s.image}
              alt={s.heading ?? "Sapphire Premium Homes"}
              fill
              className={`object-cover object-center ${i === current ? (i % 2 === 0 ? "hero-img" : "hero-img-alt") : ""}`}
              priority={i === 0}
              sizes="100vw"
            />
          </div>
          {/* Dark overlay — lighter than before so images pop */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-black/60" />
        </div>
      ))}

      {/* Content — positioned in lower third */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-14 md:pb-52 px-5 md:px-16 lg:px-24 text-white">
        <div key={`content-${current}`} className="animate-fade-in-up max-w-6xl">

          {/* HIGH-END INCLUSIONS */}
          {slide.highEnd && (
            <>
              <h1
                className="font-black leading-[0.9] uppercase tracking-tight mb-4"
                style={{ fontSize: "clamp(32px, 12vw, 170px)", fontFamily: "var(--font-raleway)" }}
              >
                <span className="block text-white drop-shadow-lg">HIGH-END</span>
                <span
                  className="block"
                  style={{ WebkitTextStroke: "2px rgba(255,255,255,0.9)", color: "transparent" }}
                >
                  INCLUSIONS
                </span>
              </h1>
              {slide.subheading && (
                <p className="text-lg md:text-2xl font-bold tracking-[0.4em] uppercase text-white/90">
                  {slide.subheading}
                </p>
              )}
              {slide.cta && (
                <Link
                  href={slide.cta.href}
                  className="inline-block border border-white text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 mt-8"
                >
                  {slide.cta.label}
                </Link>
              )}
            </>
          )}

          {/* BRICK VENEER */}
          {slide.brickVeneer && (
            <>
              {slide.tag && (
                <p className="text-sm md:text-base tracking-[0.35em] uppercase text-white/80 font-semibold mb-3">
                  {slide.tag}
                </p>
              )}
              <h1
                className="font-black leading-[0.9] uppercase tracking-tight"
                style={{ fontSize: "clamp(44px, 12vw, 170px)", fontFamily: "var(--font-raleway)" }}
              >
                <span className="text-white drop-shadow-lg">BRICK </span>
                <span style={{ WebkitTextStroke: "2px rgba(255,255,255,0.9)", color: "transparent" }}>VENEER</span>
              </h1>
              {slide.subheading && (
                <p className="text-lg md:text-2xl font-bold tracking-[0.4em] uppercase text-white/90 mt-4">
                  {slide.subheading}
                </p>
              )}
            </>
          )}

          {/* All other slides */}
          {!slide.brickVeneer && !slide.highEnd && (
            <>
              {slide.tag && (
                <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-white/80 font-semibold mb-3">
                  {slide.tag}
                </p>
              )}
              <h1
                className="font-light leading-tight mb-4 drop-shadow-lg"
                style={{
                  fontSize: "clamp(26px, 6vw, 90px)",
                  fontFamily: "var(--font-raleway)",
                }}
              >
                {slide.subheading && (
                  <span className="block text-lg md:text-2xl tracking-widest uppercase font-light mb-2 text-white/80">
                    {slide.subheading}
                  </span>
                )}
                {slide.heading}
              </h1>
              {slide.cta && (
                <Link
                  href={slide.cta.href}
                  className="inline-block border border-white text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
                >
                  {slide.cta.label}
                </Link>
              )}
            </>
          )}
        </div>
      </div>

      {/* Right-side circular thumbnail navigation — hidden on small screens */}
      <div className="hidden sm:flex absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 flex-col gap-3">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); setAnimKey((k) => k + 1); }}
            className={`w-11 h-11 rounded-full overflow-hidden border-2 transition-all duration-300 ${
              i === current
                ? "border-[#987642] scale-110 opacity-100"
                : "border-white/40 opacity-50 hover:opacity-80 hover:scale-105"
            }`}
          >
            <Image
              src={s.image}
              alt={`Slide ${i + 1}`}
              width={44}
              height={44}
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>

      {/* Search bar — hidden on mobile, overlaid at bottom on desktop */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 z-20">
        <SearchBar />
      </div>
    </section>
  );
}

function SearchBar() {
  const filters = [
    {
      label: "ANY CATEGORY",
      options: ["Any", "Double Storey", "Single Storey", "Dual Occupancy"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
        </svg>
      ),
    },
    {
      label: "BEDS",
      options: ["Any", "3", "4", "5", "6+"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 7v10"/><path d="M21 7v10"/><path d="M3 12h18"/><rect x="5" y="4" width="14" height="8" rx="1"/>
        </svg>
      ),
    },
    {
      label: "BATH",
      options: ["Any", "2", "3", "4", "5+"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12h20v3a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6v-3z"/><path d="M7 12V6a3 3 0 0 1 3-3 2 2 0 0 1 2 2"/>
        </svg>
      ),
    },
    {
      label: "CAR SPACES",
      options: ["Any", "1", "2", "3", "4+"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9h-2"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>
        </svg>
      ),
    },
    {
      label: "AREA",
      options: ["Any", "< 50 sq", "50–100 sq", "100–150 sq", "150+ sq"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 3H3v18h18V3z"/><path d="M3 9h18"/><path d="M9 21V9"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white shadow-2xl border-t border-gray-100">
      {/* Mobile: 2-col grid */}
      <div className="grid grid-cols-2 sm:hidden">
        {filters.map((f) => (
          <div key={f.label} className="border-b border-r border-gray-100 last:border-r-0">
            <div className="px-4 py-3">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[#987642]">{f.icon}</span>
                <p className="text-[8px] font-bold text-[#1c1c1c] tracking-wider">{f.label}</p>
              </div>
              <select className="text-xs text-gray-500 bg-transparent w-full focus:outline-none cursor-pointer">
                {f.options.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
          </div>
        ))}
        <Link
          href="/designs"
          className="col-span-2 bg-[#1c1c1c] text-white text-sm font-semibold py-3 flex items-center justify-center gap-2 hover:bg-[#987642] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          Find a home
        </Link>
      </div>

      {/* Desktop: single row */}
      <div className="hidden sm:flex items-stretch">
        {filters.map((f) => (
          <div key={f.label} className="flex-1 border-r border-gray-100 last:border-r-0">
            <div className="px-5 py-4">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[#987642]">{f.icon}</span>
                <p className="text-[9px] font-bold text-[#1c1c1c] tracking-[0.2em]">{f.label}</p>
              </div>
              <select className="text-sm text-gray-500 bg-transparent w-full focus:outline-none cursor-pointer">
                {f.options.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
          </div>
        ))}
        <Link
          href="/designs"
          className="bg-[#1c1c1c] text-white text-sm font-semibold px-8 flex items-center gap-2 hover:bg-[#987642] transition-colors whitespace-nowrap"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          Find a home
        </Link>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

function useCardsVisible() {
  const [cards, setCards] = useState(3);
  useEffect(() => {
    const update = () =>
      setCards(window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return cards;
}

const portfolioItems = [
  {
    image: "/images/portfolio-bella-vista.jpg",
    category: "Residential",
    title: "Bella Vista",
    slug: "bella-vista",
  },
  {
    image: "/images/portfolio-north-kellyville.jpg",
    category: "Residential",
    title: "North Kellyville",
    slug: "north-kellyville",
  },
  {
    image: "/images/portfolio-glenhaven.jpg",
    category: "Residential",
    title: "Glenhaven",
    slug: "glenhaven",
  },
  {
    image: "/images/portfolio-north-rocks.jpg",
    category: "Residential",
    title: "North Rocks",
    slug: "north-rocks",
  },
];

const BASE_ITEMS = portfolioItems;

export default function PortfolioSection() {
  const cardsVisible = useCardsVisible();
  // Clone enough items at end for seamless loop
  const track = [...BASE_ITEMS, ...BASE_ITEMS.slice(0, cardsVisible)];
  const cardWidthPct = 100 / cardsVisible;

  const [index, setIndex] = useState(0);
  const [animated, setAnimated] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const transitioning = useRef(false);

  const advance = useCallback(() => {
    if (transitioning.current) return;
    transitioning.current = true;
    setAnimated(true);
    setIndex((i) => i + 1);
  }, []);

  const retreat = useCallback(() => {
    if (transitioning.current) return;
    transitioning.current = true;
    setAnimated(true);
    setIndex((i) => Math.max(0, i - 1));
  }, []);

  const onTransitionEnd = () => {
    transitioning.current = false;
    if (index >= BASE_ITEMS.length) {
      setAnimated(false);
      setIndex(0);
    }
  };

  // Auto-advance timer
  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(advance, 3500);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [advance]);

  const handlePrev = () => { retreat(); resetTimer(); };
  const handleNext = () => { advance(); resetTimer(); };

  const translateX = -(index * cardWidthPct);

  return (
    <section className="bg-[#f5f5f5] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="inline-block border border-[#1c1c1c]/30 text-[#1c1c1c] text-sm px-4 py-1 rounded-full mb-3">
              Our Portfolio
            </div>
            <h2
              className="text-4xl md:text-5xl font-light text-[#1c1c1c]"
              style={{ fontFamily: "var(--font-raleway)" }}
            >
              Discover Our Builds
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 border border-[#ccc] flex items-center justify-center hover:border-[#987642] hover:text-[#987642] transition-colors text-[#555]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 border border-[#ccc] flex items-center justify-center hover:border-[#987642] hover:text-[#987642] transition-colors text-[#555]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>

        {/* Carousel viewport — clips overflowing cards */}
        <div className="overflow-hidden">
          {/* Sliding track */}
          <div
            className="flex"
            style={{
              width: `${(track.length / cardsVisible) * 100}%`,
              transform: `translateX(${translateX / (track.length / cardsVisible)}%)`,
              transition: animated ? "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
            }}
            onTransitionEnd={onTransitionEnd}
          >
            {track.map((p, i) => (
              <div
                key={`${p.slug}-${i}`}
                style={{ width: `${100 / track.length}%`, flexShrink: 0 }}
                className="px-2"
              >
                <Link
                  href={`/portfolio/${p.slug}`}
                  className="relative block overflow-hidden group cursor-pointer"
                  style={{ height: 460 }}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="33vw"
                  />

                  {/* Dark gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                  {/* Info box — slides up from bottom on hover */}
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
                    <div className="bg-[#222a44]/90 px-6 py-5">
                      <p className="text-white/60 text-xs uppercase tracking-widest mb-1">
                        {p.category}
                      </p>
                      <p
                        className="text-[#987642] text-2xl font-light"
                        style={{ fontFamily: "var(--font-raleway)" }}
                      >
                        {p.title}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

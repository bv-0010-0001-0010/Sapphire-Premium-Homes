"use client";

import { useState } from "react";
import { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

const designs = [
  {
    title: "190 SQUARES MODERN MANSION",
    beds: 10,
    baths: 11,
    cars: 6,
    area: "190 sq",
    image: "/images/hero-2.jpg",
    href: "/designs/190-squares-modern-mansion",
  },
  {
    title: "220 SQUARES MODERN MANSION",
    beds: 10,
    baths: 12,
    cars: 12,
    area: "220 sq",
    image: "/images/portfolio-north-kellyville.jpg",
    href: "/designs/220-squares-modern-mansion",
  },
  {
    title: "200 SQUARES FRENCH PROVINCIAL MANSION",
    beds: 10,
    baths: 10,
    cars: 5,
    area: "200 sq",
    image: "/images/hero-3.jpg",
    href: "/designs/200-squares-french-provincial",
  },
  {
    title: "150 SQUARES FRENCH PROVINCIAL MANSION",
    beds: 8,
    baths: 10,
    cars: 3,
    area: "150 sq",
    image: "/images/portfolio-north-rocks.jpg",
    href: "/designs/150-squares-french-provincial",
  },
  {
    title: "75 SQUARES DOUBLE STOREY",
    beds: 5,
    baths: 6,
    cars: 2,
    area: "75 sq",
    image: "/images/design-75.jpg",
    href: "/designs/75-squares-double-storey",
  },
  {
    title: "52 SQUARES DOUBLE STOREY",
    beds: 4,
    baths: 3,
    cars: 2,
    area: "52 sq",
    image: "/images/design-52.jpg",
    href: "/designs/52-squares-double-storey",
  },
  {
    title: "68 SQUARES DOUBLE STOREY",
    beds: 5,
    baths: 5,
    cars: 3,
    area: "68 sq",
    image: "/images/hero-4.jpg",
    href: "/designs/68-squares-double-storey",
  },
  {
    title: "76 SQUARES – DISPLAY HOME",
    beds: 5,
    baths: 5,
    cars: 3,
    area: "76 sq",
    image: "/images/hero-1.jpg",
    href: "/designs/76-squares-display-home",
  },
  {
    title: "100 SQUARES DOUBLE STOREY",
    beds: 6,
    baths: 7,
    cars: 3,
    area: "100 sq",
    image: "/images/portfolio-bella-vista.jpg",
    href: "/designs/100-squares-double-storey",
  },
];

export default function HomeDesignsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + designs.length) % designs.length);
  const next = () => setCurrent((c) => (c + 1) % designs.length);

  return (
    <section className="bg-[#f5f5f5] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className="text-2xl md:text-4xl font-light text-[#444] uppercase tracking-wide leading-snug"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            LOOKING FOR INSPIRATION? LOOK NO FURTHER
            <br />
            THAN OUR STUNNING DESIGNS
          </h2>
        </div>

        {/* Carousel — shows prev (partial) + current + next (partial) */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${current * 80}% - ${current * 16}px + 10%))` }}
          >
            {designs.map((item, i) => (
              <div
                key={i}
                className={`flex-shrink-0 transition-all duration-500 ${i === current ? "w-[80%] opacity-100" : "w-[80%] opacity-40"}`}
                style={{ marginRight: "16px" }}
              >
                <div className="bg-white grid grid-cols-1 md:grid-cols-2 shadow-sm">
                  <div className="relative h-72 md:h-[380px]">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col justify-center p-8 md:p-12">
                    <h3
                      className="text-lg md:text-2xl font-semibold text-[#1c1c1c] uppercase tracking-wide mb-6"
                      style={{ fontFamily: "var(--font-raleway)" }}
                    >
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-6 mb-8">
                      <Stat icon="bed" value={item.beds} />
                      <Stat icon="bath" value={item.baths} />
                      <Stat icon="car" value={item.cars} />
                      <Stat icon="area" value={item.area} />
                    </div>
                    <Link
                      href={item.href}
                      className="inline-block bg-[#987642] text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-[#7a5f34] transition-colors w-fit"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Left arrow */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[#987642] text-white flex items-center justify-center hover:bg-[#7a5f34] transition-colors shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          {/* Right arrow */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[#987642] text-white flex items-center justify-center hover:bg-[#7a5f34] transition-colors shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {designs.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === current ? "bg-[#987642]" : "bg-[#ccc]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, value }: { icon: string; value: number | string }) {
  const icons: Record<string, ReactElement> = {
    bed: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16M2 8h20v12M2 12h4M22 12h-4M6 12v4M18 12v4"/></svg>
    ),
    bath: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><line x1="10" y1="5" x2="8" y2="7"/><line x1="2" y1="12" x2="22" y2="12"/></svg>
    ),
    car: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17H5v-4l2-6h10l2 6v4Z"/><circle cx="7.5" cy="17" r="1.5"/><circle cx="16.5" cy="17" r="1.5"/></svg>
    ),
    area: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 12h8M12 8v8"/></svg>
    ),
  };

  return (
    <div className="flex items-center gap-2 text-[#555]">
      {icons[icon]}
      <span className="text-base font-medium">{value}</span>
    </div>
  );
}

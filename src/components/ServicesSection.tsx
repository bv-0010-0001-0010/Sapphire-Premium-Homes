"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    number: "01",
    title: "CUSTOM LUXURY HOMES",
    description:
      "Luxury houses built to your specifications and requirements. Our aim is to build custom new and innovative homes to the highest standard.",
    href: "#",
    image: "/images/inclusions-2.jpg",
  },
  {
    number: "02",
    title: "KNOCK DOWN REBUILDS",
    description:
      "Knockdown is simply demolishing your existing home and rebuild a brand new home, but in your own neighbourhood, close to your schools, shops and community.",
    href: "#",
    image: "/images/inclusions-3.jpg",
  },
  {
    number: "03",
    title: "COST PLUS CONSTRUCTION",
    description:
      "Cost plus construction lets you control the cost of your project, and you have freedom to choose fixtures and fittings as we go through the project.",
    href: "#",
    image: "/images/video-poster.jpg",
  },
  {
    number: "04",
    title: "POOL AND SPA CONSTRUCTION",
    description:
      "We specialise in the end to end construction of residential concrete swimming pools, spas, and water features.",
    href: "#",
    image: "/images/inclusions-1.jpg",
  },
  {
    number: "05",
    title: "INTERIORS",
    description:
      "As an interiors builder, we specialise in transforming spaces with a focus on quality craftsmanship, functional design, and attention to detail.",
    href: "#",
    image: "/images/inclusions-4.jpg",
  },
];

export default function ServicesSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#222a44] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="inline-block border border-white/30 text-white text-sm px-4 py-1 rounded-full mb-6">
              Our Solutions
            </div>
            <h2
              className="text-4xl md:text-5xl font-light text-white leading-tight mb-8"
              style={{ fontFamily: "var(--font-raleway)" }}
            >
              We ready to provide services
            </h2>
            <Link
              href="/enquire"
              className="inline-block bg-[#987642] text-white text-sm font-semibold px-8 py-3 rounded-full hover:bg-[#7a5f34] transition-colors tracking-widest uppercase"
            >
              GET IN TOUCH
            </Link>
          </div>

          {/* Right - accordion */}
          <div className="flex-1">
            {services.map((s, i) => (
              <div key={s.number} className="border-b border-white/20 last:border-b-0">
                {/* Row header */}
                <button
                  className="w-full flex items-center justify-between py-5 text-left group"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <div className="flex items-center gap-6">
                    <span className="text-[#987642] text-sm font-light w-8">{s.number}</span>
                    <span
                      className="text-white text-lg md:text-xl font-light tracking-wide group-hover:text-[#987642] transition-colors"
                      style={{ fontFamily: "var(--font-raleway)" }}
                    >
                      {s.title}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className={`text-white/50 group-hover:text-[#987642] transition-all flex-shrink-0 ml-4 ${open === i ? "rotate-90" : ""}`}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Expanded content */}
                {open === i && (
                  <div className="pb-8">
                    <h3
                      className="text-[#987642] text-xl font-light text-center mb-6"
                      style={{ fontFamily: "var(--font-raleway)" }}
                    >
                      {s.number} {s.title}
                    </h3>
                    <div className="relative w-full h-64 md:h-80 mb-6">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">{s.description}</p>
                    <div className="border-t border-white/20 pt-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

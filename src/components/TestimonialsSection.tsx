"use client";

import { useState } from "react";

const testimonials = [
  {
    title: "Absolute Pleasure",
    text: "Building with Sapphire Premium Homes has been an absolute pleasure. From the very first meeting, their transparency and honesty gave us complete confid...",
    author: "Chetan R",
    role: "",
  },
  {
    title: "Unmatched Grandeur",
    text: "The towering ceilings and spacious design create an atmosphere that feels both majestic and inviting. Sapphire Premium Homes has truly delivered a show...",
    author: "Rahul",
    role: "Real Estate Agent",
  },
  {
    title: "Beyond Expectations",
    text: "I've toured many display homes across Sydney, but Sapphire Premium Homes has raised the bar to an entirely new level. Every corner feels grand, yet wel...",
    author: "Vikas",
    role: "Property Investor",
  },
  {
    title: "Luxury Redefined",
    text: "From the moment I walked in, I knew this wasn't just another display home—it's a vision of what luxury living should be. The interiors, design, and...",
    author: "Samantha Lee",
    role: "Interior Designer",
  },
  {
    title: "An Architectural Masterpiece",
    text: "Visiting the Sapphire Premium Homes display was a breathtaking experience. The attention to detail, soaring spaces, and premium finishes make this an architectural masterpiece.",
    author: "Michael Turner",
    role: "Architect",
  },
  {
    title: "A Dream Home Built with Care and Expertise!",
    text: "We are incredibly grateful to Sapphire Premium Homes and Jassi Ji for building our dream home with such care and expertise. Every detail was handled perfectly.",
    author: "Tarun L",
    role: "",
  },
  {
    title: "Amazing experience as a first home buyer",
    text: "Amazing experience as a first home buyer. We want to thank Jassie ji and Sapphire Premium Homes for building our first home. The process was smooth and transparent.",
    author: "Anuj",
    role: "",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  // Show 1 on mobile, 2 on tablet, 4 on desktop — computed via CSS grid; JS only needs 4 items
  const visible = Array.from({ length: 4 }, (_, i) =>
    testimonials[(active + i) % testimonials.length]
  );

  return (
    <section className="bg-[#f0f0f0] py-20 px-6">
      <div className="max-w-[1300px] mx-auto">
        <h2
          className="text-2xl md:text-4xl font-thin text-[#987642] mb-10 md:mb-16 text-center tracking-wide"
          style={{ fontFamily: "var(--font-raleway)" }}
        >
          WHAT OUR CLIENTS SAY..
        </h2>

        {/* Arrows row on mobile, overlay on desktop */}
        <div className="flex justify-center gap-3 mb-6 md:hidden">
          <button
            onClick={() => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="w-10 h-10 rounded-full bg-[#987642] text-white flex items-center justify-center hover:bg-[#7a5f34] transition-colors shadow"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button
            onClick={() => setActive((prev) => (prev + 1) % testimonials.length)}
            className="w-10 h-10 rounded-full bg-[#987642] text-white flex items-center justify-center hover:bg-[#7a5f34] transition-colors shadow"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

        <div className="relative">
          {/* Left arrow — desktop only */}
          <button
            onClick={() => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-11 h-11 rounded-full bg-[#987642] text-white items-center justify-center hover:bg-[#7a5f34] transition-colors shadow"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {visible.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-6 flex flex-col items-center text-center">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, si) => (
                    <svg key={si} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#987642">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <h4
                  className="text-[#1c1c1c] font-semibold text-sm mb-3"
                  style={{ fontFamily: "var(--font-raleway)" }}
                >
                  {t.title}
                </h4>
                <p className="text-[#666] text-xs leading-relaxed mb-4 flex-1">&ldquo;{t.text}&rdquo;</p>
                <p className="text-[#1c1c1c] text-xs font-semibold">
                  {t.author}
                  {t.role && <span className="text-[#987642] font-semibold">, <strong>{t.role}</strong></span>}
                </p>
              </div>
            ))}
          </div>

          {/* Right arrow — desktop only */}
          <button
            onClick={() => setActive((prev) => (prev + 1) % testimonials.length)}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-11 h-11 rounded-full bg-[#987642] text-white items-center justify-center hover:bg-[#7a5f34] transition-colors shadow"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}

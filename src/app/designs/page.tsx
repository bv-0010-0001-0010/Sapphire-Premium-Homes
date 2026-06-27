"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const designs = [
  { slug: "76-squares-display-home", title: "76 Squares – Display Home", beds: 5, baths: 5, cars: 3, area: "76 sq", image: "/images/hero-1.jpg", categories: ["Our House Designs", "Double Garage"] },
  { slug: "100-squares-double-storey", title: "100 Squares Double Storey", beds: 6, baths: 7, cars: 3, area: "100 sq", image: "/images/portfolio-bella-vista.jpg", categories: ["Double Storey House Design", "Our Grand Designs"] },
  { slug: "190-squares-modern-mansion", title: "190 Squares Modern Mansion", beds: 10, baths: 11, cars: 6, area: "190 sq", image: "/images/hero-2.jpg", categories: ["Our Grand Designs", "Double Garage"] },
  { slug: "220-squares-modern-mansion", title: "220 Squares Modern Mansion", beds: 10, baths: 12, cars: 12, area: "220 sq", image: "/images/portfolio-north-kellyville.jpg", categories: ["Our Grand Designs", "Double Storey House Design"] },
  { slug: "200-squares-french-provincial", title: "200 Squares French Provincial Mansion", beds: 10, baths: 10, cars: 5, area: "200 sq", image: "/images/hero-3.jpg", categories: ["French Provincial Facades", "Our Grand Designs"] },
  { slug: "150-squares-french-provincial", title: "150 Squares French Provincial Mansion", beds: 8, baths: 10, cars: 3, area: "150 sq", image: "/images/portfolio-north-rocks.jpg", categories: ["French Provincial Facades", "Double Storey House Design"] },
  { slug: "75-squares-double-storey", title: "75 Squares Double Storey", beds: 5, baths: 6, cars: 2, area: "75 sq", image: "/images/portfolio-glenhaven.jpg", categories: ["Double Storey House Design", "Our House Designs"] },
  { slug: "52-squares-double-storey", title: "52 Squares Double Storey", beds: 4, baths: 3, cars: 2, area: "52 sq", image: "/images/hero-4.jpg", categories: ["Double Storey House Design"] },
  { slug: "68-squares-double-storey", title: "68 Squares Double Storey", beds: 5, baths: 5, cars: 3, area: "68 sq", image: "/images/hero-5.jpg", categories: ["Double Storey House Design", "Double Garage"] },
];

const categories = [
  "Show All",
  "Double Garage",
  "Double Storey House Design",
  "French Provincial Facades",
  "Our Duplex Designs",
  "Our Grand Designs",
  "Our House and Granny Designs",
  "Our House Designs",
  "Single Storey",
];

function StatIcon({ type }: { type: string }) {
  if (type === "bed") return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 4v16M2 8h20v12M2 12h4M22 12h-4M6 12v4M18 12v4"/></svg>;
  if (type === "bath") return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><line x1="10" y1="5" x2="8" y2="7"/><line x1="2" y1="12" x2="22" y2="12"/></svg>;
  if (type === "car") return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 17H5v-4l2-6h10l2 6v4Z"/><circle cx="7.5" cy="17" r="1.5"/><circle cx="16.5" cy="17" r="1.5"/></svg>;
  return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 12h8M12 8v8"/></svg>;
}

export default function DesignsPage() {
  const [active, setActive] = useState("Show All");

  const filtered = active === "Show All"
    ? designs
    : designs.filter((d) => d.categories.includes(active));

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#222a44] pt-32 pb-16 px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-thin text-white mb-4" style={{ fontFamily: "var(--font-raleway)" }}>
            Our Designs
          </h1>
          <div className="w-12 h-[2px] bg-[#987642] mx-auto mb-6" />
          <p className="text-white/60 max-w-3xl mx-auto text-sm leading-relaxed">
            There&apos;s a reason our home designs are consistently recognised among Sydney&apos;s finest. Behind every design is a passionate team of creative professionals who take the time to truly listen to you. We work closely with you to understand your lifestyle, preferences, and vision, then craft a home design that feels both timeless and modern – a perfect reflection of you and your family.
          </p>
        </section>

        <section className="bg-white border-b border-[#eee] py-6 px-6">
          <div className="max-w-7xl mx-auto flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 text-sm border transition-colors ${
                  active === cat
                    ? "bg-[#987642] border-[#987642] text-white"
                    : "border-[#ccc] text-[#555] hover:border-[#987642] hover:text-[#987642]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        <section className="bg-[#f5f5f5] py-16 px-6">
          <div className="max-w-7xl mx-auto">
            {filtered.length === 0 ? (
              <p className="text-center text-[#999] py-20">No designs in this category yet.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((d) => (
                  <Link key={d.slug} href={`/designs/${d.slug}`} className="group bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative h-56 overflow-hidden">
                      <Image src={d.image} alt={d.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-[#1c1c1c] uppercase tracking-wide mb-4" style={{ fontFamily: "var(--font-raleway)" }}>
                        {d.title}
                      </h3>
                      <div className="flex items-center gap-4 text-[#666] text-sm mb-5">
                        <span className="flex items-center gap-1"><StatIcon type="bed" />{d.beds}</span>
                        <span className="flex items-center gap-1"><StatIcon type="bath" />{d.baths}</span>
                        <span className="flex items-center gap-1"><StatIcon type="car" />{d.cars}</span>
                        <span className="flex items-center gap-1"><StatIcon type="area" />{d.area}</span>
                      </div>
                      <span className="inline-block bg-[#987642] text-white text-xs font-semibold px-6 py-2 tracking-widest uppercase hover:bg-[#7a5f34] transition-colors">
                        Learn More
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

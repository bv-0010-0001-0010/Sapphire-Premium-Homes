"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home Designs", href: "/designs" },
  { label: "Our Inclusions", href: "/enquire" },
  { label: "Learning", href: "/construction-process" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/designs" },
  { label: "Display Home", href: "/display-home" },
];

/** Returns true if the first content section behind the navbar is dark. */
function detectHeroDark(): boolean {
  const main = document.querySelector("main");
  const first = main?.firstElementChild as HTMLElement | null;
  if (!first) return true;

  const bg = window.getComputedStyle(first).backgroundColor;
  // Transparent = full-bleed image hero → treat as dark
  if (!bg || bg === "rgba(0, 0, 0, 0)" || bg === "transparent") return true;

  const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!m) return true;

  const luminance = (0.299 * +m[1] + 0.587 * +m[2] + 0.114 * +m[3]) / 255;
  return luminance < 0.5;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  // Default true (white logo) — safe for home hero; corrected by useEffect before paint completes
  const [heroDark, setHeroDark] = useState(true);
  const pathname = usePathname();

  // Re-detect hero background color on every page navigation
  useEffect(() => {
    setHeroDark(detectHeroDark());
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /**
   * isDarkContext = navbar is sitting over a dark background:
   *   - not scrolled (transparent) AND hero section behind it is dark
   * When false = navbar is white/scrolled OR over a light section → use dark/colored elements
   */
  const isDarkContext = !scrolled && heroDark;

  const hamburgerColor = isDarkContext ? "bg-white" : "bg-[#1c1c1c]";
  const ctaContactStyle = isDarkContext
    ? "border-white text-white hover:bg-white hover:text-[#1c1c1c]"
    : "border-[#1c1c1c] text-[#1c1c1c] hover:bg-[#1c1c1c] hover:text-white";
  const ctaEnquireStyle = isDarkContext
    ? "border-white text-white hover:bg-white hover:text-[#1c1c1c]"
    : "border-[#987642] text-[#987642] hover:bg-[#987642] hover:text-white";

  return (
    <>
      {/* Fixed navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
        style={{ height: 72 }}
      >
        <div className="max-w-[1440px] mx-auto px-6 h-full flex items-center justify-between">
          {/* Left: hamburger + logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDrawerOpen(true)}
              className="flex flex-col gap-[5px] p-2 group"
              aria-label="Open menu"
            >
              <span className={`block w-6 h-[1.5px] transition-colors duration-300 ${hamburgerColor}`} />
              <span className={`block w-6 h-[1.5px] transition-colors duration-300 ${hamburgerColor}`} />
              <span className={`block w-6 h-[1.5px] transition-colors duration-300 ${hamburgerColor}`} />
            </button>

            <Link href="/" className="relative block h-12">
              {/*
               * Both logos are always in the DOM.
               * Whichever is `relative` (visible one) drives the container width.
               * The other is `absolute` and fades to opacity-0 — no layout shift, smooth crossfade.
               */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo-color.png"
                alt="Sapphire Premium Homes"
                className={`h-12 w-auto object-contain transition-opacity duration-200 ${
                  isDarkContext ? "opacity-0 absolute inset-0" : "opacity-100 relative"
                }`}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo-white.png"
                alt={isDarkContext ? "Sapphire Premium Homes" : ""}
                aria-hidden={!isDarkContext}
                className={`h-12 w-auto object-contain transition-opacity duration-200 ${
                  isDarkContext ? "opacity-100 relative" : "opacity-0 absolute inset-0"
                }`}
              />
            </Link>
          </div>

          {/* Right: CTA buttons — Contact hidden on mobile, Enquire always visible */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/contact"
              className={`hidden sm:inline-flex text-xs font-semibold tracking-widest px-5 py-2.5 border transition-colors duration-300 ${ctaContactStyle}`}
            >
              CONTACT US
            </Link>
            <Link
              href="/enquire"
              className={`text-[10px] sm:text-xs font-semibold tracking-widest px-3 sm:px-5 py-2 sm:py-2.5 border transition-colors duration-300 ${ctaEnquireStyle}`}
            >
              ENQUIRE NOW
            </Link>
          </div>
        </div>
      </header>

      {/* Drawer overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60]"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Drawer — always dark navy, always white logo */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-[#222a44] z-[70] transform transition-transform duration-300 ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-8 h-full flex flex-col">
          <div className="flex items-center justify-between mb-10">
            <Link href="/" onClick={() => setDrawerOpen(false)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo-white.png"
                alt="Sapphire Premium Homes"
                className="h-11 w-auto object-contain"
              />
            </Link>
            <button
              onClick={() => setDrawerOpen(false)}
              className="text-white/70 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setDrawerOpen(false)}
                className="text-white/80 hover:text-[#987642] text-sm font-medium tracking-wider py-4 border-b border-white/10 transition-colors uppercase"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-8 flex flex-col gap-3">
            <Link
              href="/enquire"
              onClick={() => setDrawerOpen(false)}
              className="w-full text-center bg-[#987642] text-white text-xs font-semibold tracking-widest py-3 hover:bg-[#7a5f34] transition-colors uppercase"
            >
              Enquire Now
            </Link>
            <Link
              href="/contact"
              onClick={() => setDrawerOpen(false)}
              className="w-full text-center border border-white/30 text-white/70 text-xs font-semibold tracking-widest py-3 hover:border-white hover:text-white transition-colors uppercase"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}

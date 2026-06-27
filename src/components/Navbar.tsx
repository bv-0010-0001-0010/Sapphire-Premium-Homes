"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const navItems = [
  { label: "Home Designs", href: "/designs" },
  { label: "Our Inclusions", href: "/enquire" },
  { label: "Learning", href: "/construction-process" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/designs" },
  { label: "Display Home", href: "/display-home" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
        style={{ height: "72px" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 h-full flex items-center justify-between">
          {/* Left: Hamburger + Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDrawerOpen(true)}
              className="flex flex-col gap-[5px] p-2 group"
              aria-label="Open menu"
            >
              <span className={`block w-6 h-[1.5px] transition-colors ${scrolled ? "bg-[#1c1c1c]" : "bg-white"}`} />
              <span className={`block w-6 h-[1.5px] transition-colors ${scrolled ? "bg-[#1c1c1c]" : "bg-white"}`} />
              <span className={`block w-6 h-[1.5px] transition-colors ${scrolled ? "bg-[#1c1c1c]" : "bg-white"}`} />
            </button>
            <Link href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={scrolled ? "/images/logo-color.png" : "/images/logo-white.png"}
                alt="Sapphire Premium Homes"
                width={160}
                height={60}
                className="h-12 w-auto object-contain transition-all duration-300"
              />
            </Link>
          </div>

          {/* Right: Contact buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={`text-xs font-semibold tracking-widest px-5 py-2.5 border transition-colors ${
                scrolled
                  ? "border-[#1c1c1c] text-[#1c1c1c] hover:bg-[#1c1c1c] hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-[#1c1c1c]"
              }`}
            >
              CONTACT US
            </Link>
            <Link
              href="/enquire"
              className={`text-xs font-semibold tracking-widest px-5 py-2.5 border transition-colors ${
                scrolled
                  ? "border-[#987642] text-[#987642] hover:bg-[#987642] hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-[#1c1c1c]"
              }`}
            >
              ENQUIRE NOW
            </Link>
          </div>
        </div>
      </header>

      {/* Drawer overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/50"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Slide-out drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-[#222a44] z-[70] transform transition-transform duration-300 ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-white.png"
              alt="Sapphire Premium Homes"
              width={140}
              height={52}
              className="h-11 w-auto object-contain"
            />
            <button
              onClick={() => setDrawerOpen(false)}
              className="text-white/70 hover:text-white"
            >
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="py-4 border-b border-white/10 text-sm font-medium text-white/80 hover:text-[#987642] transition-colors tracking-wide"
                onClick={() => setDrawerOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="tel:1300537000"
              className="text-center py-3 border border-white/30 text-white text-sm font-medium tracking-wide hover:border-[#987642] hover:text-[#987642] transition-colors"
            >
              1300 537 000
            </Link>
            <Link
              href="/enquire"
              className="text-center py-3 bg-[#987642] text-white text-sm font-semibold tracking-wide hover:bg-[#7a5f34] transition-colors"
            >
              ENQUIRE NOW
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

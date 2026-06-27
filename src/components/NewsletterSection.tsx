"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2
          className="text-2xl md:text-3xl font-light text-[#444] mb-8"
          style={{ fontFamily: "var(--font-raleway)" }}
        >
          Sign up for latest updates.
        </h2>
        <form className="flex flex-col sm:flex-row gap-3 items-center">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#987642] w-full"
          />
          <input
            type="email"
            placeholder="email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#987642] w-full"
          />
          <button
            type="submit"
            className="bg-[#222a44] text-white text-sm font-semibold px-8 py-3 hover:bg-[#987642] transition-colors whitespace-nowrap"
          >
            Signup
          </button>
        </form>
      </div>
    </section>
  );
}

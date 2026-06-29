import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-[#222a44] py-20 px-8 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <h2
          className="text-2xl md:text-4xl lg:text-6xl font-thin text-white leading-tight text-center md:text-left"
          style={{ fontFamily: "var(--font-raleway)" }}
        >
          Your Dream Project Awaits &ndash;
          <br />
          Let us get started
        </h2>
        <div className="flex-shrink-0">
          <Link
            href="/contact"
            className="inline-block border border-white text-white text-sm font-semibold px-10 py-4 hover:bg-white hover:text-[#222a44] transition-colors tracking-widest uppercase"
          >
            BOOK APPOINTMENT
          </Link>
        </div>
      </div>
    </section>
  );
}

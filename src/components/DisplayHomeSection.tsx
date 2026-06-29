import Link from "next/link";

export default function DisplayHomeSection() {
  return (
    <section id="display-home" className="py-20 px-6 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-2xl md:text-4xl lg:text-5xl font-light text-[#444] uppercase tracking-wide mb-6"
          style={{ fontFamily: "var(--font-raleway)" }}
        >
          Australia&apos;s BIGGEST and THE BEST DISPLAY HOME
        </h2>
        <p className="text-[#444] text-sm md:text-base leading-relaxed mb-4">
          Sapphire Premium Homes is set to make an indelible mark on the Australian real estate landscape with the
          construction of Australia&apos;s largest display home at Homequest Bella Vista. This ambitious project aims
          to redefine the standards of luxury living, showcasing specifications and finishes that have never been
          witnessed in any other display home across the country. The distinctive feature of towering 3.5-meter
          ceilings on the ground floor and 3.3 meters on the first floor will set this residence apart as a
          pinnacle of opulence and grandeur.
        </p>
        <p className="text-[#444] text-sm md:text-base leading-relaxed mb-10">
          Don&apos;t miss out on this chance to see what sets Sapphire Premium Homes apart.
        </p>
        <Link
          href="/display-home"
          className="inline-block border-2 border-[#987642] text-[#987642] px-10 py-3 text-sm tracking-widest uppercase rounded-full hover:bg-[#987642] hover:text-white transition-all duration-300 font-medium"
        >
          MORE INFORMATION
        </Link>
      </div>
    </section>
  );
}

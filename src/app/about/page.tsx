import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Why Choose Us – Sapphire Premium Homes",
};

const reasons = [
  {
    tag: "QUALIFICATION AND ACCREDITATION",
    title: "Fair Trading Licensed",
    body: "Sapphire Premium Homes is licensed by Fair Trading. We use only licensed trades to finish our projects. Every tradesperson on your site is fully accredited and accountable.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
  },
  {
    tag: "QUALITY INCLUSIONS",
    title: "Luxury as Standard",
    body: "We have high-quality inclusions as standard. Most builders call these LUXURY upgrades and charge extra. At Sapphire Premium Homes, double glazed windows, 80mm benchtops, LED downlights, flooring, and driveway are all included in your base price.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    ),
  },
  {
    tag: "EASY TO UNDERSTAND",
    title: "Tender and Contract",
    body: "Our tender process is very simple. We have avoided the confusion around variations. The reason we have high-quality inclusions as standard is to minimise variations and keep the process stress-free for our clients.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
    ),
  },
  {
    tag: "LONG TERM RELATIONSHIP",
    title: "We Value Emotional Connection",
    body: "Most of our business comes from referrals from existing clients. We value a strong and healthy relationship with all our clients — before, during, and long after the build is complete.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
    ),
  },
  {
    tag: "QUALITY CONTROL",
    title: "This Is Our Strength",
    body: "We have a thorough quality control process and every stage is checked for quality by internal staff before progress payments are made. We do not compromise on quality — ever.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="20 6 9 17 4 12"/></svg>
    ),
  },
  {
    tag: "TRANSPARENT",
    title: "Everything We Do Is in Black and White",
    body: "Even though our focus is meeting face to face, we always follow up with written communication. All commitments, decisions, and changes are documented so there are no surprises.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
    ),
  },
  {
    tag: "COMPREHENSIVE",
    title: "Detailed Review of Our Proposal",
    body: "We listen to your needs and requirements. Our designers incorporate these into the design. We walk you through every detail of the proposal so you understand exactly what you are getting.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#222a44] pt-36 pb-20 px-6 text-center">
          <p className="text-[#987642] text-xs tracking-widest uppercase mb-3">About Us</p>
          <h1
            className="text-4xl md:text-6xl font-thin text-white mb-2"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            Why Sapphire
          </h1>
          <h1
            className="text-4xl md:text-6xl font-bold text-[#987642] mb-6"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            PREMIUM HOMES
          </h1>
          <p className="text-white/70 text-base max-w-xl mx-auto leading-relaxed">
            Transparency and making it simple to build a house.
          </p>
          <div className="w-12 h-[2px] bg-[#987642] mx-auto mt-8" />
        </section>

        {/* Reasons grid */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((r) => (
              <div
                key={r.tag}
                className="border border-[#e5e5e5] p-8 hover:border-[#987642] hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full border border-[#987642]/30 group-hover:border-[#987642] group-hover:bg-[#987642]/5 flex items-center justify-center text-[#987642] mb-5 transition-all duration-300">
                  {r.icon}
                </div>
                <p className="text-[10px] tracking-widest text-[#987642] uppercase font-semibold mb-2">
                  {r.tag}
                </p>
                <h3
                  className="text-xl font-semibold text-[#222a44] mb-3"
                  style={{ fontFamily: "var(--font-raleway)" }}
                >
                  {r.title}
                </h3>
                <p className="text-[#666] text-sm leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats banner */}
        <section className="bg-[#222a44] py-16 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "20+", label: "Years Experience" },
              { value: "500+", label: "Homes Built" },
              { value: "100%", label: "Licensed Trades" },
              { value: "5★", label: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  className="text-4xl font-bold text-[#987642] mb-2"
                  style={{ fontFamily: "var(--font-raleway)" }}
                >
                  {s.value}
                </p>
                <p className="text-white/60 text-xs tracking-widest uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-16 px-6 text-center">
          <h2
            className="text-3xl font-light text-[#333] mb-6"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            Ready to Build with Us?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/enquire"
              className="inline-block bg-[#987642] text-white px-10 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-[#7a5f34] transition-colors"
            >
              Enquire Now
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-[#222a44] text-[#222a44] px-10 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-[#222a44] hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

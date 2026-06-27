import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Display Home – Sapphire Premium Homes | Bella Vista NSW" };

const features = [
  "3500mm high ceiling to ground floor",
  "3300mm ceilings to first floor",
  "5000mm x 1700mm Entry door",
  "Anti fingerprint and Anti Stain Cabinetry",
  "2700mm external and internal doors",
  "Mono stringer floating stairs",
  "Finger pull vanity with 100mm benchtop",
  "5.1m media room screen",
  "100mm benchtop to Island",
  "State of the Art Home Automation",
  "Magnetic track lights, LED strip lights",
  "Double glazed windows with window hoods",
  "Full frameless showers",
  "LED mirrors to bathrooms",
  "Square set windows and cornices",
  "Outdoor Kitchen with DW and BBQ",
  "Engineered Timber floors",
  "Epoxy Garage Flooring",
  "Recessed track for curtains and LED lights",
  "Fully tiled pool with spa and waterfall",
];

const specs = [
  { label: "Bedrooms", value: "7" },
  { label: "Bathrooms", value: "6" },
  { label: "Car Spaces", value: "4" },
  { label: "Area", value: "76 sq" },
];

const highlights = [
  {
    title: "ANTI-FINGERPRINT CABINETRY",
    body: "Anti-fingerprint cabinetry extending to a full height of 3 metres, designed to deliver a sleek and modern aesthetic while maintaining its pristine appearance over time. The cabinets are engineered for both beauty and practicality.",
  },
  {
    title: "CUSTOMIZATION",
    body: "The residence's design reflects a highly considered and deeply customised process, seamlessly blending architectural vision with the client's personal aspirations. Every detail — from material selection to spatial flow — has been shaped to deliver a home that is both functionally exceptional and aesthetically refined.",
  },
  {
    title: "HOME AUTOMATION",
    body: "The display home has been upgraded with a premium home automation system, enhancing convenience and quality of life for its residents. Smart switches are installed throughout, allowing effortless control of lighting and electrical features across every room. This integrated system delivers intuitive control, enhanced functionality, and a refined living experience.",
  },
  {
    title: "HIGH END MEDIA ROOM",
    body: "The display home has been upgraded with a premium media room designed for an immersive cinematic experience. A 200-inch screen creates a true theatre-quality experience, bringing movies and entertainment to life in breathtaking detail. Acoustic panels have been installed to minimise echo and enhance sound quality, ensuring the space is optimised for the ultimate audio-visual experience.",
  },
  {
    title: "ATTENTION TO DETAIL",
    body: "Attention to detail is a defining hallmark of this display home, with every aspect of the design carefully considered and meticulously executed. From the precision of the joinery to the refined selection of finishes, each element reflects a commitment to quality that goes beyond the ordinary.",
  },
];

export default function DisplayHomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Title Block */}
        <section className="bg-white pt-36 pb-16 px-8 md:px-20">
          <div className="max-w-5xl mx-auto">
            <h1
              className="text-5xl md:text-7xl font-thin mb-3"
              style={{ fontFamily: "var(--font-raleway)", color: "#987642" }}
            >
              ASHIRVAAD
            </h1>
            <div className="w-24 h-[1px] bg-[#987642] mb-6" />
            <h2 className="text-xl md:text-2xl font-light text-[#333] mb-1">
              Australia&apos;s BIGGEST and THE BEST DISPLAY HOME
            </h2>
            <p className="text-lg">
              <span className="text-[#987642] font-medium">2 Ernesta Place</span>{" "}
              <span className="text-[#333]">Bella Vista NSW 2153</span>
            </p>
          </div>
        </section>

        {/* Description */}
        <section className="bg-white pb-16 px-8 md:px-20">
          <div className="max-w-5xl mx-auto space-y-6 text-[#555] leading-relaxed text-base">
            <p>
              Sapphire Premium Homes is poised to leave an enduring legacy in the Australian real estate market with the development of the country&apos;s largest display home, situated at Homequest Bella Vista. This visionary project seeks to raise the bar for luxury living by presenting a showcase of unparalleled craftsmanship, design, and innovation. What sets this display home apart from others in Australia are the remarkable specifications and finishes, which promise to elevate the home to new levels of sophistication and extravagance.
            </p>
            <p>
              One of the standout architectural features of this masterpiece is its soaring ceilings, an impressive 3.5 meters on the ground floor and 3.3 meters on the first floor. These towering heights create a sense of spaciousness and grandeur, enhancing the overall feeling of luxury. This, combined with meticulously selected materials, cutting-edge design elements, and an array of opulent finishes, will cement this display home as a true landmark of luxury living in Australia.
            </p>
            <p>
              With this project, Sapphire Premium Homes is not just constructing a display home; they are redefining the standards of luxury living and creating a benchmark that will inspire and captivate all who experience it.
            </p>
          </div>
        </section>

        {/* Quote */}
        <section className="bg-[#f8f6f2] py-14 px-8 md:px-20 border-t border-[#e8e0d4]">
          <div className="max-w-5xl mx-auto">
            <blockquote className="text-xl md:text-2xl font-light text-[#555] italic leading-relaxed">
              &ldquo;We wanted to demonstrate to the market the level of sophistication, innovation, and quality we are capable of delivering. This display home is our statement to the industry.&rdquo;
            </blockquote>
          </div>
        </section>

        {/* Features List */}
        <section className="bg-white py-16 px-8 md:px-20">
          <div className="max-w-5xl mx-auto">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[#444] text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#987642] mt-2 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Project Details */}
        <section className="bg-[#222a44] py-16 px-8 md:px-20">
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-thin text-white mb-2"
              style={{ fontFamily: "var(--font-raleway)" }}
            >
              PROJECT <span className="font-semibold">DETAILS</span>
            </h2>
            <div className="w-12 h-[2px] bg-[#987642] mb-10" />
            <div className="text-[#987642] text-sm tracking-widest mb-8 uppercase">
              Display Home – Bella Vista
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {specs.map((s) => (
                <div key={s.label} className="text-center border border-white/10 py-8 px-4">
                  <p className="text-3xl font-light text-white mb-2">{s.value}</p>
                  <p className="text-xs uppercase tracking-widest text-white/50">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="bg-white py-16 px-8 md:px-20">
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-thin text-[#333] mb-2"
              style={{ fontFamily: "var(--font-raleway)" }}
            >
              HIGHLIGHTS
            </h2>
            <div className="w-12 h-[2px] bg-[#987642] mb-12" />
            <p className="text-[#555] mb-12 leading-relaxed">
              The result is a refined sense of balance, where intelligent planning and functionality are delivered without compromise, creating spaces that are as purposeful as they are beautiful.
            </p>
            <div className="space-y-12">
              {highlights.map((h, i) => (
                <div key={h.title} className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div>
                    <h3
                      className="text-xl font-semibold text-[#222a44] mb-4 tracking-wide"
                      style={{ fontFamily: "var(--font-raleway)" }}
                    >
                      {h.title}
                    </h3>
                    <p className="text-[#555] leading-relaxed text-sm">{h.body}</p>
                  </div>
                  <div className="relative h-64 bg-[#f0f0f0]">
                    <Image
                      src="/images/portfolio-bella-vista.jpg"
                      alt={h.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Floor Plans */}
        <section className="bg-[#f8f6f2] py-16 px-8 md:px-20">
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-thin text-[#333] mb-2"
              style={{ fontFamily: "var(--font-raleway)" }}
            >
              FLOOR <span className="font-semibold">PLANS</span>
            </h2>
            <div className="w-12 h-[2px] bg-[#987642] mb-10" />
            <div className="bg-white p-8 flex items-center justify-center text-[#999] text-sm">
              Floor plan available upon private viewing request
            </div>
          </div>
        </section>

        {/* Book a Private Viewing */}
        <section className="bg-white py-16 px-8 md:px-20">
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-thin text-[#333] mb-2"
              style={{ fontFamily: "var(--font-raleway)" }}
            >
              Book a Private Viewing
            </h2>
            <div className="w-12 h-[2px] bg-[#987642] mb-4" />
            <p className="text-[#666] mb-10 text-sm">
              If you would like to organise a personal tour of our display home, get in touch and we&apos;ll arrange a private viewing at your convenience.
            </p>
            <form className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-[#333] tracking-wider uppercase mb-2">Your Name</label>
                <input type="text" className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#333] focus:outline-none focus:border-[#987642]" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#333] tracking-wider uppercase mb-2">Mobile Phone</label>
                <input type="tel" className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#333] focus:outline-none focus:border-[#987642]" placeholder="0400 000 000" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#333] tracking-wider uppercase mb-2">Your Email</label>
                <input type="email" className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#333] focus:outline-none focus:border-[#987642]" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#333] tracking-wider uppercase mb-2">Suburb Where You Are Building</label>
                <input type="text" className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#333] focus:outline-none focus:border-[#987642]" placeholder="Suburb" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#333] tracking-wider uppercase mb-2">Any Other Information</label>
                <textarea rows={4} className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#333] focus:outline-none focus:border-[#987642] resize-none" placeholder="Any other information you would like to share" />
              </div>
              <button
                type="submit"
                className="w-full bg-[#987642] text-white py-4 text-sm font-semibold tracking-widest uppercase hover:bg-[#7a5f34] transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#222a44] py-16 px-8 text-center">
          <p className="text-white/60 text-xs tracking-widest uppercase mb-4">Ready to build your dream home?</p>
          <h3
            className="text-3xl md:text-4xl font-thin text-white mb-8"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            Start Your Journey With Sapphire
          </h3>
          <Link
            href="/enquire"
            className="inline-block border border-white text-white text-sm font-semibold px-10 py-4 hover:bg-white hover:text-[#222a44] transition-colors tracking-widest uppercase"
          >
            Enquire Now
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

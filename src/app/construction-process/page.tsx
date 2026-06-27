import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Construction Process – Sapphire Premium Homes",
};

const preConstructionSteps = [
  {
    number: "1",
    title: "Getting Started",
    body: "Before you get started, it's important to focus on what matters most for your new home. Consider: Type of house (single or double-storey), Size of the house, Internal layout and finishes, and Budget.",
  },
  {
    number: "2",
    title: "Tender Request",
    body: "Once you have decided on the layout and inclusions you want, we will prepare the tender documents and provide a detailed quote for your new home.",
  },
  {
    number: "3",
    title: "Tender Acceptance",
    body: "Once the tender documents are complete and you are happy with the price and inclusions, we will send a formal acceptance and move into the next stages.",
  },
  {
    number: "4",
    title: "Survey and Soil Testing",
    body: "The first step before anything is ordering the Survey report — outlining contours, trees, and easements. The soil report provides detail about the ground conditions required for engineering of your slab.",
  },
  {
    number: "5",
    title: "Plans and Drawings",
    body: "Once the Survey and Engineer's Site Details are received, designers begin drafting the plans and drawings. At this point we will prepare your HIA Building Contract.",
  },
  {
    number: "6",
    title: "Approvals",
    body: "The next step is preparing documents for council approvals — either a Development Application (DA) or a Complying Development Certificate (CDC). Documents required include: completed application, owner's consent, BASIX Certificate, site plans, floor plans, elevations and sections.",
  },
  {
    number: "7",
    title: "HIA Contract",
    body: "We will contact you to read, review and sign the HIA Building Contract to continue moving through the pre-construction phase. This covers tender, survey, plans, approvals and all pre-build requirements.",
  },
];

const constructionStages = [
  {
    title: "Base",
    body: "In the first step, the land will be cleared, levelled and excavated if necessary. Boundaries will be pegged and the slab or footings poured. This is the foundation of your new home.",
  },
  {
    title: "The Frame",
    body: "This stage involves the construction of the structural framework, roof trusses, and rough-in of windows. This will be done progressively across both floors.",
  },
  {
    title: "Lock-up",
    body: "During this stage, windows and doors will be installed and exterior walls completed. At the end of lock-up the house is weather-tight and secure.",
  },
  {
    title: "Fixing",
    body: "At the fixing stage, all fittings, fixtures and appliances will be added. Electrical and plumbing work is completed throughout. This is a significant stage that can take several weeks.",
  },
  {
    title: "Finishing Touches",
    body: "At this stage the builder works on final finishes — painting, installation of flooring, cabinetry, tiles, and final fit-off of all fixtures.",
  },
];

export default function ConstructionProcessPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#222a44] pt-36 pb-16 px-6 text-center">
          <p className="text-[#987642] text-xs tracking-widest uppercase mb-3">Learning</p>
          <h1
            className="text-4xl md:text-6xl font-thin text-white mb-4"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            Understanding the Construction Process
          </h1>
          <div className="w-12 h-[2px] bg-[#987642] mx-auto mt-6" />
        </section>

        {/* Intro */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-2xl md:text-3xl font-light text-[#333] mb-6 leading-relaxed"
              style={{ fontFamily: "var(--font-raleway)" }}
            >
              There isn&apos;t anything quite like the excitement of planning and building a brand new house that is all your own.
            </h2>
            <p className="text-[#666] text-base leading-relaxed">
              Amid the rewards and fun of planning for your brand new home come several important decisions. If you are new to building or simply want a refresher on what to expect, this guide walks you through the key stages of the construction process with Sapphire Premium Homes.
            </p>
          </div>
        </section>

        {/* Pre-Construction */}
        <section className="bg-[#f5f5f5] py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-block border border-[#987642]/50 text-[#987642] text-xs px-4 py-1 rounded-full tracking-widest uppercase mb-4">
                Phase 1
              </div>
              <h2
                className="text-3xl md:text-4xl font-light text-[#222a44]"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                Pre Construction
              </h2>
              <p className="text-[#666] mt-3 text-sm">TENDER STAGE</p>
            </div>

            <div className="space-y-6">
              {preConstructionSteps.map((step) => (
                <div key={step.number} className="bg-white flex gap-6 p-8 border-l-4 border-[#987642]">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#987642] text-white flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                  <div>
                    <h3
                      className="text-lg font-semibold text-[#222a44] mb-2"
                      style={{ fontFamily: "var(--font-raleway)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[#666] text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pre-construction pill steps */}
            <div className="flex flex-wrap gap-3 mt-10 justify-center">
              {["Tender", "Survey", "Plans and Drawings", "Approvals", "HIA Contract"].map((s) => (
                <span key={s} className="bg-[#222a44] text-white text-xs px-5 py-2 rounded-full tracking-wider">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Construction Stages */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-block border border-[#987642]/50 text-[#987642] text-xs px-4 py-1 rounded-full tracking-widest uppercase mb-4">
                Phase 2
              </div>
              <h2
                className="text-3xl md:text-4xl font-light text-[#222a44]"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                Construction
              </h2>
              <p className="text-[#666] mt-3 text-sm leading-relaxed max-w-2xl mx-auto">
                Most Australian builders follow a five-stage building process recommended by the Housing Industry Association (HIA). Before the first slab is poured, initial preparation and approvals must be in place.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {constructionStages.map((stage, i) => (
                <div key={stage.title} className="border border-[#e5e5e5] p-8 hover:border-[#987642] transition-colors group">
                  <div className="w-12 h-12 rounded-full border-2 border-[#987642]/30 group-hover:border-[#987642] flex items-center justify-center text-[#987642] font-bold text-lg mb-4 transition-colors">
                    {i + 1}
                  </div>
                  <h3
                    className="text-lg font-semibold text-[#222a44] mb-3"
                    style={{ fontFamily: "var(--font-raleway)" }}
                  >
                    {stage.title}
                  </h3>
                  <p className="text-[#666] text-sm leading-relaxed">{stage.body}</p>
                </div>
              ))}
            </div>

            {/* Stage pills */}
            <div className="flex flex-wrap gap-3 mt-10 justify-center">
              {["Base", "The Frame", "Lockup", "Fixing", "Practical Completion"].map((s) => (
                <span key={s} className="bg-[#987642] text-white text-xs px-5 py-2 rounded-full tracking-wider">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Post-Build */}
        <section className="bg-[#f5f5f5] py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-block border border-[#987642]/50 text-[#987642] text-xs px-4 py-1 rounded-full tracking-widest uppercase mb-4">
                Phase 3
              </div>
              <h2
                className="text-3xl md:text-4xl font-light text-[#222a44]"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                Post-Build
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 border-l-4 border-[#987642]">
                <h3
                  className="text-xl font-semibold text-[#222a44] mb-3"
                  style={{ fontFamily: "var(--font-raleway)" }}
                >
                  The Inspection
                </h3>
                <p className="text-[#666] text-sm leading-relaxed">
                  Once construction is complete, a date for a Project Completion Inspection (PCI) will be organised. You will walk through the home with the site supervisor to note any defects or items requiring attention before handover.
                </p>
              </div>
              <div className="bg-white p-8 border-l-4 border-[#222a44]">
                <h3
                  className="text-xl font-semibold text-[#222a44] mb-3"
                  style={{ fontFamily: "var(--font-raleway)" }}
                >
                  The Settlement
                </h3>
                <p className="text-[#666] text-sm leading-relaxed">
                  This is the final step before you move into your newly constructed home. You make the final payment and receive the keys. Congratulations — your dream home is ready!
                </p>
              </div>
            </div>

            <div className="bg-[#222a44] text-white p-10 mt-8 text-center">
              <p className="text-white/80 text-sm leading-relaxed max-w-2xl mx-auto mb-2">
                These are all the stages involved in a typical home-construction project in Australia. Consider talking to a financial expert for assistance on the mortgage before you start searching for your new home.
              </p>
              <p className="text-[#987642] text-sm font-semibold mt-4">
                Ready to get started with Sapphire Premium Homes?
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-16 px-6 text-center">
          <h2
            className="text-3xl font-light text-[#333] mb-6"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            Start Your Building Journey Today
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

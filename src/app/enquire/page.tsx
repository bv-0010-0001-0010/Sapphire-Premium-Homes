import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Enquire Now – Sapphire Premium Homes" };

export default function EnquirePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#222a44] pt-32 pb-16 px-6 text-center">
          <h1
            className="text-4xl md:text-6xl font-thin text-white mb-4"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            Enquire Now
          </h1>
          <div className="w-12 h-[2px] bg-[#987642] mx-auto mb-4" />
          <p className="text-white/60 max-w-xl mx-auto">
            Tell us about your dream home and one of our consultants will be in touch shortly.
          </p>
        </section>

        <section className="bg-white py-20 px-6">
          <div className="max-w-2xl mx-auto">
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#333] tracking-wider uppercase mb-2">First Name *</label>
                  <input type="text" required className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#333] focus:outline-none focus:border-[#987642]" placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#333] tracking-wider uppercase mb-2">Last Name *</label>
                  <input type="text" required className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#333] focus:outline-none focus:border-[#987642]" placeholder="Smith" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#333] tracking-wider uppercase mb-2">Email *</label>
                <input type="email" required className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#333] focus:outline-none focus:border-[#987642]" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#333] tracking-wider uppercase mb-2">Phone *</label>
                <input type="tel" required className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#333] focus:outline-none focus:border-[#987642]" placeholder="0400 000 000" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#333] tracking-wider uppercase mb-2">Project Type</label>
                <select className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#333] focus:outline-none focus:border-[#987642] bg-white">
                  <option value="">Select project type</option>
                  <option>Custom Luxury Home</option>
                  <option>Knockdown Rebuild</option>
                  <option>Cost Plus Construction</option>
                  <option>Pool & Spa Construction</option>
                  <option>Interiors</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#333] tracking-wider uppercase mb-2">Budget Range</label>
                <select className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#333] focus:outline-none focus:border-[#987642] bg-white">
                  <option value="">Select budget range</option>
                  <option>Under $1M</option>
                  <option>$1M – $2M</option>
                  <option>$2M – $3M</option>
                  <option>$3M – $5M</option>
                  <option>$5M+</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#333] tracking-wider uppercase mb-2">Message</label>
                <textarea rows={5} className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#333] focus:outline-none focus:border-[#987642] resize-none" placeholder="Tell us about your dream home..." />
              </div>
              <button
                type="submit"
                className="w-full bg-[#987642] text-white py-4 text-sm font-semibold tracking-widest uppercase hover:bg-[#7a5f34] transition-colors"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

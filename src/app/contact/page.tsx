import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = { title: "Contact Us – Sapphire Premium Homes" };

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#222a44] pt-32 pb-16 px-6 text-center">
          <h1
            className="text-4xl md:text-6xl font-thin text-white mb-4"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            Contact Us
          </h1>
          <div className="w-12 h-[2px] bg-[#987642] mx-auto" />
        </section>

        <section className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <div>
              <h2
                className="text-3xl font-light text-[#333] mb-8"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                Get in Touch
              </h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#987642]/50 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#987642" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#333] mb-1">Office</p>
                    <p className="text-[#666]">142 Abell Road, Marsden Park NSW 2765</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#987642]/50 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#987642" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#333] mb-1">Display Home</p>
                    <p className="text-[#666]">3 Basque Street, Box Hill NSW 2765</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#987642]/50 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#987642" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#333] mb-1">Licence / ABN / ACN</p>
                    <p className="text-[#666] text-sm">Licence No. 496063C</p>
                    <p className="text-[#666] text-sm">ABN 30 691 829 044</p>
                    <p className="text-[#666] text-sm">ACN 691 829 044</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#987642]/50 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#987642" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z"/></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#333] mb-1">Phone</p>
                    <a href="tel:1300537000" className="text-[#987642] hover:underline">1300 537 000</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#987642]/50 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#987642" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#333] mb-1">Email</p>
                    <a href="mailto:info@nanakhomes.com.au" className="text-[#987642] hover:underline">info@nanakhomes.com.au</a>
                  </div>
                </div>
              </div>
              <div className="bg-[#f5f5f5] rounded-lg overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.5!2d150.9400!3d-33.7100!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a3b3b3b3b3b3%3A0x0!2s2+Ernesta+Place%2C+Bella+Vista+NSW+2153!5e0!3m2!1sen!2sau!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <h2
                className="text-3xl font-light text-[#333] mb-8"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                Send a Message
              </h2>
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#333] tracking-wider uppercase mb-2">First Name</label>
                    <input type="text" className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#333] focus:outline-none focus:border-[#987642]" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#333] tracking-wider uppercase mb-2">Last Name</label>
                    <input type="text" className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#333] focus:outline-none focus:border-[#987642]" placeholder="Smith" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#333] tracking-wider uppercase mb-2">Email</label>
                  <input type="email" className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#333] focus:outline-none focus:border-[#987642]" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#333] tracking-wider uppercase mb-2">Phone</label>
                  <input type="tel" className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#333] focus:outline-none focus:border-[#987642]" placeholder="0400 000 000" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#333] tracking-wider uppercase mb-2">Message</label>
                  <textarea rows={5} className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#333] focus:outline-none focus:border-[#987642] resize-none" placeholder="Tell us about your project..." />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#987642] text-white py-4 text-sm font-semibold tracking-widest uppercase hover:bg-[#7a5f34] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

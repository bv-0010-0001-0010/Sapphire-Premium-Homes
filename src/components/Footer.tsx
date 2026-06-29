import Link from "next/link";

const quickLinks = [
  { label: "Our Designs", href: "/designs" },
  { label: "Ultimate Inclusions and Specifications", href: "/enquire" },
  { label: "Signature Inclusions and Specifications", href: "/enquire" },
  { label: "Refer a friend promotion", href: "/contact" },
  { label: "Knockdown Rebuild", href: "/enquire" },
  { label: "Construction Process", href: "/contact" },
];

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/SapphirePremiumHomes", icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/nanak-cons", icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
  { label: "Instagram", href: "https://www.instagram.com/sapphirepremiumhomes", icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
  { label: "Pinterest", href: "https://www.pinterest.com.au/jass3186/nanak-luxury-homes/", icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg> },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCBXjPWicD4pDd68eyZa5dmQ", icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg> },
];

export default function Footer() {
  return (
    <footer className="bg-[#222a44] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1 - Address + Logo */}
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase mb-6 text-[#987642]">
            Display Home and OFFICE
          </h4>
          <div className="flex items-start gap-4 mb-5">
            <div className="w-10 h-10 rounded-full border border-[#987642]/50 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#987642" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <p className="text-white/70 text-sm leading-relaxed font-semibold text-white/90">Office</p>
              <p className="text-white/70 text-sm leading-relaxed">142 Abell Road, Marsden Park NSW 2765</p>
            </div>
          </div>
          <div className="flex items-start gap-4 mb-5">
            <div className="w-10 h-10 rounded-full border border-[#987642]/50 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#987642" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <p className="text-white/70 text-sm leading-relaxed font-semibold text-white/90">Display Home</p>
              <p className="text-white/70 text-sm leading-relaxed">3 Basque Street, Box Hill NSW 2765</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-full border border-[#987642]/50 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#987642" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z"/></svg>
            </div>
            <p className="text-white/70 text-sm">1300 537 000</p>
          </div>
          {/* Logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-footer.png"
            alt="Sapphire Premium Homes"
            width={180}
            height={90}
            className="h-20 w-auto object-contain"
          />
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase mb-6 text-[#987642]">
            QUICK LINKS
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-white/70 text-sm hover:text-[#987642] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - About Us */}
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase mb-6 text-[#987642]">
            ABOUT US
          </h4>
          <p className="text-white/70 text-sm leading-relaxed">
            We are Sydney&apos;s Premier builder specializing in various types of residential
            construction. Sapphire Premium Homes offers a wide range of option for your construction
            needs, including new construction, Knockdown rebuilds (KDR), Duplexes, Villas, and
            Townhouses. Honesty and Integrity are an integral part of everything we do. Our
            director has been in the property industry for the last 20 years and built his
            reputation for honesty, integrity, and prompt service.
          </p>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social icons */}
          <div className="flex gap-2">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/30 flex items-center justify-center text-white/70 hover:border-[#987642] hover:text-[#987642] transition-colors"
              >
                {s.icon}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-white/50 text-xs text-center">
            © Copyright Sapphire Premium Homes Pty Ltd | ABN 30 691 829 044 | ACN 691 829 044 | Licence No. 496063C
          </p>

        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";

const inclusions = [
  { label: "Luxury Home Inclusions", image: "/images/inclusion-luxury.png", href: "/enquire" },
  { label: "Signature Home Inclusions", image: "/images/inclusion-signature.png", href: "/enquire" },
  { label: "Ultimate Home Inclusions", image: "/images/inclusion-ultimate.png", href: "/enquire" },
];

export default function InclusionsSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-5xl md:text-7xl lg:text-8xl font-thin text-[#333] uppercase tracking-wide mb-10"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            OUR STANDARD INCLUSIONS
          </h2>
          <p className="text-[#666] max-w-4xl mx-auto leading-relaxed mb-6">
            Sapphire Premium Homes offers the highest standard inclusions in Sydney, providing exceptional quality and
            value in every build. We include almost everything upfront, from premium materials to top-tier finishes,
            ensuring that your home is equipped with the finest features. This transparent approach means you know
            exactly what&apos;s included in your project, with no hidden surprises. The only costs left to be
            determined are those influenced by site-specific factors or any custom changes you may request.
          </p>
          <p className="text-[#666] max-w-3xl mx-auto leading-relaxed mb-4">
            At Sapphire Premium Homes, we aim to deliver a seamless, stress-free experience, allowing you to focus on
            creating your perfect luxury home.
          </p>
          <p className="text-[#666]">
            Feel free to explore or call us on{" "}
            <a href="tel:0400288799" className="text-[#987642] hover:underline">
              0400 288 799
            </a>{" "}
            to discuss.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {inclusions.map((inc) => (
            <Link key={inc.label} href={inc.href} className="group flex justify-center">
              <div className="relative w-full max-w-[320px] aspect-[759/700] group-hover:scale-105 transition-transform duration-500">
                <Image
                  src={inc.image}
                  alt={inc.label}
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

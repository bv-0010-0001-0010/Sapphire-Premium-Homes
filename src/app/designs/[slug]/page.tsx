import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const designs = [
  { slug: "76-squares-display-home", title: "76 Squares – Display Home", beds: 5, baths: 5, cars: 3, area: "76 sq", image: "/images/hero-1.jpg", desc: "Our stunning 76 square display home showcases Sapphire Premium Homes' commitment to excellence. Featuring soaring ceilings, premium finishes, and a thoughtfully designed floor plan, this home sets the benchmark for luxury living in Sydney." },
  { slug: "100-squares-double-storey", title: "100 Squares Double Storey", beds: 6, baths: 7, cars: 3, area: "100 sq", image: "/images/portfolio-bella-vista.jpg", desc: "A magnificent 100 square double storey residence designed for the discerning family. Generous living spaces, designer kitchen, and resort-style outdoor entertaining area." },
  { slug: "190-squares-modern-mansion", title: "190 Squares Modern Mansion", beds: 10, baths: 11, cars: 6, area: "190 sq", image: "/images/hero-2.jpg", desc: "The ultimate modern mansion spanning 190 squares of pure luxury. Designed for the elite, this masterpiece features a home cinema, wine cellar, wellness retreat, and breathtaking architectural lines." },
  { slug: "220-squares-modern-mansion", title: "220 Squares Modern Mansion", beds: 10, baths: 12, cars: 12, area: "220 sq", image: "/images/portfolio-north-kellyville.jpg", desc: "Australia's most ambitious residential design at 220 squares. This extraordinary mansion redefines luxury with its sweeping proportions, bespoke interiors, and unmatched attention to detail." },
  { slug: "200-squares-french-provincial", title: "200 Squares French Provincial Mansion", beds: 10, baths: 10, cars: 5, area: "200 sq", image: "/images/hero-3.jpg", desc: "A timeless French Provincial mansion blending European elegance with contemporary living. Stone façade, arched windows, and formal gardens create an estate of unrivalled grandeur." },
  { slug: "150-squares-french-provincial", title: "150 Squares French Provincial Mansion", beds: 8, baths: 10, cars: 3, area: "150 sq", image: "/images/portfolio-north-rocks.jpg", desc: "Classic French Provincial design at 150 squares. Featuring coffered ceilings, herringbone timber floors, and a gourmet kitchen worthy of a Michelin-starred chef." },
  { slug: "75-squares-double-storey", title: "75 Squares Double Storey", beds: 5, baths: 6, cars: 2, area: "75 sq", image: "/images/portfolio-glenhaven.jpg", desc: "A beautifully appointed 75 square double storey home perfect for growing families. Intelligent floor plan design maximises every square metre without compromising on luxury." },
  { slug: "52-squares-double-storey", title: "52 Squares Double Storey", beds: 4, baths: 3, cars: 2, area: "52 sq", image: "/images/hero-4.jpg", desc: "Compact luxury at its finest. This 52 square double storey home proves that exceptional quality knows no size limits, with premium inclusions throughout." },
  { slug: "68-squares-double-storey", title: "68 Squares Double Storey", beds: 5, baths: 5, cars: 3, area: "68 sq", image: "/images/hero-5.jpg", desc: "The 68 square double storey design strikes the perfect balance between spaciousness and efficiency, featuring a flexible floor plan adaptable to your family's needs." },
];

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return designs.map((d) => ({ slug: d.slug }));
}

export default async function DesignPage({ params }: Props) {
  const { slug } = await params;
  const design = designs.find((d) => d.slug === slug);
  if (!design) notFound();

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#222a44] pt-32 pb-16 px-6 text-center">
          <p className="text-[#987642] text-xs tracking-widest uppercase mb-3">Our Designs</p>
          <h1 className="text-3xl md:text-5xl font-thin text-white mb-4" style={{ fontFamily: "var(--font-raleway)" }}>
            {design.title}
          </h1>
          <div className="w-12 h-[2px] bg-[#987642] mx-auto" />
        </section>

        <section className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative h-[420px]">
              <Image src={design.image} alt={design.title} fill className="object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-6 text-[#666] mb-8 pb-8 border-b border-[#eee]">
                {[["Beds", design.beds], ["Baths", design.baths], ["Cars", design.cars], ["Area", design.area]].map(([label, val]) => (
                  <div key={label as string} className="text-center">
                    <p className="text-2xl font-light text-[#987642]">{val}</p>
                    <p className="text-xs uppercase tracking-widest text-[#999]">{label}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#555] leading-relaxed mb-8">{design.desc}</p>
              <div className="flex gap-4">
                <Link href="/enquire" className="inline-block bg-[#987642] text-white px-8 py-3 text-sm font-semibold tracking-widest uppercase hover:bg-[#7a5f34] transition-colors">
                  Enquire Now
                </Link>
                <Link href="/designs" className="inline-block border border-[#333] text-[#333] px-8 py-3 text-sm font-semibold tracking-widest uppercase hover:bg-[#333] hover:text-white transition-colors">
                  All Designs
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const projects = [
  {
    slug: "bella-vista",
    title: "Bella Vista",
    location: "Bella Vista, NSW",
    category: "Custom Luxury Home",
    image: "/images/portfolio-bella-vista.jpg",
    desc: "A spectacular custom luxury home in the prestigious Hills District. This Bella Vista masterpiece features a grand entry with double-height ceiling, resort-style pool, home theatre, and impeccable entertainer's kitchen. Every element was crafted to the client's exact specifications.",
    specs: { beds: 7, baths: 6, cars: 4, area: "85 sq" },
  },
  {
    slug: "north-kellyville",
    title: "North Kellyville",
    location: "North Kellyville, NSW",
    category: "Custom Luxury Home",
    image: "/images/portfolio-north-kellyville.jpg",
    desc: "A contemporary masterpiece in North Kellyville combining clean architectural lines with warm natural materials. Features a seamless indoor-outdoor flow, statement staircase, and a chef's kitchen with butler's pantry.",
    specs: { beds: 6, baths: 5, cars: 3, area: "72 sq" },
  },
  {
    slug: "glenhaven",
    title: "Glenhaven",
    location: "Glenhaven, NSW",
    category: "Custom Luxury Home",
    image: "/images/portfolio-glenhaven.jpg",
    desc: "Nestled in the leafy suburb of Glenhaven, this bespoke residence is a study in understated luxury. Wraparound verandahs, a billiard room, and a stunning alfresco area make this the ultimate family sanctuary.",
    specs: { beds: 5, baths: 4, cars: 3, area: "65 sq" },
  },
  {
    slug: "north-rocks",
    title: "North Rocks",
    location: "North Rocks, NSW",
    category: "Knockdown Rebuild",
    image: "/images/portfolio-north-rocks.jpg",
    desc: "A stunning knockdown rebuild in North Rocks that transformed an ageing property into a modern luxury residence. The result is a home that perfectly suits the family's lifestyle while maximising the potential of this outstanding location.",
    specs: { beds: 5, baths: 4, cars: 2, area: "52 sq" },
  },
];

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function PortfolioPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#222a44] pt-32 pb-16 px-6 text-center">
          <p className="text-[#987642] text-xs tracking-widest uppercase mb-3">{project.category}</p>
          <h1 className="text-3xl md:text-5xl font-thin text-white mb-2" style={{ fontFamily: "var(--font-raleway)" }}>
            {project.title}
          </h1>
          <p className="text-white/50 text-sm">{project.location}</p>
          <div className="w-12 h-[2px] bg-[#987642] mx-auto mt-4" />
        </section>

        <section className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="relative h-[500px] mb-12">
              <Image src={project.image} alt={project.title} fill className="object-cover" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-light text-[#333] mb-6" style={{ fontFamily: "var(--font-raleway)" }}>About this Project</h2>
                <p className="text-[#555] leading-relaxed mb-8">{project.desc}</p>
                <Link href="/enquire" className="inline-block bg-[#987642] text-white px-8 py-3 text-sm font-semibold tracking-widest uppercase hover:bg-[#7a5f34] transition-colors">
                  Start Your Project
                </Link>
              </div>
              <div className="bg-[#f5f5f5] p-8">
                <h3 className="text-sm font-semibold tracking-widest uppercase text-[#333] mb-6">Project Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[["Bedrooms", project.specs.beds], ["Bathrooms", project.specs.baths], ["Car Spaces", project.specs.cars], ["Area", project.specs.area]].map(([label, val]) => (
                    <div key={label as string} className="bg-white p-4">
                      <p className="text-2xl font-light text-[#987642]">{val}</p>
                      <p className="text-xs uppercase tracking-widest text-[#999] mt-1">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

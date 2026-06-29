import Image from "next/image";

export default function UniqueDesignsSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2
          className="text-2xl md:text-4xl lg:text-6xl font-light text-[#444] uppercase tracking-wide mb-2"
          style={{ fontFamily: "var(--font-raleway)" }}
        >
          OUR UNIQUE DESIGNS
        </h2>
        <div className="w-12 h-[2px] bg-[#987642] mx-auto mt-4 mb-8" />
        <p className="text-[#444] text-base md:text-lg leading-relaxed">
          At Sapphire Premium Homes, our unique designs set us apart by blending innovation, functionality, and timeless
          elegance. We believe a home should reflect your personality and lifestyle, which is why we craft each design
          with attention to detail and a fresh perspective. From contemporary facades to thoughtfully planned
          interiors, our designs combine aesthetic appeal with practical living solutions. We don&apos;t just build
          houses—we create inspiring spaces that stand the test of time. With a strong focus on quality, creativity,
          and individuality, our design approach ensures every home is as unique as the family who lives in it.
          Experience the difference with us.
        </p>
      </div>

      {/* 2-column video grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <VideoCard
          poster="/images/inclusions-1.jpg"
          label="LUXURIOUS BATHROOM"
          embedId="dQw4w9WgXcQ"
        />
        <VideoCard
          poster="/images/inclusions-3.jpg"
          label="WIDE & OPEN"
          embedId="dQw4w9WgXcQ"
        />
      </div>
    </section>
  );
}

function VideoCard({ poster, label, embedId }: { poster: string; label: string; embedId: string }) {
  return (
    <div className="relative aspect-video group cursor-pointer overflow-hidden">
      <Image src={poster} alt={label} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-black/60 rounded-full flex items-center justify-center group-hover:bg-[#987642] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 text-white text-xs tracking-widest font-bold">
        {label}
      </div>
    </div>
  );
}

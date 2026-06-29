import Image from "next/image";

const features = [
  {
    icon: "/images/icon-custom.png",
    title: "CUSTOM DESIGNED HOMES",
    desc: "Our homes are designed to keep your requirement in mind. You get the flexibility to choose finishes.",
  },
  {
    icon: "/images/icon-quality.png",
    title: "QUALITY CONTROL AT EACH STAGE",
    desc: "Our rigorous quality control process ensures every home is built to the highest standards. We hire only experienced tradespersons.",
  },
  {
    icon: "/images/icon-handover.png",
    title: "POST HANDOVER PROCESS",
    desc: "We make sure that house is free of defects and will attend to any issues promptly if they appear after handover.",
  },
  {
    icon: "/images/icon-custom.png",
    title: "NLH DIFFERENCE",
    desc: "Personalised experience and care of a family owned builder. We earned reputation of honest builder in our industry.",
  },
  {
    icon: "/images/icon-quality.png",
    title: "SIMPLE AND EASY TO UNDERSTAND TENDER",
    desc: "Double glazed windows, 80mm benchtops, LED Downlights, flooring, and driveway have all been included in our tender.",
  },
  {
    icon: "/images/icon-handover.png",
    title: "PERSONALISED EXPERIENCE",
    desc: "Every dream home starts with you and we will make your family feel happy at home. Each client has a dedicated contact.",
  },
  {
    icon: "/images/icon-custom.png",
    title: "CUSTOM HOMES TO SUIT YOUR NEEDS",
    desc: "At Sapphire Premium Homes, each house is a special project. We build quality custom homes to suit your lifestyle.",
  },
  {
    icon: "/images/icon-quality.png",
    title: "ENVIRONMENT FRIENDLY HOMES",
    desc: "All our designs and builds focus on energy saving with features like double glazed windows and roof insulation.",
  },
  {
    icon: "/images/icon-handover.png",
    title: "PEACE OF MIND",
    desc: "We build our reputation for honesty, integrity and quality. With premium inclusions as standard, find peace of mind.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="bg-[#f0f0f0] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-xl md:text-3xl font-light text-[#333] uppercase tracking-wide mb-3"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            THIS IS WHAT WE DOING
          </h2>
          <div className="w-16 h-[3px] bg-[#987642] mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white p-8 flex flex-col items-center text-center">
              <div className="w-24 h-24 relative mb-6 flex-shrink-0">
                <Image src={f.icon} alt={f.title} fill className="object-contain" />
              </div>
              <h4
                className="text-lg font-bold text-[#1c1c1c] uppercase tracking-wide mb-4 leading-tight"
                style={{ fontFamily: "var(--font-raleway)" }}
              >
                {f.title}
              </h4>
              <p className="text-[#666] text-sm leading-relaxed text-center">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

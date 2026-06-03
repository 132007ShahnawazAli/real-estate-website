import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote: "Unrivaled customer service, cutting edge design and quality. Fluid Glass is firmly lodged in our list of preferred suppliers of glazing products.",
    name: "Vaidas Vileikis",
    role: "FOUNDER, NAME ARCHITECTS",
    image: "/testimonial-1.png",
  }
];

export default function Testimonials() {
  const currentTestimonial = testimonials[0];

  return (
    <section className="w-full bg-slate-100 py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1440px] mx-auto">

        {/* Top Navigation Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 md:mb-32 space-y-8 md:space-y-0 relative">

          {/* Section Title */}
          <div className="flex items-center gap-2 select-none">
            <div className="h-2 w-2 bg-violet-500 shrink-0" />
            <span className="text-base font-mono uppercase text-slate-900">
              CLIENT STORIES
            </span>
          </div>

          {/* Pagination Counter */}
          <div className="text-sm md:text-base font-mono text-slate-400 tracking-widest md:absolute md:left-1/2 md:-translate-x-1/2">
            <span className="text-slate-900">01</span> / 05
          </div>

          {/* Navigation Buttons */}
          <div className="flex space-x-2">
            <button className="w-12 h-12 md:w-14 md:h-14 border border-zinc-900/10 flex items-center justify-center hover:bg-zinc-900/5 transition-colors duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-900">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" />
              </svg>
            </button>
            <button className="w-12 h-12 md:w-14 md:h-14 border border-zinc-900/10 flex items-center justify-center hover:bg-zinc-900/5 transition-colors duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-900">
                <path d="M5 12h14M19 12l-7 7M19 12l-7-7" />
              </svg>
            </button>
          </div>

        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-start">

          {/* Image */}
          <div className="lg:col-span-3 xl:col-span-2 flex justify-start">
            <div className="relative w-full max-w-[280px] aspect-4/5 bg-gray-200">
              <Image
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                fill
                className="object-cover grayscale"
              />
            </div>
          </div>

          {/* Quote Content */}
          <div className="lg:col-span-9 xl:col-span-10 relative lg:-mt-2">
            <div className="absolute -top-12 -left-8 md:-top-16 md:-left-16 text-7xl md:text-9xl font-serif leading-none text-slate-900 opacity-10">
              “
            </div>
            <h3 className="text-3xl md:text-5xl lg:text-6xl xl:text-[68px] leading-[1.05] text-slate-900 font-normal font-sans tracking-tight mb-16 relative z-10 max-w-[42ch]">
              {currentTestimonial.quote}
            </h3>

            <div className="space-y-2">
              <p className="text-xl md:text-[22px] font-medium font-sans text-slate-900">
                {currentTestimonial.name}
              </p>
              <p className="text-xs font-mono uppercase tracking-widest text-slate-500">
                {currentTestimonial.role}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

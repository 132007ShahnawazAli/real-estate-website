import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

export default function FeaturedProjects() {
  return (
    <section className="relative w-full bg-white text-zinc-950 px-6 sm:px-12 md:px-16 lg:px-20 py-24 md:py-32 font-sans select-none z-20 flex flex-col gap-16 md:gap-24">
      <div className="w-full flex flex-col items-start gap-8 max-w-4xl pt-4">
        <div className="flex items-center gap-2 font-spline text-xs text-zinc-900 select-none">
          <div className="h-2 w-2 bg-black"></div>
          <span className="text-base font-mono uppercase">FEATURED PROJECTS</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-zinc-950 font-sans">
          Privacy, space and comfort <br /> in perfect harmony.
        </h2>

        <Button label="GET A QUOTE" />
      </div>

      <div className="flex flex-col md:flex-row w-full justify-between items-end gap-10 md:gap-16">
        <div className="w-full md:w-[45%]">
          <div className="relative w-full aspect-square md:aspect-4/3 overflow-hidden bg-zinc-100 border border-zinc-200/50">
            <Image
              src="/casa-terracotta.jpg"
              alt="Casa Terracotta Premium Residence"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="w-full md:w-[45%] pb-4">
          <div className="flex items-center gap-2 font-spline text-xs text-zinc-600 select-none mb-4">
            <div className="h-2 w-2 bg-black"></div>
            <span className="text-sm font-mono font-medium">Königswinter, Germany</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-normal text-zinc-950 font-sans mb-4">
            Casa Terracotta
          </h3>

          <p className="text-base sm:text-lg font-medium text-zinc-700 font-sans mb-8">
            Our glazing collection is defined by exceptional craftsmanship, refined design, and enduring quality. Made for bold architecture and uncompromising vision.
          </p>

          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center gap-3 font-spline text-sm text-zinc-900 select-none">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_696_83)">
                  <path d="M3 14.7083V9.16667H3.79167V6H16.4583V9.16667H17.25V14.7083H16.4583V13.125H3.79167V14.7083H3ZM10.5208 9.16667H15.6667V6.79167H10.5208V9.16667ZM4.58333 9.16667H9.72917V6.79167H4.58333V9.16667Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_696_83">
                    <rect width="19" height="19" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span className="font-mono">2 Bedrooms</span>
            </div>

            <div className="flex items-center gap-3 font-spline text-sm text-zinc-900 select-none">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_696_87)">
                  <path d="M4.78879 7.61821C4.56026 7.38863 4.446 7.1126 4.446 6.79013C4.446 6.45921 4.56026 6.17606 4.78879 5.94067C5.01785 5.70528 5.29942 5.58759 5.6335 5.58759C5.96706 5.58759 6.24836 5.70449 6.47742 5.9383C6.70647 6.1721 6.821 6.45367 6.821 6.783C6.821 7.11234 6.70647 7.391 6.47742 7.619C6.24836 7.847 5.96706 7.96153 5.6335 7.96259C5.29994 7.96364 5.01837 7.84885 4.78879 7.61821ZM3.65354 16.625V15.8033H2.375V10.9614H4.446V10.3526C4.446 9.94254 4.58956 9.58893 4.87667 9.29179C5.16378 8.99466 5.51211 8.84582 5.92167 8.84529C6.1655 8.84529 6.39456 8.90071 6.60883 9.01154C6.82311 9.12238 7.01258 9.27016 7.17725 9.45488L7.98079 10.3922C8.08635 10.5009 8.18847 10.6025 8.28717 10.697C8.38586 10.7915 8.49485 10.8796 8.61412 10.9614H14.25V4.26709C14.25 3.97048 14.151 3.71318 13.9531 3.49521C13.7552 3.27724 13.5132 3.16773 13.2272 3.16667C13.0905 3.16667 12.9596 3.1957 12.8345 3.25375C12.7094 3.31234 12.5986 3.38992 12.502 3.4865L11.5124 4.49905C11.5784 4.72863 11.5916 4.95478 11.552 5.1775C11.5124 5.40023 11.4333 5.6087 11.3145 5.80292L9.68525 4.13488C9.86997 4.01296 10.0679 3.93511 10.279 3.90134C10.4901 3.86756 10.7012 3.89131 10.9123 3.97259L11.9019 2.95609C12.0787 2.774 12.2803 2.6315 12.5068 2.52859C12.7332 2.42567 12.9733 2.37448 13.2272 2.375C13.7365 2.375 14.1663 2.55973 14.5168 2.92917C14.8672 3.29862 15.0422 3.74432 15.0417 4.2663V10.9614H16.625V15.8033H15.3457V16.625H3.65354ZM3.16667 15.0116H15.8333V11.7531H3.16667V15.0116Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_696_87">
                    <rect width="19" height="19" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span className="font-mono">2 Bathrooms</span>
            </div>

            <div className="flex items-center gap-3 font-spline text-sm text-zinc-900 select-none">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_696_91)">
                  <path d="M17.8125 10.6875H19V17.8125H0V1.1875H16.625V5.9375H17.8125V10.6875ZM1.1875 16.625H5.9375V5.9375H15.4375V2.375H1.1875V16.625ZM7.125 16.625H11.875V10.6875H16.625V7.125H7.125V16.625ZM17.8125 16.625V11.875H13.0625V16.625H17.8125Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_696_91">
                    <rect width="19" height="19" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span className="font-mono">1,000sqft</span>
            </div>
          </div>

          <Button label="Project Overview" />
        </div>
      </div>
    </section>
  );
}

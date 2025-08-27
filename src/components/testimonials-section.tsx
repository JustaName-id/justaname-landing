"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function TestimonialsSection() {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation();
  const { ref: leftColumnRef, isInView: leftColumnInView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });
  const { ref: rightColumnRef, isInView: rightColumnInView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });

  return (
    <section className="px-5 py-10  w-full bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <div className="flex flex-col gap-5 items-center py-2.5 lg:py-10 w-full">
          <h2
            ref={titleRef}
            className={`text-3xl lg:text-4xl font-normal text-zinc-900 text-center leading-tight lg:leading-[48px] transition-all duration-800 ease-out ${titleInView
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
              }`}
          >
            Testimonials
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
          {/* Left Column */}
          <div
            ref={leftColumnRef}
            className={`flex flex-col gap-5 transition-all duration-800 ease-out ${leftColumnInView
              ? 'opacity-100 transform translate-x-0'
              : 'opacity-0 transform -translate-x-8'
              }`}
            style={{ transitionDelay: leftColumnInView ? '100ms' : '0ms' }}
          >
            {/* M Tweet */}
            <div className=" overflow-hidden relative">
              <Image
                src="/tweets/m.webp"
                alt="M testimonial"
                width={600}
                height={220}
                className="w-full h-auto"
              />
            </div>

            {/* ENS DAO Tweet */}
            <div className=" overflow-hidden relative">
              <Image
                src="/tweets/ensdao.webp"
                alt="ENS DAO testimonial"
                width={600}
                height={220}
                className="w-full h-auto"
              />
            </div>

            {/* Yodl Tweet */}
            <div className=" overflow-hidden relative">
              <Image
                src="/tweets/yodl.webp"
                alt="Yodl testimonial"
                width={600}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column */}
          <div
            ref={rightColumnRef}
            className={`flex flex-col gap-5 transition-all duration-800 ease-out ${rightColumnInView
              ? 'opacity-100 transform translate-x-0'
              : 'opacity-0 transform translate-x-8'
              }`}
            style={{ transitionDelay: rightColumnInView ? '200ms' : '0ms' }}
          >
            {/* Peanut Tweet */}
            <div className=" overflow-hidden relative">
              <Image
                src="/tweets/peanut.webp"
                alt="Peanut Protocol testimonial"
                width={600}
                height={450}
                className="w-full h-auto"
              />
            </div>

            {/* Balaji Tweet */}
            <div className=" overflow-hidden relative">
              <Image
                src="/tweets/balaji.webp"
                alt="Balaji testimonial"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
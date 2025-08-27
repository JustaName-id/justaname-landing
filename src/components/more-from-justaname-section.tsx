"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function MoreFromJustaNameSection() {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation();
  const { ref: card1Ref, isInView: card1InView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });
  const { ref: card2Ref, isInView: card2InView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });
  const { ref: card3Ref, isInView: card3InView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });
  const { ref: card4Ref, isInView: card4InView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });

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
            More from JustaName
          </h2>
        </div>

        <div className="flex flex-col gap-6 w-full">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ENSvolution */}
            <Link
              ref={card1Ref}
              href={siteConfig.ensvolution}
              target="_blank"
              rel="noopener noreferrer"
              className={`border border-zinc-200 rounded-md p-5 flex flex-col gap-5 hover:shadow-lg transition-all duration-800 ease-out cursor-pointer ${card1InView
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-8'
                }`}
              style={{ transitionDelay: card1InView ? '100ms' : '0ms' }}
            >
              <div className="h-[300px] lg:h-[400px] rounded overflow-hidden relative">
                <Image
                  src="/more/ensvolution.webp"
                  alt="ENSvolution"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-lg lg:text-xl font-bold text-zinc-900 leading-7">
                  ENSvolution
                </h3>
              </div>
            </Link>

            {/* Letstalk.wtf */}
            <Link
              ref={card2Ref}
              href={siteConfig.letstalk}
              target="_blank"
              rel="noopener noreferrer"
              className={`border border-zinc-200 rounded-md p-5 flex flex-col gap-5 hover:shadow-lg transition-all duration-800 ease-out cursor-pointer ${card2InView
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-8'
                }`}
              style={{ transitionDelay: card2InView ? '200ms' : '0ms' }}
            >
              <div className="h-[300px] lg:h-[400px] rounded overflow-hidden relative">
                <Image
                  src="/more/letstalk.webp"
                  alt="Letstalk.wtf"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-lg lg:text-xl font-bold text-zinc-900 leading-7">
                  Letstalk.wtf
                </h3>
              </div>
            </Link>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Explorer */}
            <Link
              ref={card3Ref}
              href={siteConfig.explorer}
              target="_blank"
              rel="noopener noreferrer"
              className={`border border-zinc-200 rounded-md p-5 flex flex-col gap-5 hover:shadow-lg transition-all duration-800 ease-out cursor-pointer ${card3InView
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-8'
                }`}
              style={{ transitionDelay: card3InView ? '300ms' : '0ms' }}
            >
              <div className="h-[300px] lg:h-[400px] rounded overflow-hidden relative">
                <Image
                  src="/more/explorer.webp"
                  alt="Explorer"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-lg lg:text-xl font-bold text-zinc-900 leading-7">
                  Explorer
                </h3>
              </div>
            </Link>

            {/* Chrome Extension for X */}
            <Link
              ref={card4Ref}
              href={siteConfig.chromeExtension}
              target="_blank"
              rel="noopener noreferrer"
              className={`border border-zinc-200 rounded-md p-5 flex flex-col gap-5 hover:shadow-lg transition-all duration-800 ease-out cursor-pointer ${card4InView
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-8'
                }`}
              style={{ transitionDelay: card4InView ? '400ms' : '0ms' }}
            >
              <div className="h-[300px] lg:h-[400px] rounded overflow-hidden relative">
                <Image
                  src="/more/chrome.webp"
                  alt="Chrome Extension for X"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-lg lg:text-xl font-bold text-zinc-900 leading-7">
                  Chrome Extension for X
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

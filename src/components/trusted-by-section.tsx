"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function TrustedBySection() {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation({ rootMargin: "0px 0px -100px 0px" });
  const { ref: logo1Ref, isInView: logo1InView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });
  const { ref: logo2Ref, isInView: logo2InView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });
  const { ref: logo3Ref, isInView: logo3InView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });
  const { ref: logo4Ref, isInView: logo4InView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });
  const { ref: logo5Ref, isInView: logo5InView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });
  const { ref: logo6Ref, isInView: logo6InView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });
  const { ref: logo7Ref, isInView: logo7InView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });
  const { ref: logo8Ref, isInView: logo8InView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });
  const { ref: logo9Ref, isInView: logo9InView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });
  const { ref: badgeRef, isInView: badgeInView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });

  return (
    <section className="flex flex-col gap-6 items-center justify-center px-5 py-10 w-full bg-[url('/trusted/section-bg.webp')] bg-cover bg-center">
      <h2
        ref={titleRef}
        className={`text-2xl sm:text-3xl lg:text-4xl font-normal text-center text-zinc-900 max-w-7xl transition-all duration-800 ease-out ${titleInView
          ? 'opacity-100 transform translate-y-0'
          : 'opacity-0 transform translate-y-8'
          }`}
      >
        Trusted by Forward-Thinking Teams in the Web3 Ecosystem
      </h2>

      <div className="flex flex-col gap-8 lg:gap-10 items-center justify-center w-full max-w-7xl">
        {/* First row of logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 items-center justify-items-center w-full">
          <div
            ref={logo1Ref}
            className={`relative h-12 lg:h-16 w-32 lg:w-48 transition-all duration-800 ease-out ${logo1InView
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
              }`}
            style={{ transitionDelay: logo1InView ? '100ms' : '0ms' }}
          >
            <Image
              src="/trusted/yodl.webp"
              alt="Yodl"
              fill
              sizes="(max-width: 768px) 160px, 192px"
              className="object-contain"
            />
          </div>
          <div
            ref={logo2Ref}
            className={`relative h-12 lg:h-16 w-32 lg:w-48 transition-all duration-800 ease-out ${logo2InView
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
              }`}
            style={{ transitionDelay: logo2InView ? '200ms' : '0ms' }}
          >
            <Image
              src="/trusted/peanut.webp"
              alt="Peanut"
              fill
              sizes="(max-width: 768px) 160px, 192px"
              className="object-contain"
            />
          </div>
          <div
            ref={logo3Ref}
            className={`relative h-12 lg:h-16 w-32 lg:w-48 transition-all duration-800 ease-out ${logo3InView
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
              }`}
            style={{ transitionDelay: logo3InView ? '300ms' : '0ms' }}
          >
            <Image
              src="/trusted/aurora.webp"
              alt="Aurora"
              fill
              sizes="(max-width: 768px) 160px, 192px"
              className="object-contain"
            />
          </div>
          <div
            ref={logo4Ref}
            className={`relative h-12 lg:h-14 w-32 lg:w-44 transition-all duration-800 ease-out ${logo4InView
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
              }`}
            style={{ transitionDelay: logo4InView ? '400ms' : '0ms' }}
          >
            <Image
              src="/trusted/ipe-city.webp"
              alt="IPE city"
              fill
              sizes="(max-width: 768px) 128px, 176px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Second row of logos */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-10 items-center justify-items-center w-full">
          <div
            ref={logo5Ref}
            className={`relative h-12 lg:h-20 w-36 lg:w-64 transition-all duration-800 ease-out ${logo5InView
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
              }`}
            style={{ transitionDelay: logo5InView ? '500ms' : '0ms' }}
          >
            <Image
              src="/trusted/bga.webp"
              alt="Blockchain Alliance"
              fill
              sizes="(max-width: 768px) 144px, 256px"
              className="object-contain"
            />
          </div>
          <div
            ref={logo6Ref}
            className={`relative h-12 lg:h-16 w-28 lg:w-36 transition-all duration-800 ease-out ${logo6InView
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
              }`}
            style={{ transitionDelay: logo6InView ? '600ms' : '0ms' }}
          >
            <Image
              src="/trusted/efp.webp"
              alt="Ethereum Follow Protocol"
              fill
              sizes="(max-width: 768px) 112px, 144px"
              className="object-contain"
            />
          </div>
          <div
            ref={logo7Ref}
            className={`relative h-12 lg:h-14 w-32 lg:w-48 transition-all duration-800 ease-out ${logo7InView
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
              }`}
            style={{ transitionDelay: logo7InView ? '700ms' : '0ms' }}
          >
            <Image
              src="/trusted/xmtp.webp"
              alt="XMTP"
              fill
              sizes="(max-width: 768px) 128px, 192px"
              className="object-contain"
            />
          </div>
          <div
            ref={logo8Ref}
            className={`relative h-12 lg:h-16 w-36 lg:w-52 transition-all duration-800 ease-out ${logo8InView
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
              }`}
            style={{ transitionDelay: logo8InView ? '800ms' : '0ms' }}
          >
            <Image
              src="/trusted/talent-protocol.webp"
              alt="Talent Protocol"
              fill
              sizes="(max-width: 768px) 144px, 208px"
              className="object-contain"
            />
          </div>
          <div
            ref={logo9Ref}
            className={`relative h-12 lg:h-16 w-12 lg:w-16 transition-all duration-800 ease-out ${logo9InView
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
              }`}
            style={{ transitionDelay: logo9InView ? '900ms' : '0ms' }}
          >
            <Image
              src="/trusted/web3bio.webp"
              alt="Web3.bio"
              fill
              sizes="(max-width: 768px) 48px, 64px"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* ENS Service Provider Badge */}
      <div
        ref={badgeRef}
        className={`bg-blue-400 flex flex-col sm:flex-row gap-4 lg:gap-5 items-center justify-center px-4 lg:px-6 py-4 lg:py-6 rounded-xl w-full max-w-7xl mt-4 transition-all duration-800 ease-out ${badgeInView
          ? 'opacity-100 transform translate-y-0'
          : 'opacity-0 transform translate-y-8'
          }`}
        style={{ transitionDelay: badgeInView ? '1000ms' : '0ms' }}
      >
        <span className="text-2xl lg:text-4xl font-normal text-white text-center sm:text-right">
          Official
        </span>
        <div className="relative h-10 lg:h-12 w-32 lg:w-40">
          <Image
            src="/ens.svg"
            alt="ENS"
            fill
            sizes="(max-width: 768px) 128px, 160px"
            className="object-contain"
          />
        </div>
        <span className="text-2xl lg:text-4xl font-normal text-white text-center sm:text-left">
          Service Provider
        </span>
      </div>
    </section>
  );
}

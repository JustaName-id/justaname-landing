import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start justify-between px-5 pt-16 w-full max-w-7xl mx-auto">
      <div className="flex flex-col my-auto gap-6 max-w-xl w-full lg:w-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-4xl font-normal leading-tight text-zinc-900 text-center lg:text-left">
          Identity-First Web3 Experiences Your Users Will Love
        </h1>
        <p className="text-sm sm:text-base font-medium leading-normal text-zinc-700 text-center lg:text-left">
          Bring Web2-level simplicity to your Web3 products with portable identity, seamless onboarding, and brand-powered personalization.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button size="lg" className="text-base">
            Book a Demo
          </Button>
        </div>
      </div>
      
      <div className="relative w-full max-w-[600px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[450px] flex-shrink-0">
        <Image
          src="/hero-section.svg"
          alt="JustAName Web3 Identity Platform"
          fill
          priority
          className="object-contain"
        />
      </div>
    </section>
  );
}
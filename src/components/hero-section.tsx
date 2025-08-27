import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";

export function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start justify-between px-5 pt-16 w-full max-w-7xl mx-auto">
      <div className="flex flex-col my-auto gap-6 max-w-xl w-full lg:w-auto animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl lg:text-4xl font-normal leading-tight text-zinc-900 text-center lg:text-left opacity-0 animate-fade-in-up animation-delay-100">
          Identity-First Web3 Experiences Your Users Will Love
        </h1>
        <p className="text-sm sm:text-base font-medium leading-normal text-zinc-700 text-center lg:text-left opacity-0 animate-fade-in-up animation-delay-200">
          Bring Web2-level simplicity to your Web3 products with portable
          identity, seamless onboarding, and brand-powered personalization.
        </p>
        <div className="flex justify-center lg:justify-start opacity-0 animate-fade-in-up animation-delay-300">
          <Button size="lg" className="text-base" asChild>
            <Link
              href={siteConfig.bookDemo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Demo
            </Link>
          </Button>
        </div>
      </div>

      <div className="relative w-full max-w-[600px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[450px] flex-shrink-0 opacity-0 animate-fade-in-right animation-delay-400">
        <Image
          src="/hero-section.svg"
          alt="JustaName Web3 Identity Platform"
          fill
          priority
          className="object-contain"
        />
      </div>
    </section>
  );
}

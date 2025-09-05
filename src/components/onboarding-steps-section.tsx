"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { getAnalyticsClient } from "../../analytics";

export function OnboardingStepsSection() {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation();
  const { ref: step1Ref, isInView: step1InView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });
  const { ref: step2Ref, isInView: step2InView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });
  const { ref: step3Ref, isInView: step3InView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });
  const { ref: buttonRef, isInView: buttonInView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });

  return (
    <section className="px-5 py-10  w-full bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 lg:gap-6">
        <div className="flex flex-col gap-5 items-center py-2.5 w-full">
          <h2
            ref={titleRef}
            className={`text-3xl lg:text-4xl font-normal text-zinc-900 text-center leading-tight lg:leading-[48px] transition-all duration-800 ease-out ${titleInView
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
              }`}
          >
            Onboarding Made Easy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 w-full">
          {/* Step 1 */}
          <div
            ref={step1Ref}
            className={`border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-5 transition-all duration-800 ease-out ${step1InView
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
              }`}
            style={{ transitionDelay: step1InView ? '100ms' : '0ms' }}
          >
            <div className="flex flex-col gap-2.5">
              <div className="bg-zinc-100 size-[60px] rounded-md flex items-center justify-center">
                <span className="text-4xl font-normal text-zinc-900 leading-10">1</span>
              </div>
              <h3 className="text-xl lg:text-xl font-medium text-zinc-900 leading-8">
                Set up your workspace
              </h3>
            </div>
            <div className="h-[200px] relative rounded-md overflow-hidden">
              <Image
                src="/onboarding/setup.webp"
                alt="Set up your workspace"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div
            ref={step2Ref}
            className={`border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-5 transition-all duration-800 ease-out ${step2InView
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
              }`}
            style={{ transitionDelay: step2InView ? '200ms' : '0ms' }}
          >
            <div className="flex flex-col gap-2.5">
              <div className="bg-zinc-100 size-[60px] rounded-md flex items-center justify-center">
                <span className="text-4xl font-normal text-zinc-900 leading-10">2</span>
              </div>
              <h3 className="text-xl lg:text-xl font-medium text-zinc-900 leading-8">
                Configure your ENS
              </h3>
            </div>
            <div className="h-[200px] bg-blue-700 relative rounded-[5px] overflow-hidden">
              <Image
                src="/onboarding/configure.webp"
                alt="Configure your ENS"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div
            ref={step3Ref}
            className={`border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-5 transition-all duration-800 ease-out ${step3InView
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
              }`}
            style={{ transitionDelay: step3InView ? '300ms' : '0ms' }}
          >
            <div className="flex flex-col gap-2.5">
              <div className="bg-zinc-100 size-[60px] rounded-md flex items-center justify-center">
                <span className="text-4xl font-normal text-zinc-900 leading-10">3</span>
              </div>
              <h3 className="text-xl lg:text-xl font-medium text-zinc-900 leading-8">
                Issue an API key
              </h3>
            </div>
            <div className="h-[200px] bg-sky-800 relative rounded-md overflow-hidden">
              <Image
                src="/onboarding/api-key.webp"
                alt="Issue an API key"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div
          ref={buttonRef}
          className={`transition-all duration-800 ease-out ${buttonInView
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-8'
            }`}
          style={{ transitionDelay: buttonInView ? '400ms' : '0ms' }}
        >
          <Button asChild>
            <Link href={siteConfig.getStarted} target="_blank" rel="noopener noreferrer" onClick={() => getAnalyticsClient().track("ADMIN_CLICKED", {})}>
              Get Started Now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
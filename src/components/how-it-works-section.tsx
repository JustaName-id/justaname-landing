"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function HowItWorksSection() {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation();
  const { ref: widgetRef, isInView: widgetInView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });
  const { ref: sdkRef, isInView: sdkInView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });

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
            How it Works
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {/* Plug-and-Play Widget */}
          <div
            ref={widgetRef}
            className={`border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-6 transition-all duration-800 ease-out ${widgetInView
                ? 'opacity-100 transform translate-x-0'
                : 'opacity-0 transform -translate-x-8'
              }`}
            style={{ transitionDelay: widgetInView ? '100ms' : '0ms' }}
          >
            <h3 className="text-2xl lg:text-4xl font-normal text-zinc-900 leading-tight lg:leading-10">
              Plug-and-Play Widget
            </h3>

            <div className="flex flex-col gap-3.5">
              {/* Step 1 */}
              <div className="border border-zinc-200 rounded-md p-6 lg:p-10 flex gap-5 items-center">
                <div className="bg-zinc-100 size-[60px] rounded-md flex items-center justify-center shrink-0">
                  <span className="text-4xl font-normal text-zinc-900 leading-10">1</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h4 className="text-lg lg:text-xl font-bold text-zinc-900">
                    User signs up
                  </h4>
                  <p className="text-sm lg:text-base font-normal text-zinc-900 leading-normal">
                    Instantly issues a branded, gasless digital identity through our ready-to-embed widget.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="border border-zinc-200 rounded-md p-6 lg:p-10 flex gap-5 items-center">
                <div className="bg-zinc-100 size-[60px] rounded-md flex items-center justify-center shrink-0">
                  <span className="text-4xl font-normal text-zinc-900 leading-10">2</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h4 className="text-lg lg:text-xl font-bold text-zinc-900">
                    Live in minutes
                  </h4>
                  <p className="text-sm lg:text-base font-normal text-zinc-900 leading-normal">
                    No heavy dev work, drop it into your existing flow and start issuing identities today.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="border border-zinc-200 rounded-md p-6 lg:p-10 flex gap-5 items-center">
                <div className="bg-zinc-100 size-[60px] rounded-md flex items-center justify-center shrink-0">
                  <span className="text-4xl font-normal text-zinc-900 leading-10">3</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h4 className="text-lg lg:text-xl font-bold text-zinc-900">
                    Full brand control
                  </h4>
                  <p className="text-sm lg:text-base font-normal text-zinc-900 leading-normal">
                    Customize look, feel, and rules directly from the playground.
                  </p>
                </div>
              </div>
            </div>
            <Button variant="outline" size="lg" className={"w-fit"} asChild>
              <Link href={siteConfig.playground} target="_blank" rel="noopener noreferrer">
                Try the Playground
              </Link>
            </Button>
          </div>

          {/* SDK Integration */}
          <div
            ref={sdkRef}
            className={`bg-blue-50 rounded-md p-6 lg:p-10 flex flex-col gap-6 justify-between transition-all duration-800 ease-out ${sdkInView
                ? 'opacity-100 transform translate-x-0'
                : 'opacity-0 transform translate-x-8'
              }`}
            style={{ transitionDelay: sdkInView ? '200ms' : '0ms' }}
          >
            <h3 className="text-2xl lg:text-4xl font-normal text-zinc-900 leading-tight lg:leading-10">
              SDK Integration
            </h3>

            <div className="flex flex-col gap-3.5">
              {/* Step 1 */}
              <div className="border border-zinc-200 rounded-md p-6 lg:p-10 flex gap-5 items-center">
                <div className="bg-blue-100 size-[60px] rounded-md flex items-center justify-center shrink-0">
                  <span className="text-4xl font-normal text-zinc-900 leading-10">1</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h4 className="text-lg lg:text-xl font-bold text-zinc-900">
                    Build it your way
                  </h4>
                  <p className="text-sm lg:text-base font-normal text-zinc-900 leading-normal">
                    Use our SDKs to embed identity creation into your product's native UX.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="border border-zinc-200 rounded-md p-6 lg:p-10 flex gap-5 items-center">
                <div className="bg-blue-100 size-[60px] rounded-md flex items-center justify-center shrink-0">
                  <span className="text-4xl font-normal text-zinc-900 leading-10">2</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h4 className="text-lg lg:text-xl font-bold text-zinc-900">
                    Advanced customization
                  </h4>
                  <p className="text-sm lg:text-base font-normal text-zinc-900 leading-normal">
                    Fine-tune every interaction, trigger issuance at any point, and connect to your own systems.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="border border-zinc-200 rounded-md p-6 lg:p-10 flex gap-5 items-center">
                <div className="bg-blue-100 size-[60px] rounded-md flex items-center justify-center shrink-0">
                  <span className="text-4xl font-normal text-zinc-900 leading-10">3</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h4 className="text-lg lg:text-xl font-bold text-zinc-900">
                    Scale with confidence
                  </h4>
                  <p className="text-sm lg:text-base font-normal text-zinc-900 leading-normal">
                    Enterprise-grade architecture, full analytics, and developer support.
                  </p>
                </div>
              </div>
            </div>

            <Button variant="outline" size="lg" className={"w-fit"} asChild>
              <Link href={siteConfig.docs} target="_blank" rel="noopener noreferrer">
                Check our Docs
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
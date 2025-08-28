"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Wand, SquareUser, HandCoins, Sparkles, Share, Gift } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { getAnalyticsClient } from "../../analytics";

export function UseCasesSection() {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation();
  const { ref: card1Ref, isInView: card1InView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });
  const { ref: card2Ref, isInView: card2InView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });
  const { ref: card3Ref, isInView: card3InView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });
  const { ref: card4Ref, isInView: card4InView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });
  const { ref: card5Ref, isInView: card5InView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });
  const { ref: card6Ref, isInView: card6InView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });
  const { ref: buttonRef, isInView: buttonInView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });

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
            Use Cases
          </h2>
        </div>

        <div className="flex flex-col gap-2.5 w-full">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {/* Frictionless Onboarding */}
            <div
              ref={card1Ref}
              className={`border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-5 transition-all duration-800 ease-out ${card1InView
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-8'
                }`}
              style={{ transitionDelay: card1InView ? '100ms' : '0ms' }}
            >
              <div className="bg-blue-50 p-2.5 rounded-md w-fit">
                <Wand className="w-9 h-9 text-blue-700" />
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-base lg:text-lg font-bold text-zinc-900 leading-7">
                  Frictionless Onboarding
                </h3>
                <p className="text-sm lg:text-base font-normal text-zinc-900 leading-normal">
                  Issue branded, gasless ENS identities instantly without exposing users to complex wallet addresses.
                </p>
              </div>
            </div>

            {/* Onchain Profiles */}
            <div
              ref={card2Ref}
              className={`border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-5 transition-all duration-800 ease-out ${card2InView
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-8'
                }`}
              style={{ transitionDelay: card2InView ? '200ms' : '0ms' }}
            >
              <div className="bg-emerald-50 p-2.5 rounded-md w-fit">
                <SquareUser className="w-9 h-9 text-emerald-700" />
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-base lg:text-lg font-bold text-zinc-900 leading-7">
                  Onchain Profiles
                </h3>
                <p className="text-sm lg:text-base font-normal text-zinc-900 leading-normal">
                  Let users customize their profiles with avatars, social handles and more to personalize their experience according to your goals.
                </p>
              </div>
            </div>

            {/* Community-Level Control */}
            <div
              ref={card3Ref}
              className={`border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-5 transition-all duration-800 ease-out ${card3InView
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-8'
                }`}
              style={{ transitionDelay: card3InView ? '300ms' : '0ms' }}
            >
              <div className="bg-purple-50 p-2.5 rounded-md w-fit">
                <HandCoins className="w-9 h-9 text-purple-700" />
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-base lg:text-lg font-bold text-zinc-900 leading-7">
                  Community-Level Control
                </h3>
                <p className="text-sm lg:text-base font-normal text-zinc-900 leading-normal">
                  Manage your community with admin tools, ban or revoke names, whitelist users, and maintain trusted spaces from a single dashboard.
                </p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {/* Unified Identity Layer */}
            <div
              ref={card4Ref}
              className={`border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-5 transition-all duration-800 ease-out ${card4InView
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-8'
                }`}
              style={{ transitionDelay: card4InView ? '400ms' : '0ms' }}
            >
              <div className="bg-emerald-50 p-2.5 rounded-md w-fit">
                <Sparkles className="w-9 h-9 text-emerald-700" />
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-base lg:text-lg font-bold text-zinc-900 leading-7">
                  Unified Identity Layer
                </h3>
                <p className="text-sm lg:text-base font-normal text-zinc-900 leading-normal">
                  One name, one profile. Interoperable and portable across dApps, chains and wallets.
                </p>
              </div>
            </div>

            {/* Social-Ready Identity */}
            <div
              ref={card5Ref}
              className={`border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-5 transition-all duration-800 ease-out ${card5InView
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-8'
                }`}
              style={{ transitionDelay: card5InView ? '500ms' : '0ms' }}
            >
              <div className="bg-blue-50 p-2.5 rounded-md w-fit">
                <Share className="w-9 h-9 text-blue-700" />
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-base lg:text-lg font-bold text-zinc-900 leading-7">
                  Social-Ready Identity
                </h3>
                <p className="text-sm lg:text-base font-normal text-zinc-900 leading-normal">
                  Unlock messaging and gated channels through ENS-based identity.
                </p>
              </div>
            </div>

            {/* Smarter Airdrops */}
            <div
              ref={card6Ref}
              className={`border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-5 transition-all duration-800 ease-out ${card6InView
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-8'
                }`}
              style={{ transitionDelay: card6InView ? '600ms' : '0ms' }}
            >
              <div className="bg-sky-50 p-2.5 rounded-md w-fit">
                <Gift className="w-9 h-9 text-sky-700" />
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-base lg:text-lg font-bold text-zinc-900 leading-7">
                  Smarter Airdrops
                </h3>
                <p className="text-sm lg:text-base font-normal text-zinc-900 leading-normal">
                  Enable targeted distribution through our analytics based on activity, identity, and reputation not disposable wallet.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={buttonRef}
          className={`transition-all duration-800 ease-out ${buttonInView
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-8'
            }`}
          style={{ transitionDelay: buttonInView ? '700ms' : '0ms' }}
        >
          <Button size="lg" asChild>
            <Link href={siteConfig.bookDemo} target="_blank" rel="noopener noreferrer" onClick={() => getAnalyticsClient().track("BOOK_DEMO_CLICKED", {})}>
              Book a Demo
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
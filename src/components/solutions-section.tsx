"use client";

import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function SolutionsSection() {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation();
  const { ref: card1Ref, isInView: card1InView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });
  const { ref: card2Ref, isInView: card2InView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });
  const { ref: card3Ref, isInView: card3InView } = useScrollAnimation({ rootMargin: "0px 0px -50px 0px" });

  return (
    <section className="px-5 py-10 w-full">
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className={`text-2xl sm:text-3xl lg:text-4xl font-normal text-center text-zinc-900 mb-10 transition-all duration-800 ease-out ${titleInView
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-8'
            }`}
        >
          What's Blocking Web3 Adoption?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* The Problem Card */}
          <div
            ref={card1Ref}
            className={`bg-white border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-5 transition-all duration-800 ease-out ${card1InView
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
              }`}
            style={{ transitionDelay: card1InView ? '100ms' : '0ms' }}
          >
            <div className="flex flex-col gap-2.5">
              <h3 className="text-xl font-bold text-zinc-900">The Problem</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Badge variant="secondary" className="font-bold px-3.5 py-1.5">
                Drop-offs at onboarding
              </Badge>
              <Badge variant="secondary" className="font-bold px-3.5 py-1.5">
                Confusing flows
              </Badge>
              <Badge variant="secondary" className="font-bold px-3.5 py-1.5">
                Fragmented identity
              </Badge>
            </div>
          </div>

          {/* The Cost Card */}
          <div
            ref={card2Ref}
            className={`bg-white border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-5 transition-all duration-800 ease-out ${card2InView
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
              }`}
            style={{ transitionDelay: card2InView ? '200ms' : '0ms' }}
          >
            <div className="flex flex-col gap-2.5">
              <h3 className="text-xl font-bold text-zinc-900">The Cost</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Badge variant="secondary" className="font-bold px-3.5 py-1.5">
                Low retention & engagement
              </Badge>
              <Badge variant="secondary" className="font-bold px-3.5 py-1.5">
                Lost trust
              </Badge>
              <Badge variant="secondary" className="font-bold px-3.5 py-1.5">
                Missed revenue opportunities
              </Badge>
            </div>
          </div>

          {/* The Opportunity Card */}
          <div
            ref={card3Ref}
            className={`bg-white border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-5 transition-all duration-800 ease-out ${card3InView
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
              }`}
            style={{ transitionDelay: card3InView ? '300ms' : '0ms' }}
          >
            <div className="flex flex-col gap-2.5">
              <h3 className="text-xl font-bold text-zinc-900">The Opportunity</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Badge variant="secondary" className="font-bold px-3.5 py-1.5">
                Higher retention rates
              </Badge>
              <Badge variant="secondary" className="font-bold px-3.5 py-1.5">
                Better UX
              </Badge>
              <Badge variant="secondary" className="font-bold px-3.5 py-1.5">
                Better engagement
              </Badge>
              <Badge variant="secondary" className="font-bold px-3.5 py-1.5">
                Exponential growth
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

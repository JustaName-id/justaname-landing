import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Wand, SquareUser, HandCoins, Sparkles, Share, Gift } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function UseCasesSection() {
  return (
    <section className="px-5 py-10  w-full bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <div className="flex flex-col gap-5 items-center py-2.5 lg:py-10 w-full">
          <h2 className="text-3xl lg:text-4xl font-normal text-zinc-900 text-center leading-tight lg:leading-[48px]">
            Use Cases
          </h2>
        </div>

        <div className="flex flex-col gap-2.5 w-full">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {/* Frictionless Onboarding */}
            <div className="border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-5">
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
            <div className="border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-5">
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
            <div className="border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-5">
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
            <div className="border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-5">
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
            <div className="border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-5">
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
            <div className="border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-5">
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

        <Button size="lg" asChild>
          <Link href={siteConfig.bookDemo} target="_blank" rel="noopener noreferrer">
            Book a Demo
          </Link>
        </Button>
      </div>
    </section>
  );
}
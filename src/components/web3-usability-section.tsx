import { Button } from "@/components/ui/button";
import { Paintbrush, LogOut, Palette, GitCompareArrows } from "lucide-react";

export function Web3UsabilitySection() {
  return (
    <section className="px-5 py-16  w-full bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <div className="flex flex-col gap-5 items-center py-2.5 lg:py-10 w-full">
          <h2 className="text-3xl lg:text-4xl font-normal text-zinc-900 text-center leading-tight lg:leading-[48px]">
            Web3 Usability Without Compromise
          </h2>
        </div>

        <div className="flex flex-col gap-6 w-full">
          {/* First Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Brand-powered identity */}
            <div className="border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-5">
              <div className="bg-blue-50 p-2.5 rounded-md w-fit">
                <Paintbrush className="w-9 h-9 text-blue-700" />
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-lg lg:text-xl font-bold text-zinc-900 leading-7">
                  Brand-powered identity
                </h3>
                <div className="text-sm lg:text-base font-normal text-zinc-900 leading-normal">
                  <p className="mb-2">Turn complex 0x addresses into memorable, human-readable identities tied to your brand.</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>e.g., alex.yourbrand.eth</li>
                    <li>Increases trust, and discoverability</li>
                    <li>Works as a wallet alias, login credential, and ecosystem pass</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Seamless onboarding */}
            <div className="border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-5">
              <div className="bg-emerald-50 p-2.5 rounded-md w-fit">
                <LogOut className="w-9 h-9 text-emerald-700" />
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-lg lg:text-xl font-bold text-zinc-900 leading-7">
                  Seamless onboarding
                </h3>
                <div className="text-sm lg:text-base font-normal text-zinc-900 leading-normal">
                  <p className="mb-2">Issue gasless identities instantly, no seed phrases, no gas fees for the user.</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Lowers entry barrier for Web2 audiences</li>
                    <li>Works wherever ENS is supported (apps, wallets)</li>
                    <li>Integrates directly into your existing signup flows</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Personalization */}
            <div className="border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-5">
              <div className="bg-purple-50 p-2.5 rounded-md w-fit">
                <Palette className="w-9 h-9 text-purple-700" />
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-lg lg:text-xl font-bold text-zinc-900 leading-7">
                  Personalization
                </h3>
                <div className="text-sm lg:text-base font-normal text-zinc-900 leading-normal">
                  <p className="mb-2">ENS records capture the user's profile details:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Avatars, bios, linked socials, verified wallets</li>
                    <li>Enables loyalty tiers, status badges, and cross-app recognition</li>
                    <li>Can be updated by the user or the brand in real-time</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interoperability */}
            <div className="border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-5">
              <div className="bg-sky-50 p-2.5 rounded-md w-fit">
                <GitCompareArrows className="w-9 h-9 text-sky-700" />
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-lg lg:text-xl font-bold text-zinc-900 leading-7">
                  Interoperability
                </h3>
                <div className="text-sm lg:text-base font-normal text-zinc-900 leading-normal">
                  <p className="mb-2">One identity, endless reach:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Works across Ethereum, L2s, and non-EVM networks</li>
                    <li>Automatically recognized by dApps, wallets, and explorers that support ENS</li>
                    <li>Enables ecosystem-wide campaigns and rewards</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Button size="lg" >
          Book a Demo
        </Button>
      </div>
    </section>
  );
}
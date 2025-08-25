import Image from "next/image";
import { EyeOff, Component, Unplug } from "lucide-react";

export function UxOnboardingSection() {
  return (
    <section className="px-5 py-10  w-full bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Left side - Content */}
        <div className="flex flex-col gap-5 order-2 lg:order-1">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl lg:text-4xl font-normal text-zinc-900">
              UX-First Onboarding
            </h2>
            <p className="text-lg lg:text-xl text-emerald-700">
              Remove friction from sign-up and user flows.
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            {/* Feature Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {/* Feature 1 */}
              <div className="border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-5">
                <div className="bg-blue-50 p-2.5 rounded-md w-fit">
                  <Component className="w-9 h-9 text-blue-700" />
                </div>
                <p className="text-lg lg:text-lg text-zinc-900">
                  Familiar, Web2-like experience
                </p>
              </div>

              {/* Feature 2 */}
              <div className="border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-5">
                <div className="bg-emerald-50 p-2.5 rounded-md w-fit">
                  <EyeOff className="w-9 h-9 text-emerald-700" />
                </div>
                <p className="text-lg lg:text-lg text-zinc-900">
                  Invisible technical complexity
                </p>
              </div>
            </div>

            {/* Feature 3 - Full Width */}
            <div className="border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-5">
              <div className="bg-purple-50 p-2.5 rounded-md w-fit">
                <Unplug className="w-9 h-9 text-purple-700" />
              </div>
              <p className="text-lg lg:text-lg text-zinc-900">
                Works seamlessly across your stack
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Illustration */}
        <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden h-[400px] lg:h-[500px] flex items-center justify-center order-1 lg:order-2">
          {/* Placeholder for illustration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-blue-700/50 text-lg">
              UX Onboarding Illustration
            </p>
          </div>
          {/* You can replace this with your actual image */}
          <Image
            src="/ux-first-onboarding.png"
            alt="UX-First Onboarding"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

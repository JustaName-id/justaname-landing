import Image from "next/image";
import { Eye, Palette, Blocks } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="px-5 py-10  w-full bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Left side - Illustration */}
        <div className="relative bg-blue-700 rounded-xl overflow-hidden h-[400px] lg:h-[650px] flex items-center justify-center">
          {/* Placeholder for illustration */}
          <div className="absolute inset-0 flex items-center justify-center bg-blue-700">
            <p className="text-white/50 text-lg">Illustration Placeholder</p>
          </div>
          {/* You can replace this with your actual image */}
          <Image
            src="/features-illustration.webp"
            alt="Branded Subname Integration"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl lg:text-3xl font-normal text-zinc-900">
              Branded Subname Integration
            </h2>
            <p className="text-lg lg:text-lg text-emerald-700">
              Give your users memorable, portable identities tied to your brand.
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            {/* Feature Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {/* Feature 1 */}
              <div className="border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-5">
                <div className="bg-blue-50 p-2.5 rounded-md w-fit">
                  <Eye className="w-9 h-9 text-blue-700" />
                </div>
                <p className="text-lg lg:text-lg text-zinc-900">
                  Strengthen brand recognition & trust
                </p>
              </div>

              {/* Feature 2 */}
              <div className="border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-5">
                <div className="bg-emerald-50 p-2.5 rounded-md w-fit">
                  <Palette className="w-9 h-9 text-emerald-700" />
                </div>
                <p className="text-lg lg:text-lg text-zinc-900">
                  Unlock personalization & loyalty features
                </p>
              </div>
            </div>

            {/* Feature 3 - Full Width */}
            <div className="border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-5">
              <div className="bg-purple-50 p-2.5 rounded-md w-fit">
                <Blocks className="w-9 h-9 text-purple-700" />
              </div>
              <p className="text-lg lg:text-lg text-zinc-900">
                Enable ecosystem-wide interoperability
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
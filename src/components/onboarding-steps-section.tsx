import { Button } from "@/components/ui/button";
import Image from "next/image";

export function OnboardingStepsSection() {
  return (
    <section className="px-5 py-16  w-full bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 lg:gap-6">
        <div className="flex flex-col gap-5 items-center py-2.5 w-full">
          <h2 className="text-3xl lg:text-4xl font-normal text-zinc-900 text-center leading-tight lg:leading-[48px]">
            Onboarding Made Easy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 w-full">
          {/* Step 1 */}
          <div className="border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-5">
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
                src="/onboarding/setup.png"
                alt="Set up your workspace"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-5">
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
                  src="/onboarding/configure.png"
                alt="Configure your ENS"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="border border-zinc-200 rounded-md p-6 lg:p-10 flex flex-col gap-5">
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
                  src="/onboarding/api-key.png"
                alt="Issue an API key"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <Button>
          Get Started Now
        </Button>
      </div>
    </section>
  );
}
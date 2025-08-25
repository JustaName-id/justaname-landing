import Image from "next/image";

export function MoreFromJustaNameSection() {
  return (
    <section className="px-5 py-16  w-full bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <div className="flex flex-col gap-5 items-center py-2.5 lg:py-10 w-full">
          <h2 className="text-3xl lg:text-4xl font-normal text-zinc-900 text-center leading-tight lg:leading-[48px]">
            More from JustaName
          </h2>
        </div>

        <div className="flex flex-col gap-6 w-full">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ENSvolution */}
            <div className="border border-zinc-200 rounded-md p-5 flex flex-col gap-5">
              <div className="h-[300px] lg:h-[400px] rounded overflow-hidden relative">
                <Image
                  src="/more/ensvolution.png"
                  alt="ENSvolution"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-lg lg:text-xl font-bold text-zinc-900 leading-7">
                  ENSvolution
                </h3>
              </div>
            </div>

            {/* Letstalk.wtf */}
            <div className="border border-zinc-200 rounded-md p-5 flex flex-col gap-5">
              <div className="h-[300px] lg:h-[400px] rounded overflow-hidden relative">
                <Image
                  src="/more/letstalk.png"
                  alt="Letstalk.wtf"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-lg lg:text-xl font-bold text-zinc-900 leading-7">
                  Letstalk.wtf
                </h3>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Explorer */}
            <div className="border border-zinc-200 rounded-md p-5 flex flex-col gap-5">
              <div className="h-[300px] lg:h-[400px] rounded overflow-hidden relative">
                <Image
                  src="/more/explorer.png"
                  alt="Explorer"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-lg lg:text-xl font-bold text-zinc-900 leading-7">
                  Explorer
                </h3>
              </div>
            </div>

            {/* Chrome Extension for X */}
            <div className="border border-zinc-200 rounded-md p-5 flex flex-col gap-5">
              <div className="h-[300px] lg:h-[400px] rounded overflow-hidden relative">
                <Image
                  src="/more/chrome.png"
                  alt="Chrome Extension for X"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-lg lg:text-xl font-bold text-zinc-900 leading-7">
                  Chrome Extension for X
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
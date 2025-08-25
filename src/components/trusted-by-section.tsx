import Image from "next/image";

export function TrustedBySection() {
  return (
    <section className="flex flex-col gap-6 items-center justify-center px-5 py-10 w-full">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-center text-zinc-900 max-w-7xl">
        Trusted by Forward-Thinking Teams in the Web3 Ecosystem
      </h2>

      <div className="flex flex-col gap-8 lg:gap-10 items-center justify-center w-full max-w-7xl">
        {/* First row of logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 items-center justify-items-center w-full">
          <div className="relative h-12 lg:h-16 w-32 lg:w-48">
            <Image
              src="/trusted/yodl.png"
              alt="Yodl"
              fill
              sizes="(max-width: 768px) 160px, 192px"
              className="object-contain"
            />
          </div>
          <div className="relative h-12 lg:h-16 w-32 lg:w-48">
            <Image
              src="/trusted/peanut.png"
              alt="Peanut"
              fill
              sizes="(max-width: 768px) 160px, 192px"
              className="object-contain"
            />
          </div>
          <div className="relative h-12 lg:h-16 w-32 lg:w-48">
            <Image
              src="/trusted/aurora.png"
              alt="Aurora"
              fill
              sizes="(max-width: 768px) 160px, 192px"
              className="object-contain"
            />
          </div>
          <div className="relative h-12 lg:h-14 w-32 lg:w-44">
            <Image
              src="/trusted/ipe-city.png"
              alt="IPE city"
              fill
              sizes="(max-width: 768px) 128px, 176px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Second row of logos */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-10 items-center justify-items-center w-full">
          <div className="relative h-12 lg:h-20 w-36 lg:w-64">
            <Image
              src="/trusted/bga.png"
              alt="Blockchain Alliance"
              fill
              sizes="(max-width: 768px) 144px, 256px"
              className="object-contain"
            />
          </div>
          <div className="relative h-12 lg:h-16 w-28 lg:w-36">
            <Image
              src="/trusted/efp.png"
              alt="Ethereum Follow Protocol"
              fill
              sizes="(max-width: 768px) 112px, 144px"
              className="object-contain"
            />
          </div>
          <div className="relative h-12 lg:h-14 w-32 lg:w-48">
            <Image
              src="/trusted/xmtp.png"
              alt="XMTP"
              fill
              sizes="(max-width: 768px) 128px, 192px"
              className="object-contain"
            />
          </div>
          <div className="relative h-12 lg:h-16 w-36 lg:w-52">
            <Image
              src="/trusted/talent-protocol.png"
              alt="Talent Protocol"
              fill
              sizes="(max-width: 768px) 144px, 208px"
              className="object-contain"
            />
          </div>
          <div className="relative h-12 lg:h-16 w-12 lg:w-16">
            <Image
              src="/trusted/web3bio.png"
              alt="Web3.bio"
              fill
              sizes="(max-width: 768px) 48px, 64px"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* ENS Service Provider Badge */}
      <div className="bg-blue-400 flex flex-col sm:flex-row gap-4 lg:gap-5 items-center justify-center px-4 lg:px-6 py-4 lg:py-6 rounded-xl w-full max-w-7xl mt-4">
        <span className="text-2xl lg:text-4xl font-normal text-white text-center sm:text-right">
          Official
        </span>
        <div className="relative h-10 lg:h-12 w-32 lg:w-40">
          <Image
            src="/ens.svg"
            alt="ENS"
            fill
            sizes="(max-width: 768px) 128px, 160px"
            className="object-contain"
          />
        </div>
        <span className="text-2xl lg:text-4xl font-normal text-white text-center sm:text-left">
          Service Provider
        </span>
      </div>
    </section>
  );
}

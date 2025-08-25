import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section className="px-5 py-16  w-full bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <div className="flex flex-col gap-5 items-center py-2.5 lg:py-10 w-full">
          <h2 className="text-3xl lg:text-4xl font-normal text-zinc-900 text-center leading-tight lg:leading-[48px]">
            Testimonials
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
          {/* Left Column */}
          <div className="flex flex-col gap-5">
            {/* M Tweet */}
            <div className=" overflow-hidden relative">
              <Image
                src="/tweets/m.png"
                alt="M testimonial"
                width={600}
                height={220}
                className="w-full h-auto"
              />
            </div>

            {/* ENS DAO Tweet */}
            <div className=" overflow-hidden relative">
              <Image
                src="/tweets/ensdao.png"
                alt="ENS DAO testimonial"
                width={600}
                height={220}
                className="w-full h-auto"
              />
            </div>

            {/* Yodl Tweet */}
            <div className=" overflow-hidden relative">
              <Image
                src="/tweets/yodl.png"
                alt="Yodl testimonial"
                width={600}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-5">
            {/* Peanut Tweet */}
            <div className=" overflow-hidden relative">
              <Image
                src="/tweets/peanut.png"
                alt="Peanut Protocol testimonial"
                width={600}
                height={450}
                className="w-full h-auto"
              />
            </div>

            {/* Balaji Tweet */}
            <div className=" overflow-hidden relative">
              <Image
                src="/tweets/balaji.png"
                alt="Balaji testimonial"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
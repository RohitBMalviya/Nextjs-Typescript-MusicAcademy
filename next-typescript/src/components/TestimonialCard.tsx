import { Testimonials } from "@/interface/interface";
import TestimonialData from "@/data/Testimonialdata.json";

export default function TestinomialCard() {
  return (
    <>
      <div className="h-screen bg-gray-900 space-y-12 py-10 flex flex-col items-center">
        <h2 className="min-[2000px]:text-7xl lg:text-6xl text-5xl font-bold max-[600px]:w-[90%] text-[#00FFFF] text-center">
          Voice Of Success
        </h2>

        <main className="bg-gray-900 flex items-center h-[90%] w-[90%] gap-10 overflow-x-auto">
          {TestimonialData.Testimonial.map((items: Testimonials) => (
            <div
              key={items.id}
              className=" bg-black rounded-[4rem] w-[32rem] h-[25rem]"
            >
              <article className="min-[2000px]:text-[4xl] lg:text-3xl text-2xl text-center h-52">
                {items.description}
              </article>
              <p className=" min-[2000px]:text-2xl lg:text-xl text-lg text-center">
                {items.name}
              </p>
            </div>
          ))}
        </main>
      </div>
    </>
  );
}

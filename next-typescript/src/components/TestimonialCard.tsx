import { Testimonials } from "@/interface/interface";
import TestimonialData from "@/data/Testimonialdata.json";

export default function TestinomialCard(): JSX.Element {
  return (
    <>
      <div className="h-full bg-gray-900  py-10 flex flex-col items-center">
        <h2 className="min-[2000px]:text-7xl lg:text-6xl text-5xl font-bold max-[600px]:w-[90%] text-[#00FFFF] text-center">
          Voice Of Success
        </h2>

        <main className="bg-gray-900 flex items-center h-[38rem] gap-12 overflow-y-auto no-scrollbar">
          {TestimonialData.Testimonial.map((items: Testimonials) => (
            <div key={items.id} className=" bg-black rounded-[2rem]">
              <article className="min-[2000px]:text-[3xl] lg:text-2xl text-xl">
                {items.description}
              </article>
              <p className=" min-[2000px]:text-xl lg:text-lg text-base px-4">
                {items.name}
                <br />
                {items.title}
              </p>
            </div>
          ))}
        </main>
      </div>
    </>
  );
}

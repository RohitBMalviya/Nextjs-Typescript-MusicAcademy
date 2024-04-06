import { Testimonials } from "@/interface/interface";
import TestimonialData from "@/data/Testimonialdata.json";

export default function TestinomialCard(): JSX.Element {
  return (
    <>
      <div className="h-[55rem] bg-gray-900 py-10 flex flex-col items-center">
        <div className="flex flex-col justify-center items-center space-y-8 w-full">
          <h2 className="min-[2000px]:text-7xl lg:text-6xl text-5xl font-bold max-[600px]:w-[90%] text-[#00FFFF]">
            Voice of Success
          </h2>
          <p className="min-[2000px]:text-4xl lg:text-3xl text-2xl font-bold max-[600px]:w-[90%]">
            Hear From The Champ
          </p>
        </div>
        <main className="bg-gray-900 flex items-center h-[35rem] gap-12 w-[90%]">
          {TestimonialData.Testimonial.map((items: Testimonials) => (
            <div key={items.id} className=" bg-black rounded-[2rem] text-start">
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

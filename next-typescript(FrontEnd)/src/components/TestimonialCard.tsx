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
        <main className="bg-gray-900 flex items-center  h-[36rem] gap-10 w-[90%] overflow-x-scroll no-scrollbar">
          {TestimonialData.Testimonial.map((items: Testimonials) => (
            <div
              key={items.id}
              className=" bg-black rounded-[2rem] h-[18rem] max-[350px]:h-[22rem] min-[1500px]:h-[20rem] text-start w-full flex justify-center items-center p-8"
            >
              <article className="min-[2000px]:text-2xl lg:text-xl text-lg min-[1500px]:w-[30rem] min-[1050px]:w-[21.5rem] lg:w-[23.5rem] md:w-[16.5rem] max-[787px]:w-[20rem]">
                <p> {items.description}</p> <br />
                <p>
                  {items.name}
                  <br />
                  {items.title}
                </p>
              </article>
            </div>
          ))}
        </main>
      </div>
    </>
  );
}

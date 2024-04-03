import Link from "next/link";
import Courses from "@/data/data.json";
import { MusicCard } from "@/interface/interface";

export default function CardSection(): JSX.Element {
  const FeaturedData: MusicCard[] = Courses.courses.filter(
    (courses: MusicCard) => courses.isFeatured
  );
  return (
    <>
      <div className="bg-gray-900 h-full w-full space-y-12 py-10 flex flex-col items-center justify-center my-10">
        <div className="flex flex-col justify-center items-center space-y-8 w-full">
          <h2 className="min-[2000px]:text-7xl lg:text-6xl text-5xl font-bold max-[600px]:w-[90%] text-[#00FFFF]">
            Feature Courses
          </h2>
          <p className="min-[2000px]:text-4xl lg:text-3xl text-2xl font-bold max-[600px]:w-[90%] ">
            Learn With the Master
          </p>
        </div>
        <div className="grid min-[1440px]:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 gap-6 w-[90%]">
          {FeaturedData.map((items) => (
            <div
              key={items.id}
              className="flex flex-col items-center justify-center bg-black rounded-[4rem] h-[350px]"
            >
              <h3 className="min-[2000px]:text-[4xl] lg:text-3xl text-2xl font-bold w-[90%] h-[110px] flex items-center justify-center">
                {items.title}
              </h3>
              <p className=" min-[2000px]:text-2xl lg:text-xl text-lg text-center w-[70%] h-[150px]">
                {items.description}
              </p>
              <Link href={"#"}>
                <button className="bg-gray-900 rounded-full p-3 px-5 min-[1500px]:text-2xl text-lg max-[700px]:text-sm">
                  Learn More
                </button>
              </Link>
            </div>
          ))}
        </div>
        <div>
          <button
            type="button"
            className="border-4 rounded-full p-3 px-5 min-[1500px]:text-2xl text-lg max-[700px]:text-sm"
          >
            <Link href="/courses">View All Courses</Link>
          </button>
        </div>
      </div>
    </>
  );
}

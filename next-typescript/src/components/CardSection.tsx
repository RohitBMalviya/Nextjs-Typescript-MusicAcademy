import Link from "next/link";
import Courses from "@/data/data.json";
import { MusicCard } from "@/interface/interface";

export default function CardSection(): JSX.Element {
  const FeaturedData: MusicCard[] = Courses.courses.filter(
    (courses: MusicCard) => courses.isFeatured
  );
  return (
    <>
      <div className="bg-gray-900 h-full w-full space-y-8 py-10 flex flex-col items-center justify-center">
        <div>
          <h1>Feature Courses</h1>
          <p>Learn With the Master</p>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 w-[90%] ">
          {FeaturedData.map((items) => (
            <div
              key={items.id}
              className="flex flex-col items-center justify-center bg-black rounded-[4rem] h-[320px]"
            >
              <h2 className="min-[2000px]:text-[4xl] lg:text-4xl text-2xl font-bold w-[90%] h-[100px] flex items-center justify-center">
                {items.title}
              </h2>
              <p className=" min-[2000px]:text-2xl lg:text-xl text-lg text-center w-[70%] h-[110px]">
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

import { MusicCard, UpcomingEvents } from "@/interface/interface";
import Link from "next/link";

export default function Card({
  Data,
  cardBG,
  buttonBG,
}: {
  Data: MusicCard[] | UpcomingEvents[];
  cardBG: string;
  buttonBG: string;
}): JSX.Element {
  return (
    <>
      <div className="grid min-[1440px]:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 gap-6 w-[90%]">
        {Data.map((items) => (
          <div
            key={items.id}
            className={`flex flex-col items-center justify-center ${cardBG} rounded-[4rem] h-80`}
          >
            <h3 className="min-[2000px]:text-[4xl] lg:text-3xl text-2xl font-bold w-[90%] h-20 flex items-center justify-center text-[#00FFFF]">
              {items.title}
            </h3>
            <p className=" min-[2000px]:text-2xl lg:text-xl text-lg text-center w-[75%] h-[9rem]">
              {items.description}
            </p>
            <Link href={"#"}>
              <button
                className={`${buttonBG} rounded-full p-3 px-5 min-[1500px]:text-2xl text-lg max-[700px]:text-sm`}
              >
                Learn More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

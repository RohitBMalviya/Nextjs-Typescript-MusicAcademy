import Link from "next/link";
import Card from "./Card";
import Event from "@/data/UpcomingData.json";
import { UpcomingEvents } from "@/interface/interface";

export default function UpcomingEvent(): JSX.Element {
  const UpcommingEvent: UpcomingEvents[] = Event.upcomingEvent.filter(
    (items: UpcomingEvents) => items.isFeatured
  );
  return (
    <>
      <div className="h-full w-full space-y-12 py-10 flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center items-center space-y-8 w-full">
          <h2 className="min-[2000px]:text-7xl lg:text-6xl text-5xl font-bold max-[600px]:w-[90%] text-[#00FFFF]">
            Upcoming Event
          </h2>
          <p className="min-[2000px]:text-4xl lg:text-3xl text-2xl font-bold max-[600px]:w-[90%] ">
            Learn New With Master
          </p>
        </div>
        <Card
          Data={UpcommingEvent}
          cardBG={"bg-gray-900"}
          buttonBG={"bg-black"}
        />
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

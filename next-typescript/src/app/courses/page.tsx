import { Data } from "@/components/SubMenuData";

export default function Courses(): JSX.Element {
  return (
    <>
      <div className="h-screen text-white  flex flex-col space-y-8 items-center justify-center">
        <h1 className="min-[2000px]:text-8xl lg:text-7xl text-5xl font-bold ">
          ALL Courses
        </h1>
        {Data.map((items) => (
          <p
            key={items.id}
            className="min-[2000px]:w-[38%] min-[2000px]:text-4xl lg:text-3xl text-2xl max-[600px]:w-[70%] w-[50%] text-center"
          >
            {items.menuTitle}
          </p>
        ))}
      </div>
    </>
  );
}

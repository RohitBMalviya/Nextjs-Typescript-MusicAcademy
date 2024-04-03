import Choose from "@/data/whychooseusData.json";
import { Choices } from "@/interface/interface";
import Image from "next/image";

export default function WhyChooseUse() {
  return (
    <>
      <div className=" h-[600px] max-[768px]:h-[500px] flex justify-center items-center">
        <div className="h-[350px] max-[768px]:h-[400px] overflow-y-auto no-scrollbar">
          {Choose.whyChoose.map((items: Choices) => (
            <div
              key={items.id}
              className="flex justify-center items-center w-full"
            >
              <div className="max-[768px]:w-full w-1/2 h-[350px] space-y-6 flex flex-col items-center justify-center mb-4">
                <h3 className=" lg:text-4xl text-3xl font-bold w-[90%] max-[600px]:w-[90%] text-left">
                  {items.title}
                </h3>
                <div className="w-[90%]">
                  <p className=" lg:text-2xl text-xl font-bold w-[65%] max-[600px]:w-[90%] text-left">
                    {items.description}
                  </p>
                </div>
              </div>
              <div className="w-1/2 max-[769px]:hidden flex items-center justify-center ">
                <div className="border-white border-4 w-1/2 h-[250px]">
                  <Image src="" alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

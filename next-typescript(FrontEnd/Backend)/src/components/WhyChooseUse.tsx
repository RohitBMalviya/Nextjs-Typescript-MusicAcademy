import Choose from "@/data/whychooseusData.json";
import { Choices } from "@/interface/interface";
import Image from "next/image";
import { Images } from "./Images";

export default function WhyChooseUse(): JSX.Element {
  return (
    <>
      <div className="w-full flex justify-center pt-10">
        <h2 className="min-[2000px]:text-7xl lg:text-6xl text-5xl font-bold max-[600px]:w-[90%] text-[#00FFFF] text-center">
          Why Choose Us
        </h2>
      </div>
      <div className=" h-[50rem] max-[768px]:h-[35rem] flex justify-center items-center">
        <div className="h-[32rem] max-[768px]:h-[30rem]  overflow-y-scroll no-scrollbar">
          {Choose.whyChoose.map((items: Choices) => (
            <div
              key={items.id}
              className="flex justify-center items-center w-full"
            >
              <div className="max-[768px]:w-full max-[768px]:h-[30rem] w-[60%] h-[32rem] max-[768px]:space-y-8 space-y-10 flex flex-col items-end max-[1024px]:items-center justify-center mb-4">
                <h3 className=" lg:text-4xl text-3xl font-bold w-[80%] max-[600px]:w-[95%] text-start text-[#00FFFF]">
                  {items.title}
                </h3>
                <div className="w-[80%] max-[600px]:w-[95%]">
                  <p className=" lg:text-2xl text-xl font-bold w-[70%] max-[1024px]:w-[100%] text-start">
                    {items.description}
                  </p>
                </div>
              </div>
              <div className="w-[40%] max-[769px]:hidden flex items-center justify-center">
                <div className=" w-[80%] h-[22rem]">
                  {Images.filter((imgs) => items.id === imgs.id).map((imgs) => (
                    <Image
                      key={imgs.id}
                      src={imgs.src}
                      alt={imgs.alt}
                      width={imgs.width}
                      className="border-4 border-blue-700"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

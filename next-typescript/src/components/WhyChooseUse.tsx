import Choose from "@/data/whychooseusData.json";
import { Choices } from "@/interface/interface";
import Image from "next/image";
import { Images } from "./Images";

export default function WhyChooseUse() {
  return (
    <>
      <div className=" h-[900px] max-[768px]:h-[600px] flex justify-center items-center">
        <div className="h-[600px] max-[768px]:h-[400px] overflow-y-auto no-scrollbar">
          {Choose.whyChoose.map((items: Choices) => (
            <div
              key={items.id}
              className="flex justify-center items-center w-full"
            >
              <div className="max-[768px]:w-full max-[768px]:h-[400px] w-[60%] h-[500px] max-[768px]:space-y-8 space-y-10 flex flex-col items-end max-[1024px]:items-center justify-center mb-4">
                <h2 className=" lg:text-5xl text-4xl font-bold w-[80%] max-[600px]:w-[90%] text-left">
                  {items.title}
                </h2>
                <div className="w-[80%] max-[600px]:w-[90%]">
                  <p className=" lg:text-3xl text-2xl font-bold w-[80%] max-[1024px]:w-[90%] text-left">
                    {items.description}
                  </p>
                </div>
              </div>
              <div className="w-[40%] max-[769px]:hidden flex items-center justify-start max-[1024px]:justify-center">
                <div className=" w-[80%] h-[350px]">
                  {Images.filter((imgs) => items.id === imgs.id).map((imgs) => (
                    <Image
                      key={imgs.id}
                      src={imgs.src}
                      alt={imgs.alt}
                      width={imgs.width}
                      className="border-4 border-orange-600"
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

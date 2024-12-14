import React from "react";
import Image from "next/image";
import { family } from "@/images";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-black text-gray-100 w-full min-h-screen px-6 py-10 md:px-12 md:py-16">
      <div className="flex flex-col lg:flex-row items-center justify-between h-full space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-3xl md:text-4xl lg:text-6xl font-semibold leading-snug md:leading-normal lg:leading-normal">
            Transforming Lives, Restoring Hope
          </p>
          <p className="text-lg md:text-2xl mb-8 opacity-90 mt-5">
            New Life Dream Foundation is dedicated to providing hope and
            opportunities for those seeking a fresh start.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end ">
          <div className="rounded-2xl border-[10px] border-gray-200 bg-white p-4 md:p-6 lg:p-8">
            <Image
              src={family}
              alt="Family"
              width={600}
              height={600}
              className="rounded-xl sm:w-[500px]"
              layout="responsive"
            />
          </div>
        </div>

       
      </div>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center justify-center mt-[50px] mx-auto">
          <Button className="bg-red-600 text-white hover:bg-red-700 px-4 py-6 w-[200px] rounded-md">
            Learn More
          </Button>
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-black  w-[200px] rounded-md px-4 py-5"
          >
            Get Involved
          </Button>
        </div>
    </section>
  );
};

export default HeroSection;

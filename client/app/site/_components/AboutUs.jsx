import { Button } from "@/components/ui/button";
import React from "react";

const AboutUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            OUR MISSION
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            We strive to provide comprehensive support and resources to
            individuals seeking to rebuild their lives, fostering personal
            growth, and creating opportunities for a brighter future.
          </p>
          <Button
            variant="outline"
            className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white  rounded-lg"
          >
            About Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

'use client'
import { testimonials } from "@/app/data/HomeData";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const Section5 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < testimonials.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="md:px-20 px-5 py-10 md:py-20 bg-background">
      <div className="flex items-end justify-between">
        <h2 className="text-5xl px-16 text-white">
          An enterprise template to ramp <br /> up your company website
        </h2>
        <div className="flex gap-4 items-center">
          <button
            onClick={handlePrevious}
            className={`p-3 hover:bg-slate-200 text-background bg-white rounded-full shadow-md ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentIndex === 0}
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className={`p-3 hover:bg-slate-200 text-background bg-white rounded-full shadow-md ${
              currentIndex === testimonials.length - 3 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentIndex === testimonials.length - 3}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 items-start place-items-center mx-16 gap-16 mt-16 mb-10">
        {testimonials.slice(currentIndex, currentIndex + 3).map((item, index) => (
          <div data-aos={item.aos} key={index} className="bg-white py-8 px-10 text-black rounded-2xl flex flex-col gap-10">
            <q className="font-medium text-xl">{item.comment}</q>
            <div className="flex gap-4 item-center">
              <Image
                src={item.image}
                width={50}
                height={50}
                className=""
                alt={item.fullName + " profile"}
              />
              <div className="flex flex-col gap-1">
                <h5 className="font-medium">{item.fullName}</h5>
                <small>{item.role}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section5;

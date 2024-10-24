import Image from "next/image";
import Link from "next/link";
import React from "react";

const Section7 = () => {
  return (
    <section className="text-black bg-white md:px-20 py-20">
      <p data-aos="fade-up" className="text-center text-sm ">
        Our Blog
      </p>
      <h2
        data-aos="fade-up"
        className="text-center font-medium text-5xl w-2/3 py-5 mx-auto"
      >
        Value proposition accelerator product management venture.
      </h2>
      <div className="md:grid grid-cols-3 gap-24 place-content-between p-10">
        <div data-aos="fade-up" className="flex gap-3 items-start flex-col">
          <Image
            src="/assets/svg/Image1.svg"
            className="w-full"
            alt="background right"
            width={100}
            height={100}
          />
          <h4 className="font-semibold">Cool Feature title</h4>
          <p>Learning curve network effects return on investment.</p>
         
        </div>
        <div data-aos="fade-down" className="flex gap-3 items-start flex-col">
          <Image
            src="/assets/svg/Image2.svg"
            className="w-full"
            alt="background right"
            width={100}
            height={100}
          />
          <h4 className="font-semibold">Even cooler feature</h4>
          <p>Learning curve network effects return on investment.</p>
          
        </div>
        <div data-aos="fade-up" className="flex gap-3 items-start flex-col">
          <Image
            src="/assets/svg/Image3.svg"
            className="w-full"
            alt="background right"
            width={100}
            height={100}
          />
          <h4 className="font-semibold">Cool feature title</h4>
          <p>Learning curve network effects return on investment.</p>
        </div>
      </div>
    </section>
  );
};

export default Section7;

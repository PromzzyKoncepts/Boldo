'use client'
import { blog } from "@/app/data/HomeData";
import Image from "next/image";
import React, { useState } from "react";

const Section7 = () => {
  const [visibleCount, setVisibleCount] = useState(3); 
  const isAllVisible = visibleCount >= blog.length; 

  const handleLoadMore = () => {
    if (isAllVisible) {
      setVisibleCount(3); 
    } else {
      setVisibleCount(blog.length); 
    }
  };

  return (
    <section className="text-black bg-white md:px-36 py-10 md:py-20">
      <p data-aos="fade-up" className="text-center text-sm">
        Our Blog
      </p>
      <h2
        data-aos="fade-up"
        className="text-center font-medium text-2xl md:text-5xl w-2/3 py-5 mx-auto"
      >
        Value proposition accelerator product management venture.
      </h2>
      <div className="md:grid grid-cols-3 gap-10 md:gap-20 place-content-between flex flex-col items-center md:items-baseline justify-center md:justify-start mx-auto p-10">
        {blog.slice(0, visibleCount).map((item, index) => (
          <div
            key={index}
            
            className="flex gap-3 md:items-start items-cente flex-col"
          >
            <div>
              <Image
                src={item.image}
                className="w-full"
                alt="background right"
                width={100}
                height={100}
              />
            </div>
            <h4 className="font-semibold">
              {item.title} <small className="font-light">{item.date}</small>
            </h4>
            <p className="w-[90%] md:w-2/3">{item.content}</p>
            <div className="flex items-center gap-4">
              <Image
                src={item.userSrc}
                className="w-8"
                alt="background right"
                width={50}
                height={50}
              />
              <p>{item.user}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleLoadMore}
        className="border-background rounded-full text-background border-2 px-6 py-2 text-center flex items-center justify-center mx-auto"
      >
        {isAllVisible ? "Load less" : "Load more"}
      </button>
    </section>
  );
};

export default Section7;

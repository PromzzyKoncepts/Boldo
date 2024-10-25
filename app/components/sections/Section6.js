import Image from "next/image";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useState } from "react";

const Section6 = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownIndex) => {
    if (openDropdown === dropdownIndex) {
      setOpenDropdown(null); 
    } else {
      setOpenDropdown(dropdownIndex); 
    }
  };

  return (
    <section className="md:px-36 px-5 py-10 md:py-20 bg-white text-black">
      <div data-aos="">
        <Image
          src="/assets/svg/section5.svg"
          width={500}
          height={500}
          className="w-full"
          alt="section image"
        />
      </div>
      <div className="flex  md:grid grid-cols-3 flex-col items-center justify-between gap-10 my-10">
        <h2 data-aos="" className="text-2xl md:text-4xl col-span-2">
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h2>
        <div className="flex flex-col gap-5 ">
          <div
            onClick={() => toggleDropdown(1)}
            className="hover:text-background font-medium cursor-pointer border-b py-2 hover:border-background flex items-center justify-between  gap-5"
          >
            <span>We connect our customers with the best?</span>
            <IoIosArrowDropdownCircle
              size={26}
              className={`transition-transform duration-700 ease-in-out ${
                openDropdown === 1 ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          {openDropdown === 1 && (
            <div
              className="overflow-hidden transition-all duration-700 ease-in-out max-h-[200px] opacity-100"
            >
              <p className="">
                Okay, I basically do not know what to put on here, so I can just
                say that I hope by now you are captivated by the functionalities
                implemented in this design.
              </p>
            </div>
          )}

          <div
            onClick={() => toggleDropdown(2)}
            className="hover:text-background font-medium cursor-pointer border-b py-2 hover:border-background flex items-center justify-between md:gap-5"
          >
            <span>How do we ensure quality service?</span>
            <IoIosArrowDropdownCircle
              size={26}
              className={`transition-transform duration-700 ease-in-out ${
                openDropdown === 2 ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          {openDropdown === 2 && (
            <div
              className="overflow-hidden transition-all duration-700 ease-in-out max-h-[200px] opacity-100"
            >
              <p className="">
                Quality service is maintained through constant feedback and
                improvement mechanisms that ensure customer satisfaction.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Section6;

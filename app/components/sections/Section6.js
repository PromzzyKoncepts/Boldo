import Image from "next/image";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Section6 = () => {
  return (
    <section className="md:px-36 px-5 py-10 md:py-20 bg-white text-black">
      <div data-aos=" ">
        <Image
          src="/assets/svg/section5.svg"
          width={500}
          height={500}
          className="w-full"
          alt="section image"
        />
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between gap-10 my-10">
        <h2  data-aos=" " className="text-2xl md:text-4xl md:w-1/2 ">
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h2>
        <div className="flex flex-col gap-5 ">
          <div data-aos="fade-right" className="hover:text-background font-medium cursor-pointer border-b py-2 hover:border-background flex items-center gap-5">
            We connect our customers with the best? <IoIosArrowDropdownCircle size={26} />{" "}
          </div>
          <div  data-aos="fade-up" className="hover:text-background font-medium cursor-pointer border-b py-2 hover:border-background flex items-center gap-5">
            We connect our customers with the best? <IoIosArrowDropdownCircle size={26} />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;

import Image from "next/image";
import Link from "next/link";
import { BiLeaf } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";

const Section4 = () => {
  return (
    <section className="text-black bg-white md:px-20 py-16 grid grid-cols-2 gap-10 place-content-center items-center">
      <div className="flex flex-col gap-8 items-start  px-20">
        <h2 data-aos="fade-up" className="text-4xl  font-medium">
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h2>
        <div className="flex flex-col gap-5 items-">
          <div
            data-aos="fade-left"
            className="flex gap-5 shadow-md p-4 hover:bg-background hover:text-white items-center"
          >
            <BiLeaf />
            <p>We connect our customers with the best.</p>
          </div>

          <div
            data-aos="fade-right"
            className="flex gap-5 shadow-md p-4 hover:bg-background hover:text-white items-center"
          >
            <IoEyeOutline />
            <p>Advisor success customer launch party.</p>
          </div>
          <div
            data-aos="fade-up"
            className="flex gap-5 shadow-md p-4 hover:bg-background hover:text-white items-center"
          >
            <IoSunnyOutline />
            <p>Business-to-consumer long tail.</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div data-aos="fade-down" >
          <Image
            src="/assets/svg/person2.svg"
            className="w-2/3 mx-auto"
            alt="background right"
            width={300}
            height={300}
          />
        </div>
        <div>
          <Image
            src="/assets/svg/chart2.svg"
            className="absolute right-[40%] -bottom-[20%]"
            alt="background right"
            width={250}
            height={250}
          />
        </div>
      </div>
    </section>
  );
};

export default Section4;

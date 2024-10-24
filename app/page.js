import Image from "next/image";
import Header from "./components/Header";
import Link from "next/link";
import Slider from "./components/Slider";
import { FaArrowRight } from "react-icons/fa";
import Section3 from "./components/sections/Section3";
import Section4 from "./components/sections/Section4";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <section className="z-[9000000] flex items-center ga flex-col justify-around  bg-background h-screen md:px-20">
        <Image
          src="/assets/svg/CircleRight.svg"
          className="w-[40%] opacity-40 z-[10] absolute right-0 top-0 "
          alt="background right"
          width={100}
          height={100}
        />

        <div className=" grid grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-5 ">
            <h1 className="text-5xl">
              Save time by building fast with Boldo Template{" "}
            </h1>
            <p>
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
            <div className="flex gap-4 items-center">
              <Link
                href="/template"
                className="px-6 py-2 font-bold bg-button text-background rounded-full"
              >
                Buy template
              </Link>
              <Link
                href="/template"
                className="px-6 py-2 font-bold border-2 border-white text-white rounded-full"
              >
                Explore
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-y-5 items-stretch justify-stretch">
            <div className="col-start-1 col-end-3">
              <Image
                src="/assets/svg/item1.svg"
                className=""
                alt="background right"
                width={1000}
                height={1000}
              />
            </div>
            <div className="bg-[#3B5166] w-[82%] p-4 rounded-xl">
              <Image
                src="/assets/svg/item2.svg"
                className=""
                alt="background right"
                width={1000}
                height={1000}
              />
            </div>
            <div className="">
              <Image
                src="/assets/svg/item3.svg"
                className=""
                alt="background right"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
        <Slider />
      </section>

      <section className="text-black bg-white md:px-20 py-20">
        <p data-aos="fade-up" className="text-center text-sm ">
          Our Services
        </p>
        <h2
          data-aos="fade-up"
          className="text-center font-medium text-5xl w-2/3 py-5 mx-auto"
        >
          Handshake infographic mass market crowdfunding iteration.
        </h2>
        <div className="md:grid grid-cols-3 gap-24 place-content-between p-10">
          <div data-aos="fade-up" className="flex gap-3 items-start flex-col">
            <Image
              src="/assets/svg/cool1.svg"
              className="w-full"
              alt="background right"
              width={100}
              height={100}
            />
            <h4 className="font-semibold">Cool Feature title</h4>
            <p>Learning curve network effects return on investment.</p>
            <Link
              href="/explore"
              className="relative flex items-center gap-2 py-2 text-black hover:font-bold hover:text-background cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
            >
              <span>Explore Page</span> <FaArrowRight />
            </Link>
          </div>
          <div data-aos="fade-down" className="flex gap-3 items-start flex-col">
            <Image
              src="/assets/svg/cool2.svg"
              className="w-full"
              alt="background right"
              width={100}
              height={100}
            />
            <h4 className="font-semibold">Even cooler feature</h4>
            <p>Learning curve network effects return on investment.</p>
            <Link
              href="/explore"
              className="relative flex items-center gap-2 py-2 text-black hover:font-bold hover:text-background cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
            >
              <span>Explore Page</span> <FaArrowRight />
            </Link>
          </div>
          <div data-aos="fade-up" className="flex gap-3 items-start flex-col">
            <Image
              src="/assets/svg/cool3.svg"
              className="w-full"
              alt="background right"
              width={100}
              height={100}
            />
            <h4 className="font-semibold">Cool feature title</h4>
            <p>Learning curve network effects return on investment.</p>
            <Link
              href="/explore"
              className="relative flex items-center gap-2 py-2 text-black hover:font-bold hover:text-background cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
            >
              <span>Explore Page</span> <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <Section3 />
      <Section4 />
    </div>
  );
}

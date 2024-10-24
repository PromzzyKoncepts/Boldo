import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className=" bg-background relative p-5 md:p-14 w-full md:w-2/3 mx-auto md:rounded-xl">
      <Image
          src="/assets/svg/CircleRight.svg"
          className="md:w-[25%] w-[30%] opacity-30 z-[10] absolute right-0 top-0 "
          alt="background right"
          width={100}
          height={100}
        />
        <div className=" flex gap-4 flex-col items-center justify-center ">
          <h3 className="text-2xl md:text-3xl w-full md:w-2/3 mb-5 mx-auto text-center">
            An enterprise template to ramp up your company website
          </h3>
          <div className="flex gap-3 md:gap-7 items-center">
            <input
              placeholder="Your email address"
              className="rounded-full px-3 py-2 border-0 focus:outline-0 outline-0 "
            />
            <button className="bg-button px-3 md:px-6 py-1.5 rounded-full font-semibold text-background">
              Start now
            </button>
          </div>
        </div>
      </div>
      <div className="px-5 py-10 text-black  md:p-20">
        <div className=" sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  place-items-between flex flex-wrap items-start justify-between  gap-6">
          <div className="flex flex-col border-b pb-5 md:pb-0 md:border-0 gap-2 md:gap-5">
            <div className="flex items-center gap-3 text-xl font-semibold">
              <Image
                className="text-xl font-bold pb-3"
                width={30}
                height={30}
                src="/assets/svg/BoldoLogo.svg"
              />
              <span>Boldo</span>
            </div>
            <p className="">
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
            <p className="mt-5">All Rights Reserved &copy; 2024</p>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-bold pb-3">Landings</h3>
            <Link href="/about">Home</Link>
            <Link href="/contact">Products</Link>
            <Link href="/dashboard">Services</Link>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-2xl  font-bold pb-3">Company</h3>
            <Link href="/about" className="flex items-center gap-1">
              Home
            </Link>
            <Link href="/contact" className="flex items-center gap-2">
              Careers{" "}
              <small className="bg-button p-1.5 text-background gap-2 rounded-full">
                Hiring!
              </small>
            </Link>
            <Link href="/dashboard" className="flex items-center gap-1">
              Services
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl  font-bold pb-3">Resources</h3>
            <Link href="/about" className="flex items-center gap-1">
              Blog
            </Link>
            <Link href="/contact" className="flex items-center gap-1">
              Product
            </Link>
            <Link href="/dashboard" className="flex items-center gap-1">
              Services
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

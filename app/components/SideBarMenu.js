"use client";
import { useState } from "react";

import { IoCloseCircleOutline, IoGift, IoHeart } from "react-icons/io5";
import { RiAccountCircleFill, RiNotification2Line } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const SidebarMenu = ({ setMenuOpen }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
    }, 500);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full text-white bg-background h-screen z-[1000] transition-all duration-500 ease-in-out lg:hidden ${
        isClosing ? "slide-out" : "slide-in"
      }`}
    >
      <div className="flex px-5 py-6 items-center justify-between">
        <div
          id="icon"
          className="flex items-center w-full justify-between gap-5 md:hidden"
        >
          <div className="flex gap-4 items-center font-bold text-2xl">
            <Image
              src="/assets/svg/BoldoLogo.svg"
              width={30}
              height={30}
              alt="Logo"
            />{" "}
            Boldo
          </div>

          <button onClick={handleCloseMenu}>
            <IoCloseCircleOutline
              size={35}
              className="hover:text-button cursor-pointer"
            />
          </button>
        </div>
      </div>

      <div className="text-lg py-10 flex flex-col">
        <Link
          href={"/products"}
          className="hover:text-background hover:bg-button flex items-center justify-between border-b  px-5 py-8"
          
        >
          <div className="flex items-center gap-3">
            <span>
              <IoGift size={30} />
            </span>
            <span>Products</span>
          </div>
          
        </Link>
        <Link
          href={"/services"}
          className="hover:text-background hover:bg-button flex items-center justify-between border-b  px-5 py-8"
          
        >
          <div className="flex items-center gap-3">
            <span>
              <IoHeart size={30} />
            </span>
            <span>Services</span>
          </div>
          
        </Link>
        <Link
          href={"/about"}
          className="hover:text-background hover:bg-button flex items-center justify-between border-b  px-5 py-8"
          
        >
          <div className="flex items-center gap-3">
            <span>
              <RiNotification2Line size={30} />
            </span>
            <span>About</span>
          </div>
          
        </Link>
        <Link
          href={"/login"}
          className="text-background bg-button animate-pulse hover:animate-none flex items-center justify-between border-b  px-5 py-8"
          
        >
          <div className="flex items-center gap-3">
            <span>
            <RiAccountCircleFill size={30} />
            </span>
            <span>Log in</span>
          </div>
          
        </Link>
      </div>
    </div>
  );
};

export default SidebarMenu;

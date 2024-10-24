"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import SidebarMenu from "./SideBarMenu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed z-[100] top-0 w-full px-5 md:px-20 py-5 transition-all duration-300 ${
        scrolled
          ? "backdrop-filter backdrop-blur-lg text-button font-bold  shadow-lg"
          : "bg-transparent"
      }`}
    >
        {menuOpen && <SidebarMenu setMenuOpen={setMenuOpen} />}
      <header className="flex items-center justify-between">
        <div className="flex text-2xl items-center gap-3 font-semibold">
          <Image
            src="/assets/svg/BoldoLogo.svg"
            width={100}
            height={100}
            className="w-8"
            alt="Boldo Logo"
          />
          Boldo
        </div>
        <div className="md:hidden block cursor-pointer"  onClick={() => setMenuOpen(true)}><IoIosMenu size={32}/></div>

        <div className="hidden md:flex gap-10 items-center">
          <Link href="/product">Product</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link
            href="/login"
            className="px-5 py-2 bg-white rounded-full text-background"
          >
            Log in
          </Link>
        </div>
        
      </header>
    </div>
  ); 
};

export default Header;

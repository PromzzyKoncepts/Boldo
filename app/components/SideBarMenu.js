'use client'
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { IoCloseCircleOutline, IoGift, IoHeart } from "react-icons/io5";
import { RiAccountCircleFill, RiNotification2Line } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import CategoryCard from "./CategoryCard";

import { CiCalendar } from "react-icons/ci";
import { BiLogIn, BiLogOut, BiPhoneCall } from "react-icons/bi";
import { useGiftSelector } from "../context/GiftContext";
import { useAuth } from "../context/AuthContext";

const SidebarMenu = ({ setMenuOpen }) => {
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const {logOut} = useAuth();
  const token = localStorage.getItem('token');
  const navigate = useNavigate()
  const { occasion, setOccasion, allOccasions, setOccasionId } = useGiftSelector();

  const handleClick = (id, name) => {
    console.log(id, name)
    setOccasion(name);
    setOccasionId(id);
    navigate('/gifts/recipients');
  }


  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
    }, 500); // Match the duration of the slide-out animation
  };

  return (
    <div className={`fixed top-0 left-0 w-full text-[#343434] bg-[#f8f8f8] h-screen z-[1000] transition-all duration-500 ease-in-out lg:hidden ${isClosing ? 'slide-out' : 'slide-in'}`}>
      
      <div className="flex px-5 py-6 items-center justify-between">
        <div id="icon" className="flex items-center gap-5 md:hidden">
          <button onClick={handleCloseMenu}>
            <IoCloseCircleOutline
              size={30}
              className="hover:text-red-600 cursor-pointer"
            />
          </button>
          <img src={icareLogo} alt="" />
        </div>
        <div className="flex items-center gap-5">
          <button>
            <RiNotification2Line size={30} color="#737373" />
          </button>
          <button>
            <FiShoppingCart size={30} color="#737373" />
          </button>
        </div>
      </div>

      <div className="">
        <NavLink
          to={"/profile"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center justify-between px-5 py-4 text-white font-semibold bg-primary"
              : "hover:text-primary flex items-center justify-between border-t  border-b px-5 py-5"
          }
        >
          <div className="flex items-center gap-3">
            <span>
              <RiAccountCircleFill size={30} />
            </span>
            <span>My Account</span>
          </div>
          <div>
            <MdOutlineKeyboardArrowRight size={25} />
          </div>
        </NavLink>
        <NavLink
          to={"/favorites"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center justify-between px-5 py-4 text-white font-semibold bg-primary"
              : "hover:text-primary flex items-center justify-between border-b  px-5 py-5"
          }
        >
          <div className="flex items-center gap-3">
            <span>
              <IoHeart size={30} />
            </span>
            <span>My Favorites</span>
          </div>
          <div>
            <MdOutlineKeyboardArrowRight size={25} />
          </div>
        </NavLink>
        <NavLink
          to={"/gifts"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center justify-between px-5 py-4 text-white font-semibold bg-primary"
              : "hover:text-primary flex items-center justify-between border-b  px-5 py-5"
          }
        >
          <div className="flex items-center gap-3">
            <span>
              <IoGift size={30} />
            </span>
            <span>Gifts</span>
          </div>
          <div>
            <MdOutlineKeyboardArrowRight size={25} />
          </div>
        </NavLink>

        <div className="px-5 py-8">
          <div className="font-semibold text-sm">Popular Occasions</div>
          <div className="mt-4 flex gap-5 items-end overflow-x-scroll text-[#3D0594] container text-sm">
          {
            allOccasions?.map((item, index) => (

              <CategoryCard key={index} name={item.name} color="#000000" icon={item.icon} id={item._id} handleClick={handleClick}/>
            ))
          }</div>
        </div>

        <NavLink
          to={"/orders"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center justify-between px-5 py-4 text-white font-semibold bg-primary"
              : "hover:text-primary flex items-center justify-between  border-t px-5 py-5"
          }
        >
          <div className="flex items-center gap-3">
            <span>
              <CiCalendar size={30} />
            </span>
            <span>My Orders</span>
          </div>
          <div>
            <MdOutlineKeyboardArrowRight size={25} />
          </div>
        </NavLink>

        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center justify-between px-5 py-4 text-white font-semibold bg-primary"
              : "hover:text-primary flex items-center justify-between  border-t px-5 py-5"
          }
        >
          <div className="flex items-center gap-3">
            <span>
              <BiPhoneCall size={30} />
            </span>
            <span>Contact Us</span>
          </div>
          <div>
            <MdOutlineKeyboardArrowRight size={25} />
          </div>
        </NavLink>

          {token ? (<button
          onClick={() => setIsLogoutOpen(true)}
          className="flex items-center justify-between px-5 py-6  font-semibold text-red-600 hover:text-primary border-b border-t w-full"
        >
          <div className="flex items-center gap-3">
            <span>
              <BiLogOut size={30} />
            </span>
            <span>Log out</span>
          </div>
        </button>) : (<button
          onClick={() => navigate("/auth/login")}
          className="flex items-center justify-between px-5 py-6  font-semibold text-red-600 bg-gray-300 hover:text-primary border-b border-t w-full"
        >
          <div className="flex items-center gap-3">
            <span>
              <BiLogIn size={30} />
            </span>
            <span>Log in</span>
          </div>
        </button>)}
        
        
      </div>
    </div>
  );
};

export default SidebarMenu;

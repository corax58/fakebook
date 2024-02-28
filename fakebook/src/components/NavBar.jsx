import React from "react";
import logo from "../assets/images/logo.png";
import { GoSearch, GoHomeFill } from "react-icons/go";
import { FaUserFriends, FaPhotoVideo, FaUserAlt } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useLogout } from "../hooks/useLogout";

const NavBar = () => {
  const { logout } = useLogout();
  const handleLogout = () => {
    logout();
  };
  return (
    <nav className=" h-14 w-full  bg-primary border-b border-b-third flex-row flex justify-between  items-center shadow-md">
      <div className="flex flex-row items-center space-x-2 ml-2 h-full">
        <img src={logo} alt="fakebook logo" className="h-10 rounded-full" />
        <div className="bg-third p-3 rounded-full hidden md:flex">
          <GoSearch size={20} className="" />
        </div>
        <form action="" className="flex flex-row items-center md:hidden">
          <GoSearch
            className=" absolute ml-2  text-neutral-500 font-semibold"
            size={20}
          />
          <input
            type="text"
            className=" rounded-full  h-10 bg-third pl-8 "
            placeholder={"Search Fakebook"}
          />
        </form>
      </div>

      <div className="flex flex-row space-x-4 sm:hidden ">
        <div className="navbar-icon group items-center justify-center flex">
          <GoHomeFill
            className="text-neutral-300 group-hover:text-accent"
            size={28}
          />
        </div>
        <div className="navbar-icon group items-center justify-center flex">
          <FaUserFriends
            className="text-neutral-300 group-hover:text-accent"
            size={28}
          />
        </div>
        <div className="navbar-icon group items-center justify-center flex">
          <FaPhotoVideo
            className="text-neutral-300 group-hover:text-accent"
            size={28}
          />
        </div>
      </div>
      <div className="flex space-x-2 mr-2">
        <div
          className="right-nav-icon
        "
        >
          <IoMdNotifications size={28} className=" text-neutral-300" />
        </div>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button">
            <div className="right-nav-icon">
              <FaUserAlt size={28} className=" text-neutral-300" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[8] menu p-2 shadow  rounded-box w-52 bg-third"
          >
            <li>
              <button
                className=" font-bold text-red-500"
                onClick={handleLogout}
              >
                <RiLogoutBoxLine size={22} className="font-bold" />
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

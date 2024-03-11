import React from "react";
import logo from "../assets/images/logo.png";
import { GoSearch, GoHomeFill } from "react-icons/go";
import { FaUserFriends, FaPhotoVideo, FaUserAlt } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const NavBar = () => {
  const { user } = useAuthContext();
  console.log(user);
  const { logout } = useLogout();
  const handleLogout = () => {
    logout();
  };
  return (
    <nav className=" h-14 w-full  bg-primary border-b border-b-third flex-row flex justify-between  items-center shadow-md">
      <div className="w-full justify-start flex">
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
      </div>
      <div className="w-full justify-center flex">
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
      </div>
      <div className="w-full justify-end flex">
        <div className="flex space-x-2 ">
          <div
            className="right-nav-icon p-2
        "
          >
            <IoMdNotifications size={28} className=" text-neutral-300" />
          </div>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              <div className="right-nav-icon overflow-hidden size-12">
                {user.profilePic ? (
                  <img
                    src={import.meta.env.VITE_SERVER_URL + user.profilePic}
                    className=" size-12"
                  />
                ) : (
                  <FaUserAlt size={28} className=" text-neutral-300" />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[8] menu p-2 shadow  rounded-box w-max bg-third"
            >
              <li>
                <div className="flex flex-col  items-start gap-0">
                  <span className=" font-semibold text-neutral-300 text-base ">
                    {user.userName}
                  </span>
                  <span className="  text-sm ">{user.email}</span>
                </div>
              </li>
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
      </div>
    </nav>
  );
};

export default NavBar;

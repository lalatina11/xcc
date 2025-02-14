import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import { IoIosHome } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { MdWebStories } from "react-icons/md";
import ClerkAuthComp from "../ClerkAuthComp";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center h-24">
      {/* left */}
      <nav className="w-[20%]">
        <Link
          href={"/"}
          className="font-bold text-xl text-blue-400 md:hidden lg:block"
        >
          Candra
        </Link>
      </nav>
      {/* center */}
      <nav className="hidden md:flex lg:flex justify-between items-center lg:w-[50%] md:w-full">
        {/* Links */}
        <div className="flex space-x-6 items-center">
          <Link href={"/"} className="flex gap-1 items-center">
            <IoIosHome className="w-[16px] h-[16px]" />
            <span>Home Page</span>
          </Link>
          <Link href={""} className="flex gap-1 items-center">
            <FaUserFriends className="w-[16px] h-[16px]" />
            <span>Friends</span>
          </Link>
          <Link href={""} className="flex gap-1 items-center">
            <MdWebStories className="w-[16px] h-[16px]" />
            <span>Stories</span>
          </Link>
        </div>
        <div className="hidden lg:flex md:flex">
          <div className="relative">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search..."
              className="bg-transparent border border-zinc-600 px-2.5 p-1 rounded-md font-medium outline-none"
            />
            <IoSearchSharp className="w-[22px] h-[22px] absolute top-1.5 right-1" />
          </div>
        </div>
      </nav>
      {/* right */}
      <nav className="w-[30%] flex justify-end items-center">
        <section className="font-semibold lg:block md:block hidden">
          <ClerkAuthComp />
        </section>
        <MobileMenu />
      </nav>
    </header>
  );
};

export default Navbar;

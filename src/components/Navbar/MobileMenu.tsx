"use client";

import Link from "next/link";
import { useState } from "react";
import ClerkAuthComp from "../ClerkAuthComp";
import { IoIosHome } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { MdWebStories } from "react-icons/md";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block lg:hidden md:hidden">
      <div
        className={`flex flex-col gap-[4.5px] cursor-pointer`}
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <div
          className={`origin-left w-6 h-1 bg-blue-400 rounded-sm transition-all ease-in-out duration-400 ${
            isOpen ? "rotate-45" : ""
          }`}
        />
        <div
          className={`origin-left w-6 h-1 bg-blue-400 rounded-sm transition-all ease-in-out duration-400 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <div
          className={`origin-left w-6 h-1 bg-blue-400 rounded-sm transition-all ease-in-out duration-400 ${
            isOpen ? "-rotate-45" : ""
          }`}
        />
      </div>
      {isOpen ? (
        <div className="absolute top-24 left-0 bg-zinc-800 w-full flex flex-col justify-center items-center h-[calc(100vh-96px)] font-medium text-xl">
          <div className="flex flex-col justify-center items-start h-full gap-8 w-fit">
            <section>
              <ClerkAuthComp />
            </section>
            <Link href={""} className="flex gap-1 items-center">
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
          {/* <Link href={"/login"}>Login</Link> */}
        </div>
      ) : null}
    </div>
  );
};

export default MobileMenu;

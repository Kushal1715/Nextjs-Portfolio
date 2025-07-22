"use client";
import {
  AlignJustify,
  ArrowUpRight,
  Moon,
  MoveUpRight,
  Sun,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About me" },
  { id: "services", label: "Services" },
  { id: "work", label: "My work" },
  { id: "contact", label: "Contact Me" },
];

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`${
        scrolling ? "border-b-1 border-gray-200" : ""
      } fixed top-0 left-0 bg-gray-100 w-full h-[120px] z-50`}
    >
      <div className="flex items-center justify-between relative px-8 py-3 xl:px-[100px] 2xl:px-[173px] 2xl:py-[20px]">
        <div>
          <h1 className="font-semibold text-[37px] xl:text-[45px] tracking-[0px] flex gap-1.5">
            Kushal<span className="text-red-500">.</span>
          </h1>
        </div>
        <div className="hidden lg:flex items-center gap-10 xl:border-1 lg:border-gray-200 shadow-md rounded-full lg:px-14 py-3 bg-white">
          {navItems.map((item) => (
            <a
              href={`#${item.id}`}
              className="text-[16px] xl:text-[20px] cursor-pointer"
              key={item.id}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-8">
          <div className="cursor-pointer">
            {/* <Moon /> */}
            <Sun className="w-7 h-7" />
          </div>
          <div className="hidden lg:flex items-center">
            <button className="rounded-full py-3 px-8 flex items-center gap-2 text-[14px] xl:text-[18px] border-1 border-black cursor-pointer">
              Contact
              <ArrowUpRight className="h-[20px] w-[20px]" />
            </button>
          </div>
          <div className="cursor-pointer">
            <button
              className="lg:hidden text-[18px] "
              onClick={() => setOpenSidebar(true)}
            >
              <AlignJustify className="h-9 w-9" />
            </button>
          </div>
        </div>
        {openSidebar && (
          <div className="absolute lg:hidden right-0 top-0 min-h-screen bg-gray-400 w-full sm:w-1/2">
            <div className="relative">
              <div
                className="absolute right-6 top-2 cursor-pointer"
                onClick={() => setOpenSidebar(false)}
              >
                <X className="w-14 h-14" />
              </div>
            </div>
            <div className="flex flex-col mt-24 ml-8 text-[25px] space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className=""
                  onClick={() => setOpenSidebar(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

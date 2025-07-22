import { Mail } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="px-8 py-3 xl:px-[100px] 2xl:px-[173px] 2xl:py-[20px]">
      <div className="text-center">
        <h1 className="font-semibold text-[37px] xl:text-[45px]">
          Kushal<span className="text-red-500">.</span>
        </h1>
        <a className="flex items-center justify-center gap-2 cursor-pointer">
          <Mail className="text-gray-500" />
          <p className="text-gray-500 text-sm">kushalkhadka77@gmail.com</p>
        </a>
        <hr className="my-6 border-t-1 border-gray-500" />
        <div className="lg:flex items-center justify-between text-gray-500">
          <h4 className="mb-2 xl:mb-0">
            © 2025 Kushal Khadka. All rights reserved.
          </h4>
          <div className="lg:flex items-center gap-6">
            <p>Terms Of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { Download, MoveRight } from "lucide-react";
import React from "react";

const HomePage = () => {
  return (
    <section
      className="h-screen flex flex-col items-center justify-center text-center px-4"
      id="home"
    >
      <img
        src="/myProfile.png"
        alt="Profile"
        className="w-32 h-32 rounded-full mb-4"
      />
      <p className="text-[20px] font-medium text-gray-700">
        Hi! I’m Kushal Khadka <span className="inline-block">👋</span>
      </p>
      <h1 className="text-4xl md:text-6xl leading-tight mt-4">
        full stack web developer <br /> based in Kathmandu.
      </h1>
      <p className="text-gray-600 mt-4 max-w-2xl">
        I am a full stack developer from Kathmandu, Nepal with a year of
        experience in multiple companies like TechBoxTec, Nepalayan Software
        Solutions, CodSoft.
      </p>

      <div className="flex gap-4 mt-8">
        <button className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 cursor-pointer">
          connect with me <MoveRight className="w-4" />
        </button>
        <button className="border border-black px-6 py-3 rounded-full flex items-center gap-2 cursor-pointer">
          my resume <Download className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default HomePage;

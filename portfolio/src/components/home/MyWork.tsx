import React from "react";

const MyWork = () => {
  return (
    <div
      id="work"
      className="h-screen flex flex-col text-center justify-center"
    >
      <h4 className="text-lg mb-2">My Portfolio</h4>
      <h1 className="text-5xl mb-6">My latest work</h1>
      <p className="text-gray-500 mb-6">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing <br />
        my expertise in front-end development.
      </p>
      <div className="flex items-center flex-wrap justify-center gap-6 mt-6">
        <div className="relative h-[335px] w-full sm:w-[335px]">
          <img
            src="/work/work1.png"
            className="h-full w-full object-cover rounded-lg"
          />
          <div className="absolute bottom-4 right-4 left-4 bg-white text-black p-4 pr-4 flex justify-between items-center">
            <div className="flex flex-col text-left">
              <p className="font-semibold">frontend project</p>
              <p className="text-gray-500 text-md">web design</p>
            </div>
            <div className="p-3 border-1 rounded-full border-black">
              <img src="/work/Vector.png" className="h-6 w-6" />
            </div>
          </div>
        </div>
        <div className="relative h-[335px] w-[335px]">
          <img
            src="/work/work1.png"
            className="h-full w-full object-cover rounded-lg"
          />
          <div className="absolute bottom-4 right-4 left-4 bg-white text-black p-4 pr-4 flex justify-between items-center">
            <div className="flex flex-col text-left">
              <p className="font-semibold">frontend project</p>
              <p className="text-gray-500 text-md">web design</p>
            </div>
            <div className="p-3 border-1 rounded-full border-black">
              <img src="/work/Vector.png" className="h-6 w-6" />
            </div>
          </div>
        </div>
        <div className="relative h-[335px] w-[335px]">
          <img
            src="/work/work1.png"
            className="h-full w-full object-cover rounded-lg"
          />
          <div className="absolute bottom-4 right-4 left-4 bg-white text-black p-4 pr-4 flex justify-between items-center">
            <div className="flex flex-col text-left">
              <p className="font-semibold">frontend project</p>
              <p className="text-gray-500 text-md">web design</p>
            </div>
            <div className="p-3 border-1 rounded-full border-black">
              <img src="/work/Vector.png" className="h-6 w-6" />
            </div>
          </div>
        </div>
        <div className="relative h-[335px] w-[335px]">
          <img
            src="/work/work1.png"
            className="h-full w-full object-cover rounded-lg"
          />
          <div className="absolute bottom-4 right-4 left-4 bg-white text-black p-4 pr-4 flex justify-between items-center">
            <div className="flex flex-col text-left">
              <p className="font-semibold">frontend project</p>
              <p className="text-gray-500 text-md">web design</p>
            </div>
            <div className="p-3 border-1 rounded-full border-black">
              <img src="/work/Vector.png" className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;

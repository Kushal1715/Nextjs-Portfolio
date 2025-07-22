import React from "react";

const About = () => {
  return (
    <div
      className="h-screen flex flex-col items-center justify-center text-center"
      id="about"
    >
      <h4 className="text-lg mb-2">Introduction</h4>
      <h1 className="text-5xl">About me</h1>
      <div className="flex gap-10 mt-12">
        <div className="">
          <img src="/myImage.jpg" className="h-[380px] w-[320px] rounded-2xl" />
        </div>
        <div className="flex flex-col space-y-8">
          <p className="text-left">
            I am an experienced Frontend Developer with over a decade of
            professional expertise in <br /> the field. Throughout my career, I
            have had the privilege of collaborating with prestigious <br />
            organizations, contributing to their success and growth.
          </p>
          <div className="flex gap-4">
            <div className="flex flex-col text-left border-2 p-4 rounded-lg space-y-2">
              <h3 className="font-semibold text-[20px]">Languages</h3>
              <p className="text-[15px] text-gray-500">
                HTML, CSS, JavaScript <br /> React Js, Next Js
              </p>
            </div>
            <div className="flex flex-col text-left border-2 p-4 rounded-lg space-y-2">
              <h3 className="font-semibold text-[20px]">Languages</h3>
              <p className="text-[15px] text-gray-500">
                HTML, CSS, JavaScript <br /> React Js, Next Js
              </p>
            </div>
            <div className="flex flex-col text-left border-2 p-4 rounded-lg space-y-2">
              <h3 className="font-semibold text-[20px]">Languages</h3>
              <p className="text-[15px] text-gray-500">
                HTML, CSS, JavaScript <br /> React Js, Next Js
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

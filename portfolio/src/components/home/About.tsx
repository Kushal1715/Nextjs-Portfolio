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
          <img src="/myImage.jpg" className="h-[350px] w-[320px] rounded-2xl" />
        </div>
        <div className="flex flex-col space-y-8 py-4">
          <p className="text-left text-lg">
            I am an experienced Full Stack Developer with over a decade of
            <br />
            professional expertise in the field. Throughout my career, I have
            <br />
            had the privilege of collaborating with prestigious organizations,
            <br />
            contributing to their success and growth.
          </p>
          <div className="flex gap-4">
            <div className="flex flex-col text-left border-2 p-4 rounded-lg space-y-2 w-[185px]">
              <img src="/about/about2.png" className="h-6 w-6 mb-6" />
              <h3 className="font-semibold text-[20px]">Languages</h3>
              <p className="text-[15px] text-gray-500">
                JavaScript, React Js, Next Js, Express Js
              </p>
            </div>
            <div className="flex flex-col text-left border-2 p-4 rounded-lg space-y-2 w-[185px]">
              <img src="/about/about3.png" className="h-6 w-6 mb-6" />
              <h3 className="font-semibold text-[20px]">Education</h3>
              <p className="text-[15px] text-gray-500">
                Bachelor of Computer
                <br /> Application
              </p>
            </div>
            <div className="flex flex-col text-left border-2 p-4 rounded-lg space-y-2 w-[185px]">
              <img src="/about/about1.png" className="h-6 w-6 mb-6" />
              <h3 className="font-semibold text-[20px]">Projects</h3>
              <p className="text-[15px] text-gray-500">
                Built more than 5 <br /> projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import {
  SiGamemaker,
  SiNintendogamecube,
  SiGamedeveloper,
  SiGamejolt,
} from "react-icons/si";
const ProjectSec = () => {
  return (
    <section className="px-5   ">
      <div className="w-full text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl   font-extrabold  uppercase  py-7 sm:py-10  bg-gray-200/5 backdrop-blur-sm rounded-xl shadow-xl shadow-purple-800/10 my-3 ">
        <h2 className="drop-shadow-2xl ">Our Latest products</h2>
      </div>
      <div className="mx-6 ">
        <ol className="space-y-10 ">
          <li className="flex justify-around flex-col md:flex-row gap-x-5  items-center   rounded-md drop-shadow-xl p-2  my-4">
            <div className="">
              <SiNintendogamecube className="w-20 h-20 text-blue-600" />
            </div>
            <div className=" text-center m-2">
              <h3 className="caption-top font-bold  text-xl">
                Lorem ipsum dolor sit, amet consectetur
              </h3>
              <p className="text-xs ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quiaconsectetur adipisicing elit. Quia0 Lorem ipsum dolor sit
                amet,
              </p>
            </div>
          </li>
          <li className="flex justify-around flex-col md:flex-row gap-x-5  items-center   rounded-md drop-shadow-xl p-2  my-4">
            <div className="">
              <SiGamejolt className="w-20 h-20 text-red-600" />
            </div>
            <div className=" text-center m-2">
              <h3 className="caption-top font-bold  text-xl">
                Lorem ipsum dolor sit, amet consectetur
              </h3>
              <p className="text-xs ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quiaconsectetur adipisicing elit. Quia0 Lorem ipsum dolor sit
                amet,
              </p>
            </div>
          </li>
          <li className="flex justify-around flex-col md:flex-row gap-x-5  items-center   rounded-md drop-shadow-xl p-2  my-4">
            <div className="">
              <SiGamemaker className="w-20 h-20 text-green-400" />
            </div>
            <div className=" text-center m-2">
              <h3 className="caption-top font-bold  text-xl">
                Lorem ipsum dolor sit, amet consectetur
              </h3>
              <p className="text-xs ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quiaconsectetur adipisicing elit. Quia0 Lorem ipsum dolor sit
                amet,
              </p>
            </div>
          </li>
          <li className="flex justify-around flex-col md:flex-row gap-x-5  items-center   rounded-md drop-shadow-xl p-2  my-4">
            <div className="">
              <SiGamedeveloper className="w-20 h-20 text-yellow-300" />
            </div>
            <div className=" text-center m-2">
              <h3 className="caption-top font-bold  text-xl">
                Lorem ipsum dolor sit, amet consectetur
              </h3>
              <p className="text-xs ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quiaconsectetur adipisicing elit. Quia0 Lorem ipsum dolor sit
                amet,
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default ProjectSec;

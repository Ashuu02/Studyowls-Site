import React from "react";
import { useState } from "react";
import {  BsFiles } from "react-icons/bs";
import { HiCheckCircle } from "react-icons/hi";
import { HiOutlineBookOpen } from "react-icons/hi";

const Level4 = ({ title, img, exercises, bgcolor }) => {
  const [isShown, setIsShown] = useState(true);

  return (
    <>
      {/* cards */}
      <div 
        onMouseEnter={() => {
          setIsShown(false);
        }}
        onMouseLeave={() => setIsShown(true)} className="mt-[24px] cursor-pointer hover:scale-[101%] hover:shadow-lg hover:shadow-gray-200 ease-in-out duration-200 p-6 rounded-2xl w-auto h-[112px] flex bg-[#ffffff] ">
        <img src={img} alt="/UXImg" width={"64"} height="64" />
        <div className="ml-4 w-full">
          <h2 className=" text-base font-bold  ">{title}</h2>
          <div className="  align-text-bottom flex text-gray-400 ">
            <h2 className=" text-base font-bold text-black mr-2 mt-[9px]">
              PRO
            </h2>

            <BsFiles className=" mr-[6px] font-bold mt-[12px] text-gray-600 " />
            <p className="text-sm mt-[12px]">{exercises}</p>
          </div>
        </div>
        <div className=" opacity-0 absolute hover:opacity-100 shadow-lg text-right hover:shadow-gray-200 justify-right items-end pt-[7.5%] pl-[90%] duration-300 inset-0 z-10 font-bold  ">
          <div className="w-[45px] mt-[-10%] ml-[-30%] h-[45px] p-1 bg-white rounded-full hover:bg-gray-200 text-center justify-between items-center border-[0.1px] border-gray-200 ">
            <HiOutlineBookOpen className="sm:w-[26px] ml-[15%] mt-1 items-end text-right text-gray-800 sm:h-[26px]" />
          </div>
        </div>
        {isShown && (<div className=" ml-5 pt-[3%] ">
          <HiCheckCircle className="sm:w-[26px] text-gray-300 sm:h-[26px]" />
        </div>)}
      </div>
    </>
  );
};

export default Level4;

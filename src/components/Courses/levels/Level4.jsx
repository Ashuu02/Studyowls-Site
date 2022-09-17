import React from "react";
import img1 from "../../../assets/level2/colorTheory.svg";
import img2 from "../../../assets/level2/colorProperties.svg";
import img3 from "../../../assets/level2/imageTerminology.svg";
import img4 from "../../../assets/level2/imageProperties.svg";
import img5 from "../../../assets/level2/level2Test.svg";
import { BsClock, BsFiles } from "react-icons/bs";
import { HiCheckCircle } from "react-icons/hi";
import { BiHeart } from "react-icons/bi";

const Level4 = ({title,img,exercises,bgcolor}) => {
  return (
    <>
      {/* cards */}
      <div className="mt-[24px] cursor-pointer hover:scale-[101%] hover:shadow-lg hover:shadow-gray-200 ease-in-out duration-200 p-6 rounded-2xl w-[503.33px] h-[112px] flex bg-[#ffffff] ">
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

        <div className=" ml-5 pt-[3%] ">
          <HiCheckCircle className="sm:w-[26px] text-gray-300 sm:h-[26px]" />
        </div>
      </div>

    </>
  );
};

export default Level4;

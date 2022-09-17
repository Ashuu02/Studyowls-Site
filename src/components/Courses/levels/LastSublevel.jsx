import React from "react";
import img3 from "../../../assets/level3/img3.svg";
import img4 from "../../../assets/level3/img4.svg";
import img5 from "../../../assets/level3/img5.svg";
import img6 from "../../../assets/level3/img6.svg";
import { BsClock, BsFiles } from "react-icons/bs";
import { HiCheckCircle } from "react-icons/hi";
import { BiHeart } from "react-icons/bi";

const lastSublevel = ({ title, noOfLives, noOfexcercises, testimg }) => {
  return (
    <>
      <div className=" mt-[44px]  ml-[56px] ">
        <div className="mt-[24px] cursor-pointer p-6 rounded-2xl w-[503.33px] h-[112px] flex border-[1.5px] ">
          {/* <div className=""> */}
          <img src={testimg} alt="/level1Test" width={"64"} height="64" />
          {/* </div> */}
          <div className="ml-4 mb-4 w-full">
            <h2 className=" text-base font-bold  ">{title}</h2>
            <div className=" pt-[12px] align-text-bottom flex text-gray-400 ">
              <BiHeart className="text-lg mr-[6px] font-bold text-gray-600" />
              <p className="text-sm mr-[10px]">{noOfLives} Lives</p>
              <BsFiles className=" mr-[6px] font-bold text-gray-600 " />
              <p className="text-sm ">{noOfexcercises} exercises</p>
            </div>
          </div>

          <div className=" ml-5 pt-[3%] ">
            {/* <div className=" items-center text-center justify-between rounded-full"> */}
            <HiCheckCircle className="sm:w-[26px] text-gray-300 sm:h-[26px]" />
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default lastSublevel;

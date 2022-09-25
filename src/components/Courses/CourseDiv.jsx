import React from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import stackImg from "../../assets/stack.png";
import { FiPlay } from "react-icons/fi";
import { BsPlayFill } from "react-icons/bs";
import level from "../../assets/difficulty-level.png";
import { FiClock } from "react-icons/fi";

const CourseDiv = () => {
  return (
    <>
      <div className="  w-full sm:px-[40px] pb-[64px] px-0 tablet:p-[64px] ">
        <div className="text-black w-full">
          <div className="bg-white md:grid grid-flow-col-dense w-full max-w-[100%]">
            {/* <div className="relative flex bg-white h-auto w-full rounded-xl p-4 group"> */}
            {/* <div className=""></div> */}
            
            <div className=" tablet:hidden block mb-5 w-[80px] h-[80px] rounded-lg  ">
              <img
                src={stackImg}
                alt="/stackImg"
                className=""
              />
            </div>

            <div className=" laptop:hidden hidden tablet:block mb-5 sm:h-[144px] sm:w-[144px] rounded-lg ">
              <img
                src={stackImg}
                alt="/stackImg"
                className=""
              />
            </div>
            
            <div className="p-1">
              {/* <div className="rounded-lg sm:mt-[18px] mt-[14px]"> */}
              <p className=" uppercase text-sm font-bold text-[#05060f99] mb-3 ">
                DESIGN COURSE
              </p>
              <h2 className="font-sora w-full text-5xl font-bold">
                UX Design Foundations
              </h2>
              <p className="mt-3 text-[20px] ">
                Learn about the user experience (UX) industry and explore the
                basic concepts and roles within the UX field.
              </p>
              {/* </div> */}
              <div className="flex p-1 mt-[12px] mb-[-4px] mx-[-4px] text-sm">
                <button className="rounded-lg font-inter bg-[#f3f3f3] p-1">
                  <p className="font-bold text-xs px-[6px] ">POPULAR</p>
                </button>
                <div className="ml-3 flex">
                  <FiClock className="top-[-20%]  mt-[2px] h-[15px] w-[15px] font-extrabold items-center text-center justify-center text-gray-800" />
                  <p className="text-gray-500 text-sm px-1">
                    6 hours to complete
                  </p>
                </div>
                <div className="ml-3 flex">
                  <FiPlay className=" top-[-20%] mt-[2px] h-[15px] w-[15px] font-extrabold items-center text-center justify-center text-gray-800" />
                  <p className="text-gray-500 text-sm px-1">
                    25 lessons in the course
                  </p>
                </div>
              </div>

              <button className=" text-center items-center mt-6 laptop:w-auto w-full h-[44px] px-[18px] hover:bg-black ease-in-out duration-200 bg-[#5627FF] py-2 rounded-xl">
                <div className=" text-center items-center w-full font-extrabold text-white flex">
                  <BsPlayFill className=" h-[28px] w-[28px] items-center text-center justify-center font-extrabold " />
                  <p className="mt-[2px] w-full ">{"  "}Start Learning for free</p>
                </div>
              </button>
            </div>
            <div className=" hidden laptop:block rounded-lg ml-[64px]">
              <img
                src={stackImg}
                alt="/stackImg"
                className=" top-[-20%] rounded-lg"
                width={256}
                height={256}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDiv;

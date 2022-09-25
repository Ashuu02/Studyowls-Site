import React, { useState } from "react";
import CourseDiv from "./CourseDiv";
import { Link } from "react-router-dom";
import { BiMenu, BiSearch } from "react-icons/bi";
import CourseLevels from "./CourseLevels";
import RelatedCourses from "./RelatedCourses";
import Sidebar from "../Sidebar";
import { AiOutlineClose } from "react-icons/ai";

const CourseDetails = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className=" tablet:ml-[178px] ml-0 bg-[#ffffff] fixed overflow-scroll font-inter tablet:rounded-tl-3xl rounded-none tablet:rounded-bl-3xl h-screen">
        <div className="fixed border-b-[1px] rounded-tl-3xl rounded-none w-[100%] mb-4 z-[100] h-20 items-center bg-[#ffffff]">
          <div className="flex z-[100px] w-full mt-5 ">
            <div className=" w-full ml-[32px] h-[44px] px-[16px] max-w-[100px] py-2 bg-gray-100 rounded-lg tablet:rounded-xl tablet:block hidden text-extrabold ">
              <Link to={"/"}>
                <div>
                  <h2 className="text-base font-bold">{"<-"}Back</h2>
                </div>
              </Link>
            </div>
            <div className=" w-full ml-[32px] h-[44px] tablet:hidden block text-extrabold ">
              <Link to={"/"}>
                <div className="bg-gray-100 rounded-full h-full w-[44px] px-[16px] py-2 ">
                  <h2 className="text-base font-bold">{"<-"}</h2>
                </div>
              </Link>
            </div>
            <div className=" hidden relative laptop:ml-[685px] max-w-[50%] pt-1 h-[44px] w-64 laptop:flex rounded-full sm:mr-0 mr-4 bg-[#e9e9ea] justify-between pl-1 pb-1 hover:border-black hover:ring-black hover:ring-2 focus-within:border-black ease-in-out duration-200 focus-within:ring-black focus-within:ring-2 items-end justify-top text-right place-items-end ">
              <BiSearch className="h-full text-gray-500 mt-2 mb-0 top-[-10%] ml-2 text-2xl" />

              <input
                className="appearance-none bg-[#e9e9ea] border-none h-full w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Search"
              />
            </div>

            <div className="relative flex items-end justify-end mr-2  text-right tablet:hidden rounded-full ">
              <div className=" cursor-pointer rounded-full bg-[#e9e9ea] p-2  ">
                <BiMenu
                  onClick={handleNav}
                  className=" font-extrabold text-2xl "
                />
              </div>
            </div>
            <div
              className={
                nav
                  ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
                  : ""
              }
            >
              <div
                className={
                  nav
                    ? " fixed right-0 top-0 w-[67%] pt-7  sm:w-[60%] md:w-[45%] h-screen bg-[#ffffff]  ease-in duration-200"
                    : " fixed right-[-100%] top-0 p-10 ease-in duration-200 "
                }
              >
                {" "}
                <div className=" flex items-end justify-end text-right place-items-end w-full ">
                  <div
                    onClick={handleNav}
                    className=" rounded-full mr-2 bg-gray-100 hover:bg-gray-200 p-2 cursor-pointer"
                  >
                    <AiOutlineClose className="font-extrabold text-lg " />
                  </div>
                </div>
                <CourseDiv />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-[144px] w-full ">
          <CourseDiv />
        </div>

        <CourseLevels />
      </div>
    </>
  );
};

export default CourseDetails;

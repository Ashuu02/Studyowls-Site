import React from "react";
import CourseDiv from "./CourseDiv";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import CourseLevels from "./CourseLevels";
import RelatedCourses from "./RelatedCourses";

const CourseDetails = () => {
  return (
    <>
        {/* <div className="bg-[#ffffff] overflow-hidden  font-inter sm:rounded-tl-3xl rounded-none sm:rounded-bl-3xl h-full w-full"> */}
        <div className="bg-[#ffffff] overflow-scroll font-inter tablet:rounded-tl-3xl rounded-none tablet:rounded-bl-3xl h-screen w-full">
          <div className="fixed border-b-[1px] rounded-tl-3xl rounded w-[100%] mb-4 z-[100]  h-20  items-center bg-[#ffffff]">
            <div className="flex pl-[32px] z-[100px] w-full mt-5 ">
              <Link to={"/"}>
                <button className="text-lg h-full px-[16px] py-2 bg-gray-100 rounded-xl text-extrabold">
                  <h2 className="text-base font-bold">{"<--"} Back</h2>
                </button>
              </Link>
              <div className="relative ml-[685px] max-w-[50%] pt-1 h-[44px] w-64 flex rounded-full sm:mr-0 mr-4 bg-[#e9e9ea] justify-between pl-1 pb-1 hover:border-black hover:ring-black hover:ring-2 focus-within:border-black ease-in-out duration-200 focus-within:ring-black focus-within:ring-2 items-end justify-top text-right place-items-end ">
                <BiSearch className="h-full text-gray-500 mt-2 mb-0 top-[-10%] ml-2 text-2xl" />

                <input
                  className="appearance-none bg-[#e9e9ea] border-none h-full w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>

          <CourseDiv />

          <CourseLevels />
      </div>
    </>
  );
};

export default CourseDetails;

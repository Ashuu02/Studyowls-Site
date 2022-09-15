import React from "react";
import UX from "../../assets/UX.svg";
import { BsClock } from "react-icons/bs";
import { BsFiles } from "react-icons/bs";
import { HiCheckCircle } from "react-icons/hi";
import puzzle from "../../assets/puzzle.svg";
import UI_Elements from "../../assets/UI_elements.svg";
import commonDesignerRoles from "../../assets/commonDesignerRoles.svg";
import level1Test from "../../assets/level1Test.svg";
import { BiHeart } from "react-icons/bi";
import CourseDescription from "./CourseDescription";
import LearnerReviews from "./LearnerReviews";
import RelatedCourses from "./RelatedCourses";
import Level2 from "./Level2";

const CourseLevels = () => {
  return (
    <>
      <div className="bg-[#f3f3f3] pt-[16px] w-full rounded-tl-3xl rounded-tr-3xl px-[32px] pb-[112px] ">
        <div className="w-full flex mt-[16px]">
          <div>
            {/* Level 1           */}
            <div className="ml-[56px] ">
              <p className=" uppercase text-xs font-extrabold tracking-wider text-[#05060f99]">
                LEVEL 1
              </p>
              <h2 className="text-[20px] font-bold mt-[12px]">
                Getting Started with UX Design
              </h2>

              {/* card 1 */}
              <div className="mt-[24px] cursor-pointer hover:scale-[101%] hover:shadow-lg hover:shadow-gray-200 ease-in-out duration-200 p-6 rounded-2xl w-[503.33px] h-[112px] flex bg-[#ffffff] ">
                {/* <div className=""> */}
                <img src={UX} alt="/UXImg" width={"64"} height="64" />
                {/* </div> */}
                <div className="ml-4 w-full">
                  <h2 className=" text-base font-bold  ">What is UX Design?</h2>
                  <div className=" pt-[12px] align-text-bottom flex text-gray-400 ">
                    <BsClock className=" mr-[6px] font-bold text-gray-600" />
                    <p className="text-sm mr-[10px]">4 min</p>
                    <BsFiles className=" mr-[6px] font-bold text-gray-600 " />
                    <p className="text-sm ">7 exercises</p>
                  </div>
                </div>

                <div className=" ml-5 pt-[3%] ">
                  <div className=" items-center text-center justify-between rounded-full sm:w-[22px] sm:h-[22px] bg-[#33691e] ">
                    <p className="text-white pt-1 text-xs mt-1 text-extrabold">
                      K
                    </p>
                  </div>
                </div>
              </div>

              {/* card 2 */}
              <div className="mt-[24px] cursor-pointer hover:scale-[101%] hover:shadow-lg hover:shadow-gray-300 ease-in-out duration-300 p-6 rounded-2xl w-[503.33px] h-[112px] flex bg-[#ffffff] ">
                {/* <div className=""> */}
                <img src={puzzle} alt="/puzzleImg" width={"64"} height="64" />
                {/* </div> */}
                <div className="ml-4 w-full">
                  <h2 className=" text-base font-bold  ">
                    UX Design Principles
                  </h2>
                  <div className=" pt-[12px] align-text-bottom flex text-gray-400 ">
                    <BsClock className=" mr-[6px] font-bold text-gray-600" />
                    <p className="text-sm mr-[10px]">4 min</p>
                    <BsFiles className=" mr-[6px] font-bold text-gray-600 " />
                    <p className="text-sm ">7 exercises</p>
                  </div>
                </div>

                <div className=" ml-5 pt-[3%] ">
                  {/* <div className=" items-center text-center justify-between rounded-full"> */}
                  <HiCheckCircle className="sm:w-[26px] text-gray-300 sm:h-[26px]" />
                  {/* </div> */}
                </div>
              </div>

              {/* card 3    */}
              <div className="mt-[24px] cursor-pointer hover:scale-[101%] hover:shadow-lg hover:shadow-gray-300 ease-in-out duration-300 p-6 rounded-2xl w-[503.33px] h-[112px] flex bg-[#ffffff] ">
                {/* <div className=""> */}
                <img
                  src={UI_Elements}
                  alt="/UI_elements"
                  width={"64"}
                  height="64"
                />
                {/* </div> */}
                <div className="ml-4 w-full">
                  <h2 className=" text-base font-bold  ">UI Design Elements</h2>
                  <div className=" pt-[12px] align-text-bottom flex text-gray-400 ">
                    <BsClock className=" mr-[6px] font-bold text-gray-600" />
                    <p className="text-sm mr-[10px]">5 min</p>
                    <BsFiles className=" mr-[6px] font-bold text-gray-600 " />
                    <p className="text-sm ">10 exercises</p>
                  </div>
                </div>

                <div className=" ml-5 pt-[3%] ">
                  {/* <div className=" items-center text-center justify-between rounded-full"> */}
                  <HiCheckCircle className="sm:w-[26px] text-gray-300 sm:h-[26px]" />
                  {/* </div> */}
                </div>
              </div>

              {/* card 4    */}
              <div className="mt-[24px] cursor-pointer hover:scale-[101%] hover:shadow-lg hover:shadow-gray-300 ease-in-out duration-300 p-6 rounded-2xl w-[503.33px] h-[112px] flex bg-[#ffffff] ">
                {/* <div className=""> */}
                <img
                  src={commonDesignerRoles}
                  alt="/commonDesignerRoles"
                  width={"64"}
                  height="64"
                />
                {/* </div> */}
                <div className="ml-4 w-full">
                  <h2 className=" text-base font-bold  ">
                    Common Designer Roles
                  </h2>
                  <div className=" pt-[12px] align-text-bottom flex text-gray-400 ">
                    <BsClock className=" mr-[6px] font-bold text-gray-600" />
                    <p className="text-sm mr-[10px]">5 min</p>
                    <BsFiles className=" mr-[6px] font-bold text-gray-600 " />
                    <p className="text-sm ">10 exercises</p>
                  </div>
                </div>

                <div className=" ml-5 pt-[3%] ">
                  {/* <div className=" items-center text-center justify-between rounded-full"> */}
                  <HiCheckCircle className="sm:w-[26px] text-gray-300 sm:h-[26px]" />
                  {/* </div> */}
                </div>
              </div>

              {/* card 5   */}
              <div className="mt-[24px] cursor-pointer p-6 rounded-2xl w-[503.33px] h-[112px] flex border-[1.5px] ">
                {/* <div className=""> */}
                <img
                  src={level1Test}
                  alt="/level1Test"
                  width={"64"}
                  height="64"
                />
                {/* </div> */}
                <div className="ml-4 mb-4 w-full">
                  <h2 className=" text-base font-bold  ">
                    Level Test 1
                  </h2>
                  <div className=" pt-[12px] align-text-bottom flex text-gray-400 ">
                    <BiHeart className="text-lg mr-[6px] font-bold text-gray-600" />
                    <p className="text-sm mr-[10px]">3 Lives</p>
                    <BsFiles className=" mr-[6px] font-bold text-gray-600 " />
                    <p className="text-sm ">15 exercises</p>
                  </div>
                </div>

                <div className=" ml-5 pt-[3%] ">
                  {/* <div className=" items-center text-center justify-between rounded-full"> */}
                  <HiCheckCircle className="sm:w-[26px] text-gray-300 sm:h-[26px]" />
                  {/* </div> */}
                </div>
              </div>
            </div>
            <Level2/>
            <RelatedCourses />
          </div>

          <CourseDescription />
        </div>
      </div>
    </>
  );
};

export default CourseLevels;

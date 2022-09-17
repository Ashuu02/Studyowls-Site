import React from "react";
import UX from "../../assets/UX.svg";
import { BsClock, BsPlayFill } from "react-icons/bs";
import { BsFiles } from "react-icons/bs";
import { HiCheckCircle, HiOutlineBookOpen } from "react-icons/hi";
import puzzle from "../../assets/puzzle.svg";
import UI_Elements from "../../assets/UI_elements.svg";
import commonDesignerRoles from "../../assets/commonDesignerRoles.svg";
import level1Test from "../../assets/level1Test.svg";
import { BiHeart } from "react-icons/bi";
import CourseDescription from "./CourseDescription";
import LearnerReviews from "./LearnerReviews";
import RelatedCourses from "./RelatedCourses";
import Level2 from "./levels/Level2";
import Level3 from "./levels/Level3";
import Level4 from "./levels/Level4";
import Level5 from "./levels/Level5";
import lastSublevel from "./levels/LastSublevel";

import l4_1 from "../../assets/level4/1.svg";
import l4_2 from "../../assets/level4/2.svg";
import l4_3 from "../../assets/level4/3.svg";
import l4_4 from "../../assets/level4/4.svg";
import l4_test from "../../assets/level4/test.svg";

import l5_1 from "../../assets/level5/1.svg";
import l5_2 from "../../assets/level5/2.svg";
import l5_3 from "../../assets/level5/3.svg";
import l5_test from "../../assets/level5/test.svg";

import l6_1 from "../../assets/level6/1.svg";
import l6_2 from "../../assets/level6/2.svg";
import l6_3 from "../../assets/level6/3.svg";
import l6_4 from "../../assets/level6/4.svg";
import l6_5 from "../../assets/level6/5.svg";
import l6_test from "../../assets/level5/test.svg";

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
                <div className=" opacity-0 absolute hover:opacity-100 shadow-lg text-right hover:shadow-gray-200 justify-right items-end pt-[6%] pl-[78%] duration-300 inset-0 z-10 font-bold  ">
                  <div className="flex ">
                    <div className=" h-[45px] p-1 w-[45px] bg-white rounded-full hover:bg-gray-200 text-center justify-between items-center border-[0.1px] border-gray-200 ">
                      <HiOutlineBookOpen className="sm:w-[26px] ml-[15%] mt-1 items-end text-right text-gray-800 sm:h-[26px]" />
                    </div>
                    <div className=" h-[45px] bg-[#5627FF] ml-2 p-2 w-[45px] rounded-full hover:bg-black text-center justify-between items-center border-[0.1px] border-gray-200 ">
                      <BsPlayFill className="text-3xl text-white" />
                    </div>
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

                <div className=" opacity-0 absolute hover:opacity-100 shadow-lg text-right hover:shadow-gray-200 justify-right items-end pt-[6%] pl-[78%] duration-300 inset-0 z-10 font-bold  ">
                  <div className="flex ">
                    <div className=" h-[45px] p-1 w-[45px] bg-white rounded-full hover:bg-gray-200 text-center justify-between items-center border-[0.1px] border-gray-200 ">
                      <HiOutlineBookOpen className="sm:w-[26px] ml-[15%] mt-1 items-end text-right text-gray-800 sm:h-[26px]" />
                    </div>
                    <div className=" h-[45px] bg-[#5627FF] ml-2 p-2 w-[45px] rounded-full hover:bg-black text-center justify-between items-center border-[0.1px] border-gray-200 ">
                      <BsPlayFill className="text-3xl text-white" />
                    </div>
                  </div>
                </div>
                <div className=" ml-5 pt-[3%] ">
                  <HiCheckCircle className="sm:w-[26px] text-gray-300 sm:h-[26px]" />
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
                <div className=" opacity-0 absolute hover:opacity-100 shadow-lg text-right hover:shadow-gray-200 justify-right items-end pt-[6%] pl-[78%] duration-300 inset-0 z-10 font-bold  ">
                  <div className="flex ">
                    <div className=" h-[45px] p-1 w-[45px] bg-white rounded-full hover:bg-gray-200 text-center justify-between items-center border-[0.1px] border-gray-200 ">
                      <HiOutlineBookOpen className="sm:w-[26px] ml-[15%] mt-1 items-end text-right text-gray-800 sm:h-[26px]" />
                    </div>
                    <div className=" h-[45px] bg-[#5627FF] ml-2 p-2 w-[45px] rounded-full hover:bg-black text-center justify-between items-center border-[0.1px] border-gray-200 ">
                      <BsPlayFill className="text-3xl text-white" />
                    </div>
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
                <div className=" opacity-0 absolute hover:opacity-100 shadow-lg text-right hover:shadow-gray-200 justify-right items-end pt-[6%] pl-[78%] duration-300 inset-0 z-10 font-bold  ">
                  <div className="flex ">
                    <div className=" h-[45px] p-1 w-[45px] bg-white rounded-full hover:bg-gray-200 text-center justify-between items-center border-[0.1px] border-gray-200 ">
                      <HiOutlineBookOpen className="sm:w-[26px] ml-[15%] mt-1 items-end text-right text-gray-800 sm:h-[26px]" />
                    </div>
                    <div className=" h-[45px] bg-[#5627FF] ml-2 p-2 w-[45px] rounded-full hover:bg-black text-center justify-between items-center border-[0.1px] border-gray-200 ">
                      <BsPlayFill className="text-3xl text-white" />
                    </div>
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
                  <h2 className=" text-base font-bold  ">Level Test 1</h2>
                  <div className=" pt-[12px] align-text-bottom flex text-gray-400 ">
                    <BiHeart className="text-lg mr-[6px] font-bold text-gray-600" />
                    <p className="text-sm mr-[10px]">3 Lives</p>
                    <BsFiles className=" mr-[6px] font-bold text-gray-600 " />
                    <p className="text-sm ">15 exercises</p>
                  </div>
                </div>
                <div className=" opacity-0 absolute hover:opacity-100 shadow-lg text-right hover:shadow-gray-200 justify-right items-end pt-[6%] pl-[78%] duration-300 inset-0 z-10 font-bold  ">
                  <div className="flex ">
                    <div className=" h-[45px] p-1 w-[45px] bg-white rounded-full hover:bg-gray-200 text-center justify-between items-center border-[0.1px] border-gray-200 ">
                      <HiOutlineBookOpen className="sm:w-[26px] ml-[15%] mt-1 items-end text-right text-gray-800 sm:h-[26px]" />
                    </div>
                    <div className=" h-[45px] bg-[#5627FF] ml-2 p-2 w-[45px] rounded-full hover:bg-black text-center justify-between items-center border-[0.1px] border-gray-200 ">
                      <BsPlayFill className="text-3xl text-white" />
                    </div>
                  </div>
                </div>
                
                <div className=" ml-5 pt-[3%] ">
                  {/* <div className=" items-center text-center justify-between rounded-full"> */}
                  <HiCheckCircle className="sm:w-[26px] text-gray-300 sm:h-[26px]" />
                  {/* </div> */}
                </div>
              </div>
            </div>
            <Level2 />
            <Level3 />
            <div className=" mt-[44px]  ml-[56px] ">
              <p className=" uppercase text-xs font-extrabold tracking-wider text-[#05060f99]">
                LEVEL 4
              </p>
              <h2 className="text-[20px] font-bold mt-[12px]">
                Design Principles {"&"} Practices
              </h2>
              <Level4
                title={"Design Principles I: Theory"}
                img={l4_1}
                exercises={"12"}
                bgcolor={"bg-[#ffffff]"}
              />
              <Level4
                title={"Design Principles II: Usage"}
                img={l4_2}
                exercises={"12"}
              />
              <Level4
                title={"Atomic Design by Brad Frost"}
                img={l4_3}
                exercises={"12"}
              />
              <Level4
                title={"10 Usability Heuristics by Jacob Nielsen"}
                img={l4_4}
                exercises={"12"}
              />
              <div className="mt-[24px] cursor-pointer p-6 rounded-2xl w-[503.33px] h-[112px] flex border-[1.5px] ">
                {/* <div className=""> */}
                <img src={l4_test} alt="/level1Test" width={"64"} height="64" />
                {/* </div> */}
                <div className="ml-4 mb-4 w-full">
                  <h2 className=" text-base font-bold  ">Level Test 4</h2>
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

            <div className=" mt-[44px]  ml-[56px] ">
              <p className=" uppercase text-xs font-extrabold tracking-wider text-[#05060f99]">
                LEVEL 5
              </p>
              <h2 className="text-[20px] font-bold mt-[12px]">
                Elements of Design I
              </h2>

              <Level5 title={"Design Layouts"} img={l5_1} exercises={"12"} />
              <Level5 title={"Design Grids"} img={l5_2} exercises={"12"} />
              <Level5
                title={"Devices & Screen Sizes"}
                img={l5_3}
                exercises={"12"}
              />
              <div className="mt-[24px] cursor-pointer p-6 rounded-2xl w-[503.33px] h-[112px] flex border-[1.5px] ">
                {/* <div className=""> */}
                <img src={l5_test} alt="/level5Test" width={"64"} height="64" />
                {/* </div> */}
                <div className="ml-4 mb-4 w-full">
                  <h2 className=" text-base font-bold  ">Level Test 5</h2>
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

            <div className=" mt-[44px]  ml-[56px] ">
              <p className=" uppercase text-xs font-extrabold tracking-wider text-[#05060f99]">
                LEVEL 6
              </p>
              <h2 className="text-[20px] font-bold mt-[12px]">
                Working in UI/UX Design
              </h2>

              <Level5
                title={"UI Design Deliverables"}
                img={l6_1}
                exercises={"12"}
              />
              <Level5
                title={"UX Design Deliverables"}
                img={l6_2}
                exercises={"12"}
              />
              <Level5
                title={"Intro to Microcopy"}
                img={l6_3}
                exercises={"12"}
              />
              <Level5
                title={"Design Processes {" & "} Research Methods"}
                img={l6_4}
                exercises={"12"}
              />
              <Level5
                title={"Information Architecture"}
                img={l6_5}
                exercises={"12"}
              />
              <div className="mt-[24px] cursor-pointer p-6 rounded-2xl w-[503.33px] h-[112px] flex border-[1.5px] ">
                {/* <div className=""> */}
                <img src={l5_test} alt="/level5Test" width={"64"} height="64" />
                {/* </div> */}
                <div className="ml-4 mb-4 w-full">
                  <h2 className=" text-base font-bold  ">Level Test 6</h2>
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

            <RelatedCourses />
          </div>

          <CourseDescription />
        </div>
      </div>
    </>
  );
};

export default CourseLevels;

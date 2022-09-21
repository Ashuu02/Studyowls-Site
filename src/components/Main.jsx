import React from "react";
import stackImg from "../assets/stack.png";
import level from "../assets/difficulty-level.png";
import az from "../assets/az.png";
import certificate from "../assets/certificate.png";
import iconRectangle from "../assets/Rectangle.png";
import KImg from "../assets/K.png";
import profile1 from "../assets/profile-1.png";
import profile2 from "../assets/profile-2.png";
import profile3 from "../assets/profile-3.png";
import { FiPlay } from "react-icons/fi";
import Navbar from "./Navbar";
import { BsThreeDots } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import JustReleased from "./JustReleased";
import skillGraph from "../assets/skillGraph.png";
import Preferences from "./Preferences";
import SkillTests from "./SkillTests";
import Extras from "./Extras";
import "./Preferences.css";
import Assessments from "./Assessments";

const Main = () => {
  return (
    <>
      <div className="sm:px-[32px] sm:w-full bg-[#F3F3F3] pb-[32px] overflow-scroll font-inter tablet:rounded-tl-3xl rounded-none tablet:rounded-bl-3xl h-screen">
        <div className="fixed w-[100%] mb-4 z-[100] h-20  items-center bg-[#f3f3f3] ">
          <div className="flex z-[100px] bg-[#f3f3f3] w-full mt-5 ">
            <div className="bg-[#f3f3f3]">
              <h1 className="text-3xl font-extrabold font-inter">Home</h1>
            </div>
            <div className="relative hidden laptop:flex laptop:ml-[685px] max-w-[50%] pt-1 h-[44px] w-64 rounded-full sm:mr-0 mr-4 bg-[#e9e9ea] justify-between pl-1 pb-1 hover:border-black hover:ring-black hover:ring-2 focus-within:border-black ease-in-out duration-200 focus-within:ring-black focus-within:ring-2 items-end justify-top text-right place-items-end ">
              <BiSearch className="h-full text-gray-500 mt-2 mb-0 top-[-10%] ml-2 text-2xl" />

              <input
                className="appearance-none bg-[#e9e9ea] border-none h-full w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
        </div>

        <div className="flex-row  sm:flex">
          {/* col 1 */}

          <div className="mt-[80px] pr-[0px] tablet:pr-[32px] pt-[16px]">
            <JustReleased />
            <div className="flex mt-3 sm:mt-4">
              <h2 className="text-black text-2xl w-full font-inter font-semibold">
                Design Courses
              </h2>
              <p className="text-[#a7a7aa] text-sm items-end w-full text-right place-items-end">
                See all
              </p>
            </div>

            <div className="mt-0 py-4 grid md:grid-cols-2 gap-8">
              {/* card 1 */}
              <div className="bg-white hover:shadow-lg p-[24px] hover:shadow-gray-300 w-full max-w-[100%] rounded-2xl hover:scale-[101%] ease-in duration-100">
                <div className="flex rounded-lg ">
                  <img
                    src={stackImg}
                    alt="/stackImg"
                    className=" top-[-20%] rounded-lg"
                    width={58}
                    height={58}
                  />
                  <div className=" items-end justify-top text-right place-items-end w-full">
                    <button className="rounded-lg font-inter bg-[#f3f3f3] p-1">
                      <p className="font-bold text-xs px-1">POPULAR</p>
                    </button>
                  </div>
                </div>
                <div className="flex rounded-lg sm:mt-[18px] mt-[14px]">
                  <h2 className="w-full font-inter font-extrabold">
                    UX Design Foundations
                  </h2>
                </div>
                <div className="flex p-1 mt-[8px] mb-[-4px] mx-[-4px] text-sm">
                  <FiPlay className="hover:scale-110 top-[-20%] ease-in duration-100 font-extrabold h-full items-center text-center justify-center mt-1 text-gray-500" />
                  <p className="text-gray-500 px-1">25 lessons</p>
                  <img
                    src={level}
                    alt="/difficultyLevel"
                    className="px-1 mt-1 h-3"
                  />
                  <p className="text-gray-500 px-1">Easy</p>
                </div>
              </div>

              {/* card 2 */}

              <div className="bg-white hover:shadow-lg p-[24px] hover:shadow-gray-300 w-full max-w-[100%] rounded-2xl hover:scale-[101%] ease-in duration-100">
                <div className="relative flex rounded-lg ">
                  <img
                    src={az}
                    alt="/stackImg"
                    className="top-[-20%] rounded-lg"
                    width={58}
                    height={58}
                  />
                  <div className=" items-end justify-top text-right place-items-end w-full">
                    <button className="rounded-lg font-inter bg-[#f3f3f3] p-1">
                      <p className="font-bold text-xs px-1">POPULAR</p>
                    </button>
                  </div>
                </div>
                <div className="flex rounded-lg sm:mt-[18px] mt-[14px]">
                  <h2 className="w-full font-semibold">Design Terminology</h2>
                </div>
                <div className="flex p-1 mt-[8px] mb-[-4px] mx-[-4px] text-sm">
                  <FiPlay className="hover:scale-110 top-[-20%] ease-in duration-100 font-extrabold h-full items-center text-center justify-center mt-1 text-gray-500" />
                  <p className="text-gray-500 px-1">25 lessons</p>
                  <img
                    src={level}
                    alt="/difficultyLevel"
                    className="px-1 mt-1 h-3"
                  />
                  <p className="text-gray-500 px-1">Easy</p>
                </div>
              </div>
            </div>

            <div className="mt-3 sm:mt-4 font-extrabold">
              <h2 className="text-2xl">Continue Learning</h2>
            </div>

            {/* ////////////////////////////////////////////////////////////////// */}
            {/* card 3 */}
            <div className=" rounded-2xl p-4 mt-3 pref w-full h-auto pl-[] items-center justify-between ">
              <div className=" items-start ml-0 p-[32px] md:grid grid-flow-col-dense bg-white rounded-2xl ">
                <div className="tablet:hidden block w-[120px] h-[120px] mb-[20px]">
                  <img
                    src={certificate}
                    alt="/certificate"
                    className=""
                  />
                </div>
                <div className="p-0">
                  <h2 className="text-2xl max-w-[80%] flex rounded-lg text-black sm:w-full font-inter font-extrabold font-family:Inter text-left ">
                    You haven't enrolled in any courses
                  </h2>

                  {/* <div className="flex rounded-lg sm:ml-5 items-center w-full max-w-full"> */}
                  <div className="flex mt-[12px] rounded-lg items-center w-[90%]">
                    <p className="text-base text-gray-700 h-auto">
                      Start improving your design skills today. Browse our
                      course catalog and enroll in a course.
                    </p>
                  </div>
                  <div className=" items-start justify-between pt-[24px] text-start place-items-start w-full">
                    <button className="rounded-lg font-inter font-bold hover:font-extrabold hover:bg-black bg-[#5627FF] text-white  py-[10px] px-[16px]">
                      Browse Courses
                    </button>
                  </div>
                </div>
                <div className="items-center hidden tablet:block place-items-center justify-between p-3 h-full w-full  text-center ">
                  <img
                    src={certificate}
                    alt="/certificate"
                    className="text-center mt-[100%] sm:mt-5 m-auto place-items-center sm:mr-3 mr-0"
                  />
                </div>
              </div>
            </div>

            <div className="flex mt-[40px] ">
              <h2 className="text-black text-2xl w-full font-inter font-semibold">
                New Matching Jobs
              </h2>
              <p className="text-[#a7a7aa] text-sm items-end w-full text-right place-items-end">
                See all
              </p>
            </div>
            <Preferences />
            <SkillTests />
            <Extras />
          </div>

          {/* //////////////////////////////////////////////////////////////////////////////////////////// */}

          {/* col 2 */}
          <div className=" laptop:block hidden mt-[80px] pt-[16px] flex-col-1 max-w-full ">
            <div className="items-center rounded-t-3xl justify-between text-center">
              <img
                src={iconRectangle}
                alt="/icons"
                className="tracking-widest max-h-[80px] w-full items-center"
              />
            </div>

            <div className="relative rounded-bl-2xl rounded-br-2xl  p-[24px] flex flex-col items-center bg-[#ffffff] ">
              <div className="absolute rounded-full bg-white top-[-4%] h-[90px] w-[90px] p-[4.5px] sm:p-[2%] items-center  text-center justify-center ">
                <div className="rounded-full right-[5.5%] absolute top-[5.5%] w-[80px] h-[80px] bg-blue-500 text-center items-center p-[6px] text-white">
                  <h1 className="text-[40px] mt-1 text-extrabold">K</h1>
                </div>
              </div>

              <div className="mt-[32px] mb-[24px] items-center w-full text-center ">
                <h2 className="w-full text-base font-semibold">
                  Koteru Prashanth Reddy
                </h2>
                <p className="text-gray-600 text-sm mt-[4px] text-center">
                  C-Level
                </p>
              </div>

              <div className="pt-[24px] border-y-[1px] pb-[24px] w-full">
                <h2 className="w-full text-base font-semibold">
                  Profile Strength
                </h2>
                {/* flex items-center justify-between max-w-[330px] m-auto py-4 */}
                <div className=" flex items-center justify-between max-w-full py-4">
                  <div className="relative  w-full mt-5 rounded-full bg-[#e9e9ea] border items-center text-center justify-between place-items-center">
                    <div className="w-[20%]  rounded-full p-2 bg-[#5627FF] h-full"></div>
                    <div className="absolute top-[-60%] border-[2px] border-white rounded-full sm:top-[-60%] p-[2%] sm:ml-[20%] ml-[27%] bg-[#e9e9ea]">
                      <img src={profile1} alt="/loader1_pic" />
                    </div>
                    <div className="absolute top-[-60%] border-[2px] border-white rounded-full sm:top-[-60%] p-[2%] sm:ml-[52%] ml-[60%] bg-[#e9e9ea]">
                      <img src={profile2} alt="/loader1_pic" />
                    </div>
                    <div className="absolute top-[-60%] border-[2px] border-white rounded-full sm:top-[-60%] p-[2%] ml-[90%] sm:ml-[87%] bg-[#e9e9ea]">
                      <img src={profile3} alt="/loader1_pic" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 w-full flex">
                <h2 className="w-full text-base font-bold">Weekly Activity</h2>
                <div className="items-end w-full text-right text-2xl place-items-end justify-end ">
                  <BsThreeDots className="items-end w-full text-right text-xl place-items-end justify-end ml-[40%]" />
                </div>
              </div>

              <div className="flex justify-between max-w-full  h-48 py-4">
                <div className="relative text-gray-500  ml-0 mr-[18px] w-[95%] h-[90%] mt-5 rounded-full bg-[#e9e9ea] items-center text-center justify-between place-items-center">
                  <div className="relative p-2 h-[10%] rounded-full mt-[700%] border-[#bbbbbf] bg-[#bbbbbf] border items-center text-center justify-between place-items-center"></div>
                  M
                </div>
                <div className="relative text-gray-500 mr-[25.5px] w-[95%] h-[90%] mt-5 rounded-full bg-[#e9e9ea] items-center text-center justify-between place-items-center">
                  <div className="relative p-2 h-[10%] rounded-full mt-[700%] border-[#bbbbbf] bg-[#bbbbbf] border items-center text-center justify-between place-items-center"></div>
                  T
                </div>{" "}
                <div className="relative text-gray-500 mr-[25.5px] w-[95%] h-[90%] mt-5 rounded-full bg-[#e9e9ea] items-center text-center justify-between place-items-center">
                  <div className="relative p-2 h-[10%] rounded-full mt-[700%] border-[#bbbbbf] bg-[#bbbbbf] border items-center text-center justify-between place-items-center"></div>
                  W
                </div>{" "}
                <div className="relative text-gray-500 mr-[25.5px] w-[95%] h-[90%] mt-5 rounded-full bg-[#e9e9ea] items-center text-center justify-between place-items-center">
                  <div className="relative p-2 h-[10%] rounded-full mt-[700%] border-[#5627FF] bg-[#5627FF] border items-center text-center justify-between place-items-center"></div>
                  T
                </div>{" "}
                <div className="relative text-gray-500 mr-[25.5px] w-[95%] h-[90%] mt-5 rounded-full bg-[#e9e9ea] items-center text-center justify-between place-items-center">
                  <div className="relative p-2 h-[10%] rounded-full mt-[700%] border-[#e5e4ff] bg-[#e5e4ff] border items-center text-center justify-between place-items-center"></div>
                  F
                </div>{" "}
                <div className="relative text-gray-500 mr-[25.5px] w-[95%] h-[90%] mt-5 rounded-full bg-[#e9e9ea] items-center text-center justify-between place-items-center">
                  <div className="relative p-2 h-[10%] rounded-full mt-[700%] border-[#e5e4ff] bg-[#e5e4ff] border items-center text-center justify-between place-items-center"></div>
                  S
                </div>{" "}
                <div className="relative text-gray-500 w-[95%] h-[90%] mt-5 rounded-full bg-[#e9e9ea] items-center text-center justify-between place-items-center">
                  <div className="relative p-2 h-[10%] rounded-full mt-[700%] border-[#e5e4ff] bg-[#e5e4ff] border items-center text-center justify-between place-items-center"></div>
                  S
                </div>{" "}
              </div>
              <div className="w-full mt-5 py-5">
                <div className="flex mt-3 mr-0 text-sm sm:mt-4">
                  <p className="text-[#05060f99] font-semibold">Goals</p>
                  <p className="text-[#5627ff] font-semibold  items-end w-full text-right place-items-end ">
                    0/5 days
                  </p>
                </div>
                <div className="flex mt-3 mr-0 text-sm sm:mt-4">
                  <p className="text-[#05060f99] font-semibold">Pixels</p>
                  <p className="text-[#5627ff] font-semibold  items-end w-full text-right place-items-end ">
                    0
                  </p>
                </div>
              </div>

              <div className="mt-10 w-full flex">
                <h2 className="w-full text-base font-bold">Skill Graph</h2>
                <div className="items-end w-full text-right text-2xl place-items-end justify-end ">
                  <BsThreeDots className="items-end w-full text-right text-xl place-items-end justify-end ml-[40%] mb-[12px]" />
                </div>
              </div>
              <div className="w-full">
                <img src={skillGraph} alt="/skillGraph" />
              </div>

              <Assessments />
            </div>

            <div className="relative mt-[24px] rounded-2xl p-[24px] w-full flex flex-col items-center bg-[#ffffff] ">
              <div className="w-full mb-[8px]">
                <div className="flex mt-[4px] w-full">
                  <h2 className="w-full text-base font-bold">Weekly Leaders</h2>
                  <div className="items-end w-full text-right text-2xl place-items-end justify-end ">
                    <BsThreeDots className="items-end w-full text-right text-2xl place-items-end justify-end ml-[30%]" />
                  </div>
                </div>

                <p className="w-full text-sm text-left items-start text-gray-400 mt-[4px]">
                  Worldwide
                </p>
              </div>

              <div className="py-[16px] border-y-[1px] w-full grid">
                <div className="flex w-full ">
                  <div className=" ">
                    <div className="rounded-full w-10 h-10 bg-blue-500 text-center items-center p-[6px] text-white">
                      <h1 className="text-xl text-extrabold">S</h1>
                    </div>
                  </div>
                  <div className="pl-[12px]">
                    <div className="flex">
                      <p className="text-sm h-auto">Sergey Jech</p>
                      <button className=" rounded-lg ml-[12px] font-inter bg-[#f3f3f3] p-1">
                        <p className="font-bold text-xs px-1">PRO</p>
                      </button>
                    </div>
                    <div>
                      <p className="w-full text-sm text-left items-start text-gray-400 ">
                        Product Designer
                      </p>
                    </div>
                  </div>
                  <div className="text-right items-end pl-[5%] origin-right">
                    <p className=" text-gray-400 text-sm">28888px</p>
                  </div>
                </div>
              </div>
              <button className="text-lg px-[16px] mt-[12px] py-2 bg-gray-100 w-full rounded-xl text-extrabold">
                <h2 className="w-full text-base font-bold">View All</h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

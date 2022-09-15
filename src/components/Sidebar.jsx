import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="text-white bg-[#21222A] ">
      <div className="h-screen  px-[24px] pb-[16px] bg-[#21222A]">
        {/* <div className=" "> */}
        <div className=" h-screen relative top-0 w-[136px] bg-[#21222A] hidden md:flex">
          <div className="w-full h-full text-center items-center justify-between">
            <div className="fixed w-[136px] mb-3 bg-[#21222A] items-center justify-center text-center">
              <h1 className="font-bold max-w-full mb-3 sm:w-full text-bold mt-3 pt-1 font-size text-2xl">
                MeritCurve
              </h1>
            </div>
            <ul className=" w-[136px]  text-[14px] font-bold text-gray-400 mt-[60px] items-left text-left ">
              <Link to="/" className="">
                <li className="py-3  pl-1 hover:text-[#F8DB46] ">Home</li>
              </Link>

              <Link to="/CourseDetails">
                <li className="py-3  pl-1 hover:text-[#F8DB46] ">Courses</li>
              </Link>

              <a href="/#about">
                <li className="py-3 pl-1 hover:text-[#F8DB46] ">
                  Learning Paths
                </li>
              </a>
              <a href="/#jobBoard">
                <li className="py-3 pl-1 hover:text-[#F8DB46] ">Job Board</li>
              </a>
              <a href="/#skillTest">
                <li className="py-3 pl-1 hover:text-[#F8DB46] ">Skill Tests</li>
              </a>
              <a href="/#challenges">
                <li className="py-3 pl-1 hover:text-[#F8DB46] ">Challenges</li>
              </a>

              <a href="/#arcade">
                <li className="py-3 pl-1 hover:text-[#F8DB46] ">Arcade</li>
              </a>
              <li className="py-3 pl-1 mb-[2px] hover:text-[#F8DB46] ">
                <a href="/#saved">Saved</a>
              </li>

              <li className="py-3 pl-1 mb-[2px] hover:text-[#F8DB46] ">
                <a href="/#leaderboard">Leaderboard</a>
              </li>
            </ul>
            {/* </div> */}
            <div className=" align-bottom place-items-baseline bg-[#21222A] justify-center text-center max-w-[136px] items-center">
              <button className="hover:scale-105 font-bold mt-[12px] text-gray-200 ease-in duration-300 rounded-lg hover:bg-[#000000] bg-[#37383f] hover:text-[#F8DB46] w-[136px] p-2 px-[12px]">
                Invite a friend
              </button>
              <button className=" hover:scale-105 font-bold mt-[12px] text-gray-200 ease-in duration-300 rounded-lg hover:bg-[#000000] bg-[#664eff] hover:text-[#F8DB46] w-[136px] p-2 px-[12px]">
                Upgrade Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Sidebar;

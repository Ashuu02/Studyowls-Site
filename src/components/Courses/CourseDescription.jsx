import React from "react";
import style from "./CourseDescription.module.css";

//importing all the course details icons
import { BsPerson } from "react-icons/bs";
import { BsCalendar4Event } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import { FiPlay, FiSmile } from "react-icons/fi";
import level from "../../assets/difficulty-level.png";
import { BiGlobe, BiMobile, BiSmile } from "react-icons/bi";
import certificateIcon from "../../assets/cert.png";

import { HiCheckCircle } from "react-icons/hi";
import logoIcon from "../../assets/logo-icon.webp";

//social buttons
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import { BsThreeDots } from "react-icons/bs";
import LearnerReviews from "./LearnerReviews";

const CourseDescription = () => {
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  //Read more button functioning
  //   function myFunction() {
  //     var dots = document.getElementById("dots");
  //     var moreText = document.getElementById("more");
  //     var btnText = document.getElementById("myBtn");

  //     if (dots.style.display === "none") {
  //       dots.style.display = "inline";
  //       btnText.innerHTML = "Read more";
  //       moreText.style.display = "none";
  //     } else {
  //       dots.style.display = "none";
  //       btnText.innerHTML = "Read less";
  //       moreText.style.display = "inline";
  //     }
  //   }

  return (
    <div className="pl-[32px]">
      <div className=" w-full  rounded-3xl bg-white p-[40px]  ">
        <p className=" text-gray-500 mb-[16px] text-[14px] uppercase font-bold ">
          Course Description
        </p>
        <p className="max-w-full">
          User experience (UX) is a crucial process that design teams use to
          create meaningful experiences when creating digital products.
          Understanding what is UX design, its role, and its core concepts will
          introduce you to new career opportunities or provide a solid
          <span id="dots">...</span>
          <span id="more"></span>
        </p>

        {/* <button onclick={myFunction()} className=" underline ">
        Read more
      </button> */}
        <p className=" mt-[40px] text-gray-500 mb-[16px] text-[14px] uppercase font-bold ">
          Course Details
        </p>
        <div className="w-full text-gray-600">
          <div className=" flex mt-2 mb-4  ">
            <BsPerson className=" w-[20px] h-[20px] mr-2" />
            <p className="text-sm">18k learners</p>
          </div>
          <div className=" flex mt-2 mb-4  ">
            <BsCalendar4Event className=" w-[20px] h-[20px] mr-2" />
            <p className="text-sm">Last updated on Sept, 12 2022</p>
          </div>
          <div className=" flex mt-2 mb-4  ">
            <BsClock className=" font-bold w-[20px] h-[20px] mr-2" />
            <p className="text-sm">6 hours to complete</p>
          </div>
          <div className=" flex mt-2 mb-4  ">
            <FiPlay className=" w-[20px] h-[20px] mr-2" />
            <p className="text-sm">25 lessons in this course</p>
          </div>
          <div className=" flex mt-2 mb-4  ">
            <img
              className=" w-[16px] h-[18px] mr-3"
              src={level}
              alt="/levelImg"
            />
            <p className="text-sm">Easy Level</p>
          </div>
          <div className=" flex mt-2 mb-4  ">
            <BiGlobe className=" w-[18px] h-[18px] mr-3" />
            <p className="text-sm">English</p>
          </div>
          <div className=" flex mt-2 mb-4  ">
            <BiMobile className=" w-[20px] h-[20px] mr-2" />
            <p className="text-sm">Access on tablet and phone</p>
          </div>
          <div className=" flex mt-2 mb-4  ">
            <FiSmile className=" w-[20px] h-[20px] mr-2" />
            <p className="text-sm">Online at your own pace </p>
          </div>
          <div className=" flex mt-2 mb-4  ">
            <img
              className="w-[20px] h-[20px] mr-2"
              src={certificateIcon}
              alt="/certificateIcon"
            />
            <p className="text-sm">Certificate of completion</p>
          </div>
        </div>
        <p className=" mt-[40px] text-gray-500 mb-[16px] text-[14px] uppercase font-bold ">
          Takeway Skills
        </p>

        <div>
          <div className="flex mb-[12px]">
            <HiCheckCircle className="sm:w-[26px] mr-[6px] text-[#5627ff] sm:h-[26px]" />
            <p className="text-sm">
              Understand what it’s like to work in UX design
            </p>
          </div>

          <div className="flex mb-[12px] ">
            <HiCheckCircle className="sm:w-[26px] mr-[6px] text-[#5627ff] sm:h-[26px]" />
            <p className="text-sm">
              Get to know the importance of UX design and its roles
            </p>
          </div>

          <div className="flex mb-[12px] ">
            <HiCheckCircle className="sm:w-[26px] mr-[6px] text-[#5627ff] sm:h-[26px]" />
            <p className="text-sm">
              Learn core design concepts, definitions, and best practices
            </p>
          </div>

          <div className="flex mb-[12px] ">
            <HiCheckCircle className="sm:w-[26px] mr-[6px] text-[#5627ff] sm:h-[26px]" />
            <p className="text-sm">
              Gain practical tips to succeed as a UX designer in the real world
            </p>
          </div>
        </div>

        <p className=" mt-[40px] text-gray-500 mb-[16px] text-[14px] uppercase font-bold ">
          Instructor
        </p>

        <div className=" flex ">
          <img
            src={logoIcon}
            alt="/logoicon"
            className=" mr-3 rounded-full "
            width="44px"
            height={"44px"}
          />
          <p className=" text-[16px] font-bold text-center items-center pt-[10px] justify-center ">
            {" "}
            Uxcel{" "}
          </p>
        </div>

        <p className=" mt-[40px] text-gray-500 mb-[16px] text-[14px] uppercase font-bold ">
          share this course
        </p>

        <div className="flex">
          <div className="p-3 mr-3 cursor-pointer rounded-lg bg-gray-100 hover:bg-gray-200 ">
            <FaLinkedinIn className=" w-[20px] h-[20px] " />
          </div>
          <div className="p-3 mr-3 cursor-pointer rounded-lg bg-gray-100 hover:bg-gray-200 ">
            <FaTwitter className=" w-[20px] h-[20px] " />
          </div>
          <div className="p-3 mr-3 cursor-pointer rounded-lg bg-gray-100 hover:bg-gray-200 ">
            <FaFacebookF className=" w-[20px] h-[20px] " />
          </div>
          <div className="p-3 cursor-pointer rounded-lg ">
            <BsThreeDots className=" w-[20px] h-[20px] " />
          </div>
        </div>
      </div>
      <LearnerReviews />
    </div>
  );
};

export default CourseDescription;

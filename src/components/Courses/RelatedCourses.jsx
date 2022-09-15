import React from "react";
import { FiPlay } from "react-icons/fi";
import level from "../../assets/difficulty-level.png";
import img1 from "../../assets/relatedCourses/designTerminology.svg";
import img2 from "../../assets/relatedCourses/uiComponents.svg";
import img3 from "../../assets/relatedCourses/designAccessibility.svg";
import img4 from "../../assets/relatedCourses/mobileDesign.svg";

const RelatedCourses = () => {
  return (
    <div className="bg-[#f3f3f3] mt-4 pt-[40px] w-full pb-[112px] ">
      <h1 className="text-[28px] font-extrabold text-center w-full  ">
        Related Courses
      </h1>

      <div className="mt-0 py-6 grid md:grid-cols-2 gap-6">
{/* card 1 */}
        <div className="bg-white hover:shadow-lg p-[24px] cursor-pointer hover:shadow-gray-300 w-full max-w-[100%] rounded-2xl hover:scale-[101%] ease-in duration-100">
          {/* <div className="relative flex bg-white h-auto w-full rounded-xl p-4 group"> */}
          {/* <div className=""></div> */}
          <div className="flex rounded-lg ">
            <img
              src={img1}
              alt="/stackImg"
              className=" rounded-lg"
              width={64}
              height={64}
            />
          </div>
          <p className="text-xs mt-[24px] uppercase text-gray-400 font-semibold">
            Course
          </p>
          <h2 className="w-full mt-[8px] font-inter font-extrabold">
            Design Terminology
          </h2>

          <div className="flex p-1 mt-[8px] mb-[-4px] mx-[-4px] text-sm">
            <FiPlay className="hover:scale-110 top-[-20%] ease-in duration-100 font-extrabold h-full items-center text-center justify-center mt-1 text-gray-500" />
            <p className="text-gray-500 px-1">10 lessons</p>
            <img src={level} alt="/difficultyLevel" className="px-1 mt-1 h-3" />
            <p className="text-gray-500 px-1">Easy</p>
          </div>
        </div>


{/* card 2 */}
        <div className="bg-white hover:shadow-lg p-[24px] cursor-pointer hover:shadow-gray-300 w-full max-w-[100%] rounded-2xl hover:scale-[101%] ease-in duration-100">
          {/* <div className="relative flex bg-white h-auto w-full rounded-xl p-4 group"> */}
          {/* <div className=""></div> */}
          <div className="flex rounded-lg ">
            <img
              src={img2}
              alt="/stackImg"
              className=" rounded-lg"
              width={64}
              height={64}
            />
          </div>
          <p className="text-xs mt-[24px] uppercase text-gray-400 font-semibold">
            Course
          </p>
          <h2 className="w-full mt-[8px] font-inter font-extrabold">
            UI Components I
          </h2>

          <div className="flex p-1 mt-[8px] mb-[-4px] mx-[-4px] text-sm">
            <FiPlay className="hover:scale-110 top-[-20%] ease-in duration-100 font-extrabold h-full items-center text-center justify-center mt-1 text-gray-500" />
            <p className="text-gray-500 px-1">27 lessons</p>
            <img src={level} alt="/difficultyLevel" className="px-1 mt-1 h-3" />
            <p className="text-gray-500 px-1">Medium</p>
          </div>
        </div>



{/* card 3 */}
<div className="bg-white hover:shadow-lg p-[24px] cursor-pointer hover:shadow-gray-300 w-full max-w-[100%] rounded-2xl hover:scale-[101%] ease-in duration-100">
          {/* <div className="relative flex bg-white h-auto w-full rounded-xl p-4 group"> */}
          {/* <div className=""></div> */}
          <div className="flex rounded-lg ">
            <img
              src={img3}
              alt="/stackImg"
              className=" rounded-lg"
              width={64}
              height={64}
            />
          </div>
          <p className="text-xs mt-[24px] uppercase text-gray-400 font-semibold">
            Course
          </p>
          <h2 className="w-full mt-[8px] font-inter font-extrabold">
            Design Accessibility
          </h2>

          <div className="flex p-1 mt-[8px] mb-[-4px] mx-[-4px] text-sm">
            <FiPlay className="hover:scale-110 top-[-20%] ease-in duration-100 font-extrabold h-full items-center text-center justify-center mt-1 text-gray-500" />
            <p className="text-gray-500 px-1">16 lessons</p>
            <img src={level} alt="/difficultyLevel" className="px-1 mt-1 h-3" />
            <p className="text-gray-500 px-1">Hard</p>
          </div>
        </div>



{/* card 2 */}
<div className="bg-white hover:shadow-lg p-[24px] cursor-pointer hover:shadow-gray-300 w-full max-w-[100%] rounded-2xl hover:scale-[101%] ease-in duration-100">
          {/* <div className="relative flex bg-white h-auto w-full rounded-xl p-4 group"> */}
          {/* <div className=""></div> */}
          <div className="flex rounded-lg ">
            <img
              src={img4}
              alt="/stackImg"
              className=" rounded-lg"
              width={64}
              height={64}
            />
          </div>
          <p className="text-xs mt-[24px] uppercase text-gray-400 font-semibold">
            Course
          </p>
          <h2 className="w-full mt-[8px] font-inter font-extrabold">
            Mobile Design
          </h2>

          <div className="flex p-1 mt-[8px] mb-[-4px] mx-[-4px] text-sm">
            <FiPlay className="hover:scale-110 top-[-20%] ease-in duration-100 font-extrabold h-full items-center text-center justify-center mt-1 text-gray-500" />
            <p className="text-gray-500 px-1">25 lessons</p>
            <img src={level} alt="/difficultyLevel" className="px-1 mt-1 h-3" />
            <p className="text-gray-500 px-1">Medium</p>
          </div>
        </div>




      </div>
    </div>
  );
};

export default RelatedCourses;

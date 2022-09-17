import React from "react";
import img1 from "../../../assets/level2/colorTheory.svg";
import img2 from "../../../assets/level2/colorProperties.svg";
import img3 from "../../../assets/level2/imageTerminology.svg";
import img4 from "../../../assets/level2/imageProperties.svg";
import img5 from "../../../assets/level2/level2Test.svg";
import { BsClock, BsFiles } from "react-icons/bs";
import { HiCheckCircle, HiOutlineBookOpen } from "react-icons/hi";
import { BiHeart } from "react-icons/bi";
import { BsBook } from "react-icons/bs";

const Level2 = () => {
  return (
    <div className=" mt-[44px]  ml-[56px] ">
      <p className=" uppercase text-xs font-extrabold tracking-wider text-[#05060f99]">
        LEVEL 2
      </p>
      <h2 className="text-[20px] font-bold mt-[12px]">Elements of Design I</h2>

      {/* card 1 */}
      <div className="mt-[24px] cursor-pointer hover:scale-[101%] hover:shadow-lg hover:shadow-gray-200 ease-in-out duration-200 p-6 rounded-2xl w-[503.33px] h-[112px] flex bg-[#ffffff] ">
        {/* <div className=""> */}
        <img src={img1} alt="/UXImg" width={"64"} height="64" />
        {/* </div> */}
        <div className="ml-4 w-full">
          <h2 className=" text-base font-bold  ">Color Theory</h2>
          <div className="  align-text-bottom flex text-gray-400 ">
            <h2 className=" text-base font-bold text-black mr-2 mt-[9px]">
              PRO
            </h2>

            <BsFiles className=" mr-[6px] font-bold mt-[12px] text-gray-600 " />
            <p className="text-sm mt-[12px]">12 exercises</p>
          </div>
        </div>
        <div className=" opacity-0 absolute hover:opacity-100 shadow-lg text-right hover:shadow-gray-200 justify-right items-end pt-[7.5%] pl-[90%] duration-300 inset-0 z-10 font-bold  ">
          <div className="w-[45px] mt-[-10%] ml-[-30%] h-[45px] p-1 bg-white rounded-full hover:bg-gray-200 text-center justify-between items-center border-[0.1px] border-gray-200 ">
            <HiOutlineBookOpen className="sm:w-[26px] ml-[15%] mt-1 items-end text-right text-gray-800 sm:h-[26px]" />
          </div>
        </div>
        <div className=" ml-5 pt-[3%] ">
          <HiCheckCircle className="sm:w-[26px] text-gray-300 sm:h-[26px]" />
        </div>
      </div>

      {/* card 2 */}
      <div className="mt-[24px] cursor-pointer hover:scale-[101%] hover:shadow-lg hover:shadow-gray-300 ease-in-out duration-300 p-6 rounded-2xl w-[503.33px] h-[112px] flex bg-[#ffffff] ">
        {/* <div className=""> */}
        <img src={img2} alt="/puzzleImg" width={"64"} height="64" />
        {/* </div> */}
        <div className="ml-4 w-full">
          <h2 className=" text-base font-bold  ">Color Properties</h2>
          <div className="  align-text-bottom flex text-gray-400 ">
            <h2 className=" text-base font-bold text-black mr-2 mt-[9px]">
              PRO
            </h2>

            <BsFiles className=" mr-[6px] font-bold mt-[12px] text-gray-600 " />
            <p className="text-sm mt-[12px]">8 exercises</p>
          </div>
        </div>

        <div className=" opacity-0 absolute hover:opacity-100 shadow-lg text-right hover:shadow-gray-200 justify-right items-end pt-[7.5%] pl-[90%] duration-300 inset-0 z-10 font-bold  ">
          <div className="w-[45px] mt-[-10%] ml-[-30%] h-[45px] p-1 bg-white rounded-full hover:bg-gray-200 text-center justify-between items-center border-[0.1px] border-gray-200 ">
            <HiOutlineBookOpen className="sm:w-[26px] ml-[15%] mt-1 items-end text-right text-gray-800 sm:h-[26px]" />
          </div>
        </div>
        <div className=" ml-5 pt-[3%] ">
          <HiCheckCircle className="sm:w-[26px] text-gray-300 sm:h-[26px]" />
        </div>
      </div>

      {/* card 3    */}
      <div className="mt-[24px] cursor-pointer hover:scale-[101%] hover:shadow-lg hover:shadow-gray-300 ease-in-out duration-300 p-6 rounded-2xl w-[503.33px] h-[112px] flex bg-[#ffffff] ">
        {/* <div className=""> */}
        <img src={img3} alt="/UI_elements" width={"64"} height="64" />
        {/* </div> */}
        <div className="ml-4 w-full">
          <h2 className=" text-base font-bold  ">Image Terminology</h2>
          <div className="  align-text-bottom flex text-gray-400 ">
            <h2 className=" text-base font-bold text-black mr-2 mt-[9px]">
              PRO
            </h2>

            <BsFiles className=" mr-[6px] font-bold mt-[12px] text-gray-600 " />
            <p className="text-sm mt-[12px]">12 exercises</p>
          </div>
        </div>

        <div className=" opacity-0 absolute hover:opacity-100 shadow-lg text-right hover:shadow-gray-200 justify-right items-end pt-[7.5%] pl-[90%] duration-300 inset-0 z-10 font-bold  ">
          <div className="w-[45px] mt-[-10%] ml-[-30%] h-[45px] p-1 bg-white rounded-full hover:bg-gray-200 text-center justify-between items-center border-[0.1px] border-gray-200 ">
            <HiOutlineBookOpen className="sm:w-[26px] ml-[15%] mt-1 items-end text-right text-gray-800 sm:h-[26px]" />
          </div>
        </div>
        <div className=" ml-5 pt-[3%] ">
          <HiCheckCircle className="sm:w-[26px] text-gray-300 sm:h-[26px]" />
        </div>
      </div>

      {/* card 4    */}
      <div className="mt-[24px] cursor-pointer hover:scale-[101%] hover:shadow-lg hover:shadow-gray-300 ease-in-out duration-300 p-6 rounded-2xl w-[503.33px] h-[112px] flex bg-[#ffffff] ">
        {/* <div className=""> */}
        <img src={img4} alt="/commonDesignerRoles" width={"64"} height="64" />
        {/* </div> */}
        <div className="ml-4 w-full">
          <h2 className=" text-base font-bold  ">Image Properties</h2>
          <div className="  align-text-bottom flex text-gray-400 ">
            <h2 className=" text-base font-bold text-black mr-2 mt-[9px]">
              PRO
            </h2>

            <BsFiles className=" mr-[6px] font-bold mt-[12px] text-gray-600 " />
            <p className="text-sm mt-[12px]">12 exercises</p>
          </div>
        </div>

        <div className=" opacity-0 absolute hover:opacity-100 shadow-lg text-right hover:shadow-gray-200 justify-right items-end pt-[7.5%] pl-[90%] duration-300 inset-0 z-10 font-bold  ">
          <div className="w-[45px] mt-[-10%] ml-[-30%] h-[45px] p-1 bg-white rounded-full hover:bg-gray-200 text-center justify-between items-center border-[0.1px] border-gray-200 ">
            <HiOutlineBookOpen className="sm:w-[26px] ml-[15%] mt-1 items-end text-right text-gray-800 sm:h-[26px]" />
          </div>
        </div>
        <div className=" ml-5 pt-[3%] ">
          <HiCheckCircle className="sm:w-[26px] text-gray-300 sm:h-[26px]" />
        </div>
      </div>

      {/* card 5   */}
      <div className="mt-[24px] cursor-pointer p-6 rounded-2xl w-[503.33px] h-[112px] flex border-[1.5px] ">
        {/* <div className=""> */}
        <img src={img5} alt="/level1Test" width={"64"} height="64" />
        {/* </div> */}
        <div className="ml-4 mb-4 w-full">
          <h2 className=" text-base font-bold  ">Level Test 2</h2>
          <div className=" pt-[12px] align-text-bottom flex text-gray-400 ">
            <BiHeart className="text-lg mr-[6px] font-bold text-gray-600" />
            <p className="text-sm mr-[10px]">3 Lives</p>
            <BsFiles className=" mr-[6px] font-bold text-gray-600 " />
            <p className="text-sm ">15 exercises</p>
          </div>
        </div>
        <div className=" opacity-0 absolute hover:opacity-100 shadow-lg text-right hover:shadow-gray-200 justify-right items-end pt-[7.5%] pl-[90%] duration-300 inset-0 z-10 font-bold  ">
          <div className="w-[45px] mt-[-10%] ml-[-30%] h-[45px] p-1 bg-white rounded-full hover:bg-gray-200 text-center justify-between items-center border-[0.1px] border-gray-200 ">
            <HiOutlineBookOpen className="sm:w-[26px] ml-[15%] mt-1 items-end text-right text-gray-800 sm:h-[26px]" />
          </div>
        </div>
        <div className=" ml-5 pt-[3%] ">
          <HiCheckCircle className="sm:w-[26px] text-gray-300 sm:h-[26px]" />
        </div>
      </div>
    </div>
  );
};

export default Level2;

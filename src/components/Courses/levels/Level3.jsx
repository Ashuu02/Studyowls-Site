import React from "react";
import img1 from "../../../assets/level3/img1.svg";
import img2 from "../../../assets/level3/img2.svg";
import img3 from "../../../assets/level3/img3.svg";
import img4 from "../../../assets/level3/img4.svg";
import img5 from "../../../assets/level3/img5.svg";
import img6 from "../../../assets/level3/img6.svg";
import { BsClock, BsFiles } from "react-icons/bs";
import { HiCheckCircle, HiOutlineBookOpen } from "react-icons/hi";
import { BiHeart } from "react-icons/bi";

const Level3 = () => {
  return (
    <div className=" mt-[44px] laptop:ml-[56px] sm:ml-[24px] sm:mr-[24px]">
      <p className=" uppercase text-xs font-extrabold tracking-wider text-[#05060f99]">
        LEVEL 3
      </p>
      <h2 className="text-[20px] font-bold mt-[12px]">Elements of Design II</h2>

      {/* card 1 */}
      <div className="mt-[24px] cursor-pointer hover:scale-[101%] hover:shadow-lg hover:shadow-gray-200 ease-in-out duration-200 p-6 rounded-2xl w-auto h-[112px] flex bg-[#ffffff] ">
        {/* <div className=""> */}
        <img src={img1} alt="/UXImg" width={"64"} height="64" />
        {/* </div> */}
        <div className="ml-4 w-full">
          <h2 className=" text-base font-bold  ">Intro to Typography</h2>
          <div className="  align-text-bottom flex text-gray-400 ">
            <h2 className=" text-base font-bold text-black mr-2 mt-[9px]">
              PRO
            </h2>

            <BsFiles className=" mr-[6px] font-bold mt-[12px] text-gray-600 " />
            <p className="text-sm mt-[12px]">13 exercises</p>
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
      <div className="mt-[24px] cursor-pointer hover:scale-[101%] hover:shadow-lg hover:shadow-gray-300 ease-in-out duration-300 p-6 rounded-2xl w-auto h-[112px] flex bg-[#ffffff] ">
        <img src={img2} alt="/puzzleImg" width={"64"} height="64" />
        <div className="ml-4 w-full">
          <h2 className=" text-base font-bold  ">
            Animation Theory {"&"} Motion
          </h2>
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

      {/* card 3    */}
      <div className="mt-[24px] cursor-pointer hover:scale-[101%] hover:shadow-lg hover:shadow-gray-300 ease-in-out duration-300 p-6 rounded-2xl w-auto h-[112px] flex bg-[#ffffff] ">
        {/* <div className=""> */}
        <img src={img3} alt="/UI_elements" width={"64"} height="64" />
        {/* </div> */}
        <div className="ml-4 w-full">
          <h2 className=" text-base font-bold  ">Icon Terminology</h2>
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
      <div className="mt-[24px] cursor-pointer hover:scale-[101%] hover:shadow-lg hover:shadow-gray-300 ease-in-out duration-300 p-6 rounded-2xl w-auto h-[112px] flex bg-[#ffffff] ">
        {/* <div className=""> */}
        <img src={img4} alt="/commonDesignerRoles" width={"64"} height="64" />
        {/* </div> */}
        <div className="ml-4 w-full">
          <h2 className=" text-base font-bold  ">Intro to Shadows</h2>
          <div className="  align-text-bottom flex text-gray-400 ">
            <h2 className=" text-base font-bold text-black mr-2 mt-[9px]">
              PRO
            </h2>

            <BsFiles className=" mr-[6px] font-bold mt-[12px] text-gray-600 " />
            <p className="text-sm mt-[12px]">17 exercises</p>
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

      {/* card 5 */}
      <div className="mt-[24px] cursor-pointer hover:scale-[101%] hover:shadow-lg hover:shadow-gray-300 ease-in-out duration-300 p-6 rounded-2xl w-auto h-[112px] flex bg-[#ffffff] ">
        {/* <div className=""> */}
        <img src={img5} alt="/commonDesignerRoles" width={"64"} height="64" />
        {/* </div> */}
        <div className="ml-4 w-full">
          <h2 className=" text-base font-bold  ">Typographic Terms</h2>
          <div className="  align-text-bottom flex text-gray-400 ">
            <h2 className=" text-base font-bold text-black mr-2 mt-[9px]">
              PRO
            </h2>

            <BsFiles className=" mr-[6px] font-bold mt-[12px] text-gray-600 " />
            <p className="text-sm mt-[12px]">16 exercises</p>
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

      {/* card 6   */}
      <div className="mt-[24px] cursor-pointer p-6 rounded-2xl w-auto h-[112px] flex border-[1.5px] ">
        {/* <div className=""> */}
        <img src={img6} alt="/level1Test" width={"64"} height="64" />
        {/* </div> */}
        <div className="ml-4 mb-4 w-full">
          <h2 className=" text-base font-bold  ">Level Test 3</h2>
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

export default Level3;

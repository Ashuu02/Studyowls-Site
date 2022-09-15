import React from 'react'
import img1 from "../../assets/level2/colorTheory.svg";
import img2 from "../../assets/level2/colorProperties.svg";
import img3 from "../../assets/level2/imageTerminology.svg";
import img4 from "../../assets/level2/imageProperties.svg";
import img5 from "../../assets/level2/level2Test.svg";
import { BsClock, BsFiles } from 'react-icons/bs';
import { HiCheckCircle } from 'react-icons/hi';
import { BiHeart } from 'react-icons/bi';



const Level2 = () => {
  return (
    <div className=" mt-[44px]  ml-[56px] ">
              <p className=" uppercase text-xs font-extrabold tracking-wider text-[#05060f99]">
                LEVEL 2
              </p>
              <h2 className="text-[20px] font-bold mt-[12px]">
                Elements of Design I
              </h2>

              {/* card 1 */}
              <div className="mt-[24px] cursor-pointer hover:scale-[101%] hover:shadow-lg hover:shadow-gray-200 ease-in-out duration-200 p-6 rounded-2xl w-[503.33px] h-[112px] flex bg-[#ffffff] ">
                {/* <div className=""> */}
                <img src={img1} alt="/UXImg" width={"64"} height="64" />
                {/* </div> */}
                <div className="ml-4 w-full">
                  <h2 className=" text-base font-bold  ">Color Theory</h2>
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
                <img src={img2} alt="/puzzleImg" width={"64"} height="64" />
                {/* </div> */}
                <div className="ml-4 w-full">
                  <h2 className=" text-base font-bold  ">
                    Color Properties
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
                  src={img3}
                  alt="/UI_elements"
                  width={"64"}
                  height="64"
                />
                {/* </div> */}
                <div className="ml-4 w-full">
                  <h2 className=" text-base font-bold  ">Image Terminology</h2>
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
                  src={img4}
                  alt="/commonDesignerRoles"
                  width={"64"}
                  height="64"
                />
                {/* </div> */}
                <div className="ml-4 w-full">
                  <h2 className=" text-base font-bold  ">
                    Image Properties
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
                  src={img5}
                  alt="/level1Test"
                  width={"64"}
                  height="64"
                />
                {/* </div> */}
                <div className="ml-4 mb-4 w-full">
                  <h2 className=" text-base font-bold  ">
                    Level Test 2
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
  )
}

export default Level2

import React from "react";
import { BsCalendar4Event } from "react-icons/bs";
import color from "../assets/color.svg";
import toolkit from "../assets/toolkit.svg";
import achievement from "../assets/achievement.png";
import { IoRocketSharp } from "react-icons/io5";
import { BsSlack } from "react-icons/bs";
import stack2 from "../assets/stack2.png";
import icons from "../assets/icons.png";

const Extras = () => {
  return (
    <div className="text-black">
      <div className=" mt-3 sm:mt-[40px]">
        <h2 className="text-black text-2xl w-full font-inter font-semibold">
          Extras
        </h2>
      </div>

      <div className="mt-4 grid md:grid-cols-2 gap-8">
        {/* card 1 */}
        <div className="bg-white mb-2 border-spacing-1 text-[20px] hover:shadow-lg p-[24px] hover:shadow-gray-300 w-full max-w-[100%] rounded-2xl hover:scale-[101%] ease-in duration-100">
          <div className="flex mt-0">
            <img
              src={achievement}
              alt="/stackImg"
              className=" rounded-lg"
              width="32"
              height="32"
            />
            <div className="pl-4 w-full items-center ">
              <h3 className="w-full h-full items-center pt-1 text-base font-inter font-extrabold">Achievements</h3>
            </div>
          </div>
        </div>

        {/* card 2 */}

        <div className="bg-white mb-2 border-spacing-1 text-[20px] hover:shadow-lg p-[24px] hover:shadow-gray-300 w-full max-w-[100%] rounded-2xl hover:scale-[101%] ease-in duration-100">
          <div className="flex mt-0">
            <IoRocketSharp className="font-bold p-0 m-0 h-[32px] w-[32px]" />
            <div className="pl-4 w-full">
              <h3 className="w-full text-base font-inter font-extrabold">
                Release Roadmap
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid md:grid-cols-2 gap-8">
        <div className="bg-white mb-2 border-spacing-1 text-[20px] hover:shadow-lg p-[24px] hover:shadow-gray-300 w-full max-w-[100%] rounded-2xl hover:scale-[101%] ease-in duration-100">
          <div className="flex mt-0">
            <BsSlack className="font-bold p-0 m-0 h-[32px] w-[32px]" />
            <div className="pl-4 w-full">
              <h3 className="w-full text-base font-inter font-extrabold">
                Slack Community
              </h3>
            </div>
          </div>
        </div>
        <div className="bg-white mb-2  hover:shadow-lg p-[24px] hover:shadow-gray-300 w-full max-w-[100%] rounded-2xl hover:scale-[101%] ease-in duration-100">
          <div className="flex mt-0">
            <img src={stack2} alt="/UxcelKit" height={"32px"} width="32px" />

            <div className="pl-4 w-full">
              <h3 className=" font-inter text-base font-extrabold">Uxcel UI Kit</h3>
            </div>
            <div className=" items-start  text-left place-items-start w-full">
              <button className=" rounded-lg  font-inter bg-[#f3f3f3] p-1">
                <p className="font-bold text-xs px-1">PRO</p>
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="mt-4 grid md:grid-cols-2 gap-8">
        {/* card 1 */}
        <div className="bg-white mb-2 border-spacing-1 text-[20px] hover:shadow-lg p-[24px] hover:shadow-gray-300 w-full max-w-[100%] rounded-2xl hover:scale-[101%] ease-in duration-100">
          <div className="flex mt-0">
            <img
              src={icons}
              alt="/iconSet"
              className=" rounded-lg"
              width="32"
              height="32"
            />
            <div className="pl-4 w-full">
              <h3 className="w-full text-base font-inter font-extrabold">Uxcel Icon Set</h3>
            </div>
          </div>
        </div>
      
      </div>

    </div>
  );
};

export default Extras;

import React from "react";
import arturoRago from "../../assets/arturoRago.webp";
import { GoVerified } from "react-icons/go";
import swissFlag from "../../assets/swissFlag.svg";

const LearnerReviews = () => {
  return (
    <div className=" mt-6 p-6 bg-white rounded-3xl ">
      <h2 className=" mb-6 text-base font-bold  ">What is UX Design?</h2>
      <p>
        Uxcel helps you keep your skill sharp and have fun.
        <span className="text-[#5627ff] bg-[#5627ff1a] ">
          {" "}
          The learning experience is delightful as it is empowering.
        </span>{" "}
        As a designer and educator, I absolutely recommend their courses.
      </p>
      <div className="mt-6 flex">
        <div className="relative">
          <img
            src={arturoRago}
            alt="/profilepic"
            className=" h-[64px] w-[64px] rounded-full "
          />
          <img src={swissFlag} alt="/flag" width="20px" className="absolute ml-[46px] top-[46px] rounded-full border-2 border-white " height="20px"/>
        </div>
        <div className="ml-3">
          <div className="flex w-full">
            <p className="text-[16px] font-bold">Arturo Rago</p>
            <GoVerified className="text-[#664eff] ml-2 h-full w-5 mt-[2px] " />
          </div>
          <p className="text-sm">Design Educator at Canva</p>
        </div>
      </div>
    </div>
  );
};

export default LearnerReviews;

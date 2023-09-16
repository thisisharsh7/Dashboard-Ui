import React from "react";
import Image from "next/image";
import Dots from "../../public/assets/vertIcon (1).svg";
import Clock from "../../public/assets/clock.svg";

const Card = ({ title, caption, done, bcolor }) => {
  return (
    <div className="flex flex-col gap-y-4 gap lg:w-[339px] md:w-[327px] w-[280px]  bg-[#211A75] p-6 rounded-[14px] text-white">
      <div className="flex justify-between">
        <div className={`flex items-center`} style={{ color: `${bcolor}` }}>
          <div className={`w-[10px] h-[10px] rounded-full mr-3`} style={{ backgroundColor: `${bcolor}` }}></div>
          {caption}
        </div>
        <button>
          <Image
            src={Dots}
            width={24}
            height={24}
            alt=""
            className="object-contain"
          />
        </button>
      </div>
      <div className="lg:text-[18px] md:text-[16px] sm:text-[14px] text-[13px] font-semibold ">
        {title}
      </div>
      <div className="w-full h-[7px] bg-[#1E1C3A;] rounded-[14px]">
        <div className={`h-[7px] rounded-[14px]`} style={{ width: `${done}%`, backgroundColor: `${bcolor}` }}>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="sm:text-[10px] text-[9px]">
          <div>
            <ul className="flex relative ">
              <li className="w-[4em] z-10 absolute left-0 top-0  h-[4em] bg-[#C4C4C4] rounded-full border-[2px] border-[#15132B]"></li>
              <li className="w-[4em] z-20 translate-x-7 tranaslate-x-10 h-[4em] bg-[#C4C4C4] rounded-full border-[2px] border-[#15132B]"></li>
              <li className="w-[4em] z-30 translate-x-5 h-[4em] bg-[#C4C4C4] rounded-full border-[2px] border-[#15132B]"></li>
              <li className="w-[4em] z-30 translate-x-3 h-[4em] bg-[#C4C4C4] rounded-full border-[2px] border-[#15132B]"></li>
            </ul>
          </div>
        </div>
        <div className="flex font-bold sm:text-[14px] text-[10px] text-[#A5A5A5;]">
          <Image src={Clock} width={16} height={16} alt="" className="object-contain mr-3" />
          <div >Due in 4 days</div>
        </div>
      </div>
    </div>
  );
};

export default Card;

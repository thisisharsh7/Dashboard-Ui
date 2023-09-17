import React from "react";
import Image from "next/image";
import Back from "../../public/assets/btnback.svg";
import Logo from "../../public/assets/Logo.png";
import Dots from "../../public/assets/vertIcon.svg";
import Add from "../../public/assets/add-friend 1.svg";
import Chat from "../../public/assets/chat (1) 1.svg";
import Users from "./Users";

export default function Banner() {
  return (
    <div className="bg-[#15132B] w-full shadow-md  sm:p-[3em] px-[3em] py-[2.5em] rounded-[14px]  xl:text-[10px] text-[7px] ">
      <div className="flex items-center sm:flex-row flex-col-reverse justify-between sm:flex-nowrap flex-wrap  gap-[20px]">
        <div className="w-full self-center justify-center gap-[10px]">
          <div className="flex items-center ">
            <button className="sm:m-3 ml-3 mr-3">
              <Image
                src={Back}
                alt=""
                className=" object-contain sm:w-[3.8em] w-[3.2em]"
              />
            </button>
            <p className="sm:text-[2.8em] text-[2.4em] font-bold text-white">
              School November Tasks
            </p>
          </div>
          <div className="text-[#A5A5A5] font-normal text-[1.4em] ml-[50px] ">
            Created by Instructor Day on November 31, 2022
          </div>
        </div>
        <div className="flex items-center justify-end self-center w-full">
          <div className="mr-4">
            <p className="text-[1.8em] font-bold text-white">
              Centered Martial Arts
            </p>
            <p className="text-[1.4em] font-normal text-[#A5A5A5]">
              Sunnyvale, Ca
            </p>
          </div>

          <Image
            src={Logo}
            alt="Logo"
            className="object-contain mr-2 w-[6.8em]"
          />
          <button>
            <Image
              src={Dots}
              alt=""
              className="object-contain w-[2.4em]"
            />
          </button>
        </div>
      </div>


      <div className="flex 3xl:flex-row flex-col xl:gap-[40px]  gap-[24px] justify-between mt-4">


        <div className="flex sm:flex-row flex-col xl:gap-[20px] w-full gap-[14px] items-center  sm:pl-12 3xl:self-center self-start md:text-[1.6em] text-[1.2em]">

          <Users />

          <div className="flex items-center px-4 py-2 rounded-[14px] font-bold bg-[#6418C3] text-white truncate">
            <button>
              <Image
                src={Add}
                alt=""
                className="object-contain 2xl:mr-3 xl:mr-2.5 mr-2 xl:w-[24px] w-[14px]"
              />
            </button>
            Invite People
          </div>
          <div className="flex gap-[12px] font-bold">
            <div className="px-4 py-2 rounded-[14px] border-2 border-[#7879F1] text-white">
              Private
            </div>
            <div className="px-4 py-2 rounded-[14px] border-2 border-[#7879F1] bg-[#7879F1] text-white">
              Edit
            </div>
          </div>
          <div className="flex gap-2  px-4 py-2 font-semibold rounded-[14px] border-2 border-[#7879F1] text-white truncate items-center">
            <button className=" xl:w-[24px] w-[14px]">
              <Image src={Chat} alt="" className="object-contain w-full" />

            </button>
            45 Comments
          </div>
        </div>

        <div className="flex sm:flex-row flex-col gap-[20px] items-center  sm:self-end">
          <div className="text-white font-bold text-[16px]  truncate">Total Progress 60%</div>
          <div className="w-60 sm:h-[14px] h-[10px] bg-[#1E1C3A] rounded-[14px]">
            <div className="w-2/3 sm:h-[14px] h-[10px] bg-[#6418C3] rounded-[14px]">
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

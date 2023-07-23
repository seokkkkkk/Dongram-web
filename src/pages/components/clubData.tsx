import React from "react";
import clubData from "../../data/clubData.json";
import Image from "next/image";
import clubimage from "@/../public/placeholder.png";

const ClubComponent: React.FC = () => {
  // A, B, C 동아리에 대한 정보를 담는 배열
  const clubA = clubData.filter((club) => club.name === "세마치");
  const clubB = clubData.filter((club) => club.name === "B 동아리");
  const clubC = clubData.filter((club) => club.name === "C 동아리");

  return (
    <React.Fragment>
      <div className=" mt-[2rem] mr-[95rem] w-[14.4rem] h-[2.6rem] flex-shrink-0 text-black text-[3.2rem] font-roboto font-normal leading-140 font-[400] ">
        상세설명
      </div>
      <div className="mt-[4rem] border-[#000] border-[0.1rem] w-[867px] h-[0rem] transform rotate-[0.066deg] flex-shrink-0" />
      {/*굵은선*/}

      <div className="flex justify-around mt-[4rem]">
        <Image
          src={clubimage}
          alt="club main image"
          className="w-[40.3rem] h-[44.1rem] mr-[3rem]"
        />
        <div>
          <div className="w-[38.7rem] h-[6.7rem] flex-shrink-0 text-black text-[4.8rem] font-[400]">
            {clubA[0].name}
          </div>
          <div className="flex flex-col space-y-8">
            <div className="mt-[2rem] border-[#DDE1E6)] border-[0.1rem] w-[275px] h-[0rem] transform rotate-[-179.792deg] flex-shrink-0" />
            <br />

            <div className="flex justify-between ">
              <li>
                <span className="text-[#697077] font-roboto leading-140 text-[1.6rem] font-[400]">
                  단과대:
                </span>
              </li>
              <span className="text-[#000] font-roboto leading-140 text-[1.6rem] font-[400] w-[15.7rem] h-[3.1rem] ">
                {clubA[0].college}
              </span>
            </div>

            <br />
            <div className="flex justify-between">
              <li>
                <span className="text-[#697077] font-roboto leading-140 text-[1.6rem] font-[400]">
                  소속 과:
                </span>
              </li>
              <span className="text-[#000] font-roboto leading-140 text-[1.6rem] font-[400] w-[15.7rem] h-[3.1rem] ">
                {clubA[0].department}
              </span>
            </div>
            <br />
            <div className="flex justify-between">
              <li>
                <span className="text-[#697077] font-roboto leading-140 text-[1.6rem] font-[400]">
                  카테고리:
                </span>
              </li>
              <span className="text-[#000] font-roboto leading-140 text-[1.6rem] font-[400] w-[15.7rem] h-[3.1rem] ">
                {clubA[0].category}
              </span>
            </div>

            <br />
            <div className="flex justify-between">
              <li>
                <span className="text-[#697077] font-roboto leading-140 text-[1.6rem] font-[400]">
                  모집기간:
                </span>
              </li>
              <span className="text-[#000] font-roboto leading-140 text-[1.6rem] font-[400] w-[15.7rem] h-[3.1rem]">
                {clubA[0].recruitmentPeriod}
              </span>
            </div>
            <button className="ml-[5rem] text-white bg-[#0090F9] w-[19.8rem] h-[5.2rem] text-[2rem] font-[500]">
              신청하기
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[4rem] border-[#000] border-[0.01rem] w-[867px] h-[0rem] transform rotate-[0.066deg] flex-shrink-0" />
      <div className=" mt-[1rem] mr-[95rem] w-[14.4rem] h-[3rem] flex-shrink-0 text-black text-[2rem]  font-normal leading-140 font-[400] ">
        동아리소개
      </div>
      <div className="mr-[52rem] mt-[1rem] border-[#DDE1E6] border-[0.1rem] w-[459px] h-[0rem] transform rotate-[0.374deg] flex-shrink-0" />
      <div className="mt-[1rem] mr-[50rem] w-[459px] h-[3rem] flex-shrink-0 text-black text-[1.6rem]  font-normal leading-140 font-[400]">
        {clubA[0].clubIntroduction}
      </div>
    </React.Fragment>
  );
};

export default ClubComponent;

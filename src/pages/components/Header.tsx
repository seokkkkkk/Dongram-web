import logo from "@/../public/logo.svg";
import bell from "@/../public/bell.svg";
import setting from "@/../public/setting.svg";
import user from "@/../public/user.svg";
import search_icon from "@/../public/search-icon.svg";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="flex text-[2.4rem] leading-[110%] place-items-center mt-[30px]">
        <div className="flex place-items-center">
          <Image src={logo} alt="logo" className="w-[2.4rem] h-[2.4rem]" />
          <span className="text-[#697077] font-[700] ml-[1.6rem]">ST</span>
        </div>
        <div className="flex font-[400] ml-[8.1rem]">
          <span className="ml-[4.7rem]">자유게시판</span>
          <span className="ml-[4.7rem]">동아리정보</span>
          <span className="ml-[4.7rem]">내 동아리</span>
        </div>
        <div className="flex bg-[#F2F4F8] w-[34rem] h-[6.1rem] pl-[1.6rem] py-[1.9rem] ml-[4.3rem] border-b-[1px] border-b-[#C1C7CD]">
          <Image
            src={search_icon}
            alt="search-icon"
            className="w-[1.9rem] h-[1.9rem]"
          />
          <input
            type="text"
            placeholder="Search for..."
            className="bg-transparent ml-[1.1rem] outline-none text-[1.6rem]"
          />
        </div>
        {/*로그인X*/}
        {/*
        <div className="flex ml-[1.8rem]">
          <button className="rounded-[2.5rem] border-[1px] border-[#C1C7CD] w-[11.3rem] h-[5.2rem] text-[2rem] font-[500]">
            로그인
          </button>
          <button className="rounded-[2.5rem] text-white bg-[#0090F9] w-[11.3rem] h-[5.2rem] text-[2rem] font-[500] ml-[1.1rem]">
            회원가입
          </button>
        </div>*/}
        {/*로그인O*/}
        <div className="flex ml-[8rem]">
          <button>
            <Image src={bell} alt="bell" className="w-[3.6rem] h-[3.6rem]" />
          </button>
          <button className="ml-[2.7rem]">
            <Image src={setting} alt="bell" className="w-[3.6rem] h-[3.6rem]" />
          </button>
          <button className="ml-[2.7rem]">
            <Image src={user} alt="bell" className="w-[3.6rem] h-[3.6rem]" />
          </button>
        </div>
      </div>
      <div className="mt-[1.9rem] border-[#DDE1E6] border-[1px] w-[126.5rem]" />
    </header>
  );
}

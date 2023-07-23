import logo from "@/../public/logo.svg";
import LoginButton from "./LoginButton";
import search_icon from "@/../public/search-icon.svg";
import Image from "next/image"; //이미지 갖고오기 위한 문
import Link from "next/link"; //링크 마찬가지

export default function Header() {
  return (
    <header>
      <div className="flex text-[2.4rem] leading-[110%] place-items-center mt-[30px]">
        <Link href="../">
          <div className="flex place-items-center">
            <Image src={logo} alt="logo" className="w-[2.4rem] h-[2.4rem]" />
            <span className="text-[#697077] font-[700] ml-[1.6rem]">ST</span>
          </div>
        </Link>
        <div className="flex font-[400] ml-[8.1rem] whitespace-nowrap">
          <span className="ml-[8rem]">자유게시판</span>
          <Link href="../clubPage">
            <span className="ml-[4rem]">동아리정보</span>
          </Link>
          <span className="ml-[4rem]">내 동아리</span>
        </div>
        <div className="flex bg-[#F2F4F8] w-[40rem] h-[6.1rem] pl-[1.6rem] pr-[1.5rem] py-[1.9rem] ml-[8rem] border-b-[1px] border-b-[#C1C7CD] text-3xl">
          <Image
            src={search_icon}
            alt="search-icon"
            className="w-[1.9rem] h-[1.9rem]"
          />
          <input
            type="text"
            placeholder="Search for..."
            className="flex-grow bg-transparent ml-[1.1rem] outline-none text-[1.6rem]"
          />
        </div>
        {/*로그인X*/}
        <LoginButton />
        {/*로그인O*/}
        {/*<UserButton />**/}
      </div>
      <div className="mt-[1.9rem] border-[#DDE1E6] border-[1px] w-[135rem]" />
    </header>
  );
}

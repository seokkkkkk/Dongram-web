import { useState } from "react";

interface CategoryProps {
  props: string;
}

export default function BigCategory({ props }: CategoryProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`inline-flex justify-center place-items-center h-[2.7rem] px-4 rounded-[1.2rem] ml-[0.4rem] mt-[1rem] cursor-pointer ${
        isClicked ? "bg-[#0090F9] text-white" : "bg-[#F2F4F8] text-black"
      }`}
      onClick={handleClick}
    >
      <span className="text-[1.4rem] font-[400] leading-[140%]">{props}</span>
    </div>
  );
}

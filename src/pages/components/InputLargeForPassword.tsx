import React, { useState } from "react";
import Image from "next/image";
import showEye from "@/../public/showEye.svg";
import showEye2 from "@/../public/showEye2.svg";

interface Input {
  text: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export default function InputLarge({ text, placeholder, onChange }: Input) {
  const [inputType, setInputType] = useState("password");

  const handleImageClick = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="ml-[4rem] mb-10">
      <div className="mt-[0.8rem] mb-[1rem] text-[1.4rem]">{text}</div>
      <div className="w-[52rem] h-[4.8rem] bg-[#F2F4F8] border-b-[#C1C7CD] border-b-[0.1rem] flex place-content-center place-items-center">
        <input
          type={inputType}
          placeholder={placeholder}
          className="w-[48.8rem] h-[2.2rem] text-[1.6rem] ml-[1.8rem] mr-[1.3rem] bg-transparent outline-none"
          onChange={handleChange}
          autoComplete="off"
        />
        <Image
          src={inputType === "password" ? showEye2 : showEye}
          onClick={handleImageClick}
          className="cursor-pointer w-[2.4rem] h-[2.4rem] mr-5"
          alt="toggle visibility"
        />
      </div>
    </div>
  );
}

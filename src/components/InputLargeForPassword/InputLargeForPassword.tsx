import React, { useState } from "react";
import showEye from "@/../public/showEye.svg";
import showEye2 from "@/../public/showEye2.svg";
import {
  PageContainer,
  PasswordText,
  Border,
  PasswordInput,
  PasswordEyeImage,
} from "./InputLargeForPassword.styled";

interface Input {
  text: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export function InputPassword({ text, placeholder, onChange }: Input) {
  const [inputType, setInputType] = useState("password");

  const handleImageClick = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <PageContainer>
      <PasswordText>{text}</PasswordText>
      <Border>
        <PasswordInput
          type={inputType}
          placeholder={placeholder}
          onChange={handleChange}
          autoComplete="off"
        />
        <PasswordEyeImage
          src={inputType === "password" ? showEye2 : showEye}
          onClick={handleImageClick}
          alt="toggle visibility"
        />
      </Border>
    </PageContainer>
  );
}

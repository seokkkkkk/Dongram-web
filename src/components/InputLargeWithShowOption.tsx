//styled 완료
import React, { useState } from "react";
import Image from "next/image";
import showEye from "@public/showEye.svg";
import showEye2 from "@public/showEye2.svg";
import styled from "@emotion/styled";

const PageContainer = styled.div`
  margin-left: 4rem;
  margin-bottom: 30px;
`;
const TextShowing = styled.div`
  margin-top: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`;
const Border = styled.div`
  width: 52rem;
  height: 4.8rem;
  background-color: #f2f4f8;
  border-bottom: 0.1rem solid #c1c7cd;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextInput = styled.input`
  width: 48.8rem;
  height: 2.2rem;
  font-size: 1.6rem;
  margin-left: 1.8rem;
  margin-right: 1.3rem;
  background-color: transparent;
  outline: none;
`;
const PasswordEyeImage = styled(Image)`
  cursor: pointer;
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 15px;
`;

interface Input {
  text: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Password({ text, placeholder, onChange }: Input) {
  const [inputType, setInputType] = useState("password");

  const handleImageClick = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  return (
    <PageContainer>
      <TextShowing>{text}</TextShowing>
      <Border>
        <TextInput type={inputType} placeholder={placeholder} />
        <PasswordEyeImage
          src={inputType === "password" ? showEye2 : showEye}
          onClick={handleImageClick}
          alt="toggle visibility"
        />
      </Border>
    </PageContainer>
  );
}

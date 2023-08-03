import createClubIcon from "@public/createClubIcon.svg";
import memberInfoIcon from "@public/memberInfoIcon.svg";
import Image from "next/image";
import logo from "@public/logo.svg";
import styled from "@emotion/styled";

interface Club {
  //표만들기
  name: string;
  status: string;
}

const TextBox = styled.input`
  width: 460px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #c1c7cd;
  background: #fff;
`;

export function MainInfo() {
  return (
    <div>
      <div>회원정보</div>
      <div>이름</div>
      <TextBox></TextBox>
      <div>학번</div>
      <TextBox></TextBox>
      <div>소속</div>
      <TextBox></TextBox>
      <div>내 동아리</div>
    </div>
  );
}

//styled파일 옮기기
//박스들 리스트로 만들기 필요
import Image from "next/image";
import styled from "@emotion/styled";
import clubimage from "@/../public/placeholder.png";
import React from "react";
import ClubTable from "./ClubTable";

const TextBox = styled.input`
  width: 460px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #c1c7cd;
  background: #fff;
`;
const UserInfoText = styled.div`
  width: 8.7rem;
  height: 3.2rem;
  flex-shrink: 0;
  color: #000;
  font-family: Roboto;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
  margin-bottom: 2rem;
  margin-top: 5rem;
`;
const OtherInfoText = styled.div`
  width: 9rem;
  height: 3.2rem;
  flex-shrink: 0;
  color: #000;
  font-family: Roboto;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
  margin-top: 3rem;
`;
const OtherInfoTextContainer = styled.div`
  margin-right: -10rem;
`;
const TextNImageContainer = styled.div`
  display: flex;
`;

const ClubImageCss = styled(Image)`
  margin-left: 28rem;
  width: 20rem;
  height: 23rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  margin-top: 5rem;
`;
const PageContainer = styled.div`
  margin-left: -8rem;
`;

const BottomBorder = styled.div`
  width: 86.7rem;
  height: 1px;
  background-color: #000;
  margin-top: 5rem;
  stroke-width: 1px;
`;
const SaveButton = styled.button`
  color: white;
  background-color: #0090f9;
  width: 11.3rem;
  height: 5.2rem;
  font-size: 2rem;
  font-weight: 500;
  margin-top: 3rem;
  margin-left: 72rem;
  margin-bottom: 5rem;
`;
const ButtonText = styled.div`
  color: var(--default-white, #fff);
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 20px */
  letter-spacing: 0.5px;
`;

export function MainInfo() {
  return (
    <PageContainer>
      <UserInfoText>회원정보</UserInfoText>
      <TextNImageContainer>
        <OtherInfoTextContainer>
          <OtherInfoText>이름</OtherInfoText>
          <TextBox></TextBox>
          <OtherInfoText>학번</OtherInfoText>
          <TextBox></TextBox>
          <OtherInfoText>소속</OtherInfoText>
          <TextBox></TextBox>
          <OtherInfoText>내 동아리</OtherInfoText>
        </OtherInfoTextContainer>
        <ClubImageCss src={clubimage} alt="club main image" />
      </TextNImageContainer>
      <ClubTable />
      <BottomBorder />
      <SaveButton>
        <ButtonText>저장</ButtonText>
      </SaveButton>
    </PageContainer>
  );
}

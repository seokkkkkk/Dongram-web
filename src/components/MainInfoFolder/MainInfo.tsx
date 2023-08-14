//API와 연결할 것을 고려하기
import clubimage from "@/../public/placeholder.png";
import React from "react";
import ClubTable from "./ClubTable";
import {
  PageContainer,
  UserInfoText,
  OtherInfoText,
  OtherInfoTextContainer,
  BottomBorder,
  ClubImageCss,
  TextNImageContainer,
  SaveButton,
  ButtonText,
  TextSelectBox,
  TextNImageBox,
  CloseXimage,
  Texting,
} from "./MainInfoStyle";

export function MainInfo() {
  return (
    <PageContainer>
      <UserInfoText>회원정보</UserInfoText>
      <TextNImageContainer>
        <OtherInfoTextContainer>
          <OtherInfoText>이름</OtherInfoText>
          <TextSelectBox>
            <Texting id="NoneBox">홍길동</Texting>
            {/* API로 이름넣기 수정하는 홈페이지인가?*/}
          </TextSelectBox>

          <OtherInfoText>학번</OtherInfoText>
          <TextSelectBox>
            <Texting id="NoneBox">20101274</Texting>
            {/* API로 학번넣기*/}
          </TextSelectBox>

          <OtherInfoText>소속</OtherInfoText>
          <TextSelectBox>
            <TextNImageBox>
              <Texting>정보통신대-컴퓨터공학과</Texting>
              {/* API로 소속 여러개 */}
              <CloseXimage src="/close.svg" alt="X" />
            </TextNImageBox>
          </TextSelectBox>
          <OtherInfoText>내 동아리</OtherInfoText>
        </OtherInfoTextContainer>
        <ClubImageCss src={clubimage} alt="club main image" />
      </TextNImageContainer>
      <ClubTable />
      {/* 동아릴 졸라게 가입한 유저가 있을경우를 대비해보자*/}
      <BottomBorder />
      <SaveButton>
        <ButtonText>저장</ButtonText>
      </SaveButton>
    </PageContainer>
  );
}

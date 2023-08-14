import React from "react";
import clubData from "@data/clubData.json";
import clubimage from "@/../public/placeholder.png";
import {
  DetailExplainText,
  HeadBorder,
  ExplainContainer,
  ClubImage,
  ClubName,
  ClubExplainContainer,
  GreyBorder,
  ClubDetailExplain,
  ClubExplainTextGrey,
  ClubExplainTextBlack,
  RegisterButton,
  BottomExplainHeader,
  BottomExplainText,
  BottomGreyBorder,
} from "./ClubData.styled";

const ClubData: React.FC = () => {
  // A, B, C 동아리에 대한 정보를 담는 배열
  const clubA = clubData.filter((club) => club.name === "세마치");
  const clubB = clubData.filter((club) => club.name === "B 동아리");
  const clubC = clubData.filter((club) => club.name === "C 동아리");

  return (
    <>
      <DetailExplainText>상세설명</DetailExplainText>
      <HeadBorder></HeadBorder>
      {/*굵은선*/}

      <ExplainContainer>
        <ClubImage src={clubimage} alt="club main image" />
        <div>
          <ClubName>{clubA[0].name}</ClubName>
          <ClubExplainContainer>
            <GreyBorder></GreyBorder>
            <br />
            <ClubDetailExplain>
              <li>
                <ClubExplainTextGrey>단과대:</ClubExplainTextGrey>
              </li>
              <ClubExplainTextBlack>{clubA[0].college}</ClubExplainTextBlack>
            </ClubDetailExplain>

            <br />
            <ClubDetailExplain>
              <li>
                <ClubExplainTextGrey>소속 과:</ClubExplainTextGrey>
              </li>
              <ClubExplainTextBlack>{clubA[0].department}</ClubExplainTextBlack>
            </ClubDetailExplain>
            <br />
            <ClubDetailExplain>
              <li>
                <ClubExplainTextGrey>카테고리:</ClubExplainTextGrey>
              </li>
              <ClubExplainTextBlack>{clubA[0].category}</ClubExplainTextBlack>
            </ClubDetailExplain>

            <br />
            <ClubDetailExplain>
              <li>
                <ClubExplainTextGrey>모집기간:</ClubExplainTextGrey>
              </li>
              <ClubExplainTextBlack>
                {clubA[0].recruitmentPeriod}
              </ClubExplainTextBlack>
            </ClubDetailExplain>
            <RegisterButton>신청하기</RegisterButton>
          </ClubExplainContainer>
        </div>
      </ExplainContainer>
      <HeadBorder></HeadBorder>
      <BottomExplainHeader>동아리소개</BottomExplainHeader>
      <BottomGreyBorder></BottomGreyBorder>
      <BottomExplainText>{clubA[0].clubIntroduction}</BottomExplainText>
      <BottomGreyBorder></BottomGreyBorder>
    </>
  );
};

export { ClubData };

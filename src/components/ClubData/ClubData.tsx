import React, { useEffect } from "react";
import clubimage from "@/../public/placeholder.png";
import { customAxios } from "@/Utils/customAxios";
import { useState } from "react";
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
  const [axiosData, setAxiosData] = useState({}); // 빈 객체로 초기화?

  useEffect(() => {
    fetchClubData();
  }, []); // 페이지 로딩시 갖고오기

  // 동아리 정보 갖고오기
  function fetchClubData() {
    customAxios
      .get("http://13.125.162.181:8080/clubs/1")
      .then((res) => {
        console.log(res.data.data); // 서버에서 받은 데이터 출력
        // 여기에서 받은 데이터를 원하는 방식으로 처리할 수 있습니다.
        setAxiosData(res.data.data); //받은 데이터를 여기에 넣기
      })
      .catch((error) => {
        console.error(error); // 에러 처리
      });
  }

  return (
    <>
      <DetailExplainText>상세설명</DetailExplainText>
      <HeadBorder></HeadBorder>

      <ExplainContainer>
        <ClubImage src={clubimage} alt="club main image" />
        <div>
          <ClubName>{axiosData.clubName}</ClubName>
          <ClubExplainContainer>
            <GreyBorder></GreyBorder>
            <br />
            <ClubDetailExplain>
              <li>
                <ClubExplainTextGrey>단과대:</ClubExplainTextGrey>
              </li>
              <ClubExplainTextBlack>{axiosData.college}</ClubExplainTextBlack>
            </ClubDetailExplain>

            <br />
            <ClubDetailExplain>
              <li>
                <ClubExplainTextGrey>소속 과:</ClubExplainTextGrey>
              </li>
              <ClubExplainTextBlack>{axiosData.clubName}</ClubExplainTextBlack>
              {/* 소속과는 데이터를 추가해달라고 요청할지 그냥 없앨지 일단 보류 */}
            </ClubDetailExplain>
            <br />
            <ClubDetailExplain>
              <li>
                <ClubExplainTextGrey>카테고리:</ClubExplainTextGrey>
              </li>
              <ClubExplainTextBlack>{axiosData.division}</ClubExplainTextBlack>
            </ClubDetailExplain>

            <br />
            <ClubDetailExplain>
              <li>
                <ClubExplainTextGrey>모집기간:</ClubExplainTextGrey>
              </li>
              <ClubExplainTextBlack>
                {axiosData.recruitmentPeriod}
              </ClubExplainTextBlack>
            </ClubDetailExplain>
            <RegisterButton>신청하기</RegisterButton>
          </ClubExplainContainer>
        </div>
      </ExplainContainer>
      <HeadBorder></HeadBorder>
      <BottomExplainHeader>동아리소개</BottomExplainHeader>
      <BottomGreyBorder></BottomGreyBorder>
      <BottomExplainText>{axiosData.content}</BottomExplainText>
      <BottomGreyBorder></BottomGreyBorder>
    </>
  );
};

export { ClubData };

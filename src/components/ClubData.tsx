//styeld 완료
import React from "react";
import clubData from "@data/clubData.json";
import Image from "next/image";
import clubimage from "@/../public/placeholder.png";
import styled from "@emotion/styled";

const ClubData: React.FC = () => {
  // A, B, C 동아리에 대한 정보를 담는 배열
  const clubA = clubData.filter((club) => club.name === "세마치");
  const clubB = clubData.filter((club) => club.name === "B 동아리");
  const clubC = clubData.filter((club) => club.name === "C 동아리");

  const DetailExplainText = styled.div`
    margin-top: 2rem;
    margin-right: 70rem;
    width: 14.4rem;
    height: 2.6rem;
    flex-shrink: 0;
    color: black;
    font-size: 3.2rem;
    font-family: "Roboto", sans-serif;
    line-height: 140%;
    font-weight: 400;
  `;
  const HeadBorder = styled.div`
    margin-top: 4rem;
    border: 0.1rem solid #000;
    width: 867px;
    height: 0;
    transform: rotate(0.066deg);
    flex-shrink: 0;
  `;
  const ExplainContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 4rem;
  `;
  const ClubImage = styled(Image)`
    width: 40.3rem;
    height: 44.1rem;
    margin-right: 3rem;
  `;
  const ClubName = styled.div`
    width: 38.7rem;
    height: 6.7rem;
    flex-shrink: 0;
    color: black;
    font-size: 4.8rem;
    font-weight: 400;
  `;

  const ClubExplainContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
  `;
  const GreyBorder = styled.div`
    margin-top: 2rem;
    border: 0.1rem solid #dde1e6;
    width: 320px;
    height: 0;
    transform: rotate(-179.792deg);
    flex-shrink: 0;
  `;
  const ClubDetailExplain = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const ClubExplainTextGrey = styled.span`
    color: #697077;
    font-family: "Roboto", sans-serif; //폰트 roboto사용, 불가능시 sans로 대체
    line-height: 1.4;
    font-size: 1.6rem;
    font-weight: 400;
  `;
  const ClubExplainTextBlack = styled(ClubExplainTextGrey)`
    //상속 개념 적용
    color: #000;
    width: 15.7rem;
    height: 3.1rem;
  `;
  const RegisterButton = styled.button`
    margin-left: 5rem;
    color: white;
    background-color: #0090f9;
    width: 19.8rem;
    height: 5.2rem;
    font-size: 2rem;
    font-weight: 500;
  `;

  const BottomExplainHeader = styled.div`
    margin-top: 1rem;
    margin-right: 72rem;
    width: 14.4rem;
    height: 3rem;
    flex-shrink: 0;
    color: black;
    font-size: 2rem;
    line-height: 1.4;
    font-weight: 400;
  `;
  const BottomGreyBorder = styled.div`
    margin-right: 41rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    border: 0.1rem solid #dde1e6;
    width: 459px;
    height: 0;
    transform: rotate(0.374deg);
    flex-shrink: 0;
  `;
  const BottomExplainText = styled.div`
    margin-right: 41rem;
    width: 459px;
    height: 10rem;
    flex-shrink: 0;
    color: black;
    font-size: 1.6rem;
    line-height: 1.4;
    font-weight: 400;
  `;

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

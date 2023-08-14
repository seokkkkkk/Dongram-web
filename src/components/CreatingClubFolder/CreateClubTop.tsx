//div -> table로 수정
//API와 연결할 것을 고려하기
import React from "react";
import clubimage from "@/../public/placeholder.png";
import { CreateClubBottom } from "./CreateClubBottom";
import {
  ClubImageText,
  TopBorder,
  BotBorder,
  CreatingClubText,
  EssentialText,
  PageContainer,
  ImageNTextConatiner,
  TopTextContainer,
  OptimizeText,
  ClubImage,
  Star,
} from "./CreateClubTopStyle";

export function CreateClubTop() {
  return (
    <PageContainer>
      <TopTextContainer>
        <CreatingClubText>동아리생성</CreatingClubText>
        <EssentialText>*필수항목</EssentialText>
      </TopTextContainer>
      <TopBorder />
      <ImageNTextConatiner>
        <ClubImageText>
          동아리 이미지 <Star>*</Star>
        </ClubImageText>
        <ClubImage src={clubimage} alt="club main image" />
      </ImageNTextConatiner>
      <OptimizeText>*이미지는 640*640 비율에 최적화 되어있습니다.</OptimizeText>
      <BotBorder />
      <CreateClubBottom />
    </PageContainer>
  );
}

import React from "react";
import createClubIcon from "@public/createClubIcon.svg";
import memberInfoIcon from "@public/memberInfoIcon.svg";
import { PageContainer } from "./SideInfoStyle";
import { SideMenuContainer } from "./SideInfoStyle";
import { ImageTextContainer } from "./SideInfoStyle";
import { IconCss } from "./SideInfoStyle";
import { ImageText } from "./SideInfoStyle";
import { ColumnBorder } from "./SideInfoStyle";

export function SideInfo() {
  return (
    <PageContainer>
      <SideMenuContainer>
        <ImageTextContainer>
          <IconCss src={memberInfoIcon} alt="member-Info" />
          <ImageText>회원정보</ImageText>
        </ImageTextContainer>
        <ImageTextContainer>
          <IconCss src={createClubIcon} alt="createClub" />
          <ImageText>동아리 생성</ImageText>
        </ImageTextContainer>
      </SideMenuContainer>
      <ColumnBorder></ColumnBorder>
    </PageContainer>
  );
}

import { Dispatch, SetStateAction, useCallback } from "react";
import { Header, Tab } from "./AdminClubHeader.styled";

interface AdminClubProps {
  isClubInfo: boolean;
  setIsClubInfo: Dispatch<SetStateAction<boolean>>;
}

export const AdminClubHeader = ({
  isClubInfo,
  setIsClubInfo,
}: AdminClubProps) => {
  const InfoClick = useCallback(() => {
    setIsClubInfo(true);
  }, [setIsClubInfo]);
  const MemberClick = useCallback(() => {
    setIsClubInfo(false);
  }, [setIsClubInfo]);

  return (
    <Header>
      <Tab active={isClubInfo} onClick={InfoClick}>
        동아리 정보
      </Tab>
      <Tab active={!isClubInfo} onClick={MemberClick}>
        회원 관리
      </Tab>
    </Header>
  );
};

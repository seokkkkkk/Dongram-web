//관리자 페이지 동아리 탭의 헤더
import { Dispatch, SetStateAction, useCallback } from "react";
import { Header, Tab } from "./AdminClubHeader.styled";

//true: 동아리 정보, false: 회원 관리
interface AdminClubProps {
  isClubInfo: boolean;
  setIsClubInfo: Dispatch<SetStateAction<boolean>>;
}

export const AdminClubHeader = ({
  isClubInfo,
  setIsClubInfo,
}: AdminClubProps) => {
  //동아리 정보
  const InfoClick = useCallback(() => {
    setIsClubInfo(true);
  }, [setIsClubInfo]);
  //회원 관리
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

import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { Header, Title, UserMenu, ClubMenu } from "./AdminHeader.styled";

interface AdminHeaderProps {
  isUserPage: boolean;
  setIsUserPage: Dispatch<SetStateAction<boolean>>;
}

export const AdminHeader = ({
  isUserPage,
  setIsUserPage,
}: AdminHeaderProps) => {
  const UserClick = useCallback(() => {
    setIsUserPage(true);
  }, [setIsUserPage]);
  const ClubClick = useCallback(() => {
    setIsUserPage(false);
  }, [setIsUserPage]);
  return (
    <Header>
      <Title>어드민 페이지</Title>
      <UserMenu active={isUserPage} onClick={UserClick}>
        회원관리
      </UserMenu>
      <ClubMenu active={!isUserPage} onClick={ClubClick}>
        동아리 관리
      </ClubMenu>
    </Header>
  );
};

import { useCallback, useState } from "react";
import { Header, Title, UserMenu, ClubMenu } from "./AdminHeader.styled";

export const AdminHeader = () => {
  const [isUserPage, setIsUserPage] = useState(true);
  const UserClick = useCallback(() => {
    setIsUserPage(true);
  }, []);
  const ClubClick = useCallback(() => {
    setIsUserPage(false);
  }, []);
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

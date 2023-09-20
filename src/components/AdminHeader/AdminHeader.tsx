import { Dispatch, SetStateAction, useCallback, useState } from "react";
import {
  Header,
  Title,
  UserMenu,
  ClubMenu,
  ImageCss,
  Text,
} from "./AdminHeader.styled";
import Image from "next/image";
import Link from "next/link";
import Home from "@public/home.svg";

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
      <Text>
        <Title>어드민 페이지</Title>
        <UserMenu active={isUserPage} onClick={UserClick}>
          회원관리
        </UserMenu>
        <ClubMenu active={!isUserPage} onClick={ClubClick}>
          동아리 관리
        </ClubMenu>
      </Text>
      <Link href={"/"}>
        <ImageCss src={Home} alt="home" />
      </Link>
    </Header>
  );
};

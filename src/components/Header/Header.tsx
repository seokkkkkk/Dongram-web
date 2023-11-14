import logo from "@public/logo.png";
import { LoginButton } from "@components/LoginButton/LoginButton";
import { UserButton } from "@components/UserButton/UserButton";
import search_icon from "@public/search-icon.svg";
import Link from "next/link";
import {
  HeaderContainer,
  LogoContainer,
  LogoImage,
  LogoText,
  BoardContainer,
  FreeBoardText,
  ClubText,
  SearchContainer,
  SearchImage,
  SearchInput,
  GreyBorder,
} from "./Header.styled";
import { IsLogin } from "@/components/IsLogin/IsLogin";
import { useCallback, useEffect, useState } from "react";

export function Header() {
  const [LoginHeader, setLoginHeader] = useState(false);
  useEffect(() => {
    setLoginHeader(IsLogin());
  }, []);
  const LoginButtonControl = useCallback(() => {
    return LoginHeader ? (
      <UserButton LoginControl={setLoginHeader} />
    ) : (
      <LoginButton LoginControl={setLoginHeader} />
    );
  }, [LoginHeader]);
  return (
    <header>
      <HeaderContainer>
        <Link href="../">
          <LogoContainer>
            <LogoImage src={logo} alt="logo" />
            <LogoText>DONGRAM</LogoText>
          </LogoContainer>
        </Link>
        <BoardContainer>
          <ClubText>
            <Link href="../ClubPage">동아리정보</Link>
          </ClubText>
          <ClubText>
            <Link href="../MyClubPage">내 동아리</Link>
          </ClubText>
        </BoardContainer>
        <SearchContainer>
          <SearchImage src={search_icon} alt="search-icon" />
          <SearchInput type="text" placeholder="Search for..." />
        </SearchContainer>
        {LoginButtonControl()}
      </HeaderContainer>

      <GreyBorder></GreyBorder>
    </header>
  );
}

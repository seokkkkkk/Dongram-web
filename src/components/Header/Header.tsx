import logo from "@public/logo.svg";
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

export function Header() {
  return (
    <header>
      <HeaderContainer>
        <Link href="../">
          <LogoContainer>
            <LogoImage src={logo} alt="logo" />
            <LogoText>ST</LogoText>
          </LogoContainer>
        </Link>
        <BoardContainer>
          <FreeBoardText>자유게시판</FreeBoardText>
          <Link href="../clubPage">
            <ClubText>동아리정보</ClubText>
          </Link>
          <ClubText>내 동아리</ClubText>
        </BoardContainer>
        <SearchContainer>
          <SearchImage src={search_icon} alt="search-icon" />
          <SearchInput type="text" placeholder="Search for..." />
        </SearchContainer>
        {/*로그인X*/}
        {/* <LoginButton /> */}
        {/*로그인O*/}
        <UserButton />*
      </HeaderContainer>

      <GreyBorder></GreyBorder>
    </header>
  );
}

//styled 완료
import logo from "@public/logo.svg";
import { LoginButton } from "./LoginButton";
import search_icon from "@public/search-icon.svg";
import Image from "next/image"; //이미지 갖고오기 위한 문
import Link from "next/link"; //링크 마찬가지
import { UserButton } from "./UserButton";
import styled from "@emotion/styled";

const HeaderContainer = styled.div`
  display: flex;
  font-size: 2.4rem;
  line-height: 110%;
  place-items: center;
  margin-top: 30px;
`;
const LogoImage = styled(Image)`
  width: 2.4rem;
  height: 2.4rem;
`;
const LogoContainer = styled.div`
  display: flex;
  place-items: center;
`;
const LogoText = styled.span`
  color: #697077;
  font-weight: 700;
  margin-left: 1.6rem;
`;
const BoardContainer = styled.div`
  display: flex;
  font-weight: 400;
  margin-left: 8.1rem;
  white-space: nowrap;
`;
const FreeBoardText = styled.span`
  margin-left: 8rem;
`;
const ClubText = styled.span`
  margin-left: 4rem;
`;
const SearchContainer = styled.div`
  display: flex;
  background-color: #f2f4f8;
  width: 40rem;
  height: 6.1rem;
  padding-left: 1.6rem;
  padding-right: 1.5rem;
  padding-top: 1.9rem;
  padding-bottom: 1.9rem;
  margin-left: 8rem;
  border-bottom: 1px solid #c1c7cd;
`;
const SearchImage = styled(Image)`
  width: 1.9rem;
  height: 1.9rem;
`;
const SearchInput = styled.input`
  flex-grow: 1;
  background-color: transparent;
  margin-left: 1.1rem;
  outline: none;
  font-size: 1.6rem;
`;
const GreyBorder = styled.div`
  margin-top: 1.9rem;
  border: 1px solid #dde1e6;
  width: 135rem;
`;
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

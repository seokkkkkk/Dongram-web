import styled from "@emotion/styled";
import Image from "next/image";

export const HeaderContainer = styled.div`
  display: flex;
  font-size: 2.4rem;
  line-height: 110%;
  place-items: center;
  margin-top: 30px;
`;
export const LogoImage = styled(Image)`
  width: 2.4rem;
  height: 2.4rem;
`;
export const LogoContainer = styled.div`
  display: flex;
  place-items: center;
`;
export const LogoText = styled.span`
  color: #697077;
  font-weight: 700;
  margin-left: 0.5rem;
`;
export const BoardContainer = styled.div`
  display: flex;
  font-weight: 400;
  margin-left: 4rem;
  white-space: nowrap;
`;
export const FreeBoardText = styled.span`
  margin-left: 8rem;
`;
export const ClubText = styled.span`
  margin-left: 4rem;
`;
export const SearchContainer = styled.div`
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
export const SearchImage = styled(Image)`
  width: 1.9rem;
  height: 1.9rem;
`;
export const SearchInput = styled.input`
  flex-grow: 1;
  background-color: transparent;
  margin-left: 1.1rem;
  outline: none;
  font-size: 1.6rem;
`;
export const GreyBorder = styled.div`
  margin-top: 1.9rem;
  border: 1px solid #dde1e6;
  width: 135rem;
`;

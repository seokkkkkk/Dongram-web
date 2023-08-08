import styled from "@emotion/styled";
import Image from "next/image";

export const SearchBox = styled.div`
  display: flex;
  width: 22.9rem;
  height: 4.8rem;
  padding: 1.2rem 1.6rem;
  align-items: center;
  gap: 0.8rem;
  flex-shrink: 0;
  border: 1px solid #c1c7cd;
  background: #fff;
`;
export const SearchImage = styled(Image)`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`;
export const SearchInput = styled.input`
  flex-grow: 1;
  background-color: transparent;
  outline: none;
  font-size: 1.6rem;
  line-height: 140%;
  ::placeholder {
    color: #697077;
  }
`;

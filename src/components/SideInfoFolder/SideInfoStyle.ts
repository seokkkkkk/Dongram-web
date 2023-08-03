import styled from "@emotion/styled";
import Image from "next/image";
export const ImageTextContainer = styled.div`
  display: flex;
  width: 165px;
  height: 37px;
  flex-shrink: 0;
`;
export const IconCss = styled(Image)`
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
`;
export const ImageText = styled.span`
  margin-left: 1rem;
  width: 10rem;
  height: 2.5rem;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 23.8px */
  text-align: left;
`;
export const PageContainer = styled.div`
  display: flex;
`;
export const ColumnBorder = styled.div`
  flex-shrink: 0;
  border-right: 1px solid #959a9f; /* 세로 방향 border 설정 */
  height: 70.9rem; /* 원하는 세로 높이 설정 */
  margin-top: 4rem;
`;
export const SideMenuContainer = styled.div`
  flex-direction: column;
  margin-top: 8rem;
`;

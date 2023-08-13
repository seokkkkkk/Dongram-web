import styled from "@emotion/styled";
import Image from "next/image";
export const ImageTextContainer = styled.div`
  display: flex;
  width: 16.5rem;
  height: 3.7rem;
  flex-shrink: 0;
  justify-content: center;
  margin-bottom: 2rem;
  padding-top: 0.5rem;

  &:hover {
    background-color: #d9d9d9; /* 회색 배경색으로 변경 */
    cursor: pointer; /* 마우스 커서를 포인터로 변경 */
    border-radius: 10px; /* 모서리를 10px만큼 둥글게 처리 */
  }
`;
export const IconCss = styled(Image)`
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
`;
export const ImageText = styled.span`
  margin-left: 1rem;
  width: 10rem;
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
  margin-left: 5rem;
  
`;
export const SideMenuContainer = styled.div`
  flex-direction: column;
  margin-top: 8rem;
  margin-left: -30rem;
  margin-right: -3rem;
`;

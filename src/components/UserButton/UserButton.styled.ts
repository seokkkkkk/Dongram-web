import Image from "next/image";
import styled from "@emotion/styled";

export const UserButtonContainer = styled.div`
  margin-left: 6rem;
  display: flex;
`;
export const ImageCss = styled(Image)`
  width: 3.6rem;
  height: 3.6rem;
`;
export const SettingButtonCss = styled.div`
  margin-left: 2.7rem;
`;
export const UserButtonCss = styled(SettingButtonCss)``; // 상속스타일 예시 ()안에는 컴포넌트

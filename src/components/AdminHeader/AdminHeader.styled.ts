import styled from "@emotion/styled";
import Image from "next/image";

interface MenuProps {
  active?: boolean;
}

export const ImageCss = styled(Image)`
  width: 5rem;
  height: 5rem;
`;

export const Text = styled.div`
  display: flex;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 3.2rem;
  align-items: center;
  background-color: #f2f4f8;
  border-bottom: 1px solid #000;
  justify-content: space-between;
`;
export const Title = styled.div`
  margin-right: 14.5rem;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 110%;
  color: #001d6c;
`;
export const UserMenu = styled.div<MenuProps>`
  font-size: 3.2rem;
  font-weight: 400;
  line-height: 110%;
  margin-right: 6.8rem;
  cursor: pointer;
  color: ${(props) => (props.active ? "#0090F9" : "black")};
`;
export const ClubMenu = styled(UserMenu)``;

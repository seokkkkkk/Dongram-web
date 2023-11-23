import styled from "@emotion/styled";

interface MenuProps {
  active?: boolean;
}

export const Header = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;
export const Tab = styled.div<MenuProps>`
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 110%;
  margin-right: 4rem;
  cursor: pointer;
  color: ${(props) => (props.active ? "#0090F9" : "black")};
  float: left;
`;

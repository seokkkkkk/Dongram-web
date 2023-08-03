//styled 완료
import { useState } from "react";
import styled from "@emotion/styled";

interface CategoryButtonProps {
  isClicked: boolean;
}

const CategoryButtonCss = styled.div<CategoryButtonProps>`
  display: inline-flex;
  justify-content: center;
  place-items: center;
  height: 2.7rem;
  padding: 0.4rem 1rem;
  border-radius: 1.2rem;
  margin-left: 0.4rem;
  margin-top: 1rem;
  cursor: pointer;
  background-color: ${(props) => (props.isClicked ? "#0090F9" : "#F2F4F8")};
  color: ${(props) => (props.isClicked ? "white" : "black")};
`;

const CategoryButtonTextCss = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 140%;
`;

interface CategoryProps {
  props: string;
}

export function BigCategory({ props }: CategoryProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <CategoryButtonCss isClicked={isClicked} onClick={handleClick}>
      <CategoryButtonTextCss>{props}</CategoryButtonTextCss>
    </CategoryButtonCss>
  );
}

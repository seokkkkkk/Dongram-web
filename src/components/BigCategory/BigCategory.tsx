import { useState } from "react";
import { CategoryButtonCss, CategoryButtonTextCss } from "./BigCategory.styled";

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

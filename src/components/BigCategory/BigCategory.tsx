import { useState } from "react";
import { CategoryButtonCss, CategoryButtonTextCss } from "./BigCategory.styled";

interface CategoryProps {
  props: string;
  onCategoryClick: (id: string) => void;
}

export function BigCategory({ props, onCategoryClick }: CategoryProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    onCategoryClick(props);
  };

  return (
    <CategoryButtonCss isClicked={isClicked} onClick={handleClick}>
      <CategoryButtonTextCss>{props}</CategoryButtonTextCss>
    </CategoryButtonCss>
  );
}

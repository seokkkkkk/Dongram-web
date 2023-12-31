//카테고리 컴포넌트
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Container, Text } from "./Category.styled";

interface CategoryProps {
  props: string;
}

export function Category({ props }: CategoryProps) {
  const [clicked, setClicked] = useState(false);
  const handleContainerClick = () => {
    setClicked(!clicked);
  };
  return (
    <Container onClick={handleContainerClick} clicked={clicked}>
      <Text>{props}</Text>
    </Container>
  );
}

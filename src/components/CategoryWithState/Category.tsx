//카테고리 컴포넌트 (setState 포함)
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Container, Text } from "./Category.styled";

interface CategoryProps {
  props: string;
  setState: Dispatch<SetStateAction<boolean>>;
}

export function Category({ props, setState }: CategoryProps) {
  const [clicked, setClicked] = useState(false);
  const handleContainerClick = () => {
    setClicked(!clicked);
  };
  useEffect(() => {
    setState(clicked);
  }, [clicked, setState]);
  return (
    <Container onClick={handleContainerClick} clicked={clicked}>
      <Text>{props}</Text>
    </Container>
  );
}

import { Dispatch, SetStateAction, useState } from "react";
import { Container, Text } from "./Category.styled";

interface CategoryProps {
  category: string;
  recruit: boolean;
  setRecruit: Dispatch<SetStateAction<boolean>>;
}

export function Category({ category, recruit, setRecruit }: CategoryProps) {
  const handleContainerClick = () => {
    setRecruit(!recruit);
  };
  return (
    <Container onClick={handleContainerClick} clicked={recruit}>
      <Text>{category}</Text>
    </Container>
  );
}

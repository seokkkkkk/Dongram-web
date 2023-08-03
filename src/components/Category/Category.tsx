import { Container, Text } from "./Category.styled";

interface CategoryProps {
  props: string;
}

export function Category({ props }: CategoryProps) {
  return (
    <Container>
      <Text>{props}</Text>
    </Container>
  );
}

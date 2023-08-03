//styled 완료
import { useEffect, useState } from "react";
import { BigCategory } from "./BigCategory";
import styled from "@emotion/styled";

const CategoryContainer = styled.div`
  white-space: nowrap;
`;

interface CategoryProps {
  props: string;
  isClicked: boolean;
}

interface filePath {
  filePath: string;
}

function Categories({ filePath }: filePath) {
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  useEffect(() => {
    import(`@/data/${filePath}.json`).then((data) => {
      //json파일 사용 예시
      setCategories(data.default);
    });
  }, [filePath]);

  return (
    <CategoryContainer>
      {categories.map((category, index) => (
        <BigCategory key={index} props={category.props} />
      ))}
    </CategoryContainer>
  );
}

export default Categories;

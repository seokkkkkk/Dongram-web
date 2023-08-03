import { useEffect, useState } from "react";
import { BigCategory } from "@components/BigCategory/BigCategory";
import { CategoryContainer } from "./Categories.styled";

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

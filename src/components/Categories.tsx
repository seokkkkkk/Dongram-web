import { useEffect, useState } from "react";
import { BigCategory } from "./BigCategory";

interface CategoryProps {
  props: string;
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
    <div className="whitespace-nowrap">
      {categories.map((category, index) => (
        <BigCategory key={index} props={category.props} />
      ))}
    </div>
  );
}

export default Categories;

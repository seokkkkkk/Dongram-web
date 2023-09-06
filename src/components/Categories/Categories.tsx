import { useEffect, useState } from "react";
import { BigCategory } from "@components/BigCategory/BigCategory";
import { CategoryContainer } from "./Categories.styled";
import { customAxios } from "@/Utils/customAxios";

interface CategoryProps {
  props: string;
  isClicked: boolean;
}

interface filePath {
  filePath: string;
  fieldName: string;
}

function Categories({ filePath, fieldName }: filePath) {
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  useEffect(() => {
    customAxios
      .get(`${filePath}`)
      .then((response) => {
        const data = response.data.data;
        console.log(data);
        const NewData: any[] = [];
        data.map((data: any, index: any) => {
          NewData.push(data[fieldName].toString());
        });
        setCategories(NewData);
      })
      .catch((error) => {
        console.error("에러 발생:", error);
      });
  }, [filePath, fieldName]);

  return (
    <CategoryContainer>
      {categories.map((category, index) => (
        <BigCategory key={index} props={category.toString()} />
      ))}
    </CategoryContainer>
  );
}

export default Categories;

import { Header } from "@components/Header/Header";
import Categories from "@components/Categories/Categories";
import { Clubs } from "@/components/Clubs/Clubs";
import styled from "@emotion/styled";
import { useState } from "react";
import { Category } from "@/components/CategoryWithState/Category";
import { BigCategory } from "@/components/BigCategory/BigCategory";

const PageContainer = styled.div`
  display: flex; /* Flexbox 컨테이너로 설정 */
  flex-direction: column; /* 컬럼 방향으로 배치 */
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center; /* 수평 가운데 정렬 */
`;

const College = styled.div`
  margin-top: 2rem;
`;
const Department = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.2rem;
`;
const Boarder = styled.div`
  margin-top: 2rem;
  border-color: #959a9f;
  border-width: 1px;
  width: 91.3rem;
`;

export default function ClubPage() {
  const [clickedIds, setClickedIds] = useState<number[]>([]);
  const [clickedDivision, setClickedDivision] = useState<number[]>([]);
  const [recruit, setRecruit] = useState(false);
  const handleCategoryClick = () => {
    setRecruit(!recruit);
  };
  return (
    <PageContainer>
      <Header />
      <div>
        <College>
          <Categories
            filePath="/colleges/all"
            fieldName="college"
            clickedIds={clickedIds}
            setClickedIds={setClickedIds}
          />
        </College>
        <Department>
          <Categories
            filePath="/division/all"
            fieldName="division"
            clickedIds={clickedDivision}
            setClickedIds={setClickedDivision}
          />
          <BigCategory props="모집 중" onCategoryClick={handleCategoryClick} />
        </Department>
      </div>
      <Boarder />
      <Clubs ids={clickedIds} divisions={clickedDivision} recruit={recruit} />
    </PageContainer>
  );
}

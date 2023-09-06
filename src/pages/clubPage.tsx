import { Header } from "@components/Header/Header";
import Categories from "@components/Categories/Categories";
import styled from "@emotion/styled";

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
  margin-top: 1.2rem;
`;
const Boarder = styled.div`
  margin-top: 2rem;
  border-color: #959a9f;
  border-width: 1px;
  width: 91.3rem;
`;

export default function clubPage() {
  return (
    <PageContainer>
      <Header />
      <div>
        <College>
          <Categories filePath="/colleges/all" fieldName="collegeName" />
        </College>
        <Department>
          <Categories filePath="/division/all" fieldName="divisionName" />
        </Department>
      </div>
      <Boarder />
    </PageContainer>
  );
}

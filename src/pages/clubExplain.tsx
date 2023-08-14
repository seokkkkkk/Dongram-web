import { Header } from "@components/Header/Header";
import { ClubData } from "@components/ClubData/ClubData";
import styled from "@emotion/styled";

const PageContainer = styled.div`
  display: flex; /* Flexbox 컨테이너로 설정 */
  flex-direction: column; /* 컬럼 방향으로 배치 */
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center; /* 수평 가운데 정렬 */
`;

export default function clubExplain() {
  return (
    <>
      <PageContainer>
        <Header />
        <ClubData />
      </PageContainer>
    </>
  );
}

import { Header } from "@components/Header/Header";
import { SideInfo } from "@/components/SideInfoFolder/SideInfo";
import styled from "@emotion/styled";
import { CreateClubTop } from "@/components/CreatingClubFolder/CreateClubTop";

const PageConatiner = styled.div`
  display: flex; /* Flexbox 컨테이너로 설정 */
  flex-direction: column; /* 컬럼 방향으로 배치 */
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center; /* 수평 가운데 정렬 */
`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function creatingClub() {
  return (
    <PageConatiner>
      <Header />
      <InfoContainer>
        <SideInfo />
        <CreateClubTop />
      </InfoContainer>
    </PageConatiner>
  );
}

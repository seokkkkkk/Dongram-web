//styled 완료
import { Header } from "@components/Header";
import { Banner } from "@components/Banner";
import { MyClub } from "@components/MyClub";
import { RecruitClub } from "@components/RecruitClub";
import styled from "@emotion/styled";

const PageConatiner = styled.div`
  display: flex; /* Flexbox 컨테이너로 설정 */
  flex-direction: column; /* 컬럼 방향으로 배치 */
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center; /* 수평 가운데 정렬 */
`;

export default function Home() {
  return (
    <>
      <PageConatiner>
        <Header />
        <Banner />
        <MyClub />
        <RecruitClub />
      </PageConatiner>
    </>
  );
}

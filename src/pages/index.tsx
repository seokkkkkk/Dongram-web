//styled 완료
import { Header } from "@components/Header/Header";
import { Banner } from "@components/Banner/Banner";
import { MyClub } from "@components/MyClub/MyClub";
import { RecruitClub } from "@components/RecruitClub/RecruitClub";
import styled from "@emotion/styled";

const PageConatiner = styled.div`
  display: flex; /* Flexbox 컨테이너로 설정 */
  flex-direction: column; /* 컬럼 방향으로 배치 */
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center; /* 수평 가운데 정렬 */
`;
//회원정보를 확인하는 페이지와, 동아리 생성 홈페이지는 로그인후 나타나는 유저아이콘 사진에 링크를 넣어놨음
export default function Home() {
  return (
    <>
      <PageConatiner>
        <Header />
        <Banner />
        <RecruitClub />
      </PageConatiner>
    </>
  );
}

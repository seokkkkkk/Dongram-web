//styled완료
import { Club } from "./Club";
import Link from "next/link";
import styled from "@emotion/styled";

const PageContainer = styled.div`
  width: 95.8rem;
  margin-top: 3rem;
  margin-bottom: 4.4rem;
`;
const RecruitClubText = styled.div`
  margin-left: 0.9rem;
  margin-bottom: 1.7rem;
  font-size: 2.4rem;
  font-weight: 400;
`;

export function RecruitClub() {
  return (
    <PageContainer>
      <RecruitClubText>모집 중인 동아리</RecruitClubText>
      <Link href="../clubExplain">
        <div className="flex">
          <Club
            recruit="모집 중"
            college="중앙동아리"
            department="공연"
            name="세마치"
          />
          <Club />
          <Club />
          <Club />
        </div>
      </Link>
    </PageContainer>
  );
}

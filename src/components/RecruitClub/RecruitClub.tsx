import { Club } from "@components/Club/Club";
import Link from "next/link";
import { PageContainer, RecruitClubText } from "./RecruitClub.styled";

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

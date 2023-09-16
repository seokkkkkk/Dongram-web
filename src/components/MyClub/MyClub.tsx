import Link from "next/link";
import { Container, Text } from "./MyClub.styled";
import { Club } from "@components/Club/Club";

export function MyClub() {
  const clubId = 1; // 이 부분을 동적으로만 바꾸면 완성, 일단 1부터 2, 3 바꿔봤는데 동아리 계속 바뀌면서 잘 작동함

  return (
    <Container>
      <Text>내 동아리</Text>

      <Link href={`/clubExplain?clubId=${clubId}`}>
        {/* clubExplain홈페이지로 이동할 때 뒷부분을 clubId로 넘기기 */}
        <div className="flex">
          <Club
            recruit="모집 중"
            college="중앙동아리"
            department="공연"
            name="세마치"
          />
        </div>
      </Link>
    </Container>
  );
}

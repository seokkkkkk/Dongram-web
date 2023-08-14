import { Club } from "@components/Club/Club";
import Link from "next/link";
import { Container, Text } from "./MyClub.styled";

export function MyClub() {
  return (
    <Container>
      <Text>내 동아리</Text>

      <Link href="../clubExplain">
        <div className="flex">
          <Club
            recruit="모집 중"
            college="중앙동아리"
            department="공연"
            name="세마치"
          />
          <Club />
        </div>
      </Link>
    </Container>
  );
}

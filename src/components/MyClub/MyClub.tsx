import Link from "next/link";
import { Container, Text } from "./MyClub.styled";
import { Club } from "@components/Club/Club";
import styled from "@emotion/styled";

const Table = styled.div`
  display: flex;
  gap: 1.3rem;
  width: 100rem;
`;
export function MyClub() {
  return (
    <Container>
      <Text>내 동아리</Text>
      <Table>
        <Club
          recruit="모집 중"
          college="중앙동아리"
          department="공연"
          name="세마치"
          id="1"
        />
        <Club
          recruit="모집 중"
          college="중앙동아리"
          department="공연"
          name="세마치"
          id="1"
        />
        <Club
          recruit="모집 중"
          college="중앙동아리"
          department="공연"
          name="세마치"
          id="1"
        />
        <Club
          recruit="모집 중"
          college="중앙동아리"
          department="공연"
          name="세마치"
          id="1"
        />
      </Table>
    </Container>
  );
}

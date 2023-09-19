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
          college="정보통신대학"
          department="학술"
          name="TOOLS"
          id="1"
        />
        <Club
          recruit="모집 중"
          college="정보통신대학"
          department="학술"
          name="TOOLS"
          id="1"
        />
        <Club
          recruit="모집 중"
          college="정보통신대학"
          department="학술"
          name="TOOLS"
          id="1"
        />
        <Club
          recruit="모집 중"
          college="정보통신대학"
          department="학술"
          name="TOOLS"
          id="1"
        />
      </Table>
    </Container>
  );
}

//styled 완료
import Image from "next/image";
import clubimage from "@public/placeholder.png";
import { Category } from "./Category";
import styled from "styled-components";

const ClubIndexContainer = styled.div`
  width: 20.7rem;
  height: 30em;
  border: 1px solid #dde1e6;
  margin-right: 3rem;
`;

const ClubImage = styled(Image)`
  width: 20.7rem;
  height: 22rem;
`;
const ClubIndexExplain = styled.div`
  margin-left: 0.3rem;
`;

const ClubName = styled.div`
  margin-top: 0.8rem;
  margin-left: 0.8rem;
  font-weight: 700;
  font-size: 2rem;
`;

interface ClubProps {
  recruit: string;
  college: string;
  department: string;
  name: string;
}

export function Club({ recruit, college, department, name }: ClubProps) {
  return (
    <ClubIndexContainer>
      <ClubImage src={clubimage} alt="club main image" />
      <ClubIndexExplain>
        <Category props={recruit} />
        <Category props={college} />
        <Category props={department} />
        <ClubName>{name}</ClubName>
      </ClubIndexExplain>
    </ClubIndexContainer>
  );
}

import clubimage from "@public/placeholder.png";
import { Category } from "@components/Category/Category";
import {
  ClubIndexContainer,
  ClubImage,
  ClubName,
  ClubIndexExplain,
} from "./Club.styled";

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

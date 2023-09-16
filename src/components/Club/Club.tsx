import clubimage from "@public/placeholder.png";
import { Category } from "@components/Category/Category";
import {
  ClubIndexContainer,
  ClubImage,
  ClubName,
  ClubIndexExplain,
} from "./Club.styled";
import { useCallback } from "react";

interface ClubProps {
  recruit: string;
  college: string;
  department: string;
  name: string;
  id: string;
}

export function Club({ recruit, college, department, name, id }: ClubProps) {
  const onClubClick = useCallback(() => {}, []);
  return (
    <ClubIndexContainer onClick={onClubClick}>
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

import clubimage from "@public/placeholder.png";
import { Category } from "@components/Category/Category";
import {
  ClubIndexContainer,
  ClubImage,
  ClubName,
  ClubIndexExplain,
} from "./Club.styled";
import { useCallback } from "react";
import Link from "next/link";

interface ClubProps {
  recruit: string;
  college: string;
  department: string;
  name: string;
  id: string;
}

export function Club({ recruit, college, department, name, id }: ClubProps) {
  return (
    <ClubIndexContainer>
      <Link href={`/clubExplain?clubId=${id}`}>
        <ClubImage src={clubimage} alt="club main image" />
        <ClubIndexExplain>
          <Category props={recruit} />
          <Category props={college} />
          <Category props={department} />
          <ClubName>{name}</ClubName>
        </ClubIndexExplain>
      </Link>
    </ClubIndexContainer>
  );
}

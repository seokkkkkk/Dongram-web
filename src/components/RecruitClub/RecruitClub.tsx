import { Club } from "@components/Club/Club";
import left from "@public/left_fill.svg";
import right from "@public/right_fill.svg";
import leftDisabled from "@public/left.svg";
import rightDisabled from "@public/right.svg";
import {
  PageContainer,
  RecruitClubText,
  ClubContainer,
  Table,
  Button,
  Clubs,
} from "./RecruitClub.styled";
import { useCallback, useEffect, useState } from "react";
import { customAxios } from "@/Utils/customAxios";

interface ClubData {
  clubId: string;
  college: string;
  division: string;
  clubName: string;
  recruitment: boolean;
}

export function RecruitClub() {
  const [data, setData] = useState<ClubData[]>([]);
  const [filteredData, setFilteredData] = useState<ClubData[]>([]);
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);
  useEffect(() => {
    customAxios
      .get("/clubs/all")
      .then((res) => {
        const filteredData = res.data.data.filter((orgData: ClubData) => {
          return orgData.recruitment === true; // return을 추가
        });
        setData(filteredData);
        setLastPage(Math.ceil(filteredData.length / 8) - 1);
      })
      .catch((error) => {
        console.error("에러: ", error);
      });
  }, []);
  useEffect(() => {
    var dataSet;
    if (page === lastPage) {
      dataSet = data.slice(lastPage * 8 - 3, (lastPage + 1) * 8);
    } else {
      dataSet = data.slice(page * 8, (page + 1) * 8);
    }
    setFilteredData(dataSet);
  }, [data, page, lastPage]);
  const onLeftClick = useCallback(() => {
    if (page >= 1) setPage(page - 1);
  }, [page]);
  const onRightClick = useCallback(() => {
    if (page < lastPage) setPage(page + 1);
  }, [lastPage, page]);
  const printClubs = useCallback(() => {
    return filteredData.map((data, idx) => {
      return (
        <ClubContainer key={idx}>
          <Club
            recruit="모집 중"
            college={data.college}
            department={data.division.replace("분과", "")}
            name={data.clubName}
            id={data.clubId}
          />
        </ClubContainer>
      );
    });
  }, [filteredData]);
  return (
    <PageContainer>
      <RecruitClubText>모집 중인 동아리</RecruitClubText>
      <Table>
        <Button
          src={page === 0 ? leftDisabled : left}
          alt="left_button"
          onClick={onLeftClick}
          style={{ cursor: page === 0 ? "default" : "pointer" }}
        />
        <Clubs>{printClubs()}</Clubs>
        <Button
          src={page === lastPage ? rightDisabled : right}
          alt="right_button"
          onClick={onRightClick}
          style={{ cursor: page === lastPage ? "default" : "pointer" }}
        />
      </Table>
    </PageContainer>
  );
}

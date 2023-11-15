import { customAxios } from "@/Utils/customAxios";
import { Club } from "../Club/Club";
import styled from "styled-components";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  DisabledShiftButton,
  ShiftButton,
  ActiveNumberButton,
  NumberButton,
} from "@components/UserManageTable/UserManageTable.styled";

interface ParentProps {
  ids: number[];
  divisions: number[];
}
interface clubinfo {
  clubId: number;
  clubName: string;
  college: string;
  division: string;
  recruitment: string;
}
export const PageTab = styled.div`
  margin-top: 1rem;
  display: flex;
  width: 86rem;
  height: 4rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  font-weight: 500;
  font-size: 1.6rem;
`;
const ClubTable = styled.div`
  margin-top: 4rem;
  margin-left: 3.3rem;
  display: flex;
  flex-wrap: wrap;
  width: 95rem;
`;

export const Clubs = ({ ids, divisions }: ParentProps) => {
  const [clubData, setClubData] = useState<clubinfo[]>([]);
  const [division, setDivision] = useState<string[]>([]);
  const [selectedClubs, setSelectedClubs] = useState<clubinfo[]>([]);
  //페이지
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = useMemo(() => {
    const slicedData = selectedClubs.slice(indexOfFirstItem, indexOfLastItem);
    const shortage = itemsPerPage - slicedData.length;

    // 부족한 수만큼의 데이터를 이전 페이지에서 가져옴.
    if (shortage > 0 && indexOfFirstItem > 0) {
      const additionalData = selectedClubs.slice(
        indexOfFirstItem - shortage,
        indexOfFirstItem
      );
      return additionalData.concat(slicedData);
    }

    return slicedData;
  }, [selectedClubs, indexOfFirstItem, indexOfLastItem, itemsPerPage]);
  const totalPages = Math.ceil(selectedClubs.length / itemsPerPage);
  const handlePageClick = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
  }, []);

  const handleNextClick = useCallback(() => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  }, [currentPage, totalPages]);

  const handlePrevClick = useCallback(() => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  }, [currentPage]);
  const renderPagination = useCallback(() => {
    let pageNumbers = [];
    let startPage, endPage;

    if (totalPages <= 9) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 5) {
        startPage = 1;
        endPage = 9;
      } else if (currentPage > totalPages - 5) {
        startPage = totalPages - 8;
        endPage = totalPages;
      } else {
        startPage = currentPage - 4;
        endPage = currentPage + 4;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return (
      <PageTab>
        {currentPage === 1 ? (
          <DisabledShiftButton onClick={handlePrevClick}>
            &lt;&nbsp; Previous
          </DisabledShiftButton>
        ) : (
          <ShiftButton onClick={handlePrevClick}>
            &lt;&nbsp; Previous
          </ShiftButton>
        )}
        {pageNumbers.map((num) =>
          num === currentPage ? (
            <ActiveNumberButton key={num} onClick={() => handlePageClick(num)}>
              {num}
            </ActiveNumberButton>
          ) : (
            <NumberButton key={num} onClick={() => handlePageClick(num)}>
              {num}
            </NumberButton>
          )
        )}
        {currentPage >= totalPages || totalPages === 0 ? (
          <DisabledShiftButton onClick={handleNextClick}>
            Next &nbsp;&gt;
          </DisabledShiftButton>
        ) : (
          <ShiftButton onClick={handleNextClick}>Next &nbsp;&gt;</ShiftButton>
        )}
      </PageTab>
    );
  }, [
    currentPage,
    totalPages,
    handleNextClick,
    handlePageClick,
    handlePrevClick,
  ]);
  //여기까지
  useEffect(() => {
    if (ids.length > 0) {
      const collegeIds = ids.join(",");
      customAxios
        .get(`clubs?collegeIds=${collegeIds}`)
        .then((response) => {
          setClubData(response.data.data);
        })
        .catch((error) => {
          console.error("에러: ", error);
        });
    } else {
      customAxios
        .get(`clubs/all`)
        .then((response) => {
          setClubData(response.data.data);
        })
        .catch((error) => {
          console.error("에러: ", error);
        });
    }
  }, [ids]);
  useEffect(() => {
    let newDivision: string[] = [];
    if (divisions.length > 0) {
      divisions.map((division) => {
        if (division === 1) {
          newDivision.push("공연분과");
        } else if (division === 2) {
          newDivision.push("무예분과");
        } else if (division === 3) {
          newDivision.push("봉사분과");
        } else if (division === 4) {
          newDivision.push("전시분과");
        } else if (division === 5) {
          newDivision.push("종교분과");
        } else if (division === 6) {
          newDivision.push("체육분과");
        } else if (division === 7) {
          newDivision.push("학술분과");
        }
      });
    }
    setDivision(newDivision);
  }, [divisions]);
  useEffect(() => {
    const newClubData = [...clubData];
    let filteredClubs = [];
    if (division.length > 0) {
      filteredClubs = newClubData.filter((club) =>
        division.includes(club.division)
      );
    } else {
      filteredClubs = newClubData;
    }
    setSelectedClubs(filteredClubs);
    setCurrentPage(1);
  }, [clubData, division]);
  const printClub = useCallback(() => {
    return currentData.map((club, i) => {
      let recruit = "";
      if (club.recruitment === "true") {
        recruit = "모집 중";
      } else {
        recruit = "모집 X";
      }
      let department = club.division.replace("분과", "");
      return (
        <Club
          recruit={recruit}
          college={club.college}
          department={department}
          name={club.clubName}
          id={club.clubId.toString()}
          key={i}
        />
      );
    });
  }, [currentData]);
  return (
    <>
      <ClubTable>{printClub()}</ClubTable>
      {renderPagination()}
    </>
  );
};

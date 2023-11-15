//관리자 페이지 동아리 탭의 회원 관리 테이블
import { useCallback, useEffect, useState, useMemo } from "react";
import { AdminSearchBox } from "../AdminSearchBox/AdminSearchBox";
import { AdminClubSelector } from "../AdminClubSelector/AdminClubSelector";
import {
  PageTab,
  DisabledShiftButton,
  ShiftButton,
  ActiveNumberButton,
  NumberButton,
  Table,
  TableTitle,
  TitleRow,
  TableContent,
  TableRow,
  TableText,
  Container,
  ClubName,
} from "./AdminClubMemberManageTable.styled";
import { customAxios } from "@/Utils/customAxios";

//동아리 데이터 형식
interface DataRow {
  clubId: string;
  clubName: string;
  division: string;
  recruitment: string;
  college: string;
}
//선택된 동아리 정보
interface ParentProps {
  ParentClickedId: string;
}

export const AdminClubMemberManageTable = ({
  ParentClickedId,
}: ParentProps) => {
  const [data, setData] = useState<DataRow[]>([]);
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [searchOption, setSearchOption] = useState("ID");
  const [clickedId, setClickedId] = useState<string>();

  //table 페이지
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = useMemo(() => {
    const slicedData = data.slice(indexOfFirstItem, indexOfLastItem);
    const shortage = itemsPerPage - slicedData.length;

    // 부족한 수만큼의 데이터를 이전 페이지에서 가져옴.
    if (shortage > 0 && indexOfFirstItem > 0) {
      const additionalData = data.slice(
        indexOfFirstItem - shortage,
        indexOfFirstItem
      );
      return additionalData.concat(slicedData);
    }

    return slicedData;
  }, [data, indexOfFirstItem, indexOfLastItem, itemsPerPage]);
  const totalPages = Math.ceil(data.length / itemsPerPage);
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
        {currentPage >= totalPages ? (
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
  //여기까지 페이지 관리

  //클릭된 동아리 정보 get
  useEffect(() => {
    customAxios
      .get(`/clubs/${ParentClickedId}`)
      .then((response) => setData(response.data.data))
      .catch((error) => console.error("에러:", error));
  }, [ParentClickedId]);

  return (
    <Container>
      <ClubName>동아리 이름</ClubName>
      <Table>
        <TableTitle>
          <TitleRow>고유ID</TitleRow>
          <TitleRow>이름</TitleRow>
          <TitleRow>학과</TitleRow>
          <TitleRow>신청일</TitleRow>
          <TitleRow>상태</TitleRow>
        </TableTitle>
        <TableContent>
          {currentData.map((item, rowIndex) => (
            <TableRow key={rowIndex}>
              {Object.values(item).map((value, colIndex) => {
                if (colIndex < 4) {
                  // 만약 major가 빈 문자열이고 colIndex가 3 (major를 표시하는 열) 이면 college 값을 표시
                  if (colIndex === 3 && !value) {
                    value = item.college;
                  }
                  return (
                    <TableText key={colIndex} isId={colIndex === 0}>
                      {value}
                    </TableText>
                  );
                }
              })}
            </TableRow>
          ))}
        </TableContent>
        {renderPagination()}
      </Table>
    </Container>
  );
};

import { useCallback, useEffect, useState, useMemo } from "react";
import { AdminSearchBox } from "../AdminSearchBox/AdminSearchBox";
import { AdminSelector } from "../AdminSelector/AdminSelector";
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
  SearchLine,
  Container,
} from "./ClubManageTable.styled";

interface DataRow {
  id: string;
  name: string;
  admin: string;
  major: string;
  date: string;
  college: string;
}

interface ParentProps {
  ParentClickedId: (id: string) => void;
}

export const ClubManageTable = ({ ParentClickedId }: ParentProps) => {
  const [data, setData] = useState<DataRow[]>([]);
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [searchOption, setSearchOption] = useState("ID");
  const [clickedId, setClickedId] = useState<string>();

  const handleClicked = useCallback(
    (id: string) => {
      setClickedId(id);
      ParentClickedId(id);
    },
    [ParentClickedId]
  );
  const handleSearchClick = useCallback(() => {
    setSearchText(inputText);
    setCurrentPage(1);
  }, [inputText]);
  const handleOptionChange = useCallback((Option: string) => {
    setSearchOption(Option);
    setSearchText("");
  }, []);

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      if (!searchText) return true;

      let valueToSearch = "";
      switch (searchOption) {
        case "ID":
          valueToSearch = item.id;
          break;
        case "이름":
          valueToSearch = item.name;
          break;
        case "관리자":
          valueToSearch = item.admin;
          break;
        case "소속":
          valueToSearch = item.major ? item.major : item.college;
          break;
        case "신청일":
          valueToSearch = item.date;
          break;
        default:
          break;
      }

      return valueToSearch.toLowerCase().includes(searchText.toLowerCase());
    });
  }, [data, searchText, searchOption]);

  //table 페이지
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = useMemo(() => {
    const slicedData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const shortage = itemsPerPage - slicedData.length;

    // 부족한 수만큼의 데이터를 이전 페이지에서 가져옴.
    if (shortage > 0 && indexOfFirstItem > 0) {
      const additionalData = filteredData.slice(
        indexOfFirstItem - shortage,
        indexOfFirstItem
      );
      return additionalData.concat(slicedData);
    }

    return slicedData;
  }, [filteredData, indexOfFirstItem, indexOfLastItem, itemsPerPage]);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
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
        {currentPage === totalPages ? (
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
    import(`../../data/clubData2.json`)
      .then((data) => setData(data.default))
      .catch((error) => console.error("에러 발생:", error));
  }, []);

  return (
    <Container>
      <SearchLine>
        <AdminSelector onOptionChange={handleOptionChange} />
        <AdminSearchBox
          onSearchChange={setInputText}
          onSearchClick={handleSearchClick}
        />
      </SearchLine>
      <Table>
        <TableTitle>
          <TitleRow isId>고유ID</TitleRow>
          <TitleRow>동아리 이름</TitleRow>
          <TitleRow>관리자</TitleRow>
          <TitleRow>소속</TitleRow>
          <TitleRow>신청일</TitleRow>
        </TableTitle>
        <TableContent>
          {currentData.map((item, rowIndex) => (
            <TableRow
              key={rowIndex}
              onClick={() => handleClicked(item.id)}
              clicked={item.id === clickedId}
            >
              {Object.values(item).map((value, colIndex) => {
                if (colIndex < 5) {
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

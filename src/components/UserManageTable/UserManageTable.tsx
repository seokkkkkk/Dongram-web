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
} from "./UserManageTable.styled";
import { customAxios } from "@/Utils/customAxios";

interface DataRow {
  id: string;
  name: string;
  studentId: string;
  major: string;
  role: string;
}

interface ParentProps {
  ParentClickedId: (id: string) => void;
}

export const UserManageTable = ({ ParentClickedId }: ParentProps) => {
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
        case "학번":
          valueToSearch = item.studentId;
          break;
        case "학과":
          valueToSearch = item.major;
          break;
        case "권한":
          valueToSearch = item.role;
          break;
        default:
          break;
      }

      return valueToSearch
        .toString()
        .toLowerCase()
        .includes(searchText.toLowerCase());
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
    customAxios
      .get("/admin/members/all")
      .then((response) => {
        setData(response.data.data), handleClicked(response.data.data[0].id);
      })
      .catch((error) => console.error("에러:", error));
  }, [handleClicked]);

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
          <TitleRow>이름</TitleRow>
          <TitleRow>학번</TitleRow>
          <TitleRow>학과</TitleRow>
          <TitleRow>권한</TitleRow>
        </TableTitle>
        <TableContent>
          {currentData.map((item, rowIndex) => (
            <TableRow
              key={rowIndex}
              onClick={() => handleClicked(item.id)}
              clicked={item.id === clickedId}
            >
              {Object.values(item).map((value, colIndex) => (
                <TableText key={colIndex} isId={colIndex === 0}>
                  {value}
                </TableText>
              ))}
            </TableRow>
          ))}
        </TableContent>
        {renderPagination()}
      </Table>
    </Container>
  );
};

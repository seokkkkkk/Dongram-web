//관리자 페이지 검색 박슨
import search_icon from "@public/adminSearch.svg";
import { SearchBox, SearchImage, SearchInput } from "./AdminSearchBox.styled";
import React, { useCallback, useState } from "react";

interface AdminSearchBoxProps {
  onSearchChange: (value: string) => void;
  onSearchClick: () => void;
}

export const AdminSearchBox = ({
  onSearchChange,
  onSearchClick,
}: AdminSearchBoxProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      onSearchChange(e.target.value);
    },
    [onSearchChange]
  );
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearchClick();
    }
  };
  return (
    <SearchBox>
      <SearchImage
        src={search_icon}
        alt="search-icon"
        onClick={onSearchClick}
      />
      <SearchInput
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </SearchBox>
  );
};

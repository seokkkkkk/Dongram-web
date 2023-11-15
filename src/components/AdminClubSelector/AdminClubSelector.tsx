//관리자 페이지 동아리 탭의 검색 옵션 박스
import { useCallback, useState } from "react";
import filter from "@public/filter.svg";
import {
  SelectBox,
  SelectedBox,
  FilterImage,
  Selected,
  Options,
  Option,
} from "./AdminSelector.styled";

interface AdminSelectorProps {
  onOptionChange: (Option: string) => void;
}

export const AdminClubSelector = ({ onOptionChange }: AdminSelectorProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const BoxClick = useCallback(() => {
    setShowOptions((prev) => !prev);
  }, []);
  const [selectedOption, setSelectedOption] = useState("ID");

  const handleSetSelectedOption = useCallback(
    (e: React.MouseEvent) => {
      const { innerText } = e.target as HTMLElement;
      setSelectedOption(innerText);
      onOptionChange(innerText);
    },
    [onOptionChange]
  );

  return (
    <SelectBox show={showOptions} onClick={BoxClick}>
      <SelectedBox>
        <FilterImage src={filter} alt="filter" />
        <Selected>{selectedOption}</Selected>
      </SelectedBox>
      <Options show={showOptions}>
        <Option onClick={handleSetSelectedOption}>ID</Option>
        <Option onClick={handleSetSelectedOption}>소속</Option>
        <Option onClick={handleSetSelectedOption}>분과</Option>
        <Option onClick={handleSetSelectedOption}>이름</Option>
      </Options>
    </SelectBox>
  );
};

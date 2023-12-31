//관리자 페이지 유저탭의 선택 상자
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

export const AdminSelector = ({ onOptionChange }: AdminSelectorProps) => {
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
        <Option onClick={handleSetSelectedOption}>이름</Option>
        <Option onClick={handleSetSelectedOption}>학번</Option>
        <Option onClick={handleSetSelectedOption}>학과</Option>
        <Option onClick={handleSetSelectedOption}>권한</Option>
      </Options>
    </SelectBox>
  );
};

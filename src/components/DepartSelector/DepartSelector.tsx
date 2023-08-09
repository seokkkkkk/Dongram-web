import { useState, useCallback, useEffect } from "react";
import under from "@public/under2.svg";
import {
  SelectBox,
  SelectedBox,
  FilterImage,
  Children,
  Options,
  Option,
} from "./DepartSelector.styled";

interface DepartSelectorProps {
  children: React.ReactNode;
}

export const DepartSelector = ({ children }: DepartSelectorProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const BoxClick = useCallback(() => {
    setShowOptions((prev) => !prev);
  }, []);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSetSelectedOption = useCallback((e: React.MouseEvent) => {
    const { innerText } = e.target as HTMLElement;
    setSelectedOption(innerText);
  }, []);

  return (
    <SelectBox show={showOptions} onClick={BoxClick}>
      <SelectedBox>
        <Children>{children}</Children>
        <FilterImage src={under} alt="filter" />
      </SelectedBox>
      <Options show={showOptions}>
        <Option onClick={handleSetSelectedOption}>옵션 추가</Option>
      </Options>
    </SelectBox>
  );
};

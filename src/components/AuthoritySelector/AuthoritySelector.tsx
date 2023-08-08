import { useState, useCallback } from "react";
import under from "@public/under.svg";
import {
  SelectBox,
  SelectedBox,
  FilterImage,
  Selected,
  Options,
  Option,
} from "./AuthoritySelector.styled";

export const AuthoritySelector = () => {
  const [showOptions, setShowOptions] = useState(false);
  const BoxClick = useCallback(() => {
    setShowOptions((prev) => !prev);
  }, []);
  const [selectedOption, setSelectedOption] = useState("USER");

  const handleSetSelectedOption = useCallback((e: React.MouseEvent) => {
    const { innerText } = e.target as HTMLElement;
    setSelectedOption(innerText);
  }, []);

  return (
    <SelectBox show={showOptions} onClick={BoxClick}>
      <SelectedBox>
        <FilterImage src={under} alt="filter" />
        <Selected>{selectedOption}</Selected>
      </SelectedBox>
      <Options show={showOptions}>
        <Option onClick={handleSetSelectedOption}>USER</Option>
        <Option onClick={handleSetSelectedOption}>ADMIN</Option>
      </Options>
    </SelectBox>
  );
};

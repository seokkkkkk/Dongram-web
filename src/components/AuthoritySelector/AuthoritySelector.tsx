import { useState, useCallback, useEffect } from "react";
import under from "@public/under.svg";
import {
  SelectBox,
  SelectedBox,
  FilterImage,
  Selected,
  Options,
  Option,
} from "./AuthoritySelector.styled";

interface ParentProps {
  Authority: string;
  onAuthorityChange: (changedAuthority: string) => void;
}

export const AuthoritySelector = ({
  Authority,
  onAuthorityChange,
}: ParentProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const BoxClick = useCallback(() => {
    setShowOptions((prev) => !prev);
  }, []);
  const [selectedOption, setSelectedOption] = useState(Authority);

  useEffect(() => {
    setSelectedOption(Authority);
  }, [Authority]);

  const handleSetSelectedOption = useCallback(
    (e: React.MouseEvent) => {
      const { innerText } = e.target as HTMLElement;
      setSelectedOption(innerText);
      onAuthorityChange(innerText);
    },
    [onAuthorityChange]
  );

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

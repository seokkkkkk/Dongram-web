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
  authority: string;
  onAuthorityChange: (authority: string) => void;
}

export const AuthoritySelector = ({
  authority,
  onAuthorityChange,
}: ParentProps) => {
  const [auth, setAuth] = useState(authority);
  const [showOptions, setShowOptions] = useState(false);
  const BoxClick = useCallback(() => {
    setShowOptions((prev) => !prev);
  }, []);

  useEffect(() => {
    setAuth(authority);
  }, [authority]);

  const handleSetSelectedOption = useCallback(
    (e: React.MouseEvent) => {
      const { innerText } = e.target as HTMLElement;
      setAuth(`ROLE_${innerText}`);
      onAuthorityChange(innerText);
    },
    [onAuthorityChange]
  );

  return (
    <SelectBox show={showOptions}>
      <SelectedBox>
        <FilterImage src={under} alt="filter" onClick={BoxClick} />
        <Selected>{auth}</Selected>
      </SelectedBox>
      <Options show={showOptions} onClick={BoxClick}>
        <Option onClick={handleSetSelectedOption}>USER</Option>
        <Option onClick={handleSetSelectedOption}>ADMIN</Option>
      </Options>
    </SelectBox>
  );
};

import { useCallback, useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import filter from "@public/filter.svg";

interface OptionShow {
  show: boolean;
}
const SelectBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 7.9rem;
  height: 3.4rem;
  padding: 1.2rem 1.6rem;
  background: #f2f4f8;
  border-radius: 0.6rem;
  border-bottom: 1px solid #c1c7cd;
  cursor: pointer;
`;
const Selected = styled.label`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 140%;
  white-space: nowrap;
`;
const Options = styled.ul<OptionShow>`
  position: absolute;
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 11rem;
  overflow: hidden;
  z-index: -1;
  top: 3.4rem;
  left: 0;
  background: #f2f4f8;
  border-radius: 0.6rem;
  border-bottom: ${(props) => (props.show ? "1px solid #c1c7cd" : "none")};
  max-height: ${(props) => (props.show ? "none" : "0")};
`;
const Option = styled.li`
  display: flex;
  align-items: center;
  padding-left: 0.8rem;
  width: 100%;
  height: 2.5rem;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 110%;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #e0e5eb;
  }
`;
const FilterImage = styled(Image)`
  width: 1.4rem;
  height: 1.1rem;
  margin-right: 0.5rem;
`;
const SelectedBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: -0.5rem;
`;

export const AdminSelector = () => {
  const [showOptions, setShowOptions] = useState(false);
  const BoxClick = useCallback(() => {
    setShowOptions((prev) => !prev);
  }, []);
  const [selectedOption, setSelectedOption] = useState("ID");

  const handleSetSelectedOption = useCallback((e: React.MouseEvent) => {
    const { innerText } = e.target as HTMLElement;
    setSelectedOption(innerText);
  }, []);

  return (
    <SelectBox onClick={BoxClick}>
      <SelectedBox>
        <FilterImage src={filter} alt="filter" />
        <Selected>{selectedOption}</Selected>
      </SelectedBox>
      <Options show={showOptions}>
        <Option onClick={handleSetSelectedOption}>ID</Option>
        <Option onClick={handleSetSelectedOption}>단과대</Option>
        <Option onClick={handleSetSelectedOption}>학과</Option>
        <Option onClick={handleSetSelectedOption}>권한</Option>
      </Options>
    </SelectBox>
  );
};

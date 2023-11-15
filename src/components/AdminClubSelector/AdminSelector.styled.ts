import Image from "next/image";
import styled from "@emotion/styled";

interface OptionShow {
  show: boolean;
}
export const SelectBox = styled.div<OptionShow>`
  display: flex;
  align-items: center;
  position: relative;
  width: 7.9rem;
  height: 3.4rem;
  padding: 1.2rem 1.6rem;
  background: ${(props) => (props.show ? "#e0e5eb" : "#f2f4f8")};
  border-radius: 0.6rem;
  border-bottom: 1px solid #c1c7cd;
  cursor: pointer;
  &:hover {
    box-shadow: 0.1rem 0.1rem 0.3rem 0.1rem #dadce0 inset;
  }
  &:active {
    box-shadow: 0.2rem 0.2rem 0.3rem 0.2rem #dadce0 inset;
  }
`;
export const Selected = styled.label`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 140%;
  white-space: nowrap;
`;
export const Options = styled.ul<OptionShow>`
  position: absolute;
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 10.1rem;
  overflow: hidden;
  top: 3.9rem;
  left: 0;
  background: #f2f4f8;
  border-radius: 0.6rem;
  border-bottom: ${(props) => (props.show ? "1px solid #c1c7cd" : "none")};
  max-height: ${(props) => (props.show ? "none" : "0")};
  margin-top: -0.5rem;
`;
export const Option = styled.li`
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
export const FilterImage = styled(Image)`
  width: 1.4rem;
  height: 1.1rem;
  margin-right: 0.5rem;
`;
export const SelectedBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: -0.5rem;
`;

import Image from "next/image";
import styled from "@emotion/styled";

interface OptionShow {
  show: boolean;
}
export const SelectBox = styled.div<OptionShow>`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  position: relative;
  width: 11.7rem;
  height: 4.8rem;
  padding: 1.2rem 1.6rem;
  background: ${(props) => (props.show ? "#e0e5eb" : "#f2f4f8")};
  border-radius: 0.6rem;
  border-bottom: 1px solid #c1c7cd;
  cursor: pointer;
`;
export const Selected = styled.label`
  font-size: 1.6rem;
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
  height: 9.6rem;
  overflow: hidden;
  top: 5.4rem;
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
  height: 4.8rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 110%;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #e0e5eb;
  }
`;
export const FilterImage = styled(Image)`
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 0.5rem;
`;
export const SelectedBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: -0.5rem;
`;

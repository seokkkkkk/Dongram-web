import styled from "@emotion/styled";

interface props {
  clicked?: boolean;
}

export const Container = styled.div<props>`
  background-color: ${(props) => (props.clicked ? "#0090F9" : "#f2f4f8")};
  color: ${(props) => (props.clicked ? "#FFFFFF" : "")};
  backdrop-blur: 0.2rem;
  display: inline-flex;
  justify-content: center;
  place-items: center;
  height: 1.8rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border-radius: 1.2rem;
  margin-left: 0.4rem;
  margin-top: 0.4rem;
  cursor: pointer; /* Optional: changes cursor to pointer on hover */
`;

export const Text = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 140%;
`;

import styled from "@emotion/styled";

export const PageContainer = styled.div`
  display: flex;
  margin-left: 1.8rem;
`;
export const LoginButtonCss = styled.button`
  border-radius: 2.5rem;
  border: 1px solid #c1c7cd;
  width: 11.3rem;
  height: 5.2rem;
  font-size: 2rem;
  font-weight: 500;
  &:hover {
    box-shadow: 0.1rem 0.1rem 0.3rem 0.1rem #dadce0 inset;
  }
  &:active {
    box-shadow: 0.2rem 0.2rem 0.3rem 0.2rem #dadce0 inset;
  }
`;
export const PasswordButtonCss = styled.button`
  border-radius: 2.5rem;
  background-color: #0090f9;
  color: white;
  width: 11.3rem;
  height: 5.2rem;
  font-size: 2rem;
  font-weight: 500;
  margin-left: 1.1rem;
  &:hover {
    box-shadow: 0.1rem 0.1rem 0.3rem 0.1rem #0076d7 inset;
  }
  &:active {
    box-shadow: 0.2rem 0.2rem 0.3rem 0.2rem #0076d7 inset;
  }
`;

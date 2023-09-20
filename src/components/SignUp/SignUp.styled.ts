import styled from "@emotion/styled";

export const PageContainer = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: default;
`;
export const PageTextAlign = styled.div`
  text-align: center;
`;
export const BackGroundColor = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #9ca3af;
  opacity: 0.75;
`;
export const SignUpSpanCss = styled.span`
  display: inline-block;
  vertical-align: middle;
  height: 100vh;
`;
export const SignUpModal = styled.div`
  display: inline-block;
  background-color: #ffffff;
  border-radius: 2.5rem;
  text-align: left;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
  transform: translate(0%, 0%);
  vertical-align: middle;
  width: 60rem;
  height: 90rem;
`;
export const SignUpText = styled.div`
  color: #697077;
  font-size: 6.4rem;
  font-weight: 700;
  margin-top: 4.6rem;
  margin-bottom: 3.5rem;
  text-align: center;
`;
export const AlreadyHaveAccount = styled.div`
  text-align: right;
  margin-right: 3.7rem;
  color: #001d6c;
  font-size: 1.4rem;
  line-height: 140%;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 52rem;
  height: 4.8rem;
  background-color: #0090f9;
  margin-top: 4rem;
  margin-left: 4rem;
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
`;

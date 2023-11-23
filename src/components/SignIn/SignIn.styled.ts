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
export const LoginTextAlign = styled.div`
  text-align: center;
`;
export const SignInOnclick = styled.div`
  position: absolute;
  inset: 0;
  background-color: #9ca3af;
  opacity: 0.75;
`;
export const LoginSpanCss = styled.span`
  display: inline-block;
  vertical-align: middle;
  height: 80vh;
`;
export const LoginModal = styled.div`
  display: inline-block;
  background-color: #ffffff;
  border-radius: 1.5rem;
  text-align: left;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.2);
  transform: translate(-0%, -0%);
  vertical-align: middle;
  width: 60rem;
  height: 45rem;
`;
export const LoginText = styled.div`
  color: #697077;
  font-size: 6.4rem;
  font-weight: 700;
  margin-top: 4.6rem;
  margin-bottom: 3.5rem;
  text-align: center;
`;
export const LoginPasswordContainer = styled.div`
  display: flex;
  margin-left: 4rem;
  justify-content: space-between;
  margin-top: -1.5rem;
  margin-bottom: 2rem;
  color: #001d6c;
  font-size: 1.4rem;
  line-height: 140%;
  text-align: right;
`;
export const ForgetPassword = styled.div`
  margin-right: 3.7rem;
  cursor: pointer;
`;

export const SignUpText = styled(ForgetPassword)``;

export const LoginButton = styled.button`
  width: 52rem;
  height: 4.8rem;
  background-color: #0090f9;
  margin-left: 4rem;
  color: white;
  font-size: 2rem;
  font-weight: 600;
  &:hover {
    box-shadow: 0.2rem 0.2rem 0.4rem 0.2rem #0076d7 inset;
  }
  &:active {
    box-shadow: 0.3rem 0.3rem 0.5rem 0.3rem #0076d7 inset;
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 10;
  inset: 0;
  cursor: default;
`;
export const CenterRow = styled.div`
  text-align: center;
`;
export const CenterCol = styled.span`
  display: inline-block;
  vertical-align: middle;
  height: 80vh;
`;
export const Background = styled.div`
  position: absolute;
  inset: 0;
  background-color: #6b7280;
  opacity: 0.75;
`;
export const Box = styled.div``;

//styled완료
import { useState } from "react";
import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";
import styled from "@emotion/styled";

const PageContainer = styled.div`
  display: flex;
  margin-left: 1.8rem;
`;
const LoginButtonCss = styled.button`
  border-radius: 2.5rem;
  border: 1px solid #c1c7cd;
  width: 11.3rem;
  height: 5.2rem;
  font-size: 2rem;
  font-weight: 500;
`;
const PasswordButtonCss = styled.button`
  border-radius: 2.5rem;
  background-color: #0090f9;
  color: white;
  width: 11.3rem;
  height: 5.2rem;
  font-size: 2rem;
  font-weight: 500;
  margin-left: 1.1rem;
`;

export function LoginButton() {
  const [signInModal, setSignInModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const toggleSignUp = () => setSignUpModal(!signUpModal);
  const toggleSignIn = () => setSignInModal(!signInModal);
  const toggleAll = () => {
    toggleSignUp();
    toggleSignIn();
  };

  return (
    <>
      <PageContainer>
        <LoginButtonCss onClick={() => setSignInModal(!signInModal)}>
          로그인
        </LoginButtonCss>
        <PasswordButtonCss onClick={() => setSignUpModal(!signUpModal)}>
          회원가입
        </PasswordButtonCss>
      </PageContainer>
      <SignUp
        signUpModal={signUpModal}
        toggleSignUp={toggleSignUp}
        toggleSignIn={toggleAll}
      />
      <SignIn
        signInModal={signInModal}
        toggleSignUp={toggleAll}
        toggleSignIn={toggleSignIn}
      />
    </>
  );
}

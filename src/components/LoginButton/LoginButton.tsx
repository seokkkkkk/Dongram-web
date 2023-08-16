import { useState, Dispatch, SetStateAction } from "react";
import { SignUp } from "@components/SignUp/SignUp";
import { SignIn } from "@components/SignIn/SignIn";
import {
  PageContainer,
  LoginButtonCss,
  PasswordButtonCss,
} from "./LoginButton.styled";

interface Login {
  LoginControl: Dispatch<SetStateAction<boolean>>;
}

export function LoginButton({ LoginControl }: Login) {
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
        LoginControl={LoginControl}
      />
    </>
  );
}

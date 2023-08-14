import { InputLarge } from "@components/InputLarge/InputLarge";
import { Password } from "@components/InputLargeWithShowOption/InputLargeWithShowOption";
import { useState, useCallback } from "react";
import { customAxios } from "@/Utils/customAxios";
import { setCookie } from "@/Utils/customAxios";
import {
  PageContainer,
  LoginTextAlign,
  SignInOnclick,
  LoginSpanCss,
  LoginModal,
  LoginText,
  LoginPasswordContainer,
  ForgetPassword,
  SignUpText,
  LoginButton,
} from "./SignIn.styled";

interface Modal {
  signInModal: boolean;
  toggleSignUp: () => void;
  toggleSignIn: () => void;
}

export function SignIn({ signInModal, toggleSignUp, toggleSignIn }: Modal) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onSubmit = useCallback(() => {
    const formData = {
      studentId: id,
      password: pw,
    };
    customAxios //api post 예시
      .post("http://13.125.162.181:8080/login", formData)
      .then((res) => {
        console.log(res.data);
        const Token = res.data.data;
        customAxios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${Token.accessToken}`;
        localStorage.setItem("accessToken", Token.accessToken);
        setCookie("refreshToken", Token.refreshToken);
        toggleSignIn();
      })
      .catch((error) => {
        alert("저장 실패");
      });
  }, [id, pw, toggleSignIn]);

  return signInModal ? (
    <PageContainer>
      <LoginTextAlign>
        <SignInOnclick onClick={toggleSignIn} />
        <LoginSpanCss />

        <LoginModal>
          <LoginText>로그인</LoginText>
          <InputLarge
            text="아이디"
            placeholder="학번"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setId(e.target.value);
            }}
          />
          <form>
            <Password
              text="비밀번호"
              placeholder="비밀번호"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPw(e.target.value);
              }}
            />
          </form>
          <LoginPasswordContainer>
            <ForgetPassword onClick={toggleSignIn}>
              비밀번호를 잊으셨나요?
            </ForgetPassword>
            <SignUpText onClick={toggleSignUp}>회원가입</SignUpText>
          </LoginPasswordContainer>
          <LoginButton onClick={onSubmit}>로그인</LoginButton>
        </LoginModal>
      </LoginTextAlign>
    </PageContainer>
  ) : null;
}

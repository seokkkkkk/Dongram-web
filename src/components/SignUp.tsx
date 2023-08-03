//styled완료
import { useState } from "react";
import { InputLarge } from "./InputLarge";
import { InputSmall } from "./InputSmall";
import { MajorSelector } from "./MajorSelector";
import { Password } from "./Password";
import axios from "axios";
import styled from "@emotion/styled";

const PageContainer = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: default;
`;
const PageTextAlign = styled.div`
  text-align: center;
`;
const BackGroundColor = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #9ca3af;
  opacity: 0.75;
`;
const SignUpSpanCss = styled.span`
  display: inline-block;
  vertical-align: middle;
  height: 100vh;
`;
const SignUpModal = styled.div`
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
const SignUpText = styled.div`
  color: #697077;
  font-size: 6.4rem;
  font-weight: 700;
  margin-top: 4.6rem;
  margin-bottom: 3.5rem;
  text-align: center;
`;
const AlreadyHaveAccount = styled.div`
  text-align: right;
  margin-right: 3.7rem;
  color: #001d6c;
  font-size: 1.4rem;
  line-height: 140%;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  width: 52rem;
  height: 4.8rem;
  background-color: #0090f9;
  margin-left: 4rem;
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
`;

interface Modal {
  signUpModal: boolean;
  toggleSignUp: () => void;
  toggleSignIn: () => void;
}

export function SignUp({ signUpModal, toggleSignUp, toggleSignIn }: Modal) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [col1, setCol1] = useState<string | null>(null);
  const [col2, setCol2] = useState<string | null>(null);
  const [major1, setMajor1] = useState<string | null>(null);
  const [major2, setMajor2] = useState<string | null>(null);

  const onSubmit = useCallback(() => {
    const formData = {
      studentId: id,
      name: name,
      password: password,
      checkPassword: checkPassword,
      college1: col1,
      college2: col2,
      major1: major1,
      major2: major2,
    };

    axios //api post 예시
      .post("http://52.79.111.78:8080/join", formData)
      .then((res) => {
        console.log("저장 완료");
        toggleSignUp();
      })
      .catch((error) => {
        console.log("저장 실패");
        console.log(error);
      });
  }, [
    id,
    name,
    password,
    checkPassword,
    col1,
    col2,
    major1,
    major2,
    toggleSignUp,
  ]);
  return signUpModal ? (
    <PageContainer>
      <PageTextAlign>
        <BackGroundColor onClick={toggleSignUp} />
        <SignUpSpanCss />
        <SignUpModal>
          <SignUpText>회원가입</SignUpText>
          <AlreadyHaveAccount>이미 계정을 소유하고 있나요?</AlreadyHaveAccount>
          <form>
            <InputLarge
              text="아이디*"
              placeholder="학번"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setId(e.target.value);
              }}
            />
            <Password
              password={password}
              setPassword={setPassword}
              confirmPassword={checkPassword}
              setConfirmPassword={setCheckPassword}
            />
            <InputSmall
              text="이름*"
              placeholder="이름"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setName(e.target.value);
              }}
            />
            <MajorSelector
              filePath="major"
              first={true}
              college={col1}
              setCollege={setCol1}
              major={major1}
              setMajor={setMajor1}
            />
            <MajorSelector
              filePath="major"
              first={false}
              college={col2}
              setCollege={setCol2}
              major={major2}
              setMajor={setMajor2}
            />
            <SubmitButton type="submit" onClick={onSubmit}>
              회원가입
            </SubmitButton>
          </form>
        </SignUpModal>
      </PageTextAlign>
    </PageContainer>
  ) : null;
}

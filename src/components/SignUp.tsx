import { useState, useCallback } from "react";
import { InputLarge } from "./InputLarge";
import { InputSmall } from "./InputSmall";
import { MajorSelector } from "./MajorSelector";
import { Password } from "./Password";
import axios from "axios";

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
    <div className="fixed z-10 inset-0 cursor-default">
      <div className="text-center">
        <div
          className="absolute inset-0 bg-gray-500 opacity-75 "
          onClick={toggleSignUp}
        />
        <span className="inline-block align-middle h-screen" />
        <div className="inline-block bg-white rounded-xl text-left shadow-xl transform align-middle w-[60rem] h-[85rem]">
          <div className="text-[#697077] text-[6.4rem] font-[700] mt-[4.6rem] mb-[3.5rem] text-center">
            회원가입
          </div>
          <div
            className="text-right mr-[3.7rem] text-[#001D6C] text-[1.4rem] leading-[140%] cursor-pointer"
            onClick={toggleSignIn}
          >
            이미 계정을 소유하고 있나요?
          </div>
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
            <button
              type="button"
              onClick={onSubmit}
              className="w-[52rem] h-[4.8rem] bg-[#0090F9] ml-[4rem] text-white text-[2rem] font-[600]"
            >
              회원가입
            </button>
          </form>
        </div>
      </div>
    </div>
  ) : null;
}

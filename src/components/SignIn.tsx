import { InputLarge } from "./InputLarge";
import { Password } from "./InputLargeWithShowOption";
import { useState, useCallback } from "react";
import { setCookie } from "@/Utils/customAxios";
import axios from "axios";
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
    axios //api post 예시
      .post("http://52.79.111.78:8080/login", formData)
      .then((res) => {
        console.log(res.data);
        const Token = res.data.data;
        axios.defaults.headers.common[
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
    <div className="fixed z-10 inset-0 cursor-default">
      <div className="text-center">
        <div
          className="absolute inset-0 bg-gray-500 opacity-75 "
          onClick={toggleSignIn}
        />
        <span className="inline-block align-middle h-[80vh]" />
        <div className="inline-block bg-white rounded-xl text-left shadow-xl transform align-middle w-[60rem] h-[45rem]">
          <form>
            <div className="text-[#697077] text-[6.4rem] font-[700] mt-[4.6rem] mb-[3.5rem] text-center">
              로그인
            </div>
            <InputLarge
              text="아이디"
              placeholder="학번"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setId(e.target.value);
              }}
            />
            <Password
              text="비밀번호"
              placeholder="비밀번호"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPw(e.target.value);
              }}
            />
            <div className="flex ml-[4rem] justify-between mt-[-1.5rem] mb-[2rem] text-[#001D6C] text-[1.4rem] leading-[140%] text-right">
              <div
                className="mr-[3.7rem] cursor-pointer"
                onClick={toggleSignIn}
              >
                비밀번호를 잊으셨나요?
              </div>
              <div
                className=" mr-[3.7rem] cursor-pointer"
                onClick={toggleSignUp}
              >
                회원가입
              </div>
            </div>

            <button
              type="button"
              className="w-[52rem] h-[4.8rem] bg-[#0090F9] ml-[4rem] text-white text-[2rem] font-[600]"
              onClick={onSubmit}
            >
              로그인
            </button>
          </form>
        </div>
      </div>
    </div>
  ) : null;
}

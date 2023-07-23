import { useState } from "react";
import InputPassword from "./InputLargeForPassword";

interface Input {
  password: string;
  confirmPassword: string;
  setPassword: (value: string) => void;
  setConfirmPassword: (value: string) => void;
}

export default function Password({
  password,
  confirmPassword,
  setPassword,
  setConfirmPassword,
}: Input) {
  const Match = password === confirmPassword;

  return (
    <>
      <InputPassword
        text="비밀번호*"
        placeholder="비밀번호"
        onChange={setPassword}
      />
      <InputPassword
        text="비밀번호 확인*"
        placeholder="비밀번호 확인"
        onChange={setConfirmPassword}
      />
      <div
        className="ml-[4rem] text-red-500 mt-[-2.8rem] text-[0.8rem]"
        style={{ visibility: Match ? "hidden" : "visible" }}
      >
        비밀번호가 일치하지 않습니다.
      </div>
    </>
  );
}

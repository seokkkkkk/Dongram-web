import { useState } from "react";
import InputPassword from "./InputLargeWithShowOption";

export default function Password() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
      {!Match && (
        <div className="ml-[4rem] text-red-500 mt-[-2.8rem]">
          비밀번호가 일지하지 않습니다.
        </div>
      )}
    </>
  );
}

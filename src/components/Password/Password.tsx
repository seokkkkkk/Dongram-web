import { InputPassword } from "@components/InputLargeForPassword/InputLargeForPassword";
import { PasswordCorrect } from "./Password.styled";

interface Input {
  password: string;
  confirmPassword: string;
  setPassword: (value: string) => void;
  setConfirmPassword: (value: string) => void;
}

export function Password({
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
      <PasswordCorrect style={{ visibility: Match ? "hidden" : "visible" }}>
        비밀번호가 일치하지 않습니다.
      </PasswordCorrect>
    </>
  );
}

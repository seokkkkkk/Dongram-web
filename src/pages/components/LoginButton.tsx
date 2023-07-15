import { useState } from "react";
import SignUp from "./SignUp";

export default function LoginButton() {
  const [signInModal, setSignInModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  return (
    <>
      <div className="flex ml-[1.8rem]">
        <button
          onClick={() => setSignInModal(!signInModal)}
          className="rounded-[2.5rem] border-[1px] border-[#C1C7CD] w-[11.3rem] h-[5.2rem] text-[2rem] font-[500]"
        >
          로그인
        </button>
        <button
          onClick={() => setSignUpModal(!signUpModal)}
          className="rounded-[2.5rem] text-white bg-[#0090F9] w-[11.3rem] h-[5.2rem] text-[2rem] font-[500] ml-[1.1rem]"
        >
          회원가입
        </button>
      </div>
      <SignUp
        signUpModal={signUpModal}
        toggle={() => setSignUpModal(!signUpModal)}
      />
    </>
  );
}

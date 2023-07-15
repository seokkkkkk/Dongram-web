import Link from "next/link";
import InputLarge from "./InputLarge";
import InputSmall from "./InputSmall";
import MajorSelector from "./MajorSelector";
import Password from "./Password";

interface Modal {
  signUpModal: boolean;
  toggle: () => void;
}

export default function SignUpModal({ signUpModal, toggle }: Modal) {
  return signUpModal ? (
    <div className="fixed z-10 inset-0 ">
      <div className="text-center">
        <div
          className="absolute inset-0 bg-gray-500 opacity-75 "
          onClick={toggle}
        />
        <span className="inline-block align-middle h-screen" />
        <div className="inline-block bg-white rounded-xl text-left shadow-xl transform align-middle w-[60rem] h-[90rem]">
          <div className="text-[#697077] text-[6.4rem] font-[700] mt-[4.6rem] mb-[3.5rem] text-center">
            회원가입
          </div>
          <div className="text-right mr-[3.7rem] text-[#001D6C] text-[1.4rem] leading-[140%]">
            <Link href="/components/SignIn">이미 계정을 소유하고 있나요?</Link>
          </div>
          <InputLarge text="아이디*" placeholder="학번" />
          <Password />
          <InputSmall text="이름*" placeholder="이름" />
          <MajorSelector filePath="major" first={true} />
          <MajorSelector filePath="major" first={false} />
          <button
            onClick={toggle}
            className="w-[52rem] h-[4.8rem] bg-[#0090F9] ml-[4rem] text-white text-[2rem] font-[600]"
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

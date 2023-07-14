import Link from "next/link";
import InputLarge from "./InputLarge";
import InputPassword from "./InputLargeWithShowOption";
import InputSmall from "./InputSmall";
import DepartSelector from "./DepartSelector";

export default function SignUp() {
  return (
    <div className="bg-gray-300 h-[200rem] flex place-items-center place-content-center">
      <div className="w-[60rem] h-[91.2rem] bg-white rounded-[2rem] flex-inline">
        <div className="text-[#697077] text-[6.4rem] font-[700] mt-[4.6rem] mb-[3.5rem] text-center">
          회원가입
        </div>
        <div className="text-right mr-[3.7rem] text-[#001D6C] text-[1.4rem] leading-[140%]">
          <Link href="/components/SignIn">이미 계정을 소유하고 있나요?</Link>
        </div>
        <InputLarge text="아이디*" placeholder="학번" />
        <InputPassword text="비밀번호*" placeholder="비밀번호" />
        <InputPassword text="비밀번호 확인*" placeholder="비밀번호 확인" />
        <InputSmall text="이름*" placeholder="이름" />
        <DepartSelector text="앙녕" placeholder="앙녕" />
      </div>
    </div>
  );
}

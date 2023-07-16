import InputLarge from "./InputLarge";
import Password from "./InputLargeWithShowOption";
interface Modal {
  signInModal: boolean;
  toggleSignUp: () => void;
  toggleSignIn: () => void;
}

export default function SignInModal({
  signInModal,
  toggleSignUp,
  toggleSignIn,
}: Modal) {
  return signInModal ? (
    <div className="fixed z-10 inset-0 cursor-default">
      <div className="text-center">
        <div
          className="absolute inset-0 bg-gray-500 opacity-75 "
          onClick={toggleSignIn}
        />
        <span className="inline-block align-middle h-[80vh]" />
        <div className="inline-block bg-white rounded-xl text-left shadow-xl transform align-middle w-[60rem] h-[45rem]">
          <div className="text-[#697077] text-[6.4rem] font-[700] mt-[4.6rem] mb-[3.5rem] text-center">
            로그인
          </div>
          <InputLarge text="아이디" placeholder="학번" />
          <Password text="비밀번호" placeholder="비밀번호" />
          <div className="flex ml-[4rem] justify-between mt-[-1.5rem] mb-[2rem] text-[#001D6C] text-[1.4rem] leading-[140%] text-right">
            <div className="mr-[3.7rem] cursor-pointer" onClick={toggleSignIn}>
              비밀번호를 잊으셨나요?
            </div>
            <div className=" mr-[3.7rem] cursor-pointer" onClick={toggleSignUp}>
              회원가입
            </div>
          </div>

          <button
            onClick={toggleSignIn}
            className="w-[52rem] h-[4.8rem] bg-[#0090F9] ml-[4rem] text-white text-[2rem] font-[600]"
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

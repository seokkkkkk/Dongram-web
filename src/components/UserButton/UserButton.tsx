//Emotion 완료
import setting from "@public/setting.svg"; //벨사진 없다고 오류뜨길래 넣어놨음
import logout from "@public/logout.svg";
import user from "@public/user.svg";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { removeCookie } from "@/Utils/customAxios";
import { UserButtonContainer, ImageCss, ButtonCss } from "./UserButton.styled";

interface Login {
  LoginControl: Dispatch<SetStateAction<boolean>>;
}

export function UserButton({ LoginControl }: Login) {
  const Logout = () => {
    localStorage.removeItem("accessToken");
    removeCookie("refreshToken");
    LoginControl(false);
  };

  return (
    <UserButtonContainer>
      <button>
        <Link href={"/AdminManagement"}>
          <ImageCss src={setting} alt="bell" />
        </Link>
      </button>
      <ButtonCss>
        <Link href="/memberInfo">
          <button>
            <ImageCss src={user} alt="bell" />
          </button>
        </Link>
      </ButtonCss>
      <ButtonCss>
        <button onClick={Logout}>
          <ImageCss src={logout} alt="bell" />
        </button>
      </ButtonCss>
    </UserButtonContainer>
  );
}

//Emotion 완료
import bell from "@public/bell.svg"; //벨사진 없다고 오류뜨길래 넣어놨음
import setting from "@public/setting.svg";
import user from "@public/user.svg";
import Image from "next/image";
import styled from "@emotion/styled";
import Link from "next/link";
import { Logout } from "../Logout/Logout";
import { Dispatch, SetStateAction } from "react";
import { removeCookie } from "@/Utils/customAxios";
const UserButtonContainer = styled.div`
  margin-left: 6rem;
  display: flex;
`;
const ImageCss = styled(Image)`
  width: 3.6rem;
  height: 3.6rem;
`;
const SettingButtonCss = styled.div`
  margin-left: 2.7rem;
`;
const UserButtonCss = styled(SettingButtonCss)``; // 상속스타일 예시 ()안에는 컴포넌트
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
        <ImageCss src={bell} alt="bell" />
      </button>
      <SettingButtonCss>
        <button onClick={Logout}>
          <ImageCss src={setting} alt="bell" />
        </button>
      </SettingButtonCss>
      <UserButtonCss>
        <Link href="/memberInfo">
          <button>
            <ImageCss src={user} alt="bell" />
          </button>
        </Link>
      </UserButtonCss>
    </UserButtonContainer>
  );
}

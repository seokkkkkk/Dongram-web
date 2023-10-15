//Emotion 완료
import setting from "@public/setting.svg"; //벨사진 없다고 오류뜨길래 넣어놨음
import logout from "@public/logout.svg";
import user from "@public/user.svg";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { customAxios, removeCookie } from "@/Utils/customAxios";
import { UserButtonContainer, ImageCss, ButtonCss } from "./UserButton.styled";
import { useRouter } from "next/router";

interface Login {
  LoginControl: Dispatch<SetStateAction<boolean>>;
}

export function UserButton({ LoginControl }: Login) {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState<null | Boolean>(null);
  useEffect(() => {
    customAxios
      .get("/admin/members/all")
      .then(() => setIsAdmin(true))
      .catch(() => setIsAdmin(false));
  }, []);

  const Logout = () => {
    localStorage.removeItem("accessToken");
    removeCookie("refreshToken");
    router.reload();
  };

  return (
    <UserButtonContainer>
      {isAdmin ? (
        <button>
          <Link href={"/AdminManagement"}>
            <ImageCss src={setting} alt="bell" />
          </Link>
        </button>
      ) : (
        <></>
      )}
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

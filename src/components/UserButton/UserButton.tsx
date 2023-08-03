import bell from "@public/bell.svg";
import setting from "@public/setting.svg";
import user from "@public/user.svg";

import {
  UserButtonContainer,
  SettingButtonCss,
  ImageCss,
  UserButtonCss,
} from "./UserButton.styled";

export function UserButton() {
  return (
    <UserButtonContainer>
      <button>
        <ImageCss src={bell} alt="bell" />
      </button>
      <SettingButtonCss>
        <button>
          <ImageCss src={setting} alt="bell" />{" "}
        </button>
      </SettingButtonCss>
      <UserButtonCss>
        <button>
          <ImageCss src={user} alt="bell" />{" "}
        </button>
      </UserButtonCss>
    </UserButtonContainer>
  );
}

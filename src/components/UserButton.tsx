import bell from "@public/bell.svg";
import setting from "@public/setting.svg";
import user from "@public/user.svg";
import Image from "next/image";
import styled from "@emotion/styled";

export const UserButtonContainer = styled.div`
  margin-left: 6rem;
  display: flex;
`;

export function UserButton() {
  <div className="flex ml-[6rem]">
    <button>
      <Image src={bell} alt="bell" className="w-[3.6rem] h-[3.6rem]" />
    </button>
    <button className="ml-[2.7rem]">
      <Image src={setting} alt="bell" className="w-[3.6rem] h-[3.6rem]" />
    </button>
    <button className="ml-[2.7rem]">
      <Image src={user} alt="bell" className="w-[3.6rem] h-[3.6rem]" />
    </button>
  </div>;
}

//테스트

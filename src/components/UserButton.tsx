import bell from "@public/bell.svg";
import setting from "@public/setting.svg";
import user from "@public/user.svg";
import Image from "next/image";
import styled from "@emotion/styled";

const UserButtonContainer = styled.div`
  margin-left: 6rem;
  display: flex;
`;
const ImageCss = styled(Image)`
  width: 3.6rem;
  height: 3.6rem;
`;
const ButtonCss = styled.div`
  margin-left: 2.7rem;
`;
// const testButton = styled(ButtonCss)``; 상속스타일 예시 ()안에는 컴포넌트

export function UserButton() {
  return (
    <UserButtonContainer>
      <button>
        <Image src={bell} alt="bell" />
      </button>
      <ButtonCss>
        <button>
          <ImageCss src={setting} alt="bell" />{" "}
        </button>
      </ButtonCss>

      <button className="ml-[2.7rem]">
        <ImageCss src={user} alt="bell" />{" "}
      </button>
    </UserButtonContainer>
  );
}

//테스트

import { AuthoritySelector } from "../AuthoritySelector/AuthoritySelector";
import Image from "next/image";
import placeholder from "@public/placeholder.png";
import styled from "@emotion/styled";

const UserImage = styled(Image)`
  width: 19.6rem;
  height: 22.2rem;
`;
const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
`;
const Body = styled.div`
  margin-top: 6rem;
`;
const Text = styled.div`
  font-size: 1.8rem;
  line-height: 140%;
  margin-left: 0.5rem;
`;
const Value = styled(Text)`
  width: 52rem;
  height: 4.8rem;
  padding: 1.2rem 1.6rem;
  margin-left: 0rem;
  margin-bottom: 0.9rem;
  margin-top: 1.2rem;
  border-radius: 0.8rem;
  border-bottom: 1px solid #c1c7cd;
  background: #f2f4f8;
`;
const Clubs = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-top: 1.5rem;
  margin-bottom: 4rem;
`;
const ClubBox = styled.div`
  width: 7.6rem;
  border-radius: 0.5rem;
  background: #0090f9;
  color: white;
  font-size: 14px;
  text-align: center;
`;
const Delete = styled.button`
  width: 8.6rem;
  height: 2.9rem;
  border-radius: 0.3rem;
  border: 2px solid #fe2a2a;
  background: #fe2a2a;
  color: white;
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 0.05rem;
`;
const Buttons = styled.div`
  margin-top: 4.5rem;
  display: flex;
  align-items: end;
  justify-content: space-between;
`;
const CompleteButtons = styled.div``;
const Cancle = styled.button`
  width: 9.4rem;
  height: 4rem;
  border-radius: 0.5rem;
  border: 1px solid #dde1e6;
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 0.05rem;
`;
const Save = styled(Cancle)`
  margin-left: 1.3rem;
  border: 1px solid #0090f9;
  background: #0090f9;
  color: white;
`;

export const UserInfo = () => {
  return (
    <UserContainer>
      <UserImage src={placeholder} alt="userImage" />
      <Body>
        <Text>이름</Text>
        <Value>정윤석1</Value>
        <Text>학번</Text>
        <Value>20101290</Value>
        <Text>학과</Text>
        <Value>컴퓨터공학과</Value>
        <Text>소속 동아리</Text>
        <Clubs>
          <ClubBox>Tools</ClubBox>
          <ClubBox>STCE</ClubBox>
        </Clubs>
        <Text>권한</Text>
        <AuthoritySelector />
        <Buttons>
          <Delete>회원삭제</Delete>
          <CompleteButtons>
            <Cancle>취소</Cancle>
            <Save>저장</Save>
          </CompleteButtons>
        </Buttons>
      </Body>
    </UserContainer>
  );
};

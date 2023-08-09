import { AuthoritySelector } from "../AuthoritySelector/AuthoritySelector";
import { DepartSelector } from "../DepartSelector/DepartSelector";
import placeholder from "@public/placeholder.png";
import x from "@public/x.svg";
import { useEffect, useState } from "react";
import {
  UserContainer,
  UserImage,
  Body,
  Text,
  Value,
  Clubs,
  ClubBox,
  Buttons,
  Delete,
  CompleteButtons,
  Cancle,
  Save,
} from "./UserInfo.styled";
import styled from "@emotion/styled";
import Image from "next/image";

interface DataRow {
  id: string;
  name: string;
  studentId: string;
  major: string;
  authority: string;
  major2: string;
  clubs: Club[];
}

interface Club {
  name: string;
}

interface ParentProps {
  ClickedId: string;
}

export const UserInfo = ({ ClickedId }: ParentProps) => {
  const [data, setData] = useState<DataRow[]>([]);
  const [user, setUser] = useState<DataRow>();

  useEffect(() => {
    import(`../../data/updated_dummy_users.json`)
      .then((data) => {
        setData(data.default);
        const selectedUser = data.default.find((data) => data.id === ClickedId);
        selectedUser === undefined
          ? setUser(data.default.find((data) => data.id === "1"))
          : setUser(selectedUser);
      })
      .catch((error) => console.error("에러 발생:", error));
  }, [ClickedId]);

  const handleAuthorityChange = (changedAuthority: string) => {
    if (user) {
      setUser({ ...user, authority: changedAuthority });
    }
  };

  const MajorBox = styled.div`
    padding: 0 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    text-overflow: ellipsis;
    border-radius: 0.5rem;
    background: #c1c7cd;
    font-size: 1.4rem;
    line-height: 140%;
  `;
  const Majors = styled(Value)`
    background: none;
    border: none;
    display: flex;
    gap: 1rem;
  `;
  const XImage = styled(Image)`
    width: 1.6rem;
    height: 1.6rem;
    cursor: pointer;
  `;

  return (
    <UserContainer>
      <UserImage src={placeholder} alt="userImage" />
      <Body>
        <Text>이름</Text>
        <Value>{user ? user.name : "로딩 중..."}</Value>
        <Text>학번</Text>
        <Value>{user ? user.studentId : "로딩 중..."}</Value>
        <Text>학과</Text>
        <Majors>
          <DepartSelector>
            <MajorBox>
              {user ? user.major : "로딩 중..."} <XImage src={x} alt="delete" />
            </MajorBox>
            <MajorBox>
              {user ? user.major2 : "로딩 중..."}{" "}
              <XImage src={x} alt="delete" />
            </MajorBox>
          </DepartSelector>
        </Majors>
        <Text>소속 동아리</Text>
        <Clubs>
          {user
            ? user.clubs.map((club, index) => (
                <ClubBox key={index}>{club.name}</ClubBox>
              ))
            : "로딩 중..."}
        </Clubs>
        <Text>권한</Text>
        <AuthoritySelector
          Authority={user ? user.authority : "로딩 중..."}
          onAuthorityChange={handleAuthorityChange}
        />
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

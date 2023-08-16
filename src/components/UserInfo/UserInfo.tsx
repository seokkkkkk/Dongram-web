import { AuthoritySelector } from "../AuthoritySelector/AuthoritySelector";
import { AdminMajorSelector } from "../AdminMajorSelector/AdminMajorSelector";
import placeholder from "@public/placeholder.png";
import React, { EventHandler, useCallback, useEffect, useState } from "react";
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
  Majors,
} from "./UserInfo.styled";
import { customAxios } from "@/Utils/customAxios";

interface DataRow {
  memberId: string;
  studentId: string;
  memberName: string;
  major1: string;
  role: string;
  major2: string;
  clubList: Club[];
}

interface Club {
  name: string;
}

interface ParentProps {
  ClickedId: string;
}

export const UserInfo = ({ ClickedId }: ParentProps) => {
  const [user, setUser] = useState<DataRow>();
  const [changedUser, setChangedUser] = useState<DataRow>();

  useEffect(() => {
    customAxios
      .get(`/admin/members/${ClickedId}`)
      .then((data) => {
        setUser(data.data), setChangedUser(data.data);
      })
      .catch((error) => {
        console.error("에러:", error);
      });
  }, [ClickedId]);

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const changedName = e.target.value;
      if (changedUser) {
        setChangedUser({ ...changedUser, memberName: changedName });
      }
    },
    [changedUser]
  );
  const handleStudentIdChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const changedStuendId = e.target.value;
      if (changedUser) {
        setChangedUser({ ...changedUser, studentId: changedStuendId });
      }
    },
    [changedUser]
  );
  const handleMajorChange = useCallback(
    (changedMajor: string) => {
      if (changedUser) {
        setChangedUser({ ...changedUser, major1: changedMajor });
      }
    },
    [changedUser]
  );
  const handleMajor2Change = useCallback(
    (changedMajor2: string) => {
      if (changedUser) {
        setChangedUser({ ...changedUser, major2: changedMajor2 });
      }
    },
    [changedUser]
  );
  const handleClubsChange = (changedClub: Club) => {
    if (changedUser) {
      const updatedclubList = [...changedUser.clubList, changedClub];
      setUser({ ...changedUser, clubList: updatedclubList });
    }
  };
  const handleAuthorityChange = useCallback(
    (changedAuthority: string) => {
      if (changedUser) {
        setChangedUser({ ...changedUser, role: changedAuthority });
      }
    },
    [changedUser]
  );
  const handelCancleClick = useCallback(() => {
    setChangedUser(user);
  }, [user]);
  const handleSaveClick = useCallback(() => {
    setUser(changedUser);
  }, [changedUser]);

  return (
    <UserContainer>
      <UserImage src={placeholder} alt="userImage" />
      <Body>
        <Text>이름</Text>
        <Value
          value={changedUser ? changedUser.memberName : "로딩 중..."}
          type="text"
          onChange={handleNameChange}
        />
        <Text>학번</Text>
        <Value
          value={changedUser ? changedUser.studentId : "로딩 중..."}
          type="text"
          onChange={handleStudentIdChange}
        />
        <Text>학과</Text>
        <Majors>
          <AdminMajorSelector
            major={changedUser ? changedUser.major1 : "로딩 중..."}
            major2={changedUser ? changedUser.major2 : ""}
            onMajorChange={handleMajorChange}
            onMajor2Change={handleMajor2Change}
          />
        </Majors>
        <Text>소속 동아리</Text>
        <Clubs>
          {changedUser
            ? changedUser.clubList.map((club, index) => (
                <ClubBox key={index}>{club.name}</ClubBox>
              ))
            : "로딩 중..."}
        </Clubs>
        <Text>권한</Text>
        <AuthoritySelector
          authority={changedUser ? changedUser.role : "로딩 중..."}
          onAuthorityChange={handleAuthorityChange}
        />
        <Buttons>
          <Delete>회원삭제</Delete>
          <CompleteButtons>
            <Cancle onClick={handelCancleClick}>취소</Cancle>
            <Save onClick={handleSaveClick}>저장</Save>
          </CompleteButtons>
        </Buttons>
      </Body>
    </UserContainer>
  );
};

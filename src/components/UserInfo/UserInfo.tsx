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
  const [changedUser, setChangedUser] = useState<DataRow>();

  useEffect(() => {
    import(`../../data/updated_dummy_users.json`)
      .then((data) => {
        setData(data.default);
        const selectedUser = data.default.find((data) => data.id === ClickedId);
        selectedUser
          ? (setUser(selectedUser), setChangedUser(selectedUser))
          : (setUser(data.default.find((data) => data.id === "1")),
            setChangedUser(data.default.find((data) => data.id === "1")));
      })
      .catch((error) => {
        console.error("에러 발생:", error);
      });
  }, [ClickedId]);

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const changedName = e.target.value;
      if (changedUser) {
        setChangedUser({ ...changedUser, name: changedName });
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
        setChangedUser({ ...changedUser, major: changedMajor });
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
      const updatedClubs = [...changedUser.clubs, changedClub];
      setUser({ ...changedUser, clubs: updatedClubs });
    }
  };
  const handleAuthorityChange = useCallback(
    (changedAuthority: string) => {
      if (changedUser) {
        setChangedUser({ ...changedUser, authority: changedAuthority });
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
          value={changedUser ? changedUser.name : "로딩 중..."}
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
            major={changedUser ? changedUser.major : "로딩 중..."}
            major2={changedUser ? changedUser.major2 : ""}
            onMajorChange={handleMajorChange}
            onMajor2Change={handleMajor2Change}
          />
        </Majors>
        <Text>소속 동아리</Text>
        <Clubs>
          {changedUser
            ? changedUser.clubs.map((club, index) => (
                <ClubBox key={index}>{club.name}</ClubBox>
              ))
            : "로딩 중..."}
        </Clubs>
        <Text>권한</Text>
        <AuthoritySelector
          authority={changedUser ? changedUser.authority : "로딩 중..."}
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

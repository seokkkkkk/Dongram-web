import { useEffect, useState, useCallback } from "react";
import placeholder from "@public/placeholder.png";
import {
  ClubContainer,
  ClubImage,
  ClubCol,
  Body,
  ClubRow,
  Text,
  Admin,
  Date,
  ClubRow2,
  Text2,
  ClubName,
  Value,
  CheckBox,
  RecruitDate,
  Introduction,
  Buttons,
  Delete,
  CompleteButtons,
  Cancle,
  Save,
} from "./ClubInfo.styled";

interface DataRow {
  id: string;
  name: string;
  admin: string;
  major: string;
  date: string;
  college: string;
  department: string;
  recruit: boolean;
  recruitDate: string;
  introduction: string;
}

interface ParentProps {
  ClickedId: string;
}

export const ClubInfo = ({ ClickedId }: ParentProps) => {
  const [data, setData] = useState<DataRow[]>([]);
  const [club, setClub] = useState<DataRow>();
  const [changedClub, setChangedClub] = useState<DataRow>();
  const [recruitDates, setRecruitDates] = useState<string[]>([]);

  const handleAdminChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const changedAdmin = e.target.value;
      if (changedClub) {
        setChangedClub({ ...changedClub, admin: changedAdmin });
      }
    },
    [changedClub]
  );
  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const changedName = e.target.value;
      if (changedClub) {
        setChangedClub({ ...changedClub, name: changedName });
      }
    },
    [changedClub]
  );
  const handleCollegeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const changedCollege = e.target.value;
      if (changedClub) {
        if (changedCollege === "중앙동아리") {
          setChangedClub({
            ...changedClub,
            major: "",
            college: changedCollege,
          });
        } else {
          setChangedClub({ ...changedClub, college: changedCollege });
        }
      }
    },
    [changedClub]
  );
  const handleMajorChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const changedMajor = e.target.value;
      if (changedClub) {
        setChangedClub({ ...changedClub, major: changedMajor });
      }
    },
    [changedClub]
  );
  const handleDepartChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const changedDepart = e.target.value;
      if (changedClub) {
        setChangedClub({ ...changedClub, department: changedDepart });
      }
    },
    [changedClub]
  );
  const handleIntroChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const changedIntro = e.target.value;
      if (changedClub) {
        setChangedClub({ ...changedClub, introduction: changedIntro });
      }
    },
    [changedClub]
  );
  const handleRecruitStartChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const changedDate = e.target.value;
      if (changedClub) {
        const newRecruitDates = [...recruitDates];
        newRecruitDates[0] = changedDate;
        setRecruitDates(newRecruitDates);
        const changedDates = recruitDates[0] + "~" + recruitDates[1];
        setChangedClub({ ...changedClub, recruitDate: changedDates });
      }
    },
    [changedClub, recruitDates]
  );
  const handleRecruitEndChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const changedDate = e.target.value;
      if (changedClub) {
        const newRecruitDates = [...recruitDates];
        newRecruitDates[1] = changedDate;
        setRecruitDates(newRecruitDates);
        const changedDates = recruitDates[0] + "~" + recruitDates[1];
        setChangedClub({ ...changedClub, recruitDate: changedDates });
      }
    },
    [changedClub, recruitDates]
  );
  const handleRecruitChange = useCallback(() => {
    if (changedClub) {
      if (changedClub.recruit === true) {
        changedClub.recruitDate === "";
        const newRecruitDates = ["", ""];
        setRecruitDates(newRecruitDates);
      }
      setChangedClub({ ...changedClub, recruit: !changedClub.recruit });
    }
  }, [changedClub]);
  const handelCancleClick = useCallback(() => {
    setChangedClub(club);
    const dates = club?.recruitDate.split("~") || [];
    if (dates.length === 1 && dates[0] === "") {
      dates.push("");
    }
    setRecruitDates(dates);
  }, [club]);
  const handleSaveClick = useCallback(() => {
    setClub(changedClub);
  }, [changedClub]);

  useEffect(() => {
    import(`../../data/clubData2.json`)
      .then((data) => {
        const clubs = data.default;
        setData(clubs);
        let selectedClub;
        if (ClickedId) {
          selectedClub = clubs.find((club) => club.id === ClickedId);
        } else {
          selectedClub = clubs.find((club) => club.id === "1");
        }
        setClub(selectedClub);
        setChangedClub(selectedClub);
        const dates = selectedClub?.recruitDate?.split("~") || [];
        if (dates.length === 1 && dates[0] === "") {
          dates.push("");
        }
        setRecruitDates(dates);
      })
      .catch((error) => {
        console.error("에러 발생:", error);
      });
  }, [ClickedId]);

  return (
    <ClubContainer>
      <ClubImage src={placeholder} alt="ClubImage" />
      <Body>
        <ClubCol>
          <ClubRow>
            <Text>관리자</Text>
            <Admin
              value={changedClub ? changedClub.admin : "로딩 중..."}
              type="text"
              onChange={handleAdminChange}
            />
          </ClubRow>
          <ClubRow>
            <Text>신청일</Text>
            <Date
              value={changedClub ? changedClub.date : "로딩 중..."}
              type="text"
              readOnly
            />
          </ClubRow>
        </ClubCol>
        <ClubRow2>
          <Text2>동아리명</Text2>
          <ClubName
            value={changedClub ? changedClub.name : "로딩 중..."}
            type="text"
            onChange={handleNameChange}
          />
        </ClubRow2>
        <ClubCol>
          <ClubRow2>
            <Text2>소속</Text2>
            <Value
              value={changedClub ? changedClub.college : "로딩 중..."}
              type="text"
              onChange={handleCollegeChange}
            />
          </ClubRow2>
          <ClubRow2>
            <Text2>전공</Text2>
            <Value
              value={changedClub ? changedClub.major : ""}
              type="text"
              onChange={handleMajorChange}
              disabled={changedClub?.college === "중앙동아리"}
            />
          </ClubRow2>
        </ClubCol>
        <ClubRow2>
          <Text2>분과</Text2>
          <Value
            value={changedClub ? changedClub.department : "로딩 중..."}
            type="text"
            onChange={handleDepartChange}
          />
        </ClubRow2>
        <ClubRow>
          <Text>모집여부</Text>
          <CheckBox
            type="checkbox"
            name="recruit"
            checked={changedClub?.recruit}
            onClick={handleRecruitChange}
          />
        </ClubRow>
        <ClubRow>
          <Text>모집기간</Text>
          <RecruitDate
            disabled={changedClub?.recruit === false}
            value={changedClub ? recruitDates[0] : "로딩 중..."}
            onChange={handleRecruitStartChange}
          />
          <Text>~</Text>
          <RecruitDate
            disabled={changedClub?.recruit === false}
            value={changedClub ? recruitDates[1] : "로딩 중..."}
            onChange={handleRecruitEndChange}
          />
        </ClubRow>
        <ClubRow2>
          <Text2>본문</Text2>
          <Introduction
            value={changedClub ? changedClub.introduction : "로딩 중..."}
            onChange={handleIntroChange}
          />
        </ClubRow2>
        <Buttons>
          <Delete>삭제</Delete>
          <CompleteButtons>
            <Cancle onClick={handelCancleClick}>취소</Cancle>
            <Save onClick={handleSaveClick}>저장</Save>
          </CompleteButtons>
        </Buttons>
      </Body>
    </ClubContainer>
  );
};

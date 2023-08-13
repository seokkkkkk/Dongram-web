//모집여부,모집기간, 본문 디자인 구현하고 각각 useState로 설정해서 data수정하게끔하고 formData에 실어서 보내기
import React from "react";
import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { CreateClubSelect } from "./CreateClubSelect";
import {
  ClubNameInput,
  ClubIntroductionInput,
  ButtonText,
  SaveButton,
  SelectContainer,
  DateFromToText,
  DateSelectBox,
  CheckBox,
  LabelText,
  Star,
  TextCss,
  CancelButton,
} from "./CreateClubBottomStyle";

export function CreateClubBottom() {
  const [clubNameInput, setClubNameInput] = useState(""); //input란
  const [clubIntroInput, setClubIntroInput] = useState(""); //input란 관리
  const [clubName, setClubName] = useState<string | null>(null); // 동아리 이름
  const [col, setCol] = useState<string | null>(null); // 중동 vs 과동
  const [maj, setMaj] = useState<string | null>(null); // 중동 -> 중동, 과동 -> 과 선택
  const [dep, setDep] = useState<string | null>(null); // 분과 선택
  const [onRecruit, setOnRecruit] = useState(false); // 모집중 여부 -> 초기값은 false
  const [recruitDateFrom, setRecruitDateFrom] = useState(""); //모집기간시작
  const [recruitDateTo, setRecruitDateTo] = useState(""); //모집기간끝
  const [recruitDate, setRecruitDate] = useState(""); //모집기간 시작과 끝을 연결한 총 기간
  const [clubIntroduction, setClubIntroduction] = useState(""); //동아리 소개 문구

  useEffect(() => {
    //날짜 잘못설정하면 빠꾸치게하기
    setRecruitDate(recruitDateFrom + " ~ " + recruitDateTo); //onClick에 두면 느려서 DateTo값이 읽히지 않음
    if (recruitDate === " ~ ") {
      setRecruitDate("");
    } // 기간을 설정 안했으면 기간을 공백으로 설정

    const startDate = new Date(recruitDateFrom);
    const endDate = new Date(recruitDateTo);
    if (startDate > endDate) {
      setRecruitDateFrom("");
      setRecruitDateTo("");
      setRecruitDate("");
      alert("날짜를 다시 확인해주세요");
    }
  }, [recruitDateTo]);

  const onDelete = () => {
    setClubIntroInput("");
    setClubNameInput("");
    setRecruitDateFrom("");
    setRecruitDateTo("");
    // 여기까지는 input란 지우기
    setClubName("");
    setCol(null);
    setMaj(null);
    setDep(null);
    setOnRecruit(false);
    setRecruitDate("");
    setClubIntroduction("");
  };

  const onSubmit = useCallback(() => {
    //데이터 전송함수, 마지막 버튼에 작용시키면 됨
    const formData = {
      clubName: clubName,
      college: col,
      major: maj,
      department: dep,
      onRecruit: onRecruit,
      recruitmentPeriod: recruitDate,
      clubIntroduction: clubIntroduction,
    };
    console.log({ clubName });
    console.log({ col });
    console.log({ maj });
    console.log({ dep });
    console.log({ onRecruit });
    console.log({ recruitDate });
    console.log({ clubIntroduction });
    // 객체가 잘 저장되었는지 확인해보기
    axios //api post 예시
      .post("", formData) //여기에 pst주소입력
      .then((res) => {
        console.log("저장 완료");
      })
      .catch((error) => {
        console.log("저장 실패");
        console.log(error);
      });
  }, [clubName, col, maj, dep, onRecruit, recruitDate, clubIntroduction]);

  return (
    <div>
      <TextCss>
        동아리 이름 <Star>*</Star>
      </TextCss>

      <ClubNameInput
        type="text"
        id="clubName"
        name="clubName"
        value={clubNameInput}
        onChange={(e) => {
          setClubNameInput(e.target.value);
          setClubName(e.target.value);
        }} //이렇게 value값 추출해서 axios로 보내면 됨
      />
      <SelectContainer>
        <CreateClubSelect
          filePath="createClub"
          first={true}
          college={col}
          setCollege={setCol}
          major={maj}
          setMajor={setMaj}
          dep={dep}
          setDep={setDep}
        />
      </SelectContainer>
      <LabelText>
        모집 여부:
        <CheckBox
          type="checkbox"
          checked={onRecruit} // 상태 값을 체크 박스에 반영
          onChange={(e) => setOnRecruit(e.target.checked)} // 체크 박스의 상태 변화를 처리하는 핸들러
        />
      </LabelText>
      <LabelText id="Period">
        모집 기간:
        <DateSelectBox
          type="text" // input 태그를 날짜 선택 모드로 설정
          id="recruitDateFrom"
          name="recruitDateFrom"
          value={recruitDateFrom}
          disabled={!onRecruit}
          onChange={(e) => setRecruitDateFrom(e.target.value)}
          placeholder="yy/mm/dd"
          onFocus={(e) => (e.target.type = "date")}
        />
      </LabelText>
      <DateFromToText>~</DateFromToText>
      <LabelText>
        <DateSelectBox
          type="text"
          id="recruitDateTo"
          name="recruitDateTo"
          value={recruitDateTo}
          disabled={!onRecruit}
          onChange={(e) => {
            setRecruitDateTo(e.target.value);
          }}
          placeholder="yy/mm/dd"
          onFocus={(e) => (e.target.type = "date")} // 클릭시 input 태그를 날짜 선택 모드로 설정
        />
      </LabelText>
      <TextCss id="Body">
        본문<Star>*</Star>
      </TextCss>
      <ClubIntroductionInput
        id="clubIntroduction"
        name="clubIntroduction"
        value={clubIntroInput}
        onChange={(e) => {
          setClubIntroduction(e.target.value);
          setClubIntroInput(e.target.value);
        }}
      />
      <div>
        <CancelButton>
          <ButtonText onClick={onDelete}>취소</ButtonText>
        </CancelButton>
        <SaveButton>
          <ButtonText onClick={onSubmit}>저장</ButtonText>
        </SaveButton>
      </div>
    </div>
  );
}

//sttyled 보류
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

interface InputData {
  filePath: string;
  first: boolean;
  college: string | null;
  major: string | null;
  dep: string | null;
  setCollege: (value: string | null) => void;
  setMajor: (value: string | null) => void;
  setDep: (value: string | null) => void;
}

interface MajorData {
  [key: string]: string[];
}

export function CreateClubSelect({
  dep, //
  filePath,
  college,
  major,
  setCollege,
  setMajor,
  setDep, //
}: InputData) {
  const [colleges, setColleges] = useState<string[]>([]); //json에서 받아오는 배열인가
  const [majors, setMajors] = useState<string[]>([]);
  const [deps, setDeps] = useState<string[]>([]);
  const [data, setData] = useState<MajorData>({});

  useEffect(() => {
    import(`@/data/${filePath}.json`).then((importedData) => {
      setData(importedData.default);
      setColleges(Object.keys(importedData.default));
    });
  }, [filePath]);

  useEffect(() => {
    if (college && data[college]) {
      setMajors(data[college]);
      setDeps(data["분과"]);
      setMajor(null);
      if (college === "중앙동아리") {
        //중동선택하면 Major도 걍 중동처리해버리기
        setMajor("중앙동아리");
      }
    }
  }, [college, data, setMajor]);

  const LabelText = styled.div`
    color: #000;
    font-family: Roboto;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 28px */
    width: 20.3rem;
    height: 3.1rem;
    flex-shrink: 0;
    margin-top: 2rem;
  `;
  const Star = styled.span`
    color: #fe2a2a;
    font-family: Roboto;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  `;

  return (
    <div>
      <div className="mt-[2rem] mb-[2rem] flex">
        <div>
          <LabelText>
            단과대 or 중앙동아리<Star>*</Star>
          </LabelText>
          <div className="flex w-24.3rem h-4.8rem p-3 items-center gap-2 flex-shrink-0 border border-solid border-cool-gray-30 bg-white rounded-md ">
            <select
              value={college || ""}
              onChange={(e) => setCollege(e.target.value)}
              className="w-[21.2rem] h-[2.2rem] text-[1.6rem] bg-transparent outline-none hover:cursor-pointer"
            >
              <option disabled value="">
                <span className="text-cool-gray-60 font-roboto text-base font-normal font-medium leading-[140%]">
                  분류
                </span>
              </option>
              {colleges
                .filter((college) => college !== "분과") //분과는 안읽히게 처리
                .map((college, index) => (
                  <option key={index} value={college}>
                    {college}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="ml-[3.2rem]">
          <LabelText>전공</LabelText>
          <div className="flex w-24.3rem h-4.8rem p-3 items-center gap-2 flex-shrink-0 border border-solid border-cool-gray-30 bg-white rounded-md ">
            <select
              value={major || ""}
              onChange={(e) => setMajor(e.target.value)}
              className="w-[21.2rem] h-[2.2rem] text-[1.6rem] bg-transparent outline-none hover:cursor-pointer"
              disabled={!college}
            >
              <option disabled value="">
                <span className="text-cool-gray-60 font-roboto text-base font-normal font-medium leading-[140%]">
                  전공
                </span>
              </option>
              {majors.map((major, index) => (
                <option key={index} value={major}>
                  {major}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 분과생성기 */}
        <div className="ml-[3.2rem]">
          <LabelText>분과</LabelText>
          <div className="flex w-24.3rem h-4.8rem p-3 items-center gap-2 flex-shrink-0 border border-solid border-cool-gray-30 bg-white rounded-md ">
            <select
              value={dep || ""}
              onChange={(e) => setDep(e.target.value)}
              className="w-[21.2rem] h-[2.2rem] text-[1.6rem] bg-transparent outline-none hover:cursor-pointer"
              disabled={!college}
            >
              <option disabled value="">
                <span className="text-cool-gray-60 font-roboto text-base font-normal font-medium leading-[140%]">
                  분과
                </span>
              </option>
              {deps.map((dep, index) => (
                <option key={index} value={dep}>
                  {dep}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

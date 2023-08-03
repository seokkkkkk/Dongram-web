//sttyled 보류
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

interface InputData {
  filePath: string;
  first: boolean;
  college: string | null;
  major: string | null;
  setCollege: (value: string | null) => void;
  setMajor: (value: string | null) => void;
}

interface MajorData {
  [key: string]: string[];
}

export function MajorSelector({
  filePath,
  first,
  college,
  major,
  setCollege,
  setMajor,
}: InputData) {
  const [colleges, setColleges] = useState<string[]>([]);
  const [majors, setMajors] = useState<string[]>([]);
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
      setMajor(null);
    }
  }, [college, data, setMajor]);

  const MajorSubMajorText = styled.div`
    margin-left: 4rem;
    margin-top: 0.8rem;
    color: #7e7f81;
    font-size: 1.4rem;
  `;
  const Container = styled.div``;

  const DanGGwaDae = styled.div`
    margin-bottom: 1rem;
    font-size: 1.4rem;
  `;
  const Border = styled.div``;

  return (
    <div>
      <MajorSubMajorText>{first ? "" : "부/복수전공"}</MajorSubMajorText>
      <div className="ml-[4rem] mb-10 flex">
        {/*오류발생 나중에 질문  >> select를 포함하는 div를 수정할 경우 오류가 발생함*/}
        <div>
          <DanGGwaDae>단과대{first ? "*" : ""}</DanGGwaDae>
          <div className="w-[24.4rem] h-[4.8rem] bg-[#F2F4F8] border-b-[#C1C7CD] border-b-[0.1rem] flex place-content-center place-items-center">
            <select
              defaultValue=""
              className="w-[21.2rem] h-[2.2rem] text-[1.6rem] bg-transparent outline-none hover:cursor-pointer"
              onChange={(e) => setCollege(e.target.value)}
            >
              <option disabled value="">
                대학
              </option>
              {colleges.map((college, index) => (
                <option key={index} value={college}>
                  {college}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="ml-[3.2rem]">
          <div className="mb-[1rem] text-[1.4rem]">학과{first ? "*" : ""}</div>
          <div className="w-[24.4rem] h-[4.8rem] bg-[#F2F4F8] border-b-[#C1C7CD] border-b-[0.1rem] flex place-content-center place-items-center mt-4">
            <select
              value={major || ""}
              onChange={(e) => setMajor(e.target.value)}
              className="w-[21.2rem] h-[2.2rem] text-[1.6rem] bg-transparent outline-none hover:cursor-pointer"
              disabled={!college}
            >
              <option disabled value="">
                학과
              </option>
              {majors.map((major, index) => (
                <option key={index} value={major}>
                  {major}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

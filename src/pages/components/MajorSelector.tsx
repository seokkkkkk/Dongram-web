import { useEffect, useState } from "react";

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

export default function MajorSelector({
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
  }, [college, data]);

  return (
    <div>
      <div className="ml-[4rem] mt-[0.8rem] text-[#7E7F81] text-[1.4rem]">
        {first ? "" : "부/복수전공"}
      </div>
      <div className="ml-[4rem] mb-10 flex">
        <div>
          <div className="mb-[1rem] text-[1.4rem]">
            단과대{first ? "*" : ""}
          </div>
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

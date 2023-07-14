import React, { useState, useEffect } from "react";

interface Input {
  text: string;
  placeholder: string;
}

export default function InputSmall({ text, placeholder }: Input) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("src/data/college2.json");
        const data = await response.json();
        setOptions(data);
      } catch (error) {
        console.error("Error loading JSON data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="ml-[4rem] mb-10">
      <div className="mt-[0.8rem] mb-[1rem] text-[1.4rem]">{text}</div>
      <div className="w-[24.4rem] h-[4.8rem] bg-[#F2F4F8] border-b-[#C1C7CD] border-b-[0.1rem] flex place-content-center place-items-center">
        <select
          defaultValue=""
          className="w-[21.2rem] h-[2.2rem] text-[1.6rem] bg-transparent outline-none"
        >
          <option disabled value="">
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

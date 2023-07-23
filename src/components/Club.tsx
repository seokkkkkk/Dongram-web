import Image from "next/image";
import clubimage from "@public/placeholder.png";
import { Category } from "./Category";

interface ClubProps {
  recruit: string;
  college: string;
  department: string;
  name: string;
}

export function Club({ recruit, college, department, name }: ClubProps) {
  return (
    <div className="w-[20.7rem] h-[30em] border-[#DDE1E6] border-[1px] mr-[3rem]">
      <Image
        src={clubimage}
        alt="club main image"
        className="w-[20.7rem] h-[22rem]"
      />
      <div className="ml-[0.3rem]">
        <Category props={recruit} />
        <Category props={college} />
        <Category props={department} />
        <div className="mt-[0.8rem] ml-[0.8rem] font-[700] text-[2rem]">
          {name}
        </div>
      </div>
    </div>
  );
}

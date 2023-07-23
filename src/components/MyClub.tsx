import { Club } from "./Club";
import Link from "next/link";

export function MyClub() {
  return (
    <div className="w-[95.8rem]">
      <div className="ml-[0.9rem] mb-[1.7rem] text-[2.4rem] font-[400]">
        내 동아리
      </div>

      <Link href="../clubExplain">
        <div className="flex">
          <Club
            recruit="모집 중"
            college="중앙동아리"
            department="공연"
            name="세마치"
          />
          <Club />
        </div>
      </Link>
    </div>
  );
}

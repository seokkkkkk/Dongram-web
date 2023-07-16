import Club from "./Club";

export default function RecruitClub() {
  return (
    <div className="w-[95.8rem] mt-[3rem] mb-[4.4rem]">
      <div className="ml-[0.9rem] mb-[1.7rem] text-[2.4rem] font-[400]">
        모집 중인 동아리
      </div>
      <div className="flex">
        <Club
          recruit="모집 중"
          college="중앙동아리"
          department="공연"
          name="세마치"
        />
        <Club />
        <Club />
        <Club />
      </div>
    </div>
  );
}

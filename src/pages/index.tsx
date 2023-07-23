import { Header } from "@components/Header";
import { Banner } from "@components/Banner";
import { MyClub } from "@components/MyClub";
import { RecruitClub } from "@components/RecruitClub";

export default function Home() {
  return (
    <>
      <div className="flex flex-col place-items-center">
        <Header />
        <Banner />
        <MyClub />
        <RecruitClub />
      </div>
    </>
  );
}

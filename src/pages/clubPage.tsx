import { Header } from "@components/Header";
import Categories from "@components/Categories";
import tw from "tailwind-styled-components"; //tw 사용 예시

const PageContainer = tw.div`flex flex-col place-items-center`; //이것두

export default function clubPage() {
  return (
    <PageContainer>
      <Header />
      <div>
        <div className="mt-[2rem]">
          <Categories filePath="college" />
        </div>
        <div className="mt-[1.2rem]">
          <Categories filePath="department" />
        </div>
      </div>
      <div className="mt-[2rem] border-[#959A9F] border-[1px] w-[91.3rem]" />
    </PageContainer>
  );
}

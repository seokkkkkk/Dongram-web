import Header from "./components/Header";
import Categories from "./components/Categories";

export default function clubPage() {
  return (
    <>
      <div className="flex flex-col place-items-center">
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
      </div>
    </>
  );
}

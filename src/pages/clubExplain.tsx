import Header from "./components/Header";
import ClubData from "./components/clubData";
export default function Home() {
  return (
    <>
      <div className="flex flex-col place-items-center">
        <Header />
        <ClubData />
      </div>
    </>
  );
}

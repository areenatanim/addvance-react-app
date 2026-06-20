import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation";
import Banner from "./components/Banner/Banner";
import Stats from "./components/Stats/Stats";


export default function Home() {
  return (
    <>
      <div className="bg-[#F8FAFC]">
        <Banner></Banner>
        <Stats></Stats>
      </div>
    </>

  );
}

import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation";
import Banner from "./components/Banner/Banner";
import Stats from "./components/Stats/Stats";
import FriendsCard from "./components/FriendsCard/FriendsCard";
import FriendsPage from "./friends/page";


export default function Home() {
  return (
    <>
      <div className="bg-[#F8FAFC]">
        <Banner></Banner>
        <Stats></Stats>
        <div className="w-11/12 mx-auto">
          <div className="divider"></div>
          <FriendsPage></FriendsPage>
        </div>

      </div>
    </>

  );
}

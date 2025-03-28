import { ReactComponent as SubscriptionIcon } from "../../assets/subs.svg";
import { ReactComponent as HomeIcon } from "../../assets/home.svg";
import { ReactComponent as ShortsIcon } from "../../assets/shorts.svg";
import { ReactComponent as ProfileIcon } from "../../assets/profile.svg";

function LeftSection() {
  return (
    <>
      <div className="left-section basis-[7.5%] h-[600px] pl-1">
        <ul className="flex flex-col">
        <li className="w-[70px] h-[80px] flex justify-center items-center rounded-lg cursor-pointer hover:bg-whiteSmoke">
            <div className="flex flex-col justify-center items-center">
              <HomeIcon className="sidebar-icon" />
              <p className="text-[0.6rem] font-[500]">Home</p>
            </div>
          </li>
        <li className="w-[70px] h-[80px] flex justify-center items-center rounded-lg cursor-pointer hover:bg-whiteSmoke">
            <div className="flex flex-col justify-center items-center">
              <ShortsIcon className="sidebar-icon" />
              <p className="text-[0.6rem] font-[500]">Shorts</p>
            </div>
          </li>
        <li className="w-[70px] h-[80px] flex justify-center items-center rounded-lg cursor-pointer hover:bg-whiteSmoke">
            <div className="flex flex-col justify-center items-center">
              <SubscriptionIcon className="sidebar-icon" />
              <p className="text-[0.6rem] font-[500]">Subscription</p>
            </div>
          </li>
        <li className="w-[70px] h-[80px] flex justify-center items-center rounded-lg cursor-pointer hover:bg-whiteSmoke">
            <div className="flex flex-col justify-center items-center">
              <ProfileIcon className="sidebar-icon" />
              <p className="text-[0.6rem] font-[500]">You</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default LeftSection;
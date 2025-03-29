import Avatar from "./Avatar.jsx";

//icon imports
import { ReactComponent as ThreeDot } from "../assets/threeDot.svg";


const VideoCard = () => {
  return (
    <div className="w-[300px] h-[270px] max-h-[270px] rounded-xl">
        <video src="/video/car.mp4" controls={true} className="w-full rounded-lg"></video>
        <div className="flex justify-between items-start py-3">
            <div className="flex justify-center items-center gap-4">
                <div className="min-w-10 max-w-10 h-10">
                  <Avatar />
                </div>
                {/** ADD A COMPONENT FOR THE TEXT */}
                <p className="text-[1rem] font-medium text-">Coding in super 30 office and office tour. Coding till 500k</p>
            </div>
            <button>
                <ThreeDot className="!w-6" />
            </button>
        </div>
    </div>
  )
}

export default VideoCard;
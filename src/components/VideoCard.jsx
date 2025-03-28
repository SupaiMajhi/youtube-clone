import Avatar from "./Avatar.jsx";

//icon imports
import { ReactComponent as ThreeDot } from "../assets/threeDot.svg";


const VideoCard = () => {
  return (
    <div className="w-[300px] h-[300px] bg-amber-400">
        <video src="/video/car.mp4" controls="true"></video>
        <div className="flex justify-between items-center">
            <div className="gap-4">
                <Avatar />
                <p>Coding in super 30 office and office tour. Coding till 500k</p>
            </div>
            <button>
                <ThreeDot className="!w-5" />
            </button>
        </div>
    </div>
  )
}

export default VideoCard;
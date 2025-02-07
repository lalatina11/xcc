import Link from "next/link";
import { CiCalendarDate } from "react-icons/ci";
import { FaLink } from "react-icons/fa";
import { FaLocationDot, FaSchool } from "react-icons/fa6";
import { MdBlock, MdWork } from "react-icons/md";

interface Props {
  userId?: string;
}

const UserInformationCard = (props: Props) => {
  const { userId } = props;
  return (
    <div className="p-4 bg-zinc-950 rounded-lg shadow-md shadow-zinc-600 text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-zinc-400">User Information</span>
        <Link href={"#"} className="text-blue-500 text-xs">
          See All
        </Link>
      </div>
      {/* Bottom */}
      <div className="flex flex-col gap-4 text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="text-white">Alvin Benson</span>
          <span className="text-sm">@russell</span>
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <div className="flex items-center gap-2">
          <FaLocationDot className="w-[16px] h-[16px]" />
          <span className="flex gap-2 items-center">
            Living In<span className="font-semibold">Latvia</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FaSchool className="w-[16px] h-[16px]" />
          <span className="flex gap-2 items-center">
            Study At<span className="font-semibold">BSI University</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MdWork className="w-[16px] h-[16px]" />
          <span className="flex gap-2 items-center">
            Works At<span className="font-semibold">Apple Academy</span>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <FaLink className="w-[16px] h-[16px]" />
            <Link
              href={"https://profile-candra.vercel.app"}
              className="text-xs hover:text-blue-400 transition-all ease-in-out duration-300"
            >
              profile-candra.com
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <CiCalendarDate className="w-[16px] h-[16px]" />
            <span className="text-xs flex gap-2 items-center">
              Joined<span className="font-semibold">9/17/2106</span>
            </span>
          </div>
        </div>
        <button className="bg-blue-500 p-2 rounded-md text-white font-semibold">
          Follow
        </button>
        <button className="self-end text-red-500 flex gap-2 items-center">
          <MdBlock />
          Block User
        </button>
      </div>
    </div>
  );
};

export default UserInformationCard;

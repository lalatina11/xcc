import Link from "next/link";
import { BsPostcardHeartFill } from "react-icons/bs";
import { LiaPhotoVideoSolid } from "react-icons/lia";
import { LuSquareActivity } from "react-icons/lu";
import { MdOutlineEventAvailable } from "react-icons/md";
import { SiMarketo } from "react-icons/si";
import ProfileCard from "./ProfileCard";
import { BiSolidVideos } from "react-icons/bi";
import { FaDiscourse, FaRegListAlt, FaRegNewspaper } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

interface LeftMenuProps {
  type: "home" | "profile";
}

const LeftMenu = (props: LeftMenuProps) => {
  const { type } = props;
  return (
    <div className="flex flex-col gap-6">
      {type === "home" ? <ProfileCard /> : null}
      <div className="bg-black p-4 rounded-lg shadow-md text-sm text-zinc-500 flex flex-col gap-2">
        <Link
          href={"#"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-800"
        >
          <BsPostcardHeartFill className="w-5 h-5 object-cover" />
          My Post
        </Link>
        <hr className="border-t-1 border-t-zinc-900" />
        <Link
          href={"#"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-800"
        >
          <LuSquareActivity className="w-5 h-5 object-cover" />
          My Activity
        </Link>
        <hr className="border-t-1 border-t-zinc-900" />

        <Link
          href={"#"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-800"
        >
          <SiMarketo className="w-5 h-5 object-cover" />
          MarketPlace
        </Link>
        <hr className="border-t-1 border-t-zinc-900" />
        <Link
          href={"#"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-800"
        >
          <MdOutlineEventAvailable className="w-5 h-5 object-cover" />
          Event
        </Link>
        <hr className="border-t-1 border-t-zinc-900" />
        <Link
          href={"#"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-800"
        >
          <LiaPhotoVideoSolid className="w-5 h-5 object-cover" />
          Albums
        </Link>
        <hr className="border-t-1 border-t-zinc-900" />
        <Link
          href={"#"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-800"
        >
          <BiSolidVideos className="w-5 h-5 object-cover" />
          Videos
        </Link>
        <hr className="border-t-1 border-t-zinc-900" />
        <Link
          href={"#"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-800"
        >
          <FaRegNewspaper className="w-5 h-5 object-cover" />
          News
        </Link>
        <hr className="border-t-1 border-t-zinc-900" />
        <Link
          href={"#"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-800"
        >
          <FaDiscourse className="w-5 h-5 object-cover" />
          Courses
        </Link>
        <hr className="border-t-1 border-t-zinc-900" />
        <Link
          href={"#"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-800"
        >
          <FaRegListAlt className="w-5 h-5 object-cover" />
          List
        </Link>
        <hr className="border-t-1 border-t-zinc-900" />
        <Link
          href={"#"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-800"
        >
          <IoIosSettings className="w-5 h-5 object-cover" />
          Setting
        </Link>
        <hr className="border-t-1 border-t-zinc-900" />
      </div>
    </div>
  );
};

export default LeftMenu;

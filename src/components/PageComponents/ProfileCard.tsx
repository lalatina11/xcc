import Image from "next/image";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";

const ProfileCard = async () => {
  return (
    <div className="p-4 bg-zinc-950 rounded-lg shadow-md text-sm flex flex-col gap-2">
      <div className="h-20 relative">
        <Image
          src={
            "https://img.freepik.com/free-photo/side-view-modern-family-retro-style_23-2150595558.jpg?t=st=1739200188~exp=1739203788~hmac=47246a1d9b7cf74ae0fc4a49feb7eaa7eb4ff5156cd1b259a477949d9ae8a697&w=740"
          }
          fill
          alt="..."
          className="rounded-md object-cover"
        />
        <CgProfile className="bg-black absolute -bottom-6 rounded-full w-12 h-12 left-0 right-0 m-auto ring-1 ring-white z-10" />
      </div>
      <div className="h-20 flex flex-col gap-2 items-center mt-5">
        <span className="font-semibold">Trevor Roy</span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <CgProfile className="bg-black rounded-full w-3 h-3" />
            <CgProfile className="bg-black rounded-full w-3 h-3" />
            <CgProfile className="bg-black rounded-full w-3 h-3" />
          </div>
          <span>500 Followers</span>
        </div>
      <Link href={"/profile/Cora"} className="bg-blue-500 text-white text-xs p-2 rounded-md">My Profile</Link>
      </div>
    </div>
  );
};

export default ProfileCard;

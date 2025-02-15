import prisma from "@/libs/prisma";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { FaPoll } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import {
  MdAddPhotoAlternate,
  MdEmojiEmotions,
  MdEventAvailable,
} from "react-icons/md";
import { RxAvatar } from "react-icons/rx";

const AddPost = async () => {
  const { userId } = await auth();

  const userData = await prisma.user.findFirst({
    where: { id: userId! },
  });

  return (
    <div className="flex flex-col gap-2 p-4 bg-zinc-900 shadow-md shadow-zinc-600 w-full rounded-lg">
      <div className="flex gap-4 justify-between text-sm">
        {userData?.avatar ? (
          <Image
            src={userData?.avatar!}
            alt="..."
            width={480}
            height={480}
            className="w-12 h-12 object-cover rounded-full"
          />
        ) : (
          <RxAvatar className="w-12 h-12 object-cover rounded-full" />
        )}
        {/* Avatar */}
        {/* POST */}
        <div className="flex-1">
          {/* Text Input */}
          <form action="" className="flex gap-4">
            <textarea
              name="description"
              placeholder="Type Something..."
              className="bg-zinc-800 rounded-lg flex-1 p-2"
            ></textarea>
            <MdEmojiEmotions className="w-5 h-5 object-cover rounded-full self-end cursor-pointer" />
            <button type="submit">
              <IoSend className="h-6 w-6" />
            </button>
          </form>
        </div>
      </div>
      {/* Post Option */}
      <div className="flex flex-grow items-center gap-6 w-full justify-center">
        <div className="flex gap-2 items-center cursor-pointer">
          <MdAddPhotoAlternate className="w-4 h-4" />
          Photo
        </div>
        <div className="flex gap-2 items-center cursor-pointer">
          <AiOutlineVideoCameraAdd className="w-4 h-4" />
          Video
        </div>
        <div className="flex gap-2 items-center cursor-pointer">
          <FaPoll className="w-4 h-4" />
          Pool
        </div>
        <div className="flex gap-2 items-center cursor-pointer">
          <MdEventAvailable className="w-4 h-4" />
          Event
        </div>
      </div>
    </div>
  );
};

export default AddPost;

import Image from "next/image";
import React from "react";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { FaPoll } from "react-icons/fa";
import {
  MdAddPhotoAlternate,
  MdEmojiEmotions,
  MdEventAvailable,
} from "react-icons/md";

const AddPost = () => {
  return (
    <div className="flex flex-col gap-2 p-4 bg-zinc-900 shadow-md shadow-zinc-600 w-full rounded-lg">
      <div className="flex gap-4 justify-between text-sm">
        <Image
          src="https://img.freepik.com/free-photo/fun-party-with-dj_23-2151108197.jpg"
          alt="..."
          width={480}
          height={480}
          className="w-12 h-12 object-cover rounded-full"
        />
        {/* Avatar */}
        {/* POST */}
        <div className="flex-1">
          {/* Text Input */}
          <div className="flex gap-4">
            <textarea
              placeholder="Type Something..."
              className="bg-zinc-800 rounded-lg flex-1 p-2"
            ></textarea>
            <MdEmojiEmotions className="w-5 h-5 object-cover rounded-full self-end cursor-pointer" />
          </div>
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

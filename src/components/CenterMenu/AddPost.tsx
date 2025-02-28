"use client";
import { User } from "@prisma/client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { FaPoll } from "react-icons/fa";
import {
  MdAddPhotoAlternate,
  MdEmojiEmotions,
  MdEventAvailable,
} from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import AddPostButton from "./AddPostButton";
import { addPostAction } from "@/libs/actions";

interface Props {
  userData: User | undefined | null;
}

const AddPost = (props: Props) => {
  const { userData } = props;
  const [image, setImage] = useState<any>(null);

  return (
    <div className="flex flex-col gap-2 p-4 bg-zinc-950 shadow-md shadow-zinc-600 w-full rounded-lg">
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
          <form action={addPostAction} className="flex gap-4">
            <textarea
              name="description"
              placeholder="Type Something..."
              className="bg-zinc-800 rounded-lg flex-1 p-2"
            />

            <input
              type="text"
              name="image"
              hidden
              defaultValue={image?.secure_url || ""}
            />
            <input type="text" name="video" hidden />
            <MdEmojiEmotions className="w-5 h-5 object-cover rounded-full self-end cursor-pointer" />
            <AddPostButton />
          </form>
        </div>
      </div>
      {/* Post Option */}
      <div className="flex flex-grow items-center gap-6 w-full justify-center">
        <CldUploadWidget
          uploadPreset="social"
          onSuccess={(results, { widget }) => {
            setImage(results.info);
            widget.close();
          }}
        >
          {({ open }) => {
            return (
              <div onClick={() => open()}>
                {image ? (
                  <Image
                    src={image.secure_url!}
                    alt="..."
                    width={300}
                    height={300}
                    className="w-12 h-12 object-cover cursor-pointer"
                  />
                ) : (
                  <label className="flex gap-2 items-center cursor-pointer">
                    <MdAddPhotoAlternate className="w-4 h-4" />
                    Photo
                  </label>
                )}
              </div>
            );
          }}
        </CldUploadWidget>
        <label
          htmlFor="video"
          className="flex gap-2 items-center cursor-pointer"
        >
          <AiOutlineVideoCameraAdd className="w-4 h-4" />
          Video
        </label>
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

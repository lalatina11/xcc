import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoSend } from "react-icons/io5";
import { MdEmojiEmotions } from "react-icons/md";
import MoreButton from "./MoreButton";
import { BiSolidLike } from "react-icons/bi";

const CommentSection = () => {
  return (
    <div className="flex flex-col gap-2">
      {/* Write Comment */}
      <div className="flex items-center">
        <CgProfile className="w-8 h-8 rounded-full" />
        <div className="flex flex-1 justify-between items-center px-6 py-2 gap-4 text-sm w-full">
          <input
            placeholder="Write your comment..."
            className="flex-1 bg-zinc-800 p-1 px-2 rounded-md"
          />
          <div className="flex gap-4 items-center">
            <button>
              <MdEmojiEmotions />
            </button>
            <button>
              <IoSend />
            </button>
          </div>
        </div>
      </div>
      {/* Comments */}
      <div className="mt-2">
        {/* Comment */}
        <div className="flex justify-between gap-4">
          {/* Avatar */}
          <div className="pr-2">
            <CgProfile className="w-10 h-10" />
          </div>
          {/* Title */}
          <div className="flex flex-col gap-2 flex-1">
            {/* Username */}
            <span className="font-semibold">Clara Reynolds</span>
            <span className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
              odit corrupti et, magni, a accusamus cupiditate cum atque repellat
              labore quos minus aperiam hic laboriosam. Recusandae expedita
              officiis ipsa dolores?
            </span>
            <div className="flex gap-8 text-sm">
              <div className="flex gap-4 p-1.5 items-center bg-zinc-600 bg-opacity-50 rounded-md px-2">
                <BiSolidLike className="w-4 h-4" />
                <span>|</span>
                <span className="flex gap-1">
                  14
                  <span className="hidden md:inline">Like</span>
                </span>
              </div>
              <button>Reply</button>
            </div>
          </div>
          {/* Icon */}
          <div>
            <MoreButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;

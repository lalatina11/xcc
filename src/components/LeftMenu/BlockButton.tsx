"use client";

import { MdBlock } from "react-icons/md";
interface Props {
  userId?: string | null | undefined;
  currentUserId?: string | null | undefined;
  isFollowing?: boolean | null | undefined;
  isFollowingSent?: boolean | null | undefined;
  isBlocked?: boolean | null | undefined;
}

const BlockButton = (props: Props) => {
  const { currentUserId, userId, isBlocked } = props;
  return (
    <form className="w-full flex justify-end items-end">
      <button className="self-end text-red-500 flex gap-2 items-center">
        <MdBlock />
        Block
      </button>
    </form>
  );
};

export default BlockButton;

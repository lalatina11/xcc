"use client";

import { blockUserActions } from "@/libs/actions";
import { useOptimistic, useState } from "react";
import { MdBlock } from "react-icons/md";
interface Props {
  userId?: string | null | undefined;
  currentUserId?: string | null | undefined;
  isFollowing?: boolean | null | undefined;
  isFollowingSent?: boolean | null | undefined;
  isBlocked?: boolean | null | undefined;
}

const BlockButton = (props: Props) => {
  const { userId, isBlocked } = props;

  const [userState, setuserState] = useState({
    isBlocked: isBlocked,
  });

  const block = async () => {
    switchOptimisticBlock("");
    try {
      await blockUserActions(userId!);
      setuserState((prev) => ({ ...prev, isBlocked: prev.isBlocked && false }));
    } catch (error) {
      console.error(error);
    }
  };

  const [optimisticBlock, switchOptimisticBlock] = useOptimistic(
    userState,
    (prev) => ({ ...prev, isBlocked: prev.isBlocked && false })
  );

  return (
    <form action={block} className="w-full flex justify-end items-end">
      <button className="self-end text-red-500 flex gap-2 items-center">
        <MdBlock />
        {!optimisticBlock.isBlocked ? "Block" : "Cancel Block"}
      </button>
    </form>
  );
};

export default BlockButton;

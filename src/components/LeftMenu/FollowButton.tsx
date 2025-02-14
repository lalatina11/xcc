"use client";

import { followUserAcions } from "@/libs/actions";
import { useState } from "react";

interface Props {
  userId?: string | null | undefined;
  currentUserId?: string | null | undefined;
  isFollowing?: boolean | null | undefined;
  isFollowingSent?: boolean | null | undefined;
  isBlocked?: boolean | null | undefined;
}

const FollowButton = (props: Props) => {
  const { userId, isFollowing, isFollowingSent } = props;

  const [userState, setUserState] = useState({
    following: isFollowing,
    isFollowingSent: isFollowingSent,
  });

  const follow = async () => {
    try {
      await followUserAcions(userId!);
      setUserState((prev) => ({
        ...prev,
        following: prev.following && false,
        isFollowingSent:
          !prev.following && !prev.isFollowingSent ? true : false,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form action={follow}>
      <button className="bg-blue-500 p-2 rounded-md text-white font-semibold w-full">
        {userState.following && userState.isFollowingSent
          ? "Unfollow"
          : userState.isFollowingSent && !userState.following
          ? "Cancel"
          : "Follow"}
      </button>
    </form>
  );
};

export default FollowButton;

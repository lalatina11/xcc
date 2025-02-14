"use client";

import { followUserAcions } from "@/libs/actions";
import { useOptimistic, useState } from "react";

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
    switchOptimisticFollow("");
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

  const [optimisticFollow, switchOptimisticFollow] = useOptimistic(
    userState,
    (state) => ({
      ...state,
      following: state.following && false,
      isFollowingSent:
        !state.following && !state.isFollowingSent ? true : false,
    })
  );

  return (
    <form action={follow}>
      <button className="bg-blue-500 p-2 rounded-md text-white font-semibold w-full">
        {optimisticFollow.following && optimisticFollow.isFollowingSent
          ? "Unfollow"
          : optimisticFollow.isFollowingSent && !optimisticFollow.following
          ? "Cancel Follow Request"
          : "Follow"}
      </button>
    </form>
  );
};

export default FollowButton;

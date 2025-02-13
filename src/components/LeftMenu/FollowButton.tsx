"use client";

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

  return (
    <form className="">
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

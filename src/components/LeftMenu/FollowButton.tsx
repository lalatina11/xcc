"use client";
interface Props {
  userId?: string | null | undefined;
  currentUserId?: string | null | undefined;
  isFollowing?: boolean | null | undefined;
  isFollowingSent?: boolean | null | undefined;
  isBlocked?: boolean | null | undefined;
}

const FollowButton = (props: Props) => {
  const { currentUserId, userId, isFollowing, isFollowingSent } = props;
  return (
    <form className="">
      <button className="bg-blue-500 p-2 rounded-md text-white font-semibold w-full">
        {isFollowing && isFollowingSent ? "Unfollow" : isFollowingSent && !isFollowing ? "Cancel" : "Follow"}
      </button>
    </form>
  );
};

export default FollowButton;

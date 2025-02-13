"use client";
interface Props {
  userId?: string | null | undefined;
  currentUserId?: string | null | undefined;
}

const FollowButton = (props: Props) => {
  const { currentUserId, userId } = props;
  return (
    <form>
      <button className="bg-blue-500 p-2 rounded-md text-white font-semibold">
        Follow
      </button>
    </form>
  );
};

export default FollowButton;

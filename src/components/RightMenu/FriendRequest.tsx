import prisma from "@/libs/prisma";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import FriendRequestAction from "./FriendRequestAction";

const FriendRequest = async () => {
  const { userId: currentUserId } = await auth();

  const friendRequest = await prisma.followRequest.findMany({
    where: {
      receiverId: currentUserId!,
    },
    include: {
      sender: true,
    },
  });

  return (
    <div className="p-4 bg-zinc-950 rounded-lg shadow-md shadow-zinc-600 text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-zinc-400">Friend Request</span>
        {friendRequest.length ? (
          <Link href={"#"} className="text-blue-500 text-xs">
            See All
          </Link>
        ) : null}
      </div>
      {/* USER */}
      {friendRequest.length ? (
        <FriendRequestAction friendRequest={friendRequest} />
      ) : (
        <p className="text-zinc-400">No Friend Request!</p>
      )}
    </div>
  );
};

export default FriendRequest;

import prisma from "@/libs/prisma";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";
import { ImCheckmark, ImCross } from "react-icons/im";
import { RxAvatar } from "react-icons/rx";

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
        <Link href={"#"} className="text-blue-500 text-xs">
          See All
        </Link>
      </div>
      {/* USER */}
      {friendRequest.length ? (
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <RxAvatar className="w-10 h-10 rounded-full object-cover" />
            <span>Edith Romero</span>
          </div>
          <div className="flex gap-3 items-center">
            <ImCheckmark className="w-5 h-5 object-cover rounded-full ring-2 ring-zinc-300 p-[1px] hover:ring-blue-500 cursor-pointer transition-all ease-in-out duration-200" />
            <ImCross className="w-5 h-5 object-cover rounded-full ring-2 ring-zinc-300 p-[1px] hover:ring-blue-500 cursor-pointer transition-all ease-in-out duration-200" />
          </div>
        </div>
      ) : (
        <p className="text-zinc-400">No Friend Request!</p>
      )}
    </div>
  );
};

export default FriendRequest;

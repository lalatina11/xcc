import prisma from "@/libs/prisma";
import { auth } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import Link from "next/link";
import { CiCalendarDate } from "react-icons/ci";
import { FaLink } from "react-icons/fa";
import { FaLocationDot, FaSchool } from "react-icons/fa6";
import { MdBlock, MdWork } from "react-icons/md";
import BlockButton from "./BlockButton";
import FollowButton from "./FollowButton";
import UpdateUserForm from "../UpdateUserForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sosial | Profile",
};

interface Props {
  userId?: string;
  user: User | null;
}

const UserInformationCard = async (props: Props) => {
  const { user } = props;

  const userJonedAt = new Date(user?.createdAt!).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const { userId: currentUserId } = await auth();

  let isBlocked = false;
  let isFollowing = false;
  let isFollowRequestSent = false;

  if (currentUserId) {
    const blockRes = await prisma.block.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: user?.id,
      },
    });
    isBlocked = blockRes ? true : false;
  }

  if (currentUserId) {
    const followRes = await prisma.follower.findFirst({
      where: {
        followerId: user?.id,
        followingId: currentUserId,
      },
    });
    isFollowing = followRes ? true : false;
  }

  if (currentUserId) {
    const followRequestRes = await prisma.followRequest.findFirst({
      where: {
        senderId: currentUserId,
        receiverId: user?.id,
      },
    });
    isFollowRequestSent = followRequestRes ? true : false;
  }

  const currentUserData = await prisma.user.findFirst({
    where: { id: currentUserId! },
  });

  return (
    <div className="p-4 bg-zinc-950 rounded-lg shadow-md shadow-zinc-600 text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-zinc-400">User Information</span>
        {currentUserId === user?.id ? (
          <UpdateUserForm user={user} userId={currentUserId} />
        ) : (
          <Link className="text-blue-500 text-xs cursor-pointer" href={"#"}>
            See All
          </Link>
        )}
      </div>
      {/* Bottom */}
      <div className="flex flex-col gap-4 text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="text-white">
            {user?.name && user?.surname
              ? user.name + " " + user.surname
              : user?.username}
          </span>
          <span className="text-sm">@{user?.username}</span>
        </div>
        {user?.bio ? <p>{user.bio}</p> : null}
        {user?.city ? (
          <div className="flex items-center gap-2">
            <FaLocationDot className="w-[16px] h-[16px]" />
            <span className="flex gap-2 items-center">
              Living In<span className="font-semibold">{user.city}</span>
            </span>
          </div>
        ) : null}
        {user?.school ? (
          <div className="flex items-center gap-2">
            <FaSchool className="w-[16px] h-[16px]" />
            <span className="flex gap-2 items-center">
              Study At<span className="font-semibold">{user.school}</span>
            </span>
          </div>
        ) : null}
        {user?.work ? (
          <div className="flex items-center gap-2">
            <MdWork className="w-[16px] h-[16px]" />
            <span className="flex gap-2 items-center">
              Works At<span className="font-semibold">{user.work}</span>
            </span>
          </div>
        ) : null}
        <div className="flex items-center justify-between">
          {user?.website ? (
            <div className="flex gap-2 items-center">
              <FaLink className="w-[16px] h-[16px]" />
              <Link
                href={user.website}
                className="text-xs hover:text-blue-400 transition-all ease-in-out duration-300"
              >
                {user.website}
              </Link>
            </div>
          ) : null}
          {user?.createdAt ? (
            <div className="flex gap-2 items-center">
              <CiCalendarDate className="w-[16px] h-[16px]" />
              <span className="text-xs flex gap-2 items-center">
                Joined<span className="font-semibold">{userJonedAt}</span>
              </span>
            </div>
          ) : null}
        </div>
        {currentUserId !== user?.id ? (
          <FollowButton
            userId={user?.id}
            currentUserId={currentUserId}
            isBlocked={isBlocked}
            isFollowing={isFollowing}
            isFollowingSent={isFollowRequestSent}
          />
        ) : null}
        {currentUserId !== user?.id ? (
          <BlockButton
            userId={user?.id}
            currentUserId={currentUserId}
            isBlocked={isBlocked}
            isFollowing={isFollowing}
            isFollowingSent={isFollowRequestSent}
          />
        ) : null}
      </div>
    </div>
  );
};

export default UserInformationCard;

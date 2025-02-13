"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "./prisma";

export const followUserAcions = async (userId: string) => {
  const { userId: currentUserId } = await auth();
  if (!currentUserId) {
    throw new Error("User not authenticated");
  }

  try {
    const followRes = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: userId,
      },
    });
    if (followRes) {
      await prisma.follower.delete({
        where: {
          id: followRes.id,
        },
      });
      await prisma.followRequest.deleteMany({
        where: {
          receiverId: userId,
          senderId: currentUserId,
        },
      });
      return;
    } else {
      const followReqRes = await prisma.followRequest.findFirst({
        where: {
          senderId: currentUserId,
          receiverId: userId,
        },
      });
      if (followReqRes) {
        await prisma.followRequest.delete({
          where: {
            id: followReqRes.id,
          },
        });
      } else {
        await prisma.followRequest.create({
          data: {
            senderId: currentUserId,
            receiverId: userId,
          },
        });
        return;
      }
    }
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};

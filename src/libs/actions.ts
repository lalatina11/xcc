"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import prisma from "./prisma";

export const followUserAcions = async (userId: string) => {
  const { userId: currentUserId } = await auth();
  if (!currentUserId) {
    throw new Error("User not authenticated");
  }

  try {
    const followRes = await prisma.follower.findFirst({
      where: {
        followerId: userId,
        followingId: currentUserId,
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

export const blockUserActions = async (userId: string) => {
  const { userId: currentUserId } = await auth();
  if (!currentUserId || !userId) {
    throw new Error("User not authenticated");
  }

  try {
    await prisma.block.create({
      data: {
        blockerId: currentUserId,
        blockedId: userId,
      },
    });
    revalidatePath(`/`);
  } catch (error) {
    console.error(error);
  }
};

export const acceptFollowReq = async (userId: string) => {
  const { userId: currentUserId } = await auth();

  if (!currentUserId) {
    throw new Error("User not authenticated!");
  }

  const existingFollowReq = await prisma.followRequest.findFirst({
    where: {
      receiverId: currentUserId,
      senderId: userId,
    },
  });

  if (!existingFollowReq) {
    throw new Error("No Follow Request!");
  }
  try {
    await prisma.followRequest.delete({
      where: { id: existingFollowReq.id },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
  try {
    await prisma.follower.create({
      data: {
        followerId: currentUserId,
        followingId: userId,
      },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }

  revalidatePath("/");
};

export const declineFollowReq = async (userId: string) => {
  const { userId: currentUserId } = await auth();

  if (!currentUserId) {
    throw new Error("User not authenticated!");
  }

  const existingFollowReq = await prisma.followRequest.findFirst({
    where: {
      receiverId: currentUserId,
      senderId: userId,
    },
  });

  if (!existingFollowReq) {
    throw new Error("No Follow Request!");
  }
  try {
    await prisma.followRequest.delete({
      where: { id: existingFollowReq.id },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }

  revalidatePath("/");
};

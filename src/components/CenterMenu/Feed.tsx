import prisma from "@/libs/prisma";
import Post from "./Post";

interface Props {
  type: "home" | "profile";
  userId?: string;
}

const Feed = async (props: Props) => {
  const { userId, type } = props;

  const feedPost = await prisma.post.findMany({
    include: {
      user: true,
      likes: { select: { userId: true } },
      _count: { select: { comments: true } },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const profileFeedPost = await prisma.post.findMany({
    where: { userId: userId },
    include: {
      user: true,
      likes: true,
      _count: { select: { comments: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="flex flex-col gap-12">
      {type === "home" ? (
        <Post post={feedPost} />
      ) : type === "profile" && userId ? (
        <Post post={profileFeedPost} />
      ) : type === "profile" && !userId ? (
        "Pengguna Belum memiliki Postingan"
      ) : (
        "No Post Found"
      )}
    </div>
  );
};

export default Feed;

import prisma from "@/libs/prisma";
import Post from "./Post";

interface Props {
  tipe: "home" | "profile";
  userId?: string;
}

const Feed = async (props: Props) => {
  const { userId, tipe } = props;

  const feedPost = await prisma.post.findMany({
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const profileFeedPost = await prisma.post.findMany({
    where: { userId: userId! },
    include: { user: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="flex flex-col gap-12">
      {tipe === "home" ? (
        <Post post={feedPost} />
      ) : tipe === "profile" && userId ? (
        <Post post={profileFeedPost} />
      ) : tipe === "profile" && !userId ? (
        "Pengguna Belum memiliki Postingan"
      ) : (
        "No Post Found"
      )}
    </div>
  );
};

export default Feed;

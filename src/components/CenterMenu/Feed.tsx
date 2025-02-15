import prisma from "@/libs/prisma";
import Post from "./Post";

const Feed = async () => {
  // const feedPost = await prisma.post.findMany({
  //   include: {
  //     user: { select: { username, avatar, cover } },
  //   },
  //   orderBy: {
  //     createdAt: "desc",
  //   },
  // });

  return (
    <div className="flex flex-col gap-12">{/* <Post post={feedPost} /> */}</div>
  );
};

export default Feed;

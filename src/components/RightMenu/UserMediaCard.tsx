import prisma from "@/libs/prisma";
import { Post, User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface Props {
  userId?: string;
  user: User | null;
}

const UserMediaCard = async (props: Props) => {
  const { user } = props;
  const userId = user?.id;

  const postWithMedia: Post[] = await prisma.post.findMany({
    where: {
      userId: userId,
      image: {
        not: null,
      },
    },
    take: 8,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="p-4 bg-zinc-950 rounded-lg shadow-md shadow-zinc-600 text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-zinc-400">User Media</span>
        <Link href={"#"} className="text-blue-500 text-xs">
          See All
        </Link>
      </div>
      {/* Bottom */}
      <div className="flex gap-4 justify-between flex-wrap">
        {postWithMedia.length ? (
          postWithMedia.map((data) => (
            <div className="relative w-1/5 h-24" key={data.id}>
              <Image
                src={data.image!}
                fill
                alt="..."
                className="rounded-md object-cover"
              />
            </div>
          ))
        ) : (
          <>No Media Found</>
        )}
      </div>
    </div>
  );
};

export default UserMediaCard;

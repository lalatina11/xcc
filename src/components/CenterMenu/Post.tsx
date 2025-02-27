import { User, type Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { RxAvatar } from "react-icons/rx";
import MoreButton from "../MoreButton";
import CommentSection from "./CommentSection";
import FooterPost from "./FooterPost";
import { auth } from "@clerk/nextjs/server";

export interface userFeed extends Post {
  user: User;
  likes: { userId: string }[];
  _count: { comments: number };
}
interface Props {
  post: userFeed[];
}

const Post = async (props: Props) => {
  const { post } = props;

  const {userId} = await auth()

  if (!post)
    return (
      <div className="w-full text-center">
        Pengguna Belum Memiliki Postingan
      </div>
    );
  if (!post.length)
    return (
      <div className="w-full text-center">
        Pengguna Belum Memiliki Postingan
      </div>
    );

  return (
    <div className="flex flex-col gap-4 bg-zinc-950 p-4 shadow-md shadow-zinc-600 rounded-lg mb-6">
      {/* Header Post */}
      {post.length
        ? post.map((post) => (
            <div key={post.id} id={post.id.toString()}>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4 mb-4">
                  {post.user.avatar ? (
                    <Link href={`/profile/${post.user.username}`}>
                      <Image
                        src={post.user.avatar}
                        alt="..."
                        width={400}
                        height={400}
                        className="w-10 h-10 rounded-full object-cover hover:ring-2 hover:ring-zinc-500 hover:p-[1.5px] transition-all ease-in-out duration-200"
                      />
                    </Link>
                  ) : (
                    <Link href={`/profile/${post.user.username}`}>
                      <RxAvatar className="w-10 h-10 rounded-full object-cover hover:ring-2 hover:ring-zinc-500 hover:p-[1.5px] transition-all ease-in-out duration-200" />
                    </Link>
                  )}
                  <Link
                    href={`/profile/${post.user.username}`}
                    className="font-medium hover:underline hover:underline-offset-4"
                  >
                    {post.user.username}
                  </Link>
                </div>
                <button>
                  <MoreButton />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-full min-h-96">
                  <Image
                    src={post.image!}
                    alt="..."
                    width={1000}
                    height={1000}
                    className="w-full max-h-96 object-cover rounded-lg"
                  />
                </div>
                <span>{post.description}</span>
              </div>
              {/* Footer POST */}
              <FooterPost
              userIdLoggedIn={userId!}
                postId={post?.id}
                likes={post?.likes?.map((like) => like.userId)}
                commentNumber={post?._count?.comments}
              />
              <hr className="opacity-30" />
              <CommentSection />
            </div>
          ))
        : null}
    </div>
  );
};

export default Post;

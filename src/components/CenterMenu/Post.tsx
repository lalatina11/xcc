"use client";
import { RxAvatar } from "react-icons/rx";
import Image from "next/image";
import { BiSolidLike } from "react-icons/bi";
import { MdInsertComment } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import CommentSection from "./CommentSection";
import MoreButton from "../MoreButton";
import { User, type Post } from "@prisma/client";
import Link from "next/link";

interface userFeed extends Post {
  user: User;
}
interface Props {
  post: userFeed[];
}

const Post = (props: Props) => {
  const { post } = props;

  return (
    <div className="flex flex-col gap-4 bg-zinc-950 p-4 shadow-md shadow-zinc-600 rounded-lg">
      {/* Header Post */}
      {post.length
        ? post.map((post) => (
            <div key={post.id}>
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
                  <Link href={`/profile/${post.user.username}`}  className="font-medium hover:underline hover:underline-offset-4">
                    {post.user.username}
                  </Link>
                </div>
                <button>
                  <MoreButton />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-full relative min-h-96">
                  <Image
                    src={post.image!}
                    alt="..."
                    fill
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <span>{post.description}</span>
              </div>
              {/* Footer POST */}
              <div className="flex justify-between items-center text-sm my-2">
                <div className="flex gap-8">
                  <div className="flex items-center gap-4 bg-zinc-600 bg-opacity-30 p-2 rounded-md">
                    <BiSolidLike />
                    <span className="opacity-30">|</span>
                    <span className="flex gap-1">
                      51<span className="hidden md:inline">Likes</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-4 bg-zinc-600 bg-opacity-30 p-2 rounded-md">
                    <MdInsertComment />
                    <span className="opacity-30">|</span>
                    <span className="flex gap-1">
                      51<span className="hidden md:inline">Comments</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-4 bg-zinc-600 bg-opacity-30 p-2 rounded-md">
                    <FaShareAlt />
                    <span className="opacity-30">|</span>
                    <span className="flex gap-1">
                      51<span className="hidden md:inline">Share</span>
                    </span>
                  </div>
                </div>
              </div>
              <hr className="opacity-30" />
              <CommentSection />
            </div>
          ))
        : null}
    </div>
  );
};

export default Post;

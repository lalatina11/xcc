"use client";
import { RxAvatar } from "react-icons/rx";
import Image from "next/image";
import { BiSolidLike } from "react-icons/bi";
import { MdInsertComment } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import CommentSection from "./CommentSection";
import MoreButton from "../MoreButton";
import { type Post } from "@prisma/client";

interface Props {
  post: Post[];
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
                <div className="flex items-center gap-4">
                  <RxAvatar className="w-10 h-10 rounded-full object-cover" />
                  <span className="font-medium">{post.userId}</span>
                </div>
                <button>
                  <MoreButton />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-full relative min-h-96">
                  <Image
                    src="https://img.freepik.com/free-photo/full-shot-family-running-meadow_23-2149049202.jpg?t=st=1737972399~exp=1737972999~hmac=3c2bf3981c402122d3a749742fe1ca32fbab3760d763dcf8c21c651029275818"
                    alt="..."
                    fill
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore nemo quisquam quia laboriosam eveniet id et! Odio,
                  doloremque officiis? Aspernatur porro nobis sapiente
                  asperiores quam animi repudiandae voluptate consequuntur
                  dolore.
                </span>
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

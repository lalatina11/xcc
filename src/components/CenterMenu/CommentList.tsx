"use client";
import { Comment, User } from "@prisma/client";
import Image from "next/image";
import { BiSolidLike } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoSend } from "react-icons/io5";
import { MdEmojiEmotions } from "react-icons/md";
import MoreButton from "../MoreButton";
import { useOptimistic, useState } from "react";
import { AddComment } from "@/libs/actions";

interface CommentIncludeUser extends Comment {
  user: User;
  _count: { likes: number };
}

interface Props {
  availableUser: User;
  comments: CommentIncludeUser[];
  postId: number;
}

const CommentList = (props: Props) => {
  const { availableUser } = props;
  const [CommentState, setCommentState] = useState(props.comments);
  const [Desc, setDesc] = useState("");

  const [optimisticComment, setOptimisticComment] = useOptimistic(
    CommentState,
    (state, value: CommentIncludeUser) => [value, ...state]
  );

  const {
    avatar,
    bio,
    id,
    name,
    cover,
    city,
    school,
    surename,
    website,
    work,
  } = availableUser;

  const AddNewComment = async () => {
    if (!availableUser || !Desc) return;
    setOptimisticComment({
      _count: { likes: 0 },
      id: Math.random(),
      text: Desc,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
      userId: availableUser.id!,
      postId: props.postId,
      user: {
        id,
        avatar,
        bio,
        city,
        cover,
        createdAt: new Date(Date.now()),
        name,
        school,
        surename,
        username: "Sedang mengirimkan komentar, tunggu sebentar",
        website,
        work,
      },
    });
    try {
      const createComment = await AddComment(props.postId, Desc);
      if (createComment) {
        setCommentState((prev) => [createComment, ...prev]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Write Comment */}
      {availableUser ? (
        <div className="flex items-center">
          {availableUser?.avatar ? (
            <Image
              src={availableUser.avatar!}
              alt="..."
              width={300}
              height={300}
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <CgProfile className="w-8 h-8 rounded-full" />
          )}
          <form
            action={AddNewComment}
            className="flex flex-1 justify-between items-center px-6 py-2 gap-4 text-sm w-full"
          >
            <input
              placeholder="Write your comment..."
              className="flex-1 bg-zinc-800 p-1 px-2 rounded-md"
              onChange={(e) => setDesc(e.target.value)}
            />
            <div className="flex gap-4 items-center">
              <span className="cursor-pointer">
                <MdEmojiEmotions />
              </span>
              <button>
                <IoSend />
              </button>
            </div>
          </form>
        </div>
      ) : null}
      {/* Comments */}
      <div className="mt-2">
        {/* Comment */}
        {optimisticComment.length ? (
          optimisticComment.map((comment) => (
            <div className="flex justify-between gap-4" key={comment.id}>
              {/* Avatar */}
              <div className="pr-2">
                {comment.user.avatar ? (
                  <Image
                    src={comment.user.avatar!}
                    alt="..."
                    width={300}
                    height={300}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <CgProfile className="w-10 h-10 rounded-full object-cover" />
                )}
              </div>
              {/* Title */}
              <div className="flex flex-col gap-2 flex-1">
                {/* Username */}
                <span className="font-semibold">
                  {comment.user.surename && comment.user.name
                    ? comment.user.surename + " " + comment.user.name
                    : comment.user.username}
                </span>
                <span className="text-sm">{comment.text}</span>
                <div className="flex gap-8 text-sm">
                  <div className="flex gap-4 p-1.5 items-center bg-zinc-600 bg-opacity-50 rounded-md px-2">
                    <form action="">
                      <button>
                        <BiSolidLike className="w-4 h-4" />
                      </button>
                    </form>
                    <span>|</span>
                    <span className="flex gap-1">
                      {comment._count.likes}
                      <span className="hidden md:inline">Like</span>
                    </span>
                  </div>
                  <button>Reply</button>
                </div>
              </div>
              {/* Icon */}
              <div>
                <MoreButton />
              </div>
            </div>
          ))
        ) : (
          <span className="flex justify-center items-center text-sm">
            Belum ada komentar di postingan ini
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentList;

"use client";
import { switchLike } from "@/libs/actions";
import { useOptimistic, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiSolidLike } from "react-icons/bi";
import { FaShareAlt } from "react-icons/fa";
import { MdInsertComment } from "react-icons/md";

interface Props {
  postId: number;
  likes: string[];
  commentNumber: number;
  userIdLoggedIn: string;
}

const FooterPost = (props: Props) => {
  const [LikeState, setLikeState] = useState({
    likeCount: props?.likes?.length,
    isLiked: props.userIdLoggedIn
      ? props?.likes?.includes(props.userIdLoggedIn)
      : false,
  });

  const [optimisticLike, setOptimisticLike] = useOptimistic(
    LikeState,
    (state) => {
      return {
        likeCount: state?.isLiked ? state.likeCount - 1 : state.likeCount + 1,
        isLiked: !state.isLiked,
      };
    }
  );

  const likeAction = async () => {
    setOptimisticLike("");
    try {
      await switchLike(props?.postId);
      setLikeState((state) => ({
        likeCount: state?.isLiked ? state.likeCount - 1 : state.likeCount + 1,
        isLiked: !state.isLiked,
      }));
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        throw error;
      }
    }
  };

  return (
    <div className="flex justify-between items-center text-sm my-2">
      <div className="flex gap-8 justify-between items-center w-full px-2">
        <div className="flex items-center gap-4 bg-zinc-600 bg-opacity-30 p-2 rounded-md">
          <form action={likeAction}>
            <button>
              {optimisticLike.isLiked ? <BiSolidLike /> : <AiOutlineLike />}
            </button>
          </form>
          <span className="opacity-30">|</span>
          <span className="flex gap-1">
            {optimisticLike.likeCount}
            <span className="hidden md:inline">Likes</span>
          </span>
        </div>
        <div className="flex items-center gap-4 bg-zinc-600 bg-opacity-30 p-2 rounded-md">
          <MdInsertComment />
          <span className="opacity-30">|</span>
          <span className="flex gap-1">
            {props.commentNumber}
            <span className="hidden md:inline">Comments</span>
          </span>
        </div>
        <div className="flex items-center gap-4 bg-zinc-600 bg-opacity-30 p-2 rounded-md">
          <FaShareAlt />
          <span className="opacity-30">|</span>
          <span className="hidden md:inline">Share</span>
        </div>
      </div>
    </div>
  );
};

export default FooterPost;

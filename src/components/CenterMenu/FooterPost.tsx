import { BiSolidLike } from "react-icons/bi";
import { FaShareAlt } from "react-icons/fa";
import { MdInsertComment } from "react-icons/md";

interface Props {
  postId: number;
  likes: { userId: string }[];
  commentNumber: number;
}

const FooterPost = (props: Props) => {
  return (
    <div className="flex justify-between items-center text-sm my-2">
      <div className="flex gap-8">
        <div className="flex items-center gap-4 bg-zinc-600 bg-opacity-30 p-2 rounded-md">
          <BiSolidLike />
          <span className="opacity-30">|</span>
          <span className="flex gap-1">
            {props.likes.length}
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

"use client";

import { MdBlock } from "react-icons/md";
interface Props {
  userId?: string | null | undefined;
  currentUserId?: string | null | undefined;
}

const BlockButton = (props: Props) => {
  const { currentUserId, userId } = props;
  return (
    <form>
      <button className="self-end text-red-500 flex gap-2 items-center">
        <MdBlock />
        Block User
      </button>
    </form>
  );
};

export default BlockButton;

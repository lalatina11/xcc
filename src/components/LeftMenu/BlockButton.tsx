import React from "react";
import { MdBlock } from "react-icons/md";

const BlockButton = () => {
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

import React from "react";
import { RxAvatar } from "react-icons/rx";

const Birthdays = () => {
  return (
    <div className="p-4 bg-zinc-950 rounded-lg shadow-md shadow-zinc-600 text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-start items-start font-medium">
        <span className="text-zinc-400">Friend&apos;s Birthday</span>
      </div>
      {/* USER */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <RxAvatar className="w-10 h-10 rounded-full object-cover" />
          <span>Franklin Maxwell</span>
        </div>
        <div>
          <button className="p-1 px-2 bg-blue-600 rounded-md text-zinc-300 text-xs font-semibold">
            Celebrate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Birthdays;

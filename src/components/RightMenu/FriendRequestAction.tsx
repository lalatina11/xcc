import { FollowRequest, User } from "@prisma/client";
import Image from "next/image";
import React from "react";
import { ImCheckmark, ImCross } from "react-icons/im";
import { RxAvatar } from "react-icons/rx";

interface FriendRequestWithSender extends FollowRequest {
  sender: User;
}

interface Props {
  friendRequest: FriendRequestWithSender[];
}

const FriendRequestAction = (props: Props) => {
  const { friendRequest } = props;
  return (
    <>
      {friendRequest.map((data) => (
        <div className="flex justify-between items-center" key={data.id}>
          <div className="flex gap-2 items-center">
            {data.sender.avatar ? (
              <Image
                src={data.sender.avatar!}
                alt="..."
                width={400}
                height={400}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <RxAvatar className="w-10 h-10 rounded-full object-cover" />
            )}
            <span>{data.sender.username}</span>
          </div>
          <div className="flex gap-3 items-center">
            <form action="">
              <button>
                <ImCheckmark className="w-5 h-5 object-cover rounded-full ring-2 ring-zinc-300 p-[1px] hover:ring-blue-500 cursor-pointer transition-all ease-in-out duration-200" />
              </button>
            </form>
            <form action="">
              <button>
                <ImCross className="w-5 h-5 object-cover rounded-full ring-2 ring-zinc-300 p-[1px] hover:ring-blue-500 cursor-pointer transition-all ease-in-out duration-200" />
              </button>
            </form>
          </div>
        </div>
      ))}
    </>
  );
};

export default FriendRequestAction;

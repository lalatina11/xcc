import Link from "next/link";
import { ImCheckmark, ImCross } from "react-icons/im";
import { RxAvatar } from "react-icons/rx";

interface Props {
  userId?: string;
}

const UserMediaCard = (props: Props) => {
  const { userId } = props;
  return (
    <div className="p-4 bg-zinc-950 rounded-lg shadow-md shadow-zinc-600 text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-zinc-400">User Media</span>
        <Link href={"#"} className="text-blue-500 text-xs">
          See All
        </Link>
      </div>
      {/* USER */}
      <div className="flex flex-col justify-start items-start">
        <div className="flex gap-2 items-center">
          <RxAvatar className="w-10 h-10 rounded-full object-cover" />
          <span>Edith Romero</span>
        </div>
        
      </div>
    </div>
  );
};

export default UserMediaCard;

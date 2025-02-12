import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface Props {
  userId?: string;
  user: User | null;
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
      {/* Bottom */}
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="relative w-1/5 h-24">
          <Image
            src="https://img.freepik.com/free-photo/brazilian-man-having-guarana-drink-outdoors_23-2150765674.jpg?t=st=1738944055~exp=1738947655~hmac=81f54aa9b56b4d4479c6d17a945db2cc47013b1e77c3d3525a10d36f131b07dc&w=360"
            fill
            alt="..."
            className="rounded-md object-cover"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://img.freepik.com/free-photo/brazilian-man-having-guarana-drink-outdoors_23-2150765674.jpg?t=st=1738944055~exp=1738947655~hmac=81f54aa9b56b4d4479c6d17a945db2cc47013b1e77c3d3525a10d36f131b07dc&w=360"
            fill
            alt="..."
            className="rounded-md object-cover"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://img.freepik.com/free-photo/brazilian-man-having-guarana-drink-outdoors_23-2150765674.jpg?t=st=1738944055~exp=1738947655~hmac=81f54aa9b56b4d4479c6d17a945db2cc47013b1e77c3d3525a10d36f131b07dc&w=360"
            fill
            alt="..."
            className="rounded-md object-cover"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://img.freepik.com/free-photo/brazilian-man-having-guarana-drink-outdoors_23-2150765674.jpg?t=st=1738944055~exp=1738947655~hmac=81f54aa9b56b4d4479c6d17a945db2cc47013b1e77c3d3525a10d36f131b07dc&w=360"
            fill
            alt="..."
            className="rounded-md object-cover"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://img.freepik.com/free-photo/brazilian-man-having-guarana-drink-outdoors_23-2150765674.jpg?t=st=1738944055~exp=1738947655~hmac=81f54aa9b56b4d4479c6d17a945db2cc47013b1e77c3d3525a10d36f131b07dc&w=360"
            fill
            alt="..."
            className="rounded-md object-cover"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://img.freepik.com/free-photo/brazilian-man-having-guarana-drink-outdoors_23-2150765674.jpg?t=st=1738944055~exp=1738947655~hmac=81f54aa9b56b4d4479c6d17a945db2cc47013b1e77c3d3525a10d36f131b07dc&w=360"
            fill
            alt="..."
            className="rounded-md object-cover"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://img.freepik.com/free-photo/brazilian-man-having-guarana-drink-outdoors_23-2150765674.jpg?t=st=1738944055~exp=1738947655~hmac=81f54aa9b56b4d4479c6d17a945db2cc47013b1e77c3d3525a10d36f131b07dc&w=360"
            fill
            alt="..."
            className="rounded-md object-cover"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://img.freepik.com/free-photo/brazilian-man-having-guarana-drink-outdoors_23-2150765674.jpg?t=st=1738944055~exp=1738947655~hmac=81f54aa9b56b4d4479c6d17a945db2cc47013b1e77c3d3525a10d36f131b07dc&w=360"
            fill
            alt="..."
            className="rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default UserMediaCard;

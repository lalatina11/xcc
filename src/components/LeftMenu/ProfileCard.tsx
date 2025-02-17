import prisma from "@/libs/prisma";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { CgProfile } from "react-icons/cg";

const ProfileCard = async () => {
  const { userId } = await auth();

  const user = await prisma.user.findFirst({
    where: {
      id: userId!,
    },
    include: {
      _count: {
        select: {
          followers: true,
        },
      },
    },
  });

  // console.log(user);

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="p-4 bg-zinc-950 rounded-lg shadow-md text-sm lg:flex flex-col gap-2 hidden md:flex">
      <div className="h-20">
        <Image
          src={user.cover!}
          width={300}
          height={300}
          alt="..."
          className="rounded-md object-cover w-full h-auto"
        />
        {user.avatar ? (
          <Image
            src={user.avatar!}
            alt="..."
            height={48}
            width={48}
            className="bg-black absolute -bottom-6 rounded-full w-12 h-12 left-0 right-0 m-auto ring-1 ring-white z-10"
          />
        ) : (
          <CgProfile className="bg-black absolute -bottom-6 rounded-full w-12 h-12 left-0 right-0 m-auto ring-1 ring-white z-10" />
        )}
      </div>
      <div className="h-20 flex flex-col gap-2 items-center mt-5">
        <span className="font-semibold">
          {user?.name && user?.surname
            ? user?.name + " " + user?.surname
            : user?.username}
        </span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <CgProfile className="bg-black rounded-full w-3 h-3" />
            <CgProfile className="bg-black rounded-full w-3 h-3" />
            <CgProfile className="bg-black rounded-full w-3 h-3" />
          </div>
          <span>{user._count.followers} Followers</span>
        </div>
        <Link
          href={"/profile/" + user.username}
          className="bg-blue-500 text-white text-xs p-2 rounded-md"
        >
          My Profile
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;

import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { FaUserFriends } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { MdNotificationAdd, MdOutlineMarkUnreadChatAlt } from "react-icons/md";
const ClerkAuthComp = () => {
  return (
    <>
      <ClerkLoading>
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </ClerkLoading>
      <ClerkLoaded>
        <SignedOut>
          <div className="flex gap-1 items-center">
            <IoMdLogIn className="w-[20px] h-[20px]" />
            <SignInButton />
          </div>
        </SignedOut>
        <SignedIn>
          <div className="flex gap-6 items-center">
            <div className="flex gap-4">
              <FaUserFriends className="h-[22px] md:h-[20px] w-[22px] md:w-[20px] cursor-pointer" />
              <MdOutlineMarkUnreadChatAlt className="h-[22px] md:h-[20px] w-[22px] md:w-[20px] cursor-pointer mt-[1px]" />
              <MdNotificationAdd className="h-[22px] md:h-[20px] w-[22px] md:w-[20px] cursor-pointer mbtro-[1px]" />
            </div>
            <UserButton />
          </div>
        </SignedIn>
      </ClerkLoaded>
    </>
  );
};

export default ClerkAuthComp;

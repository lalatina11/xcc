import { User } from "@prisma/client";
import Advertisements from "./Advertisements";
import Birthdays from "./Birthdays";
import FriendRequest from "./FriendRequest";
import UserInformationCard from "./UserInformationCard";
import UserMediaCard from "./UserMediaCard";
import { Suspense } from "react";

interface Props {
  userId?: string;
  user?: User | null;
}

const RightMenu = (props: Props) => {
  const { user } = props;

  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <>
          <Suspense fallback="Loading...">
            <UserInformationCard user={user!} />
          </Suspense>
          <Suspense fallback="Loading...">
            <UserMediaCard user={user!} />
          </Suspense>
        </>
      ) : null}
      <FriendRequest />
      <Birthdays />
      <Advertisements size="md" />
    </div>
  );
};

export default RightMenu;

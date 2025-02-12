import { User } from "@prisma/client";
import Advertisements from "./Advertisements";
import Birthdays from "./Birthdays";
import FriendRequest from "./FriendRequest";
import UserInformationCard from "./UserInformationCard";
import UserMediaCard from "./UserMediaCard";

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
          <UserInformationCard user={user!} />
          <UserMediaCard user={user!} />
        </>
      ) : null}
      <FriendRequest />
      <Birthdays />
      <Advertisements size="md" />
    </div>
  );
};

export default RightMenu;

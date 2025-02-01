import Advertisements from "./Advertisements";
import Birthdays from "./Birthdays";
import FriendRequest from "./FriendRequest";
import UserInformationCard from "./UserInformationCard";
import UserMediaCard from "./UserMediaCard";

interface Props {
  userId?: string;
}

const RightMenu = (props: Props) => {
  const { userId } = props;
  return (
    <div className="flex flex-col gap-6">
      {userId ? (
        <>
          <UserInformationCard userId={userId} />
          <UserMediaCard userId={userId}  />
        </>
      ) : null}
      <FriendRequest />
      <Birthdays />
      <Advertisements size="md" />
    </div>
  );
};

export default RightMenu;

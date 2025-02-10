import ProfileCard from "./ProfileCard";

interface LeftMenuProps {
  type: "home" | "profile";
}

const LeftMenu = (props: LeftMenuProps) => {
  const { type } = props;
  return (
    <div className="flex flex-col gap-6">
      {type === "home" ? <ProfileCard /> : null}
      <div className="bg-black rounded-lg shadow-md text-sm text-zinc-500 flex flex-col gap-2">
        
      </div>
    </div>
  );
};

export default LeftMenu;

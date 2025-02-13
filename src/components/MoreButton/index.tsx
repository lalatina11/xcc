
interface Props {
  onClick?: () => void;
}

const MoreButton = (props: Props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="flex gap-[1.5px] p-1 py-1.5 cursor-pointer">
      <div className="bg-white p-[3px] rounded-full" />
      <div className="bg-white p-[3px] rounded-full" />
      <div className="bg-white p-[3px] rounded-full" />
    </div>
  );
};

export default MoreButton;

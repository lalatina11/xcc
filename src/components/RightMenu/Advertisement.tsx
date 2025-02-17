import Image from "next/image";
import MoreButton from "../MoreButton";

interface Props {
  size?: "sm" | "md" | "lg";
}

const Advertisements = (props: Props) => {
  return (
    <div className="p-4 bg-zinc-950 rounded-lg shadow-md shadow-zinc-600 text-sm">
      {/* TOP */}
      <div className="flex justify-between items-center">
        <span>Sponsored Ads</span>
        <button>
          <MoreButton />
        </button>
      </div>
      {/* BOTTOM */}
      <div
        className={`flex flex-col mt-4 ${
          props.size === "sm" ? "gap-2" : "gap-4"
        }`}
      >
        <div
          className={`w-full ${
            props.size === "sm" ? "h-24" : props.size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src={
              "https://img.freepik.com/free-photo/colleagues-working-together-project_23-2149286162.jpg?t=st=1738235249~exp=1738238849~hmac=ee006655e1327471643b6a05f9f2ab1895df1f3a2cbf88c43b8942068392af61&w=740"
            }
            alt="..."
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex mt-12 gap-2 items-center px-[1%]">
          <Image
            src={
              "https://img.freepik.com/free-photo/cute-little-blogger-with-cosmetics-recording-video-home_1157-37298.jpg?t=st=1738235878~exp=1738239478~hmac=4e112e5003f6b492b691632c68ea8c71da4ca0e8004b06ad62d14d4a257f4054&w=740"
            }
            alt="..."
            height={24}
            width={24}
            className="w-6 h-6 rounded-full object-cover"
          />
          <span className="font-medium text-blue-500">Caleb Hanson</span>
        </div>
        <p className={`${props.size === "sm" ? "text-xs" : "text-sm"}`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
          facere quibusdam eaque minus iure aut distinctio alias vero adipisci,
          voluptatibus architecto magnam labore quas dolores sit veritatis
          aliquid voluptatem. Obcaecati.
        </p>
        <button className="p-2 bg-zinc-800 text-xs rounded-lg">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Advertisements;

"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";

interface Props {
  userId: string;
}

const UpdateUserForm = (props: Props) => {
  const [Form, setForm] = useState(false);
  const [Url, setUrl] = useState<string | null>(null);

  const updateProfile = (formData: FormData) => {
    // console.log(Object.fromEntries(formData));
  };

  const handleSetCover = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const fileUrl = URL.createObjectURL(file);
      setUrl(fileUrl);
    }
  };

  return (
    <div>
      {!Form ? (
        <div
          onClick={() => setForm((prev) => !prev)}
          className="text-blue-500 text-xs cursor-pointer"
        >
          Update Profile
        </div>
      ) : (
        <section className="fixed top-0 left-0 w-full h-full bg-zinc-950 bg-opacity-50">
          <div className="w-full h-full flex justify-center items-center">
            <form
              action={updateProfile}
              className="relative bg-zinc-800 w-1/2 h-2/3 p-6 rounded-md"
            >
              <div
                className="border border-zinc-300 p-1 px-2 cursor-pointer rounded-md absolute top-2 right-2"
                onClick={() => setForm((prev) => !prev)}
              >
                X
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Sure Name</label>
                  <input
                    className="ring-1 ring-zinc-300 bg-transparent p-1 px-2 rounded-md ring-opacity-50"
                    type="text"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="cursor-pointer" htmlFor="cover">
                    CoverPic
                  </label>
                  <input
                    className="ring-1 ring-zinc-300 bg-transparent p-1 px-2 rounded-md ring-opacity-50"
                    type="file"
                    name="cover"
                    id="cover"
                    hidden
                    onChange={handleSetCover}
                  />
                  {Url ? (
                    <label htmlFor="cover" className="cursor-pointer">
                      <Image
                        src={Url}
                        alt="..."
                        width={300}
                        height={300}
                        className="w-24 h-10 object-cover rounded-md"
                      />
                    </label>
                  ) : null}
                </div>
              </div>
              <div className="w-full absolute bottom-3 left-0 flex justify-center items-center">
                <button className="w-[90%] bg-blue-500 p-2 rounded-md">
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </div>
  );
};

export default UpdateUserForm;

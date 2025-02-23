"use client";

import { updateUser } from "@/libs/actions";
import { User } from "@prisma/client";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

interface Props {
  userId: string;
  user: User;
}

const UpdateUserForm = (props: Props) => {
  const [Form, setForm] = useState(false);
  const [Url, setUrl] = useState<string>("");

  const handleSetCover = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const fileUrl = URL.createObjectURL(file);
      setUrl(fileUrl);
    }
  };

  const handleCloseForm = () => {
    setForm((prev) => !prev);
    setUrl("");
  };

  return (
    <div>
      <div
        onClick={() => setForm((prev) => !prev)}
        className="text-blue-500 text-xs cursor-pointer"
      >
        Update Profile
      </div>
      {Form ? (
        <section className="fixed top-0 left-0 w-full h-full bg-zinc-950 bg-opacity-50">
          <div className="w-full h-full flex justify-center items-center">
            <form
              action={updateUser}
              className="relative bg-zinc-800 w-1/2 h-2/3 p-6 rounded-md flex flex-col gap-2"
            >
              <div
                className="ring-1 ring-zinc-500 p-1 px-2 cursor-pointer rounded-md absolute top-2 right-2"
                onClick={handleCloseForm}
              >
                X
              </div>
              <span className="h-10 flex justify-start items-start text-xl font-semibold">
                Update your profile
              </span>
              <span className="my-2 text-amber-300">
                Use the avatar navbar to change your avatar or username!
              </span>
              <div className="grid grid-cols-2 gap-6 overflow-y-scroll h-full max-h-[310px] px-1.5 pb-3">
                <div className="flex flex-col gap-2">
                  <label htmlFor="surename">First Name</label>
                  <input
                    className="ring-1 ring-zinc-500 bg-transparent p-1 px-2 rounded-md ring-opacity-50"
                    type="text"
                    name="surename"
                    id="surename"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="cursor-pointer" htmlFor="cover">
                    CoverPic
                  </label>
                  <input
                    type="text"
                    name="cover"
                    id=""
                    hidden
                    defaultValue={Url}
                  />
                  <input
                    className="ring-1 ring-zinc-500 bg-transparent p-1 px-2 rounded-md ring-opacity-50"
                    type="file"
                    id="cover"
                    hidden
                    accept="image/*"
                    onChange={handleSetCover}
                  />
                  {Url ? (
                    <label
                      htmlFor="cover"
                      className="cursor-pointer flex gap-2 items-center"
                    >
                      <Image
                        src={Url}
                        alt="..."
                        width={300}
                        height={300}
                        className="w-24 h-10 object-cover rounded-md"
                      />
                      <p className="text-xs font-light">Selected Cover</p>
                    </label>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <p className="text-xs font-light">Current Cover</p>
                      <div className="flex gap-5 items-center">
                        <label htmlFor="cover" className="cursor-pointer">
                          <Image
                            src={props.user.cover!}
                            alt="..."
                            width={300}
                            height={300}
                            className="w-24 h-10 object-cover rounded-md"
                          />
                        </label>
                        <label
                          htmlFor="cover"
                          className="cursor-pointer text-sm font-medium"
                        >
                          Change Cover
                        </label>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Last Name</label>
                  <input
                    className="ring-1 ring-zinc-500 bg-transparent p-1 px-2 rounded-md ring-opacity-50"
                    type="text"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="bio">Bio</label>
                  <input
                    className="ring-1 ring-zinc-500 bg-transparent p-1 px-2 rounded-md ring-opacity-50"
                    type="text"
                    name="bio"
                    id="bio"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="city">City</label>
                  <input
                    className="ring-1 ring-zinc-500 bg-transparent p-1 px-2 rounded-md ring-opacity-50"
                    type="text"
                    name="city"
                    id="city"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="school">School</label>
                  <input
                    className="ring-1 ring-zinc-500 bg-transparent p-1 px-2 rounded-md ring-opacity-50"
                    type="text"
                    name="school"
                    id="school"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="work">Work</label>
                  <input
                    className="ring-1 ring-zinc-500 bg-transparent p-1 px-2 rounded-md ring-opacity-50"
                    type="text"
                    name="work"
                    id="work"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="website">Website</label>
                  <input
                    className="ring-1 ring-zinc-500 bg-transparent p-1 px-2 rounded-md ring-opacity-50"
                    type="text"
                    name="website"
                    id="website"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button
                  className="w-[90%] bg-blue-500 p-2 rounded-md"
                  type="submit"
                >
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default UpdateUserForm;

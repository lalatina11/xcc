"use client";

import { updateUser } from "@/libs/actions";
import { User } from "@prisma/client";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useActionState, useState } from "react";
import UpdaUserButton from "./updateUserButton";

interface Props {
  userId: string;
  user: User;
}

const UpdateUserForm = (props: Props) => {
  const [Form, setForm] = useState(false);
  const [cover, setCover] = useState<any>(null);
  const [state, formAction] = useActionState(updateUser, {
    success: false,
    error: false,
  });

  const router = useRouter();

  const handleCloseForm = () => {
    setForm((prev) => !prev);
    router.refresh();
    state.success = false;
    state.error = false;
  };

  const handleOnSuccess = (result: CloudinaryUploadWidgetResults) => {
    setCover(result.info);
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
              action={formAction}
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
                <CldUploadWidget
                  uploadPreset="social"
                  onSuccess={handleOnSuccess}
                >
                  {({ open }) => {
                    return (
                      <div
                        className="flex flex-col gap-2"
                        onClick={() => open()}
                      >
                        <label className="cursor-pointer">CoverPic</label>
                        <input type="text" id="" hidden />
                        <div className="flex gap-4 items-center">
                          <input
                            type="text"
                            name="cover"
                            hidden
                            defaultValue={cover?.secure_url || ""}
                            id=""
                          />
                          <Image
                            src={props.user.cover!}
                            alt="..."
                            height={300}
                            width={300}
                            className="w-16 h-8 object-cover rounded-md cursor-pointer"
                          />
                          <span className="text-xs font-light cursor-pointer">
                            Change Cover
                          </span>
                        </div>
                      </div>
                    );
                  }}
                </CldUploadWidget>
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
              <div className="flex flex-col gap-2 justify-center items-center">
                <UpdaUserButton />
                {state?.success ? (
                  <span className="text-xs font-light text-blue-500">
                    Profile Berhasil diubah!
                  </span>
                ) : state?.error ? (
                  <span className="text-xs font-light text-red-500">
                    Profile Gagal diubah &#58;&#40;
                  </span>
                ) : null}
              </div>
            </form>
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default UpdateUserForm;

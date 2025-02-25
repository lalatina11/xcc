"use client";

import { useFormStatus } from "react-dom";

const updateUserButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="w-[90%] bg-blue-500 p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
      type="submit"
    >
      {!pending ? "Update Profile" : "Updating Profile"}
    </button>
  );
};

export default updateUserButton;

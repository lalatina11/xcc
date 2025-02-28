"use client"
import { useFormStatus } from "react-dom";
import { IoSend } from "react-icons/io5";

const AddPostButton = () => {
    const {pending} = useFormStatus()
  return (
    <button disabled={pending} className="disabled:cursor-not-allowed" type="submit">
      <IoSend className="h-6 w-6" />
    </button>
  );
};

export default AddPostButton;

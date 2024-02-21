import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function Submit_Button() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className=" group flex items-center justify-center 
    h-[2.5rem] w-[6rem] rounded-full
    bg-zinc-800 text-zinc-300
    outline-none transition-all
    hover:scale-105 hover:bg-zinc-700
    disabled:scale-100 disabled:bg-opacity-65">
      {pending ? (
        <div
          className="h-5 w-5 animate-spin rounded-full
      border-b-2 border-white"></div>
      ) : (
        <>
          Submit&nbsp;
          <FaPaperPlane className="text-xs opacity-70 transition-all"></FaPaperPlane>
        </>
      )}
    </button>
  );
}

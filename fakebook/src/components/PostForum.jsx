import React, { useRef, useState } from "react";
import { FaUserAlt, FaPhotoVideo } from "react-icons/fa";
import { CgMenuBoxed } from "react-icons/cg";
import { Dialog } from "@headlessui/react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import "./postforum.css";
import useNewPost from "../hooks/useNewPost";

const PostForum = () => {
  const headingRef = useRef();
  const createPost = useNewPost();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ heading: e.target[0].value, body: e.target[1].value });
    createPost.mutate({
      heading: e.target[0].value,
      body: e.target[1].value,
    });
  };

  if (createPost.error && !createPost.waitingForContext)
    alert(createPost.error.message);
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal" className="modal">
        <div className="modal-box bg-secondary">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {/* This is where the post element goes*/}
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col  space-y-2 p-2">
              <label htmlFor="title" className=" font-medium text-lg  ">
                Title
              </label>
              <input
                ref={headingRef}
                type="text"
                name=""
                id="title"
                className=" bg-primary h-10 rounded-md pl-3 border-neutral-200 border text-neutral-100"
              />
              <label className=" font-medium text-lg">Body</label>

              <SimpleMDE className="" />
              <button className="bg-primary " disabled={createPost.isPending}>
                {createPost.isPending ? "Posting..." : "Post"}
              </button>
            </div>
          </form>
        </div>
      </dialog>
      <div className=" bg-primary h-max w-full p-3 m-2 rounded-md">
        <div className=" flex p-4 space-x-2">
          <div className=" bg-third p-2 rounded-full hover:bg-neutral-600 transition w-max">
            <FaUserAlt size={28} className=" text-neutral-300" />
          </div>
          <div
            className=" h-10 w-full bg-neutral-600 rounded-3xl p-2 pl-3 text-neutral-300  "
            onClick={() => document.getElementById("my_modal").showModal()}
          >
            {" "}
            Whats on your mind?
          </div>
        </div>
        <div className=" h-px w-full bg-neutral-400 "></div>
        <div className="flex  pt-2">
          <div className="w-full  flex justify-center hover:bg-neutral-700 rounded-md">
            <div className="flex space-x-1 p-2">
              <CgMenuBoxed size={28} />
              <span>TEXT</span>
            </div>
          </div>
          <div className="w-full flex justify-center hover:bg-neutral-700 rounded-md">
            <div className="flex space-x-1 p-2">
              <FaPhotoVideo size={28} />
              <span>PHOTOS</span>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default PostForum;

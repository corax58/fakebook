import React, { useState } from "react";

const TextPostCard = ({ post }) => {
  let userName = "Some User";
  let profilePic = "";
  const date = post.createdAt.slice(0, 10);

  if (post.postedBy.userName) {
    userName = post.postedBy.userName;
  }
  if (post.postedBy.profilePic) {
    profilePic = import.meta.env.VITE_SERVER_URL + post.postedBy.profilePic;
  }
  const profilePicture =
    "https://i1.sndcdn.com/artworks-000189080723-ez2uad-t500x500.jpg";

  var postBody = {
    islong: false,
    body: post.body,
  };
  if (post.body.length > 100) {
    postBody = { ...postBody, islong: true };
  }

  return (
    <div className=" bg-primary h-max  p-4 m-2 rounded-md w-full  transition-transform duration-500">
      <div className="flex mb-2">
        <img
          src={profilePic ? profilePic : profilePicture}
          alt="profile picture "
          className=" size-12 rounded-full m-1"
        />
        <div className="h-auto w-full flex  ml-2 flex-col">
          <span className=" font-semibold text-neutral-200 text-lg ">
            {userName}
          </span>
          <span className="">{date}</span>
        </div>
      </div>
      <div className="h-px w-full bg-neutral-600  "></div>
      <div className="text-neutral-200 mt-3 text-wrap  overflow-hidden transition-transform duration-500 ">
        <h1 className=" text-xl  font-semibold mb-2 ">{post.heading}</h1>
        <PostBody text={post.body} />
      </div>
    </div>
  );
};

const PostBody = ({ text }) => {
  const [loaded, setLoaded] = useState(false);

  var postBody = {
    islong: false,
    body: text,
  };
  if (text.length > 100) {
    postBody = { ...postBody, islong: true };
  }

  if (postBody.islong)
    return loaded ? (
      <pre className=" text-wrap ">
        {postBody.body}{" "}
        <button
          onClick={() => setLoaded(false)}
          className=" text-blue-400 underline"
        >
          Load Less
        </button>{" "}
      </pre>
    ) : (
      <pre className=" text-wrap">
        {postBody.body.slice(0, 100)}...
        <button
          onClick={() => setLoaded(true)}
          className=" text-blue-400 underline"
        >
          Load More
        </button>
      </pre>
    );

  return <pre>{text}</pre>;
};
export default TextPostCard;

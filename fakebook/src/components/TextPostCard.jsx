import React, { useState } from "react";

const TextPostCard = ({ post }) => {
  const userName = "Some User";
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
    <div className=" bg-primary h-max w-full p-4 m-2 rounded-md">
      <div className="flex mb-2">
        <img
          src={profilePicture}
          alt="profile picture "
          className=" w-12 rounded-full m-1"
        />
        <div className="h-auto w-full flex items-center ml-2">
          <span className=" font-semibold text-neutral-200">
            {userName[0].toUpperCase() + userName.substring(1)}
          </span>
        </div>
      </div>
      <div className="h-px w-full bg-neutral-600  "></div>
      <div className="text-neutral-200 mt-3">
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
      <pre>
        {postBody.body}{" "}
        <button
          onClick={() => setLoaded(false)}
          className=" text-blue-400 underline"
        >
          Load Less
        </button>{" "}
      </pre>
    ) : (
      <pre>
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

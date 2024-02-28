import React from "react";
import TextPostCard from "./TextPostCard";
import usePosts from "../hooks/usePosts";

const PostPanel = () => {
  const { data, error, isLoading, waitingForContext } = usePosts();

  if (isLoading || waitingForContext)
    return <span className="loading loading-dots loading-xs"></span>;
  if (error && error == "false")
    return (
      <div role="alert" className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-max"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Failed to load posts, Please reload the page</span>
      </div>
    );
  return data.map((post) => <TextPostCard post={post} key={post._id} />);
};

export default PostPanel;

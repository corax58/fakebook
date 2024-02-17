import React from "react";
import TextPostCard from "./TextPostCard";
import usePosts from "../hooks/usePosts";

const PostPanel = () => {
  const { data, error, isLoading } = usePosts();
  console.log(data);
  if (isLoading)
    return <span className="loading loading-dots loading-xs"></span>;
  return data.map((post) => <TextPostCard post={post} key={post._id} />);
};

export default PostPanel;

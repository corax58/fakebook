import React from "react";
import { useSearchParams } from "react-router-dom";
import useSearch from "../hooks/useSearch";
import TextPostCard from "./TextPostCard";

const SearchedPostsPanel = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isLoading, error } = useSearch(searchParams.get("query"));

  console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  if (!data) {
    return <div>No posts found</div>;
  }
  return (
    <div className="flex flex-col items-center w-6/12 px-1 md:w-3/5 sm:w-full">
      {}
      {data.map((post) => (
        <TextPostCard post={post} key={post._id} />
      ))}
    </div>
  );
};

export default SearchedPostsPanel;

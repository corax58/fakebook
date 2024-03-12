import React from "react";
import SearchCard from "../components/SearchCard";
import SearchedPostsPanel from "../components/SearchedPostsPanel";

const SearchPage = () => {
  return (
    <div className="h-screen bg-secondary w-full flex flex-col items-center">
      <SearchCard />
      <SearchedPostsPanel />
    </div>
  );
};

export default SearchPage;

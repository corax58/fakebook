import React from "react";
import NavBar from "../components/NavBar";
import PostForum from "../components/PostForum";
import PostPanel from "../components/PostPanel";
import SearchCard from "../components/SearchCard";
import { useSearchParams } from "react-router-dom";
import useSearch from "../hooks/useSearch";
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

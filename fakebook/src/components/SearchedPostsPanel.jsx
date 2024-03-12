import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import TextPostCard from "./TextPostCard";
import { useAuthContext } from "../hooks/useAuthContext";

const SearchedPostsPanel = () => {
  const { user } = useAuthContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const q = searchParams.get("query");
    if (user) {
      axios
        .get(import.meta.env.VITE_SERVER_API_URL + "/posts/search/" + q, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => setData(res.data))
        .catch((error) => setError(error));
    }
  }, [searchParams.get("query")]);

  if (error) {
    return <div>Error</div>;
  }
  if (!data || data.length === 0) {
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

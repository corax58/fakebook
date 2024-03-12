import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuthContext } from "./useAuthContext";
import { useState } from "react";

const useSearch = (q) => {
  const { user } = useAuthContext();
  const [error, setError] = useState();
  const [data, setData] = useState();

  axios
    .get(import.meta.env.VITE_SERVER_API_URL + "/posts/search/" + q, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
    .then((res) => setData(res.data))
    .catch((error) => setError(error));

  const query = useQuery({
    queryKey: ["searchedPosts"],
    queryFn: fetchPosts,
    enabled: !!user,
  });

  if (!user) {
    return { waitingForContext: "waiting for context" };
  }

  return { data, error };
};

export default useSearch;

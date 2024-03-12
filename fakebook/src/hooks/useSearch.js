import { useQuery } from "@tanstack/react-query";
import APICLient from "../services/apiClient";
import axios from "axios";
import { useAuthContext } from "./useAuthContext";

const useSearch = (q) => {
  const { user } = useAuthContext();

  const fetchPosts = () =>
    axios
      .get(import.meta.env.VITE_SERVER_API_URL + "/posts/search/" + q, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => res.data);

  const query = useQuery({
    queryKey: ["searchedPosts"],
    queryFn: fetchPosts,
    enabled: !!user,
  });

  if (!user) {
    return { waitingForContext: "waiting for context" };
  }

  return query;
};

export default useSearch;
